import React, {useState, useEffect, useCallback, useRef} from "react";
import {Play, X, Settings, Share, Lightbulb, Copy, Check} from "lucide-react";
import {Button} from "@/components/ui/button";

// Lexical imports for editing
import {$getRoot, $createParagraphNode, $createTextNode, type EditorState} from "lexical";
import {LexicalComposer} from "@lexical/react/LexicalComposer";
import {PlainTextPlugin} from "@lexical/react/LexicalPlainTextPlugin";
import {ContentEditable} from "@lexical/react/LexicalContentEditable";
import {HistoryPlugin} from "@lexical/react/LexicalHistoryPlugin";
import {OnChangePlugin} from "@lexical/react/LexicalOnChangePlugin";
import {useLexicalComposerContext} from "@lexical/react/LexicalComposerContext";
import {LexicalErrorBoundary} from "@lexical/react/LexicalErrorBoundary";

// Monaco imports for syntax highlighting display
import Editor from "@monaco-editor/react";

interface SandboxTextEditorProps {
    value?: string;
    onChange?: (value: string) => void;
    title?: string;
    placeholder?: string;
    readOnly?: boolean;
    minHeight?: string;
    maxHeight?: string;
    className?: string;
}

// Plugin to set initial content in Lexical and keep it synced
function SyncContentPlugin({content, onContentChange}: {
    content: string;
    onContentChange: (content: string) => void
}) {
    const [editor] = useLexicalComposerContext();
    const [isUpdating, setIsUpdating] = useState(false);

    useEffect(() => {
        if (!isUpdating && content) {
            setIsUpdating(true);
            editor.update(() => {
                const root = $getRoot();
                const currentContent = root.getTextContent();
                if (currentContent !== content) {
                    root.clear();
                    const paragraph = $createParagraphNode();
                    paragraph.append($createTextNode(content));
                    root.append(paragraph);
                }
            }, {
                onUpdate: () => {
                    setIsUpdating(false);
                }
            });
        }
    }, [editor, content, isUpdating]);

    // Handle changes from Lexical
    const handleChange = useCallback((editorState: EditorState) => {
        if (!isUpdating) {
            editorState.read(() => {
                const root = $getRoot();
                const textContent = root.getTextContent();
                onContentChange(textContent);
            });
        }
    }, [onContentChange, isUpdating]);

    return <OnChangePlugin onChange={handleChange}/>;
}

// Overlay editor that combines Monaco display with Lexical editing
function HybridEditor({value, onChange, placeholder, readOnly}: {
    value: string;
    onChange: (value: string) => void;
    placeholder: string;
    readOnly: boolean;
}) {
    const [isEditing, setIsEditing] = useState(false);
    const [localValue, setLocalValue] = useState(value);
    const editorContainerRef = useRef<HTMLDivElement>(null);

    useEffect(() => {
        setLocalValue(value);
    }, [value]);

    const handleContentChange = useCallback((newContent: string) => {
        setLocalValue(newContent);
        onChange(newContent);
    }, [onChange]);

    const lexicalConfig = {
        namespace: "HybridEditor",
        editable: !readOnly,
        onError: (error: Error) => {
            console.error("Lexical error:", error);
        },
    };

    return (
        <div className="relative h-full w-full" ref={editorContainerRef}>
            {/* Monaco Editor for syntax highlighting (always visible) */}
            <div
                className={`absolute inset-0 ${isEditing ? "opacity-20" : "opacity-100"} transition-opacity duration-200`}>
                <Editor
                    height="100%"
                    defaultLanguage="json"
                    value={localValue}
                    theme="vs-dark"
                    options={{
                        readOnly: true,
                        minimap: {enabled: false},
                        fontSize: 14,
                        lineHeight: 20,
                        fontFamily: "'JetBrains Mono', 'Fira Code', 'Monaco', 'Menlo', monospace",
                        automaticLayout: true,
                        wordWrap: "on",
                        lineNumbers: "on",
                        lineNumbersMinChars: 3,
                        glyphMargin: false,
                        folding: true,
                        foldingStrategy: "indentation",
                        contextmenu: false,
                        selectOnLineNumbers: false,
                        scrollBeyondLastLine: false,
                        smoothScrolling: true,
                        renderLineHighlight: "none",
                        matchBrackets: "always",
                        bracketPairColorization: {enabled: true},
                        scrollbar: {
                            useShadows: false,
                            vertical: "visible",
                            horizontal: "visible",
                            verticalScrollbarSize: 12,
                            horizontalScrollbarSize: 12
                        }
                    }}
                />
            </div>

            {/* Lexical Editor for editing (overlay) */}
            <div
                className={`absolute inset-0 ${isEditing ? "opacity-100 z-10" : "opacity-0 pointer-events-none"} transition-opacity duration-200`}
                style={{
                    background: isEditing ? "rgba(30, 30, 30, 0.95)" : "transparent"
                }}
            >
                <LexicalComposer initialConfig={lexicalConfig}>
                    <div className="h-full relative">
                        <PlainTextPlugin
                            contentEditable={
                                <ContentEditable
                                    className="w-full h-full px-16 py-4 text-sm font-mono leading-[20px] text-[#d4d4d4] bg-transparent border-none outline-none resize-none overflow-auto focus:ring-0"
                                    style={{
                                        fontFamily: "'JetBrains Mono', 'Fira Code', 'Monaco', 'Menlo', monospace",
                                        fontSize: "14px",
                                        lineHeight: "20px"
                                    }}
                                    aria-placeholder={placeholder}
                                    placeholder={<div/>}
                                    onFocus={() => setIsEditing(true)}
                                    onBlur={(e) => {
                                        // Only hide if not clicking within the editor
                                        if (!editorContainerRef.current?.contains(e.relatedTarget as Node)) {
                                            setIsEditing(false);
                                        }
                                    }}
                                />
                            }
                            placeholder={
                                <div
                                    className="absolute top-4 left-16 text-[#6a6a6a] text-sm font-mono pointer-events-none">
                                    {placeholder}
                                </div>
                            }
                            ErrorBoundary={LexicalErrorBoundary}
                        />
                        <SyncContentPlugin content={localValue} onContentChange={handleContentChange}/>
                        <HistoryPlugin/>
                    </div>
                </LexicalComposer>
            </div>

            {/* Click overlay to enter edit mode */}
            {!isEditing && !readOnly && (
                <div
                    className="absolute inset-0 z-5 cursor-text flex items-center justify-center group"
                    onClick={() => setIsEditing(true)}
                >
                    <div className="absolute inset-0 bg-transparent group-hover:bg-black/10 transition-colors"/>
                    <div
                        className="bg-[#2d2d30] border border-[#3c3c3c] rounded px-3 py-1 text-xs text-[#cccccc] opacity-0 group-hover:opacity-100 transition-opacity">
                        Click to edit
                    </div>
                </div>
            )}
        </div>
    );
}

const SandboxTextEditor: React.FC<SandboxTextEditorProps> = ({
                                                                 value = `{
    "method": "POST",
    "url": "https://dev.mypasspoint.com/paypass/api/v1/wallet/payout",
    "headers": {
        "Authorization": "Bearer YOUR_ACCESS_TOKEN",
        "Content-Type": "application/json",
        "X-Channel-Id": "3",
        "X-Channel-Code": "legacy-api-user"
    },
    "body": {
        "clientReference": "173619396818871",
        "amount": "1700.00",
        "narration": "test eur payout from ngn wallet",
        "transactionCurrency": "EUR",
        "baseCurrency": "EUR",
        "countryCode": "FR",
        "paymentInfo": {
            "senderFirstName": "Josh Travels",
            "senderLastName": "Ghaju",
            "senderAddress": "Plot 331, Raji Rasaki Estate",
            "senderCity": "Lagos",
            "senderZipCode": "5005",
            "senderOccupation": "03",
            "senderIdType": "03",
            "senderIdNumber": "46543345322",
            "senderBeneficiaryRelationship": "02",
            "remitterType": "I",
            "beneficiaryType": "I",
            "receiverFirstName": "WIKARNDoA",
            "receiverLastName": "SUPATINAVADEE"
        }
    }
}`,
                                                                 onChange,
                                                                 title = "API Request",
                                                                 placeholder = "Enter your API request configuration...",
                                                                 readOnly = false,
                                                                 className = ""
                                                             }) => {
    const [localValue, setLocalValue] = useState(value);
    const [isRunning, setIsRunning] = useState(false);
    const [response, setResponse] = useState("");
    const [dividerPosition, setDividerPosition] = useState(50);
    const [isDragging, setIsDragging] = useState(false);
    const [isMobile, setIsMobile] = useState(false);
    const [showResponse, setShowResponse] = useState(false);
    const [copied, setCopied] = useState(false);
    const [, setError] = useState("");
    const containerRef = useRef<HTMLDivElement>(null);

    // Check if device is mobile
    useEffect(() => {
        const checkMobile = () => {
            setIsMobile(window.innerWidth < 768);
        };

        checkMobile();
        window.addEventListener("resize", checkMobile);
        return () => window.removeEventListener("resize", checkMobile);
    }, []);

    useEffect(() => {
        setLocalValue(value);
    }, [value]);

    const handleValueChange = useCallback((newValue: string) => {
        setLocalValue(newValue);
        onChange?.(newValue);
    }, [onChange]);

    // Copy functionality
    const handleCopy = async () => {
        try {
            await navigator.clipboard.writeText(localValue);
            setCopied(true);
            setTimeout(() => setCopied(false), 2000);
        } catch (err) {
            console.error("Failed to copy text: ", err);
        }
    };

    // Format JSON function
    const handleFormatJSON = () => {
        try {
            const parsed = JSON.parse(localValue);
            const formatted = JSON.stringify(parsed, null, 4);
            setLocalValue(formatted);
            onChange?.(formatted);
        } catch (error) {
            console.error("Invalid JSON format");
        }
    };

    // Execute actual API request
    const handleRunCode = async () => {
        setIsRunning(true);
        setResponse("");
        setError("");
        setShowResponse(true);

        try {
            let requestConfig;
            try {
                requestConfig = JSON.parse(localValue);
            } catch {
                throw new Error("Invalid JSON format in request configuration");
            }

            if (!requestConfig.method) {
                throw new Error("Request method is required");
            }
            if (!requestConfig.url) {
                throw new Error("Request URL is required");
            }

            const fetchOptions: RequestInit = {
                method: requestConfig.method.toUpperCase(),
                headers: {
                    "Content-Type": "application/json",
                    ...requestConfig.headers
                }
            };

            if (requestConfig.body && ["POST", "PUT", "PATCH"].includes(requestConfig.method.toUpperCase())) {
                fetchOptions.body = JSON.stringify(requestConfig.body);
            }

            const startTime = Date.now();
            let fetchResponse;

            try {
                fetchResponse = await fetch(requestConfig.url, fetchOptions);
            } catch (networkError) {
                throw new Error(`Network Error: ${networkError instanceof Error ? networkError.message : "Failed to connect to the API"}`);
            }

            const endTime = Date.now();
            const responseTime = endTime - startTime;

            let responseData;
            const contentType = fetchResponse.headers.get("content-type");

            if (contentType && contentType.includes("application/json")) {
                try {
                    responseData = await fetchResponse.json();
                } catch {
                    responseData = await fetchResponse.text();
                }
            } else {
                responseData = await fetchResponse.text();
            }

            const formattedResponse = {
                status: fetchResponse.status,
                statusText: fetchResponse.statusText,
                headers: Object.fromEntries(fetchResponse.headers.entries()),
                responseTime: `${responseTime}ms`,
                data: responseData
            };

            setResponse(JSON.stringify(formattedResponse, null, 2));

        } catch (err) {
            const errorMessage = err instanceof Error ? err.message : "Unknown error occurred";
            setError(errorMessage);

            const errorResponse = {
                error: true,
                message: errorMessage,
                timestamp: new Date().toISOString(),
                requestConfig: localValue
            };

            setResponse(JSON.stringify(errorResponse, null, 2));
        } finally {
            setIsRunning(false);
        }
    };

    // Handle keyboard shortcuts
    useEffect(() => {
        const handleKeyDown = (e: KeyboardEvent) => {
            if (e.ctrlKey || e.metaKey) {
                if (e.key === "Enter") {
                    e.preventDefault();
                    handleRunCode();
                } else if (e.shiftKey && e.altKey && e.key === "F") {
                    e.preventDefault();
                    handleFormatJSON();
                }
            }
        };

        document.addEventListener("keydown", handleKeyDown);
        return () => document.removeEventListener("keydown", handleKeyDown);
    }, [localValue]);

    // Handle mouse events for dragging divider (desktop only)
    const handleMouseDown = (e: React.MouseEvent) => {
        if (isMobile) return;
        e.preventDefault();
        setIsDragging(true);
    };

    const handleMouseMove = useCallback((e: MouseEvent) => {
        if (!isDragging || !containerRef.current || isMobile) return;
        const containerRect = containerRef.current.getBoundingClientRect();
        const newPosition = ((e.clientX - containerRect.left) / containerRect.width) * 100;
        const constrainedPosition = Math.max(20, Math.min(80, newPosition));
        setDividerPosition(constrainedPosition);
    }, [isDragging, isMobile]);

    const handleMouseUp = useCallback(() => {
        setIsDragging(false);
    }, []);

    useEffect(() => {
        if (isDragging && !isMobile) {
            document.addEventListener("mousemove", handleMouseMove);
            document.addEventListener("mouseup", handleMouseUp);
            return () => {
                document.removeEventListener("mousemove", handleMouseMove);
                document.removeEventListener("mouseup", handleMouseUp);
            };
        }
    }, [isDragging, handleMouseMove, handleMouseUp, isMobile]);

    const mobileHeight = isMobile ? "400px" : "600px";

    return (
        <div
            className={`bg-[#1e1e1e] text-white font-mono text-sm overflow-hidden border border-[#3c3c3c] rounded-lg flex flex-col w-full max-w-full ${className}`}
            style={{height: mobileHeight}}>

            {/* Top Navigation Bar */}
            <div
                className="bg-[#2d2d30] border-b border-[#3c3c3c] px-2 sm:px-4 py-2 flex items-center justify-between flex-shrink-0">
                <div className="flex items-center gap-2 sm:gap-3 min-w-0">
                    <div className="flex items-center gap-1 sm:gap-2 text-[#569cd6] min-w-0">
                        <Lightbulb className="h-3 w-3 sm:h-4 sm:w-4 flex-shrink-0"/>
                        <span className="font-medium text-xs sm:text-sm truncate">Support Test Editor</span>
                    </div>
                </div>
                <div className="flex items-center gap-1 flex-shrink-0">
                    <Button
                        variant="ghost"
                        size="sm"
                        onClick={handleFormatJSON}
                        className="h-6 w-6 sm:h-8 sm:w-8 p-0 text-[#cccccc] hover:text-white hover:bg-[#3c3c3c]"
                        title="Format JSON (Shift+Alt+F)"
                    >
                        <Settings className="h-3 w-3 sm:h-4 sm:w-4"/>
                    </Button>
                    <Button
                        variant="ghost"
                        size="sm"
                        onClick={handleCopy}
                        className="h-6 w-6 sm:h-8 sm:w-8 p-0 text-[#cccccc] hover:text-white hover:bg-[#3c3c3c]"
                        title="Copy code (Ctrl+C)"
                    >
                        {copied ? (
                            <Check className="h-3 w-3 sm:h-4 sm:w-4 text-green-400"/>
                        ) : (
                            <Copy className="h-3 w-3 sm:h-4 sm:w-4"/>
                        )}
                    </Button>
                    <Button variant="ghost" size="sm"
                            className="h-6 w-6 sm:h-8 sm:w-8 p-0 text-[#cccccc] hover:text-white hover:bg-[#3c3c3c] hidden sm:flex">
                        <Share className="h-3 w-3 sm:h-4 sm:w-4"/>
                    </Button>
                </div>
            </div>

            {/* Mobile Tab Switcher */}
            {isMobile && (
                <div className="bg-[#2d2d30] border-b border-[#3c3c3c] px-3 py-2 flex gap-2">
                    <button
                        onClick={() => setShowResponse(false)}
                        className={`px-3 py-1 text-xs rounded transition-colors ${
                            !showResponse
                                ? "bg-[#007acc] text-white"
                                : "text-[#cccccc] hover:text-white hover:bg-[#3c3c3c]"
                        }`}
                    >
                        Request
                    </button>
                    <button
                        onClick={() => setShowResponse(true)}
                        className={`px-3 py-1 text-xs rounded transition-colors ${
                            showResponse
                                ? "bg-[#007acc] text-white"
                                : "text-[#cccccc] hover:text-white hover:bg-[#3c3c3c]"
                        }`}
                    >
                        Response
                    </button>
                </div>
            )}

            {/* Main Content Area */}
            <div className="flex flex-1 min-h-0 w-full" ref={containerRef}>
                {isMobile ? (
                    // Mobile: Single panel view with tab switching
                    <div className="flex flex-col min-h-0 w-full">
                        {!showResponse ? (
                            // Request Panel - Hybrid Editor
                            <>
                                <div className="bg-[#2d2d30] border-b border-[#3c3c3c] px-3 py-1 flex-shrink-0">
                                    <div className="flex items-center gap-2">
                                        <div
                                            className="flex items-center gap-2 px-3 py-1.5 bg-[#1e1e1e] border-t-2 border-[#007acc] rounded-t text-[#569cd6]">
                                            <span className="text-xs font-medium">{title}</span>
                                            <X className="h-3 w-3 text-[#cccccc] hover:text-white cursor-pointer"/>
                                        </div>
                                    </div>
                                </div>

                                <div className="flex-1 bg-[#1e1e1e] overflow-hidden">
                                    <HybridEditor
                                        value={localValue}
                                        onChange={handleValueChange}
                                        placeholder={placeholder}
                                        readOnly={readOnly}
                                    />
                                </div>
                            </>
                        ) : (
                            // Response Panel - Monaco only (read-only)
                            <>
                                <div className="bg-[#2d2d30] border-b border-[#3c3c3c] px-3 py-1 flex-shrink-0">
                                    <div className="flex items-center gap-2">
                                        <div
                                            className="flex items-center gap-2 px-3 py-1.5 bg-[#1e1e1e] border-t-2 border-[#007acc] rounded-t text-[#569cd6]">
                                            <span className="text-xs font-medium">Response</span>
                                        </div>
                                    </div>
                                </div>

                                <div className="flex-1 bg-[#1e1e1e] overflow-hidden">
                                    {isRunning ? (
                                        <div className="flex items-center justify-center h-full">
                                            <div className="flex items-center gap-3 text-[#4ec9b0]">
                                                <div
                                                    className="animate-spin h-4 w-4 border-2 border-[#4ec9b0] border-t-transparent rounded-full"></div>
                                                <span className="text-xs">Executing request...</span>
                                            </div>
                                        </div>
                                    ) : response ? (
                                        <Editor
                                            height="100%"
                                            defaultLanguage="json"
                                            value={response}
                                            theme="vs-dark"
                                            options={{
                                                readOnly: true,
                                                minimap: {enabled: false},
                                                fontSize: 12,
                                                lineHeight: 16,
                                                automaticLayout: true,
                                                wordWrap: "on",
                                                lineNumbers: "on",
                                                glyphMargin: false,
                                                folding: true,
                                                contextmenu: false,
                                                selectOnLineNumbers: true,
                                                scrollBeyondLastLine: false
                                            }}
                                        />
                                    ) : (
                                        <div className="flex items-center justify-center h-full p-4">
                                            <div className="text-center text-[#6a6a6a]">
                                                <div className="text-base mb-2">⚡</div>
                                                <div className="text-xs">Ready to execute</div>
                                                <div className="text-xs mt-1">Press Ctrl+Enter or click "Execute
                                                    Request"
                                                </div>
                                            </div>
                                        </div>
                                    )}
                                </div>
                            </>
                        )}
                    </div>
                ) : (
                    // Desktop: Split panel view with draggable divider
                    <>
                        {/* Left Side - Hybrid Request Editor */}
                        <div className="flex flex-col min-h-0" style={{width: `${dividerPosition}%`}}>
                            <div className="bg-[#2d2d30] border-b border-[#3c3c3c] px-3 py-1 flex-shrink-0">
                                <div className="flex items-center gap-2">
                                    <div
                                        className="flex items-center gap-2 px-3 py-1.5 bg-[#1e1e1e] border-t-2 border-[#007acc] rounded-t text-[#569cd6]">
                                        <span className="text-sm font-medium">{title}</span>
                                        <X className="h-3 w-3 text-[#cccccc] hover:text-white cursor-pointer"/>
                                    </div>
                                </div>
                            </div>

                            <div className="flex-1 bg-[#1e1e1e] overflow-hidden">
                                <HybridEditor
                                    value={localValue}
                                    onChange={handleValueChange}
                                    placeholder={placeholder}
                                    readOnly={readOnly}
                                />
                            </div>
                        </div>

                        {/* Draggable Divider */}
                        <div
                            className={`w-1 bg-[#3c3c3c] hover:bg-[#007acc] cursor-col-resize transition-colors ${isDragging ? "bg-[#007acc]" : ""}`}
                            onMouseDown={handleMouseDown}
                        />

                        {/* Right Side - Response (Monaco only) */}
                        <div className="flex flex-col min-h-0" style={{width: `${100 - dividerPosition}%`}}>
                            <div className="bg-[#2d2d30] border-b border-[#3c3c3c] px-3 py-1 flex-shrink-0">
                                <div className="flex items-center gap-2">
                                    <div
                                        className="flex items-center gap-2 px-3 py-1.5 bg-[#1e1e1e] border-t-2 border-[#007acc] rounded-t text-[#569cd6]">
                                        <span className="text-sm font-medium">Response</span>
                                    </div>
                                </div>
                            </div>

                            <div className="flex-1 bg-[#1e1e1e] overflow-hidden">
                                {isRunning ? (
                                    <div className="flex items-center justify-center h-full">
                                        <div className="flex items-center gap-3 text-[#4ec9b0]">
                                            <div
                                                className="animate-spin h-5 w-5 border-2 border-[#4ec9b0] border-t-transparent rounded-full"></div>
                                            <span className="text-sm">Executing request...</span>
                                        </div>
                                    </div>
                                ) : response ? (
                                    <Editor
                                        height="100%"
                                        defaultLanguage="json"
                                        value={response}
                                        theme="vs-dark"
                                        options={{
                                            readOnly: true,
                                            minimap: {enabled: false},
                                            fontSize: 14,
                                            lineHeight: 18,
                                            automaticLayout: true,
                                            wordWrap: "on",
                                            lineNumbers: "on",
                                            glyphMargin: false,
                                            folding: true,
                                            contextmenu: false,
                                            selectOnLineNumbers: true,
                                            scrollBeyondLastLine: false
                                        }}
                                    />
                                ) : (
                                    <div className="flex items-center justify-center h-full">
                                        <div className="text-center text-[#6a6a6a]">
                                            <div className="text-lg mb-2">⚡</div>
                                            <div className="text-sm">Ready to execute</div>
                                            <div className="text-xs mt-1">Press Ctrl+Enter or click "Execute Request"
                                            </div>
                                        </div>
                                    </div>
                                )}
                            </div>
                        </div>
                    </>
                )}
            </div>

            {/* Bottom Bar */}
            <div
                className="bg-[#2d2d30] border-t border-[#3c3c3c] px-2 sm:px-4 py-2 sm:py-3 flex items-center justify-between flex-shrink-0">
                <div className="flex items-center gap-1 sm:gap-2 text-[#6b7280] text-xs">
                    <span>Powered by</span>
                    <span className="font-semibold text-[#cccccc]">Passpoint</span>
                </div>

                <div className="flex items-center gap-2">
                    {!isMobile && (
                        <span className="text-xs text-[#6b7280]">Ctrl+Enter to execute • Shift+Alt+F to format</span>
                    )}
                    <Button
                        onClick={handleRunCode}
                        disabled={isRunning}
                        className="bg-[#007acc] hover:bg-[#005a9e] disabled:bg-[#005a9e]/50 text-white font-medium py-1.5 sm:py-2 px-3 sm:px-6 rounded-md flex items-center gap-1 sm:gap-2 transition-colors text-xs sm:text-sm"
                    >
                        <Play className="h-3 w-3 sm:h-4 sm:w-4 fill-current"/>
                        <span className="hidden sm:inline">{isRunning ? "Executing..." : "Execute Request"}</span>
                        <span className="sm:hidden">{isRunning ? "Running..." : "Execute"}</span>
                    </Button>
                </div>
            </div>
        </div>
    );
};

export default SandboxTextEditor;

/* This component is a rich text editor sandbox for testing API requests and responses.
   It uses Lexical for the text editor and simulates API interactions.
   The layout is split between request and response editors with a draggable divider.
   Features syntax highlighting, code copying, and simulated request execution.
   The response section shows a mock API response in JSON format.
   Includes a top navigation bar and a bottom bar with Passpoint branding.
*/
