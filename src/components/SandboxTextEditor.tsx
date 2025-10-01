import React, {useState, useEffect, useCallback, useRef} from "react";
import {Play, X, Settings, Share, RotateCcw, Lightbulb, Copy, Check} from "lucide-react";
import {Button} from "@/components/ui/button";

// Lexical imports - using RichTextPlugin instead of PlainTextPlugin for better editing
import {$getRoot, $getSelection, type EditorState} from "lexical";
import {LexicalComposer} from "@lexical/react/LexicalComposer";
import {RichTextPlugin} from "@lexical/react/LexicalRichTextPlugin";
import {ContentEditable} from "@lexical/react/LexicalContentEditable";
import {HistoryPlugin} from "@lexical/react/LexicalHistoryPlugin";
import {AutoFocusPlugin} from "@lexical/react/LexicalAutoFocusPlugin";
import {useLexicalComposerContext} from "@lexical/react/LexicalComposerContext";
import {LexicalErrorBoundary} from "@lexical/react/LexicalErrorBoundary";

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

// Custom OnChange Plugin following Lexical best practices
function MyOnChangePlugin({onChange}: { onChange: (editorState: EditorState) => void }) {
    const [editor] = useLexicalComposerContext();

    useEffect(() => {
        return editor.registerUpdateListener(({editorState}) => {
            onChange(editorState);
        });
    }, [editor, onChange]);

    return null;
}

// Plugin to set initial content properly
function InitialContentPlugin({initialContent}: { initialContent: string }) {
    const [editor] = useLexicalComposerContext();
    const [isFirstRender, setIsFirstRender] = useState(true);

    useEffect(() => {
        if (initialContent && isFirstRender) {
            editor.update(() => {
                const root = $getRoot();
                if (root.isEmpty()) {
                    root.clear();
                    // Parse and set the JSON content properly
                    try {
                        // For JSON content, we want to preserve formatting
                        const formattedJSON = JSON.stringify(JSON.parse(initialContent), null, 2);
                        const textNode = root.createTextNode(formattedJSON);
                        root.append(textNode);
                    } catch {
                        // If it's not valid JSON, just set as plain text
                        const textNode = root.createTextNode(initialContent);
                        root.append(textNode);
                    }
                }
            });
            setIsFirstRender(false);
        }
    }, [editor, initialContent, isFirstRender]);

    return null;
}

const SandboxTextEditor: React.FC<SandboxTextEditorProps> = ({
                                                                 value = `{
    "method": "GET",
    "url": "https://dev.mypasspoint.com/paypass/api/v1/wallet/balance",
    "headers": {
        "Authorization": "Bearer YOUR_ACCESS_TOKEN",
        "Content-Type": "application/json",
        "X-Channel-Id": "3",
        "X-Channel-Code": "legacy-api-user"
    }
}`,
                                                                 onChange,
                                                                 title = "API Request",
                                                                 placeholder = "Enter your API request configuration...",
                                                                 readOnly = false,
                                                                 minHeight = "400px",
                                                                 maxHeight = "600px",
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
    const [error, setError] = useState("");
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

    // Handle editor changes properly according to Lexical best practices
    const handleEditorChange = useCallback((editorState: EditorState) => {
        editorState.read(() => {
            const root = $getRoot();
            const content = root.getTextContent();
            setLocalValue(content);
            onChange?.(content);
        });
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

    // Execute actual API request
    const handleRunCode = async () => {
        setIsRunning(true);
        setResponse("");
        setError("");
        setShowResponse(true);

        try {
            // Parse the request configuration
            let requestConfig;
            try {
                requestConfig = JSON.parse(localValue);
            } catch (parseError) {
                throw new Error("Invalid JSON format in request configuration");
            }

            // Validate required fields
            if (!requestConfig.method) {
                throw new Error("Request method is required");
            }
            if (!requestConfig.url) {
                throw new Error("Request URL is required");
            }

            // Prepare fetch options
            const fetchOptions: RequestInit = {
                method: requestConfig.method.toUpperCase(),
                headers: {
                    "Content-Type": "application/json",
                    ...requestConfig.headers
                }
            };

            // Add body for POST/PUT/PATCH requests
            if (requestConfig.body && ["POST", "PUT", "PATCH"].includes(requestConfig.method.toUpperCase())) {
                fetchOptions.body = JSON.stringify(requestConfig.body);
            }

            // Execute the request
            const startTime = Date.now();
            let fetchResponse;

            try {
                fetchResponse = await fetch(requestConfig.url, fetchOptions);
            } catch (networkError) {
                // Handle network errors or CORS issues
                throw new Error(`Network Error: ${networkError instanceof Error ? networkError.message : "Failed to connect to the API"}`);
            }

            const endTime = Date.now();
            const responseTime = endTime - startTime;

            // Get response data
            let responseData;
            const contentType = fetchResponse.headers.get("content-type");

            if (contentType && contentType.includes("application/json")) {
                try {
                    responseData = await fetchResponse.json();
                } catch (jsonError) {
                    responseData = await fetchResponse.text();
                }
            } else {
                responseData = await fetchResponse.text();
            }

            // Format the complete response
            const formattedResponse = {
                status: fetchResponse.status,
                statusText: fetchResponse.statusText,
                headers: Object.fromEntries(fetchResponse.headers.entries()),
                responseTime: `${responseTime}ms`,
                data: responseData
            };

            setResponse(JSON.stringify(formattedResponse, null, 2));

        } catch (err) {
            // Handle errors
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

    // Generate line numbers
    const requestLines = localValue.split("\n");
    const requestLineNumbers = requestLines.map((_, index) => index + 1);
    const responseLines = response.split("\n");
    const responseLineNumbers = responseLines.map((_, index) => index + 1);

    // Lexical theme for code editing
    const theme = {
        root: "editor-root",
        text: {
            code: "editor-code",
        }
    };

    // Initial config for Lexical following best practices
    const initialConfig = {
        namespace: "SandboxTextEditor",
        theme,
        editable: !readOnly,
        onError: (error: Error) => {
            console.error("Lexical error:", error);
        }
    };

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
                        onClick={handleCopy}
                        className="h-6 w-6 sm:h-8 sm:w-8 p-0 text-[#cccccc] hover:text-white hover:bg-[#3c3c3c]"
                        title="Copy code"
                    >
                        {copied ? (
                            <Check className="h-3 w-3 sm:h-4 sm:w-4 text-green-400"/>
                        ) : (
                            <Copy className="h-3 w-3 sm:h-4 sm:w-4"/>
                        )}
                    </Button>
                    <Button variant="ghost" size="sm"
                            className="h-6 w-6 sm:h-8 sm:w-8 p-0 text-[#cccccc] hover:text-white hover:bg-[#3c3c3c]">
                        <Settings className="h-3 w-3 sm:h-4 sm:w-4"/>
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
                            // Request Panel
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

                                <div className="flex flex-1 min-h-0">
                                    <div
                                        className="bg-[#1e1e1e] px-2 py-3 border-r border-[#3c3c3c] select-none min-w-[40px] flex-shrink-0">
                                        <div className="text-xs text-[#858585] leading-[1.4] font-mono">
                                            {requestLineNumbers.map((num) => (
                                                <div key={num} className="text-right h-[16px] leading-[16px]">
                                                    {num}
                                                </div>
                                            ))}
                                        </div>
                                    </div>

                                    <div className="flex-1 bg-[#1e1e1e] overflow-hidden">
                                        <LexicalComposer initialConfig={initialConfig}>
                                            <div className="h-full relative">
                                                <RichTextPlugin
                                                    contentEditable={
                                                        <ContentEditable
                                                            className="w-full h-full p-3 text-xs font-mono leading-[1.4] text-[#d4d4d4] bg-transparent border-none outline-none resize-none overflow-auto focus:ring-0"
                                                            aria-placeholder={placeholder}
                                                            placeholder={<div/>}
                                                            spellCheck={false}
                                                        />
                                                    }
                                                    placeholder={
                                                        <div
                                                            className="absolute top-3 left-3 text-[#6a6a6a] text-xs font-mono pointer-events-none">
                                                            {placeholder}
                                                        </div>
                                                    }
                                                    ErrorBoundary={LexicalErrorBoundary}
                                                />
                                                <MyOnChangePlugin onChange={handleEditorChange}/>
                                                <HistoryPlugin/>
                                                <AutoFocusPlugin/>
                                                <InitialContentPlugin initialContent={localValue}/>
                                            </div>
                                        </LexicalComposer>
                                    </div>
                                </div>
                            </>
                        ) : (
                            // Response Panel
                            <>
                                <div className="bg-[#2d2d30] border-b border-[#3c3c3c] px-3 py-1 flex-shrink-0">
                                    <div className="flex items-center gap-2">
                                        <div
                                            className="flex items-center gap-2 px-3 py-1.5 bg-[#1e1e1e] border-t-2 border-[#007acc] rounded-t text-[#569cd6]">
                                            <span className="text-xs font-medium">Response</span>
                                        </div>
                                    </div>
                                </div>

                                <div className="flex flex-1 min-h-0">
                                    {response && (
                                        <div
                                            className="bg-[#1e1e1e] px-2 py-3 border-r border-[#3c3c3c] select-none min-w-[40px] flex-shrink-0">
                                            <div className="text-xs text-[#858585] leading-[1.4] font-mono">
                                                {responseLineNumbers.map((num) => (
                                                    <div key={num} className="text-right h-[16px] leading-[16px]">
                                                        {num}
                                                    </div>
                                                ))}
                                            </div>
                                        </div>
                                    )}

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
                                            <div
                                                className={`p-3 text-xs font-mono leading-[1.4] overflow-auto h-full ${error ? "text-[#f87171]" : "text-[#d4d4d4]"}`}>
                                                <pre className="whitespace-pre-wrap">{response}</pre>
                                            </div>
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
                                </div>
                            </>
                        )}
                    </div>
                ) : (
                    // Desktop: Split panel view with draggable divider
                    <>
                        {/* Left Side - Request Editor */}
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

                            <div className="flex flex-1 min-h-0">
                                <div
                                    className="bg-[#1e1e1e] px-3 py-4 border-r border-[#3c3c3c] select-none min-w-[50px] flex-shrink-0">
                                    <div className="text-xs text-[#858585] leading-[1.5] font-mono">
                                        {requestLineNumbers.map((num) => (
                                            <div key={num} className="text-right h-[18px] leading-[18px]">
                                                {num}
                                            </div>
                                        ))}
                                    </div>
                                </div>

                                <div className="flex-1 bg-[#1e1e1e] overflow-hidden">
                                    <LexicalComposer initialConfig={initialConfig}>
                                        <div className="h-full relative">
                                            <RichTextPlugin
                                                contentEditable={
                                                    <ContentEditable
                                                        className="w-full h-full p-4 text-sm font-mono leading-[1.5] text-[#d4d4d4] bg-transparent border-none outline-none resize-none overflow-auto focus:ring-0"
                                                        style={{minHeight, maxHeight}}
                                                        aria-placeholder={placeholder}
                                                        placeholder={<div/>}
                                                        spellCheck={false}
                                                    />
                                                }
                                                placeholder={
                                                    <div
                                                        className="absolute top-4 left-4 text-[#6a6a6a] text-sm font-mono pointer-events-none">
                                                        {placeholder}
                                                    </div>
                                                }
                                                ErrorBoundary={LexicalErrorBoundary}
                                            />
                                            <MyOnChangePlugin onChange={handleEditorChange}/>
                                            <HistoryPlugin/>
                                            <AutoFocusPlugin/>
                                            <InitialContentPlugin initialContent={localValue}/>
                                        </div>
                                    </LexicalComposer>
                                </div>
                            </div>
                        </div>

                        {/* Draggable Divider */}
                        <div
                            className={`w-1 bg-[#3c3c3c] hover:bg-[#007acc] cursor-col-resize transition-colors ${isDragging ? "bg-[#007acc]" : ""}`}
                            onMouseDown={handleMouseDown}
                        />

                        {/* Right Side - Response */}
                        <div className="flex flex-col min-h-0" style={{width: `${100 - dividerPosition}%`}}>
                            <div className="bg-[#2d2d30] border-b border-[#3c3c3c] px-3 py-1 flex-shrink-0">
                                <div className="flex items-center gap-2">
                                    <div
                                        className="flex items-center gap-2 px-3 py-1.5 bg-[#1e1e1e] border-t-2 border-[#007acc] rounded-t text-[#569cd6]">
                                        <span className="text-sm font-medium">Response</span>
                                    </div>
                                </div>
                            </div>

                            <div className="flex flex-1 min-h-0">
                                {response && (
                                    <div
                                        className="bg-[#1e1e1e] px-3 py-4 border-r border-[#3c3c3c] select-none min-w-[50px] flex-shrink-0">
                                        <div className="text-xs text-[#858585] leading-[1.5] font-mono">
                                            {responseLineNumbers.map((num) => (
                                                <div key={num} className="text-right h-[18px] leading-[18px]">
                                                    {num}
                                                </div>
                                            ))}
                                        </div>
                                    </div>
                                )}

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
                                        <div
                                            className={`p-4 text-sm font-mono leading-[1.5] overflow-auto h-full ${error ? "text-[#f87171]" : "text-[#d4d4d4]"}`}>
                                            <pre className="whitespace-pre-wrap">{response}</pre>
                                        </div>
                                    ) : (
                                        <div className="flex items-center justify-center h-full">
                                            <div className="text-center text-[#6a6a6a]">
                                                <div className="text-lg mb-2">⚡</div>
                                                <div className="text-sm">Ready to execute</div>
                                                <div className="text-xs mt-1">Press Ctrl+Enter or click "Execute
                                                    Request"
                                                </div>
                                            </div>
                                        </div>
                                    )}
                                </div>
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
                        <span className="text-xs text-[#6b7280]">Ctrl+Enter to execute</span>
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

            {/* CSS for Lexical editor styling */}
            <style jsx>{`
                .editor-root {
                    color: #d4d4d4;
                    font-family: 'Monaco', 'Menlo', 'Ubuntu Mono', monospace;
                }

                .editor-code {
                    background-color: transparent;
                    font-family: 'Monaco', 'Menlo', 'Ubuntu Mono', monospace;
                    display: block;
                    white-space: pre-wrap;
                }
            `}</style>
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
