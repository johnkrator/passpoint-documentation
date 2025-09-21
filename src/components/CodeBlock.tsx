import React, {useState} from "react";
import {Copy, Check, FileText} from "lucide-react";
import {Button} from "@/components/ui/button";

interface CodeBlockProps {
    children: string;
    language?: string;
    title?: string;
    className?: string;
}

const CodeBlock: React.FC<CodeBlockProps> = ({
                                                 children,
                                                 language = "json",
                                                 title,
                                                 className = ""
                                             }) => {
    const [copied, setCopied] = useState(false);

    const handleCopy = async () => {
        try {
            await navigator.clipboard.writeText(children);
            setCopied(true);
            setTimeout(() => setCopied(false), 2000);
        } catch (err) {
            console.error("Failed to copy text: ", err);
        }
    };

    // Generate line numbers based on content
    const lines = children.split('\n');
    const lineNumbers = lines.map((_, index) => index + 1);

    // Basic syntax highlighting for JSON
    const highlightSyntax = (code: string, lang: string) => {
        if (lang === 'json') {
            return code
                .replace(/"([^"]+)":/g, '<span class="text-blue-400 dark:text-blue-300">"$1"</span>:')
                .replace(/:\s*"([^"]+)"/g, ': <span class="text-green-400 dark:text-green-300">"$1"</span>')
                .replace(/:\s*(true|false|null)/g, ': <span class="text-purple-400 dark:text-purple-300">$1</span>')
                .replace(/:\s*(\d+)/g, ': <span class="text-orange-400 dark:text-orange-300">$1</span>')
                .replace(/([{}[\]])/g, '<span class="text-gray-500 dark:text-gray-400">$1</span>')
                .replace(/(\/\/.*$)/gm, '<span class="text-gray-500 dark:text-gray-400 italic">$1</span>');
        }
        return code;
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
            default:
                return '<>';
        }
    };

    return (
        <div className={`bg-gray-50 dark:bg-gray-900 rounded-xl border border-gray-200 dark:border-gray-700 overflow-hidden shadow-sm ${className}`}>
            {/* Editor Header */}
            <div className="flex items-center justify-between px-4 py-3 bg-gray-100 dark:bg-gray-800 border-b border-gray-200 dark:border-gray-700">
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
                        <span className="px-2 py-1 text-xs bg-gray-200 dark:bg-gray-700 rounded text-gray-600 dark:text-gray-300 font-mono">
                            {getLanguageIcon(language)}
                        </span>
                    </div>
                </div>

                {/* Copy Button */}
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

            {/* Editor Content */}
            <div className="flex bg-white dark:bg-gray-950">
                {/* Line Numbers */}
                <div className="flex-shrink-0 px-4 py-4 bg-gray-50 dark:bg-gray-900 border-r border-gray-200 dark:border-gray-700 select-none">
                    <div className="text-sm font-mono text-gray-400 dark:text-gray-500 leading-6">
                        {lineNumbers.map((num) => (
                            <div key={num} className="text-right min-w-[2rem]">
                                {num}
                            </div>
                        ))}
                    </div>
                </div>

                {/* Code Content */}
                <div className="flex-1 overflow-x-auto">
                    <pre className="p-4 text-sm font-mono leading-6 text-gray-900 dark:text-gray-100">
                        <code
                            className={language ? `language-${language}` : ""}
                            dangerouslySetInnerHTML={{
                                __html: highlightSyntax(children, language)
                            }}
                        />
                    </pre>
                </div>
            </div>
        </div>
    );
};

export default CodeBlock;