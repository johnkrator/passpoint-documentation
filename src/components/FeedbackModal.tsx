import React, {useState, useEffect} from "react";
import {X} from "lucide-react";
import {Button} from "@/components/ui/button";
import {cn} from "@/lib/utils";

interface FeedbackModalProps {
    isOpen: boolean;
    onClose: () => void;
    onSubmit: (feedback: string) => void;
    type: "like" | "dislike";
}

const FeedbackModal: React.FC<FeedbackModalProps> = ({
                                                         isOpen,
                                                         onClose,
                                                         onSubmit,
                                                         type
                                                     }) => {
    const [feedback, setFeedback] = useState("");
    const [isSubmitting, setIsSubmitting] = useState(false);

    // Reset feedback when modal opens/closes
    useEffect(() => {
        if (!isOpen) {
            setFeedback("");
            setIsSubmitting(false);
        }
    }, [isOpen]);

    // Handle ESC key press
    useEffect(() => {
        const handleEscape = (e: KeyboardEvent) => {
            if (e.key === "Escape" && isOpen) {
                onClose();
            }
        };

        if (isOpen) {
            document.addEventListener("keydown", handleEscape);
            // Prevent body scroll when modal is open
            document.body.style.overflow = "hidden";
        }

        return () => {
            document.removeEventListener("keydown", handleEscape);
            document.body.style.overflow = "unset";
        };
    }, [isOpen, onClose]);

    const handleSubmit = async () => {
        if (isSubmitting) return;

        setIsSubmitting(true);
        try {
            await onSubmit(feedback);
            onClose();
        } catch (error) {
            console.error("Error submitting feedback:", error);
        } finally {
            setIsSubmitting(false);
        }
    };

    const handleBackdropClick = (e: React.MouseEvent) => {
        if (e.target === e.currentTarget) {
            onClose();
        }
    };

    if (!isOpen) return null;

    return (
        <div
            className="fixed inset-0 z-50 flex items-center justify-center bg-black/50 backdrop-blur-sm"
            onClick={handleBackdropClick}
            role="dialog"
            aria-modal="true"
            aria-labelledby="feedback-title"
        >
            <div
                className="relative w-full max-w-md mx-4 bg-white dark:bg-gray-800 rounded-lg shadow-xl border border-gray-200 dark:border-gray-700 animate-in fade-in-0 zoom-in-95 duration-200">
                {/* Header */}
                <div className="flex items-center justify-between p-4 border-b border-gray-200 dark:border-gray-700">
                    <h2 id="feedback-title" className="text-lg font-semibold text-gray-900 dark:text-white">
                        Feedback
                    </h2>
                    <Button
                        variant="ghost"
                        size="icon"
                        onClick={onClose}
                        className="h-8 w-8 rounded-full hover:bg-gray-100 dark:hover:bg-gray-700"
                        aria-label="Close feedback modal"
                    >
                        <X className="h-4 w-4"/>
                    </Button>
                </div>

                {/* Content */}
                <div className="p-4 space-y-4">
                    <div>
                        <label
                            htmlFor="feedback-input"
                            className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2"
                        >
                            Please provide details: (optional)
                        </label>
                        <textarea
                            id="feedback-input"
                            value={feedback}
                            onChange={(e) => setFeedback(e.target.value)}
                            placeholder={
                                type === "like"
                                    ? "What was satisfying about this response?"
                                    : "What could be improved about this response?"
                            }
                            className={cn(
                                "w-full px-3 py-2 text-sm border border-gray-300 dark:border-gray-600 rounded-md",
                                "bg-white dark:bg-gray-900 text-gray-900 dark:text-gray-100",
                                "placeholder-gray-500 dark:placeholder-gray-400",
                                "focus:outline-none focus:ring-2 focus:ring-blue-500 dark:focus:ring-blue-400 focus:border-transparent",
                                "resize-none transition-colors duration-200"
                            )}
                            rows={4}
                            maxLength={500}
                        />
                        <div className="text-xs text-gray-500 dark:text-gray-400 mt-1">
                            {feedback.length}/500 characters
                        </div>
                    </div>

                    <div className="text-xs text-gray-600 dark:text-gray-400 leading-relaxed">
                        Submitting this report will send the entire current conversation to
                        Passpoint for future improvements to our documentation.{" "}
                        <button
                            className="text-blue-600 dark:text-blue-400 cursor-pointer hover:underline focus:outline-none focus:underline"
                            onClick={() => window.open("https://mypasspoint.com/", "_blank")}
                        >
                            Learn More
                        </button>
                    </div>
                </div>

                {/* Footer */}
                <div
                    className="flex items-center justify-end gap-3 p-4 border-t border-gray-200 dark:border-gray-700 bg-gray-50 dark:bg-gray-750 rounded-b-lg">
                    <Button
                        variant="outline"
                        onClick={onClose}
                        disabled={isSubmitting}
                        className="text-gray-700 cursor-pointer dark:text-gray-300 hover:bg-gray-100 dark:hover:bg-gray-600"
                    >
                        Cancel
                    </Button>
                    <Button
                        onClick={handleSubmit}
                        disabled={isSubmitting}
                        className={cn(
                            "min-w-[80px]",
                            isSubmitting && "opacity-70 cursor-not-allowed"
                        )}
                    >
                        {isSubmitting ? (
                            <div className="flex items-center gap-2">
                                <div
                                    className="h-3 w-3 animate-spin rounded-full cursor-pointer border-2 border-white border-t-transparent"/>
                                <span>Submitting...</span>
                            </div>
                        ) : (
                            "Submit"
                        )}
                    </Button>
                </div>
            </div>
        </div>
    );
};

export default FeedbackModal;