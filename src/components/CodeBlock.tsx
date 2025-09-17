import React, {useState} from "react";
import {Copy, Check} from "lucide-react";
import {Button} from "@/components/ui/button";

interface CodeBlockProps {
    children: string;
    language?: string;
    title?: string;
    className?: string;
}

const CodeBlock: React.FC<CodeBlockProps> = ({
                                                 children,
                                                 language = "",
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

    return (
        <div className={`bg-gray-100 dark:bg-gray-800 rounded-lg overflow-hidden ${className}`}>
            {title && (
                <div
                    className="flex items-center justify-between px-4 py-3 bg-gray-50 dark:bg-gray-900 border-b border-gray-200 dark:border-gray-700">
                    <div className="text-sm font-semibold text-gray-900 dark:text-white">
                        {title}
                    </div>
                    <Button
                        variant="ghost"
                        size="sm"
                        onClick={handleCopy}
                        className="h-8 w-8 p-0 hover:bg-gray-200 cursor-pointer dark:hover:bg-gray-700"
                        title={copied ? "Copied!" : "Copy code"}
                    >
                        {copied ? (
                            <Check className="h-4 w-4 text-green-600 dark:text-green-400"/>
                        ) : (
                            <Copy className="h-4 w-4 text-gray-600 dark:text-gray-400"/>
                        )}
                    </Button>
                </div>
            )}
            <div className="relative group">
                {!title && (
                    <Button
                        variant="ghost"
                        size="sm"
                        onClick={handleCopy}
                        className="absolute top-2 right-2 h-8 w-8 p-0 cursor-pointer opacity-0 group-hover:opacity-100 transition-opacity hover:bg-gray-200 dark:hover:bg-gray-700 z-10"
                        title={copied ? "Copied!" : "Copy code"}
                    >
                        {copied ? (
                            <Check className="h-4 w-4 text-green-600 dark:text-green-400"/>
                        ) : (
                            <Copy className="h-4 w-4 text-gray-600 dark:text-gray-400"/>
                        )}
                    </Button>
                )}
                <pre className="p-4 text-sm text-gray-900 dark:text-gray-100 overflow-x-auto">
          <code className={language ? `language-${language}` : ""}>
            {children}
          </code>
        </pre>
            </div>
        </div>
    );
};

export default CodeBlock;