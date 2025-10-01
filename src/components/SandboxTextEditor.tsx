import React, {useState, useEffect, useCallback, useRef} from "react";
import {Play, Copy, Check, X, ChevronDown, ChevronRight, Settings, Share, RotateCcw, Lightbulb} from "lucide-react";
import {Button} from "@/components/ui/button";

// Lexical imports
import {$getRoot, $createParagraphNode, $createTextNode, type EditorState} from "lexical";
import {LexicalComposer} from "@lexical/react/LexicalComposer";
import {PlainTextPlugin} from "@lexical/react/LexicalPlainTextPlugin";
import {ContentEditable} from "@lexical/react/LexicalContentEditable";
import {HistoryPlugin} from "@lexical/react/LexicalHistoryPlugin";
import {OnChangePlugin} from "@lexical/react/LexicalOnChangePlugin";
import {useLexicalComposerContext} from "@lexical/react/LexicalComposerContext";
import {LexicalErrorBoundary} from "@lexical/react/LexicalErrorBoundary";

interface SandboxTextEditorProps {
    value?: string;
    onChange?: (value: string) => void;
    language?: string;
    title?: string;
    placeholder?: string;
    readOnly?: boolean;
    minHeight?: string;
    maxHeight?: string;
    className?: string;
}

// Plugin to set initial content
function InitialContentPlugin({initialContent}: { initialContent: string }) {
    const [editor] = useLexicalComposerContext();

    useEffect(() => {
        if (initialContent) {
            editor.update(() => {
                const root = $getRoot();
                root.clear();
                const paragraph = $createParagraphNode();
                paragraph.append($createTextNode(initialContent));
                root.append(paragraph);
            });
        }
    }, [editor, initialContent]);

    return null;
}

const SandboxTextEditor: React.FC<SandboxTextEditorProps> = ({
                                                                 value = `{
    "Authorization": "Bearer YOUR_ACCESS_TOKEN",
    "Content-Type": "application/json",
    "X-Channel-Id": "3",
    "X-Channel-Code": "legacy-api-user"
}`,
                                                                 onChange,
                                                                 language = "json",
                                                                 title = "Request Headers",
                                                                 placeholder = "Enter your request data...",
                                                                 readOnly = false,
                                                                 minHeight = "400px",
                                                                 maxHeight = "600px",
                                                                 className = ""
                                                             }) => {
    const [copied, setCopied] = useState(false);
    const [localValue, setLocalValue] = useState(value);
    const [isRunning, setIsRunning] = useState(false);
    const [response, setResponse] = useState("");
    const [isTerminalExpanded, setIsTerminalExpanded] = useState(false);
    const [dividerPosition, setDividerPosition] = useState(50); // Percentage for left panel
    const [isDragging, setIsDragging] = useState(false);
    const containerRef = useRef<HTMLDivElement>(null);

    useEffect(() => {
        setLocalValue(value);
    }, [value]);

    const handleCopy = async () => {
        try {
            await navigator.clipboard.writeText(localValue);
            setCopied(true);
            setTimeout(() => setCopied(false), 2000);
        } catch (err) {
            console.error("Failed to copy text: ", err);
        }
    };

    const handleEditorChange = useCallback((editorState: EditorState) => {
        editorState.read(() => {
            const root = $getRoot();
            const content = root.getTextContent();
            setLocalValue(content);
            onChange?.(content);
        });
    }, [onChange]);

    // Simulate API request execution
    const handleRunCode = () => {
        setIsRunning(true);
        setResponse("");

        setTimeout(() => {
            // Simulate a successful API response
            const mockResponse = {
                responseCode: "00",
                responseDescription: "Success",
                responseMessage: "Request processed successfully",
                data: {
                    success: true,
                    status: "00",
                    timestamp: new Date().toISOString(),
                    transactionId: "TXN" + Math.random().toString(36).substr(2, 9).toUpperCase()
                }
            };
            setResponse(JSON.stringify(mockResponse, null, 2));
            setIsRunning(false);
        }, 1500);
    };

    // Handle mouse events for dragging divider
    const handleMouseDown = (e: React.MouseEvent) => {
        e.preventDefault();
        setIsDragging(true);
    };

    const handleMouseMove = useCallback((e: MouseEvent) => {
        if (!isDragging || !containerRef.current) return;

        const containerRect = containerRef.current.getBoundingClientRect();
        const newPosition = ((e.clientX - containerRect.left) / containerRect.width) * 100;

        // Constrain between 20% and 80%
        const constrainedPosition = Math.max(20, Math.min(80, newPosition));
        setDividerPosition(constrainedPosition);
    }, [isDragging]);

    const handleMouseUp = useCallback(() => {
        setIsDragging(false);
    }, []);

    useEffect(() => {
        if (isDragging) {
            document.addEventListener("mousemove", handleMouseMove);
            document.addEventListener("mouseup", handleMouseUp);
            return () => {
                document.removeEventListener("mousemove", handleMouseMove);
                document.removeEventListener("mouseup", handleMouseUp);
            };
        }
    }, [isDragging, handleMouseMove, handleMouseUp]);

    // Generate line numbers for request
    const requestLines = localValue.split("\n");
    const requestLineNumbers = requestLines.map((_, index) => index + 1);

    // Generate line numbers for response
    const responseLines = response.split("\n");
    const responseLineNumbers = responseLines.map((_, index) => index + 1);

    // Initial config for Lexical
    const initialConfig = {
        namespace: "SandboxTextEditor",
        editable: !readOnly,
        onError: (error: Error) => {
            console.error("Lexical error:", error);
        },
    };

    return (
        <div
            className={`bg-[#1e1e1e] text-white font-mono text-sm overflow-hidden border border-[#3c3c3c] rounded-lg flex flex-col ${className}`}
            style={{height: "600px"}}>
            {/* Top Navigation Bar */}
            <div
                className="bg-[#2d2d30] border-b border-[#3c3c3c] px-4 py-2 flex items-center justify-between flex-shrink-0">
                <div className="flex items-center gap-3">
                    <div className="flex items-center gap-2 text-[#569cd6]">
                        <Lightbulb className="h-4 w-4"/>
                        <span className="font-medium text-sm">Lexical React Rich Example</span>
                    </div>
                    <span className="text-[#8c8c8c] text-xs">By Anonymous</span>
                </div>
                <div className="flex items-center gap-1">
                    <Button variant="ghost" size="sm"
                            className="h-8 w-8 p-0 text-[#cccccc] hover:text-white hover:bg-[#3c3c3c]">
                        <Settings className="h-4 w-4"/>
                    </Button>
                    <Button variant="ghost" size="sm"
                            className="h-8 w-8 p-0 text-[#cccccc] hover:text-white hover:bg-[#3c3c3c]">
                        <Share className="h-4 w-4"/>
                    </Button>
                    <Button variant="ghost" size="sm"
                            className="h-8 w-8 p-0 text-[#cccccc] hover:text-white hover:bg-[#3c3c3c]">
                        <RotateCcw className="h-4 w-4"/>
                    </Button>
                </div>
            </div>

            {/* Main Content Area with Draggable Divider */}
            <div className="flex flex-1 min-h-0" ref={containerRef}>
                {/* Left Side - Request Editor */}
                <div
                    className="flex flex-col min-h-0"
                    style={{width: `${dividerPosition}%`}}
                >
                    {/* Tab Bar */}
                    <div className="bg-[#2d2d30] border-b border-[#3c3c3c] px-3 py-1 flex-shrink-0">
                        <div className="flex items-center gap-2">
                            <div
                                className="flex items-center gap-2 px-3 py-1.5 bg-[#1e1e1e] border-t-2 border-[#007acc] rounded-t text-[#569cd6]">
                                <span className="text-sm font-medium">{title}</span>
                                <X className="h-3 w-3 text-[#cccccc] hover:text-white cursor-pointer"/>
                            </div>
                        </div>
                    </div>

                    {/* Editor */}
                    <div className="flex flex-1 min-h-0">
                        {/* Line Numbers */}
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

                        {/* Editor Content */}
                        <div className="flex-1 bg-[#1e1e1e] overflow-hidden">
                            <LexicalComposer initialConfig={initialConfig}>
                                <div className="h-full relative">
                                    <PlainTextPlugin
                                        contentEditable={
                                            <ContentEditable
                                                className="w-full h-full p-4 text-sm font-mono leading-[1.5] text-[#d4d4d4] bg-transparent border-none outline-none resize-none overflow-auto"
                                                style={{minHeight, maxHeight}}
                                                aria-placeholder={placeholder}
                                                placeholder={<div/>}
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
                                    <OnChangePlugin onChange={handleEditorChange}/>
                                    <HistoryPlugin/>
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
                <div
                    className="flex flex-col min-h-0"
                    style={{width: `${100 - dividerPosition}%`}}
                >
                    {/* Response Tab Bar */}
                    <div className="bg-[#2d2d30] border-b border-[#3c3c3c] px-3 py-1 flex-shrink-0">
                        <div className="flex items-center gap-2">
                            <div
                                className="flex items-center gap-2 px-3 py-1.5 bg-[#1e1e1e] border-t-2 border-[#007acc] rounded-t text-[#569cd6]">
                                <span className="text-sm font-medium">Response</span>
                            </div>
                        </div>
                    </div>

                    {/* Response Content */}
                    <div className="flex flex-1 min-h-0">
                        {/* Response Line Numbers */}
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

                        {/* Response Editor Content */}
                        <div className="flex-1 bg-[#1e1e1e] overflow-hidden">
                            {isRunning ? (
                                <div className="flex items-center justify-center h-full">
                                    <div className="flex items-center gap-3 text-[#4ec9b0]">
                                        <div
                                            className="animate-spin h-5 w-5 border-2 border-[#4ec9b0] border-t-transparent rounded-full"></div>
                                        <span className="text-sm">Running request...</span>
                                    </div>
                                </div>
                            ) : response ? (
                                <div
                                    className="p-4 text-sm font-mono leading-[1.5] text-[#d4d4d4] overflow-auto h-full">
                                    <pre className="whitespace-pre-wrap">{response}</pre>
                                </div>
                            ) : (
                                <div className="flex items-center justify-center h-full">
                                    <div className="text-center text-[#6a6a6a]">
                                        <div className="text-lg mb-2">⚡</div>
                                        <div className="text-sm">Ready to test</div>
                                        <div className="text-xs mt-1">Configure your request and click "Execute Request"
                                            to see<br/>the response
                                        </div>
                                    </div>
                                </div>
                            )}
                        </div>
                    </div>
                </div>
            </div>

            {/* Bottom Bar - Powered by Passpoint with Play Button */}
            <div
                className="bg-[#2d2d30] border-t border-[#3c3c3c] px-4 py-3 flex items-center justify-between flex-shrink-0">
                <div className="flex items-center gap-2 text-[#6b7280] text-xs">
                    <span>Powered by</span>
                    <span className="font-semibold text-[#cccccc]">Passpoint</span>
                </div>

                <Button
                    onClick={handleRunCode}
                    disabled={isRunning}
                    className="bg-[#007acc] hover:bg-[#005a9e] text-white font-medium py-2 px-6 rounded-md flex items-center gap-2 transition-colors text-sm"
                >
                    <Play className="h-4 w-4 fill-current"/>
                    <span>Execute Request</span>
                </Button>
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
