import React, {useState, useRef, useEffect} from "react";
import {Copy, Check, FileText, Edit3, Eye} from "lucide-react";
import {Button} from "@/components/ui/button";

interface InteractiveCodeBlockProps {
    value: string;
    onChange?: (value: string) => void;
    language?: string;
    title?: string;
    className?: string;
    placeholder?: string;
    readOnly?: boolean;
    minHeight?: string;
}

const InteractiveCodeBlock: React.FC<InteractiveCodeBlockProps> = ({
                                                                       value,
                                                                       onChange,
                                                                       language = "json",
                                                                       title,
                                                                       className = "",
                                                                       placeholder = "Enter code...",
                                                                       readOnly = false,
                                                                       minHeight = "200px"
                                                                   }) => {
    const [copied, setCopied] = useState(false);
    const [isEditing, setIsEditing] = useState(!readOnly);
    const [localValue, setLocalValue] = useState(value);
    const textareaRef = useRef<HTMLTextAreaElement>(null);

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

    const handleChange = (newValue: string) => {
        setLocalValue(newValue);
        onChange?.(newValue);
    };

    const toggleEditMode = () => {
        if (!readOnly) {
            setIsEditing(!isEditing);
        }
    };

    const formatJSON = () => {
        try {
            const formatted = JSON.stringify(JSON.parse(localValue), null, 2);
            handleChange(formatted);
        } catch {
            // Invalid JSON, don't format
        }
    };

    // Handle keyboard shortcuts
    const handleKeyDown = (e: React.KeyboardEvent<HTMLTextAreaElement>) => {
        if (e.key === "Tab") {
            e.preventDefault();
            const target = e.target as HTMLTextAreaElement;
            const start = target.selectionStart;
            const end = target.selectionEnd;
            const newValue = localValue.substring(0, start) + "  " + localValue.substring(end);
            handleChange(newValue);

            // Set cursor position after the inserted spaces
            setTimeout(() => {
                target.selectionStart = target.selectionEnd = start + 2;
            }, 0);
        }

        // Auto-close brackets and quotes
        if (e.key === "{") {
            e.preventDefault();
            const target = e.target as HTMLTextAreaElement;
            const start = target.selectionStart;
            const end = target.selectionEnd;
            const newValue = localValue.substring(0, start) + "{}" + localValue.substring(end);
            handleChange(newValue);

            setTimeout(() => {
                target.selectionStart = target.selectionEnd = start + 1;
            }, 0);
        }

        if (e.key === "\"") {
            e.preventDefault();
            const target = e.target as HTMLTextAreaElement;
            const start = target.selectionStart;
            const end = target.selectionEnd;
            const newValue = localValue.substring(0, start) + "\"\"" + localValue.substring(end);
            handleChange(newValue);

            setTimeout(() => {
                target.selectionStart = target.selectionEnd = start + 1;
            }, 0);
        }
    };

    // Generate line numbers
    const lines = localValue.split("\n");
    const lineNumbers = lines.map((_, index) => index + 1);

    // Basic syntax highlighting for JSON (only in view mode)
    const highlightSyntax = (code: string, lang: string) => {
        if (lang === "json" && !isEditing) {
            return code
                .replace(/"([^"]+)":/g, "<span class=\"text-blue-400 dark:text-blue-300\">\"$1\"</span>:")
                .replace(/:\s*"([^"]+)"/g, ": <span class=\"text-green-400 dark:text-green-300\">\"$1\"</span>")
                .replace(/:\s*(true|false|null)/g, ": <span class=\"text-purple-400 dark:text-purple-300\">$1</span>")
                .replace(/:\s*(\d+)/g, ": <span class=\"text-orange-400 dark:text-orange-300\">$1</span>")
                .replace(/([{}[\]])/g, "<span class=\"text-gray-500 dark:text-gray-400\">$1</span>")
                .replace(/(\/\/.*$)/gm, "<span class=\"text-gray-500 dark:text-gray-400 italic\">$1</span>");
        }
        return code;
    };

    const getLanguageIcon = (lang: string) => {
        switch (lang) {
            case "json":
                return "{}";
            case "javascript":
            case "js":
                return "JS";
            case "typescript":
            case "ts":
                return "TS";
            case "python":
                return "PY";
            case "bash":
            case "shell":
                return "$";
            default:
                return "<>";
        }
    };

    // Auto-resize textarea
    useEffect(() => {
        if (textareaRef.current) {
            textareaRef.current.style.height = "auto";
            textareaRef.current.style.height = Math.max(
                textareaRef.current.scrollHeight,
                parseInt(minHeight)
            ) + "px";
        }
    }, [localValue, isEditing, minHeight]);

    return (
        <div
            className={`bg-gray-50 dark:bg-gray-900 rounded-xl border border-gray-200 dark:border-gray-700 overflow-hidden shadow-sm ${className}`}>
            {/* Editor Header */}
            <div
                className="flex items-center justify-between px-4 py-3 bg-gray-100 dark:bg-gray-800 border-b border-gray-200 dark:border-gray-700">
                <div className="flex items-center gap-3">
                    {/* Traffic Light Buttons */}
                    <div className="flex items-center gap-2">
                        <div className="w-3 h-3 rounded-full bg-red-400"></div>
                        <div className="w-3 h-3 rounded-full bg-yellow-400"></div>
                        <div className="w-3 h-3 rounded-full bg-green-400"></div>
                    </div>

                    {/* File Info */}
                    <div className="flex items-center gap-2 text-sm text-gray-600 dark:text-gray-300">
                        <FileText className="h-4 w-4"/>
                        <span className="font-medium">
                            {title || `example.${language}`}
                        </span>
                        <span
                            className="px-2 py-1 text-xs bg-gray-200 dark:bg-gray-700 rounded text-gray-600 dark:text-gray-300 font-mono">
                            {getLanguageIcon(language)}
                        </span>
                        {!readOnly && (
                            <span className={`px-2 py-1 text-xs rounded ${
                                isEditing
                                    ? "bg-blue-100 text-blue-800 dark:bg-blue-900/20 dark:text-blue-300"
                                    : "bg-gray-200 text-gray-800 dark:bg-gray-700 dark:text-gray-300"
                            }`}>
                                {isEditing ? "EDIT" : "VIEW"}
                            </span>
                        )}
                    </div>
                </div>

                {/* Action Buttons */}
                <div className="flex items-center gap-2">
                    {!readOnly && (
                        <Button
                            variant="ghost"
                            size="sm"
                            onClick={toggleEditMode}
                            className="h-8 px-3 text-xs cursor-pointer hover:bg-gray-200 dark:hover:bg-gray-700 transition-colors"
                            title={isEditing ? "Switch to view mode" : "Switch to edit mode"}
                        >
                            {isEditing ? (
                                <>
                                    <Eye className="h-4 w-4 mr-1"/>
                                    <span>View</span>
                                </>
                            ) : (
                                <>
                                    <Edit3 className="h-4 w-4 mr-1"/>
                                    <span>Edit</span>
                                </>
                            )}
                        </Button>
                    )}

                    {language === "json" && isEditing && (
                        <Button
                            variant="ghost"
                            size="sm"
                            onClick={formatJSON}
                            className="h-8 px-3 text-xs cursor-pointer hover:bg-gray-200 dark:hover:bg-gray-700 transition-colors"
                            title="Format JSON"
                        >
                            Format
                        </Button>
                    )}

                    <Button
                        variant="ghost"
                        size="sm"
                        onClick={handleCopy}
                        className="h-8 px-3 text-xs cursor-pointer hover:bg-gray-200 dark:hover:bg-gray-700 transition-colors"
                        title={copied ? "Copied!" : "Copy code"}
                    >
                        {copied ? (
                            <>
                                <Check className="h-4 w-4 text-green-600 dark:text-green-400 mr-1"/>
                                <span className="text-green-600 dark:text-green-400">Copied</span>
                            </>
                        ) : (
                            <>
                                <Copy className="h-4 w-4 text-gray-600 dark:text-gray-400 mr-1"/>
                                <span>Copy</span>
                            </>
                        )}
                    </Button>
                </div>
            </div>

            {/* Editor Content */}
            <div className="flex bg-white dark:bg-gray-950 overflow-hidden">
                {/* Line Numbers */}
                <div
                    className="flex-shrink-0 px-2 sm:px-4 py-4 bg-gray-50 dark:bg-gray-900 border-r border-gray-200 dark:border-gray-700 select-none">
                    <div
                        className="text-xs sm:text-sm font-mono text-gray-400 dark:text-gray-500 leading-5 sm:leading-6">
                        {lineNumbers.map((num) => (
                            <div key={num} className="text-right min-w-[1.5rem] sm:min-w-[2rem] h-5 sm:h-6">
                                {num}
                            </div>
                        ))}
                    </div>
                </div>

                {/* Code Content */}
                <div className="flex-1 relative overflow-hidden">
                    {isEditing ? (
                        /* Edit Mode - Textarea */
                        <textarea
                            ref={textareaRef}
                            value={localValue}
                            onChange={(e) => handleChange(e.target.value)}
                            onKeyDown={handleKeyDown}
                            placeholder={placeholder}
                            className="w-full p-2 sm:p-4 text-xs sm:text-sm font-mono leading-5 sm:leading-6 text-gray-900 dark:text-gray-100 bg-transparent border-none outline-none resize-none overflow-auto"
                            style={{minHeight}}
                            spellCheck={false}
                        />
                    ) : (
                        /* View Mode - Syntax Highlighted */
                        <div className="w-full h-full overflow-auto">
                            <pre
                                className="p-2 sm:p-4 text-xs sm:text-sm font-mono leading-5 sm:leading-6 text-gray-900 dark:text-gray-100 whitespace-pre-wrap break-words">
                                <code
                                    className={language ? `language-${language}` : ""}
                                    dangerouslySetInnerHTML={{
                                        __html: highlightSyntax(localValue || placeholder, language)
                                    }}
                                />
                            </pre>
                        </div>
                    )}

                    {/* Empty state */}
                    {!localValue && isEditing && (
                        <div
                            className="absolute inset-2 sm:inset-4 flex items-start text-gray-400 dark:text-gray-500 text-xs sm:text-sm font-mono pointer-events-none">
                            {placeholder}
                        </div>
                    )}
                </div>
            </div>

            {/* Footer with info */}
            {!readOnly && (
                <div
                    className="px-2 sm:px-4 py-2 bg-gray-50 dark:bg-gray-900 border-t border-gray-200 dark:border-gray-700 text-xs text-gray-500 dark:text-gray-400">
                    {isEditing ? (
                        <span className="block sm:inline">Click "View" to see syntax highlighting • Use Ctrl+A to select all</span>
                    ) : (
                        <span className="block sm:inline">Click "Edit" to modify content • Read-only mode</span>
                    )}
                </div>
            )}
        </div>
    );
};

export default InteractiveCodeBlock;

