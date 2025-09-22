import React, { useState, useRef, useEffect } from "react";
import { Copy, Check, FileText, Edit3, Eye, Maximize2, X } from "lucide-react";
import { Button } from "@/components/ui/button";

interface CodeBlockProps {
    children?: string;
    value?: string;
    onChange?: (value: string) => void;
    language?: string;
    title?: string;
    className?: string;
    placeholder?: string;
    readOnly?: boolean;
    minHeight?: string;
    interactive?: boolean;
    fixedHeight?: boolean;
    maxHeight?: string;
}

const CodeBlock: React.FC<CodeBlockProps> = ({
    children,
    value,
    onChange,
    language = "json",
    title,
    className = "",
    placeholder = "Enter code...",
    readOnly = false,
    minHeight = "200px",
    interactive = false,
    fixedHeight = true,
    maxHeight = "400px"
}) => {
    const [copied, setCopied] = useState(false);
    const [isEditing, setIsEditing] = useState(!readOnly && interactive);
    const [localValue, setLocalValue] = useState(value || children || "");
    const [isModalOpen, setIsModalOpen] = useState(false);
    const textareaRef = useRef<HTMLTextAreaElement>(null);

    // Use value prop for controlled components, children for static content
    const content = value !== undefined ? value : children || "";

    useEffect(() => {
        setLocalValue(content);
    }, [content]);

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
        if (!readOnly && interactive) {
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
    const lines = localValue.split('\n');
    const lineNumbers = lines.map((_, index) => index + 1);

    // Enhanced syntax highlighting matching the reference image exactly
    const highlightSyntax = (code: string, lang: string) => {
        if (!code) return "";


        switch (lang) {
            case 'json':
                return code
                    // Property names (keys) in cyan
                    .replace(/"([^"]+)":/g, '<span class="text-cyan-400">"$1"</span>:')
                    // String values in green
                    .replace(/:\s*"([^"]+)"/g, ': <span class="text-green-400">"$1"</span>')
                    // Standalone strings (not property values) in green
                    .replace(/(^|\s|,|\[)"([^"]+)"(?=\s*[,\]}])/gm, '$1<span class="text-green-400">"$2"</span>')
                    // Booleans and null in orange
                    .replace(/:\s*(true|false|null)/g, ': <span class="text-orange-400">$1</span>')
                    // Standalone booleans and null
                    .replace(/(^|\s|,|\[)(true|false|null)(?=\s*[,\]}])/gm, '$1<span class="text-orange-400">$2</span>')
                    // Numbers in orange
                    .replace(/:\s*(-?\d+(?:\.\d+)?(?:[eE][+-]?\d+)?)/g, ': <span class="text-orange-400">$1</span>')
                    // Standalone numbers
                    .replace(/(^|\s|,|\[)(-?\d+(?:\.\d+)?(?:[eE][+-]?\d+)?)(?=\s*[,\]}])/gm, '$1<span class="text-orange-400">$2</span>')
                    // Brackets and braces in white
                    .replace(/([{}[\]])/g, '<span class="text-slate-100">$1</span>')
                    // Commas and colons in white
                    .replace(/([,:])/g, '<span class="text-slate-100">$1</span>')
                    // Comments in gray italic (though not standard JSON)
                    .replace(/(\/\/.*$)/gm, '<span class="text-gray-500 italic">$1</span>')
                    .replace(/(\/\*[\s\S]*?\*\/)/g, '<span class="text-gray-500 italic">$1</span>');

            case 'bash':
            case 'shell':
                return code
                    // Commands in white/default
                    .replace(/^(curl|wget|ssh|scp|git|npm|yarn|pnpm|node|python|ruby|go)/gm, '<span class="text-white">$1</span>')
                    // Flags in cyan
                    .replace(/(\s)(-[a-zA-Z]|--[a-zA-Z-]+)/g, '$1<span class="text-cyan-400">$2</span>')
                    // URLs in sky blue
                    .replace(/(https?:\/\/[^\s"\\]+)/g, '<span class="text-sky-400">$1</span>')
                    // Strings in green
                    .replace(/("([^"\\]|\\.)*")/g, '<span class="text-green-400">$1</span>')
                    .replace(/('([^'\\]|\\.)*')/g, '<span class="text-green-400">$1</span>')
                    // Comments in gray italic
                    .replace(/(#.*$)/gm, '<span class="text-gray-500 italic">$1</span>');

            case 'javascript':
            case 'js':
            case 'typescript':
            case 'ts':
                return code
                    // Keywords in purple
                    .replace(/\b(const|let|var|function|class|if|else|for|while|do|switch|case|break|continue|return|try|catch|finally|throw|async|await|import|export|from|default|extends|implements|interface|type|enum|namespace|module|declare|abstract|static|public|private|protected|readonly|override)\b/g, '<span class="text-purple-400">$1</span>')
                    // Function/method calls in cyan
                    .replace(/\b([a-zA-Z_$][a-zA-Z0-9_$]*)\s*(?=\()/g, '<span class="text-cyan-400">$1</span>')
                    // Property access in cyan
                    .replace(/\.([a-zA-Z_$][a-zA-Z0-9_$]*)/g, '.<span class="text-cyan-400">$1</span>')
                    // Strings in green
                    .replace(/("([^"\\]|\\.)*")/g, '<span class="text-green-400">$1</span>')
                    .replace(/('([^'\\]|\\.)*')/g, '<span class="text-green-400">$1</span>')
                    .replace(/(`([^`\\]|\\.)*`)/g, '<span class="text-green-400">$1</span>')
                    // Numbers in orange
                    .replace(/\b(\d+(?:\.\d+)?)\b/g, '<span class="text-orange-400">$1</span>')
                    // Booleans and null in orange
                    .replace(/\b(true|false|null|undefined|NaN|Infinity)\b/g, '<span class="text-orange-400">$1</span>')
                    // This, super, new in orange
                    .replace(/\b(this|super|new)\b/g, '<span class="text-orange-400">$1</span>')
                    // Operators in white
                    .replace(/(===|!==|==|!=|<=|>=|<|>|\|\||&&|\+\+|--|\+=|-=|\*=|\/=|%=|&=|\|=|\^=|<<=|>>=|>>>=)/g, '<span class="text-white">$1</span>')
                    // Arrow functions in white
                    .replace(/(=>)/g, '<span class="text-white">$1</span>')
                    // Brackets and braces in white
                    .replace(/([{}[\]()])/g, '<span class="text-white">$1</span>')
                    // Comments in gray italic
                    .replace(/(\/\/.*$)/gm, '<span class="text-gray-500 italic">$1</span>')
                    .replace(/(\/\*[\s\S]*?\*\/)/g, '<span class="text-gray-500 italic">$1</span>');

            case 'python':
                return code
                    // Keywords in purple
                    .replace(/\b(def|class|if|elif|else|for|while|try|except|finally|with|as|import|from|return|yield|lambda|pass|break|continue|raise|assert|del|global|nonlocal|async|await|and|or|not|in|is)\b/g, '<span class="text-purple-400">$1</span>')
                    // Built-in functions in cyan
                    .replace(/\b(print|len|range|str|int|float|list|dict|set|tuple|bool|type|input|open|round|abs|sum|min|max|sorted|reversed|enumerate|zip|map|filter)\b/g, '<span class="text-cyan-400">$1</span>')
                    // Function/method calls
                    .replace(/\b([a-zA-Z_][a-zA-Z0-9_]*)\s*(?=\()/g, '<span class="text-cyan-400">$1</span>')
                    // Decorators in yellow
                    .replace(/(@[a-zA-Z_][a-zA-Z0-9_]*)/g, '<span class="text-yellow-400">$1</span>')
                    // Strings in green
                    .replace(/("""[\s\S]*?""")/g, '<span class="text-green-400">$1</span>')
                    .replace(/('''[\s\S]*?''')/g, '<span class="text-green-400">$1</span>')
                    .replace(/("([^"\\]|\\.)*")/g, '<span class="text-green-400">$1</span>')
                    .replace(/('([^'\\]|\\.)*')/g, '<span class="text-green-400">$1</span>')
                    // Numbers in orange
                    .replace(/\b(\d+(?:\.\d+)?)\b/g, '<span class="text-orange-400">$1</span>')
                    // Booleans and None in orange
                    .replace(/\b(True|False|None)\b/g, '<span class="text-orange-400">$1</span>')
                    // self in orange
                    .replace(/\b(self|cls)\b/g, '<span class="text-orange-400">$1</span>')
                    // Comments in gray italic
                    .replace(/(#.*$)/gm, '<span class="text-gray-500 italic">$1</span>');

            case 'html':
            case 'xml':
                return code
                    // HTML tags
                    .replace(/(<\/?[a-zA-Z][^>]*>)/g, (match) => {
                        return match
                            // Tag brackets in gray
                            .replace(/([<>/])/g, '<span class="text-gray-400">$1</span>')
                            // Tag names in red
                            .replace(/(<\/?|<)([a-zA-Z][a-zA-Z0-9-]*)/g, '$1<span class="text-red-400">$2</span>')
                            // Attribute names in orange
                            .replace(/\s([a-zA-Z][a-zA-Z0-9-]*)=/g, ' <span class="text-orange-400">$1</span>=')
                            // Attribute values in green
                            .replace(/="([^"]*)"/g, '=<span class="text-green-400">"$1"</span>')
                            .replace(/='([^']*)'/g, '=<span class="text-green-400">\'$1\'</span>');
                    })
                    // Comments in gray italic
                    .replace(/(<!--[\s\S]*?-->)/g, '<span class="text-gray-500 italic">$1</span>');

            case 'css':
            case 'scss':
            case 'sass':
                return code
                    // Selectors in cyan
                    .replace(/^([^{}\s][^{}]*)\s*{/gm, '<span class="text-cyan-400">$1</span> {')
                    // Property names in sky blue
                    .replace(/([a-zA-Z-]+)\s*:/g, '<span class="text-sky-400">$1</span>:')
                    // Values in green
                    .replace(/:\s*([^;}\s]+)/g, ': <span class="text-green-400">$1</span>')
                    // Important in red
                    .replace(/!important/g, '<span class="text-red-400">!important</span>')
                    // Units in orange
                    .replace(/(\d+)(px|em|rem|%|vh|vw|vmin|vmax|ch|ex|mm|cm|in|pt|pc)/g, '<span class="text-orange-400">$1$2</span>')
                    // Comments in gray italic
                    .replace(/(\/\*[\s\S]*?\*\/)/g, '<span class="text-gray-500 italic">$1</span>')
                    .replace(/(\/\/.*$)/gm, '<span class="text-gray-500 italic">$1</span>');

            case 'java':
                return code
                    // Keywords in purple
                    .replace(/\b(public|private|protected|static|final|abstract|class|interface|extends|implements|package|import|return|if|else|for|while|do|switch|case|break|continue|try|catch|finally|throw|throws|new|this|super|void|int|double|float|long|short|byte|char|boolean|String|Object)\b/g, '<span class="text-purple-400">$1</span>')
                    // Method/function calls in cyan
                    .replace(/\b([a-zA-Z_$][a-zA-Z0-9_$]*)\s*(?=\()/g, '<span class="text-cyan-400">$1</span>')
                    // Property access in cyan
                    .replace(/\.([a-zA-Z_$][a-zA-Z0-9_$]*)/g, '.<span class="text-cyan-400">$1</span>')
                    // Strings in green
                    .replace(/("([^"\\]|\\.)*")/g, '<span class="text-green-400">$1</span>')
                    .replace(/('([^'\\]|\\.)*')/g, '<span class="text-green-400">$1</span>')
                    // Numbers in orange
                    .replace(/\b(\d+(?:\.\d+)?[fFdDlL]?)\b/g, '<span class="text-orange-400">$1</span>')
                    // Booleans and null in orange
                    .replace(/\b(true|false|null)\b/g, '<span class="text-orange-400">$1</span>')
                    // Annotations in yellow
                    .replace(/(@[a-zA-Z_][a-zA-Z0-9_]*)/g, '<span class="text-yellow-400">$1</span>')
                    // Brackets and braces in white
                    .replace(/([{}[\]()])/g, '<span class="text-white">$1</span>')
                    // Operators in white
                    .replace(/(==|!=|<=|>=|<|>|\|\||&&|\+\+|--|\+=|-=|\*=|\/=|%=)/g, '<span class="text-white">$1</span>')
                    // Comments in gray italic
                    .replace(/(\/\/.*$)/gm, '<span class="text-gray-500 italic">$1</span>')
                    .replace(/(\/\*[\s\S]*?\*\/)/g, '<span class="text-gray-500 italic">$1</span>');

            default:
                return code;
        }
    };

    const getLanguageIcon = (lang: string) => {
        switch (lang) {
            case 'json':
                return '{}';
            case 'javascript':
            case 'js':
                return 'JS';
            case 'typescript':
            case 'ts':
                return 'TS';
            case 'python':
                return 'PY';
            case 'bash':
            case 'shell':
                return '$';
            case 'html':
            case 'xml':
                return '<>';
            case 'css':
            case 'scss':
            case 'sass':
                return 'CSS';
            case 'java':
                return 'JAVA';
            default:
                return '<>';
        }
    };

    // Auto-resize textarea only for interactive mode when not using fixed height
    useEffect(() => {
        if (textareaRef.current && isEditing && !fixedHeight) {
            textareaRef.current.style.height = 'auto';
            textareaRef.current.style.height = Math.max(
                textareaRef.current.scrollHeight,
                parseInt(minHeight)
            ) + 'px';
        }
    }, [localValue, isEditing, minHeight, fixedHeight]);

    // Modal component
    const Modal = ({ isOpen, onClose, children }: { isOpen: boolean; onClose: () => void; children: React.ReactNode }) => {
        if (!isOpen) return null;

        return (
            <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black bg-opacity-50" onClick={onClose}>
                <div
                    className="bg-white dark:bg-gray-900 rounded-xl border border-gray-200 dark:border-gray-700 shadow-xl max-w-5xl w-full max-h-[90vh] overflow-hidden"
                    onClick={(e) => e.stopPropagation()}
                >
                    <div className="flex items-center justify-between p-4 border-b border-gray-200 dark:border-gray-700">
                        <h3 className="text-lg font-semibold text-gray-900 dark:text-gray-100">
                            {title || `example.${language}`} - Full View
                        </h3>
                        <Button
                            variant="ghost"
                            size="sm"
                            onClick={onClose}
                            className="h-8 w-8 p-0 hover:bg-gray-200 dark:hover:bg-gray-700"
                        >
                            <X className="h-4 w-4" />
                        </Button>
                    </div>
                    <div className="overflow-auto max-h-[calc(90vh-80px)]">
                        {children}
                    </div>
                </div>
            </div>
        );
    };

    return (
        <>
        <div className={`bg-gray-50 dark:bg-gray-900 rounded-xl border border-gray-200 dark:border-gray-700 overflow-hidden shadow-sm ${className}`}>
            {/* Editor Header */}
            <div className="flex items-center justify-between px-2 sm:px-4 py-2 sm:py-3 bg-gray-100 dark:bg-gray-800 border-b border-gray-200 dark:border-gray-700">
                <div className="flex items-center gap-1 sm:gap-3 min-w-0 flex-1">
                    {/* Traffic Light Buttons */}
                    <div className="hidden sm:flex items-center gap-2">
                        <div className="w-3 h-3 rounded-full bg-red-400"></div>
                        <div className="w-3 h-3 rounded-full bg-yellow-400"></div>
                        <div className="w-3 h-3 rounded-full bg-green-400"></div>
                    </div>

                    {/* File Info */}
                    <div className="flex items-center gap-1 sm:gap-2 text-xs sm:text-sm text-gray-600 dark:text-gray-300 min-w-0">
                        <FileText className="h-3 w-3 sm:h-4 sm:w-4 flex-shrink-0"/>
                        <span className="font-medium truncate max-w-[80px] sm:max-w-none">
                            {title || `example.${language}`}
                        </span>
                        <span className="px-1 sm:px-2 py-0.5 sm:py-1 text-xs bg-gray-200 dark:bg-gray-700 rounded text-gray-600 dark:text-gray-300 font-mono flex-shrink-0">
                            {getLanguageIcon(language)}
                        </span>
                        {interactive && !readOnly && (
                            <span className={`hidden sm:inline px-2 py-1 text-xs rounded ${
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
                <div className="flex items-center gap-1 sm:gap-2 flex-shrink-0">
                    {interactive && !readOnly && (
                        <Button
                            variant="ghost"
                            size="sm"
                            onClick={toggleEditMode}
                            className="h-6 w-6 sm:h-8 sm:w-auto p-0 sm:px-3 text-xs cursor-pointer hover:bg-gray-200 dark:hover:bg-gray-700 transition-colors"
                            title={isEditing ? "Switch to view mode" : "Switch to edit mode"}
                        >
                            {isEditing ? (
                                <>
                                    <Eye className="h-3 w-3 sm:h-4 sm:w-4 sm:mr-1"/>
                                    <span className="hidden sm:inline">View</span>
                                </>
                            ) : (
                                <>
                                    <Edit3 className="h-3 w-3 sm:h-4 sm:w-4 sm:mr-1"/>
                                    <span className="hidden sm:inline">Edit</span>
                                </>
                            )}
                        </Button>
                    )}

                    {language === 'json' && isEditing && interactive && (
                        <Button
                            variant="ghost"
                            size="sm"
                            onClick={formatJSON}
                            className="hidden sm:flex h-8 px-3 text-xs cursor-pointer hover:bg-gray-200 dark:hover:bg-gray-700 transition-colors"
                            title="Format JSON"
                        >
                            Format
                        </Button>
                    )}

                    {fixedHeight && (
                        <Button
                            variant="ghost"
                            size="sm"
                            onClick={() => setIsModalOpen(true)}
                            className="h-6 w-6 sm:h-8 sm:w-auto p-0 sm:px-3 text-xs cursor-pointer hover:bg-gray-200 dark:hover:bg-gray-700 transition-colors"
                            title="View full code"
                        >
                            <Maximize2 className="h-3 w-3 sm:h-4 sm:w-4 sm:mr-1"/>
                            <span className="hidden sm:inline">Expand</span>
                        </Button>
                    )}

                    <Button
                        variant="ghost"
                        size="sm"
                        onClick={handleCopy}
                        className="h-6 w-6 sm:h-8 sm:w-auto p-0 sm:px-3 text-xs cursor-pointer hover:bg-gray-200 dark:hover:bg-gray-700 transition-colors"
                        title={copied ? "Copied!" : "Copy code"}
                    >
                        {copied ? (
                            <>
                                <Check className="h-3 w-3 sm:h-4 sm:w-4 text-green-600 dark:text-green-400 sm:mr-1"/>
                                <span className="hidden sm:inline text-green-600 dark:text-green-400">Copied</span>
                            </>
                        ) : (
                            <>
                                <Copy className="h-3 w-3 sm:h-4 sm:w-4 text-gray-600 dark:text-gray-400 sm:mr-1"/>
                                <span className="hidden sm:inline">Copy</span>
                            </>
                        )}
                    </Button>
                </div>
            </div>

            {/* Editor Content */}
            <div className={`flex bg-slate-900 dark:bg-gray-950 overflow-hidden ${fixedHeight ? `max-h-[${maxHeight}]` : ''}`} style={fixedHeight ? { maxHeight } : {}}>
                {/* Line Numbers */}
                <div className="flex-shrink-0 px-2 sm:px-4 py-4 bg-slate-800/50 dark:bg-gray-900 border-r border-slate-700 dark:border-gray-700 select-none">
                    <div className="text-xs sm:text-sm font-mono text-slate-500 dark:text-gray-500 leading-5 sm:leading-6">
                        {lineNumbers.map((num) => (
                            <div key={num} className="text-right min-w-[1.5rem] sm:min-w-[2rem] h-5 sm:h-6">
                                {num}
                            </div>
                        ))}
                    </div>
                </div>

                {/* Code Content */}
                <div className="flex-1 relative overflow-hidden">
                    {isEditing && interactive ? (
                        /* Edit Mode - Textarea */
                        <textarea
                            ref={textareaRef}
                            value={localValue}
                            onChange={(e) => handleChange(e.target.value)}
                            onKeyDown={handleKeyDown}
                            placeholder={placeholder}
                            className="w-full p-2 sm:p-4 text-xs sm:text-sm font-mono leading-5 sm:leading-6 text-slate-100 dark:text-gray-100 bg-transparent border-none outline-none resize-none overflow-auto"
                            style={fixedHeight ? { height: maxHeight } : { minHeight }}
                            spellCheck={false}
                        />
                    ) : (
                        /* View Mode - Syntax Highlighted */
                        <div className={`w-full h-full overflow-x-auto ${fixedHeight ? 'overflow-y-auto' : 'overflow-y-auto'}`}>
                            <pre className="p-2 sm:p-4 text-xs sm:text-sm font-mono leading-5 sm:leading-6 text-slate-100 dark:text-gray-100 whitespace-pre-wrap">
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
                    {!localValue && isEditing && interactive && (
                        <div className="absolute inset-2 sm:inset-4 flex items-start text-slate-500 dark:text-gray-500 text-xs sm:text-sm font-mono pointer-events-none">
                            {placeholder}
                        </div>
                    )}
                </div>
            </div>

            {/* Footer with info */}
            {interactive && !readOnly && (
                <div className="px-2 sm:px-4 py-2 bg-gray-50 dark:bg-gray-900 border-t border-gray-200 dark:border-gray-700 text-xs text-gray-500 dark:text-gray-400">
                    {isEditing ? (
                        <span className="block sm:inline">Click "View" to see syntax highlighting • Use Ctrl+A to select all</span>
                    ) : (
                        <span className="block sm:inline">Click "Edit" to modify content • Read-only mode</span>
                    )}
                </div>
            )}
        </div>

        {/* Full Screen Modal */}
        <Modal isOpen={isModalOpen} onClose={() => setIsModalOpen(false)}>
            <div className="bg-slate-900 dark:bg-gray-950">
                {/* Line Numbers */}
                <div className="flex">
                    <div className="flex-shrink-0 px-2 sm:px-4 py-4 bg-slate-800/50 dark:bg-gray-900 border-r border-slate-700 dark:border-gray-700 select-none">
                        <div className="text-xs sm:text-sm font-mono text-slate-500 dark:text-gray-500 leading-5 sm:leading-6">
                            {lineNumbers.map((num) => (
                                <div key={num} className="text-right min-w-[1.5rem] sm:min-w-[2rem] h-5 sm:h-6">
                                    {num}
                                </div>
                            ))}
                        </div>
                    </div>

                    {/* Full Code Content */}
                    <div className="flex-1 relative">
                        <div className="w-full h-full overflow-x-auto overflow-y-auto">
                            <pre className="p-2 sm:p-4 text-xs sm:text-sm font-mono leading-5 sm:leading-6 text-slate-100 dark:text-gray-100 whitespace-pre-wrap">
                                <code
                                    className={language ? `language-${language}` : ""}
                                    dangerouslySetInnerHTML={{
                                        __html: highlightSyntax(localValue || placeholder, language)
                                    }}
                                />
                            </pre>
                        </div>
                    </div>
                </div>
            </div>
        </Modal>
        </>
    );
};

export default CodeBlock;