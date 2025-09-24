import React, {useState, useEffect} from "react";
import {ThumbsUp, ThumbsDown} from "lucide-react";
import {Button} from "@/components/ui/button";
import {cn} from "@/lib/utils";
import FeedbackModal from "./FeedbackModal";

interface LikeFeatureProps {
    pageId: string;
    className?: string;
}

interface FeedbackData {
    likes: number;
    dislikes: number;
    userFeedback: 'like' | 'dislike' | null;
}

const LikeFeature: React.FC<LikeFeatureProps> = ({pageId, className = ""}) => {
    const [feedbackData, setFeedbackData] = useState<FeedbackData>({
        likes: 0,
        dislikes: 0,
        userFeedback: null
    });
    const [isAnimating, setIsAnimating] = useState<'like' | 'dislike' | null>(null);
    const [modalState, setModalState] = useState<{
        isOpen: boolean;
        type: 'like' | 'dislike' | null;
    }>({ isOpen: false, type: null });

    // Storage keys for persistence
    const likesStorageKey = `page_likes_${pageId}`;
    const dislikesStorageKey = `page_dislikes_${pageId}`;
    const userFeedbackKey = `user_feedback_${pageId}`;

    // Load feedback data from localStorage on component mount
    useEffect(() => {
        const loadFeedbackData = () => {
            try {
                const savedLikes = localStorage.getItem(likesStorageKey);
                const savedDislikes = localStorage.getItem(dislikesStorageKey);
                const userFeedback = localStorage.getItem(userFeedbackKey) as 'like' | 'dislike' | null;

                setFeedbackData({
                    likes: savedLikes ? parseInt(savedLikes, 10) : 0,
                    dislikes: savedDislikes ? parseInt(savedDislikes, 10) : 0,
                    userFeedback: userFeedback || null
                });
            } catch (error) {
                console.error("Error loading feedback data:", error);
                setFeedbackData({ likes: 0, dislikes: 0, userFeedback: null });
            }
        };

        loadFeedbackData();
    }, [pageId, likesStorageKey, dislikesStorageKey, userFeedbackKey]);

    // Handle feedback action (like/dislike)
    const handleFeedback = (type: 'like' | 'dislike') => {
        if (isAnimating) return; // Prevent spam clicking

        // If user already gave this feedback, remove it
        if (feedbackData.userFeedback === type) {
            setIsAnimating(type);

            try {
                const newFeedbackData = {
                    ...feedbackData,
                    [type === 'like' ? 'likes' : 'dislikes']: Math.max(0, feedbackData[type === 'like' ? 'likes' : 'dislikes'] - 1),
                    userFeedback: null
                };

                setFeedbackData(newFeedbackData);

                // Persist to localStorage
                localStorage.setItem(likesStorageKey, newFeedbackData.likes.toString());
                localStorage.setItem(dislikesStorageKey, newFeedbackData.dislikes.toString());
                localStorage.removeItem(userFeedbackKey);

            } catch (error) {
                console.error("Error saving feedback data:", error);
                setFeedbackData(feedbackData);
            }

            setTimeout(() => setIsAnimating(null), 200);
            return;
        }

        // If user previously gave opposite feedback, adjust counts
        if (feedbackData.userFeedback && feedbackData.userFeedback !== type) {
            try {
                const oppositeType = feedbackData.userFeedback;
                const newFeedbackData = {
                    ...feedbackData,
                    [oppositeType === 'like' ? 'likes' : 'dislikes']: Math.max(0, feedbackData[oppositeType === 'like' ? 'likes' : 'dislikes'] - 1),
                    [type === 'like' ? 'likes' : 'dislikes']: feedbackData[type === 'like' ? 'likes' : 'dislikes'] + 1,
                    userFeedback: type
                };

                setFeedbackData(newFeedbackData);

                // Persist to localStorage
                localStorage.setItem(likesStorageKey, newFeedbackData.likes.toString());
                localStorage.setItem(dislikesStorageKey, newFeedbackData.dislikes.toString());
                localStorage.setItem(userFeedbackKey, type);

            } catch (error) {
                console.error("Error saving feedback data:", error);
                setFeedbackData(feedbackData);
            }
        } else {
            // First time feedback - show modal
            setModalState({ isOpen: true, type });
        }
    };

    // Handle modal feedback submission
    const handleModalSubmit = async (feedback: string) => {
        if (!modalState.type) return;

        const type = modalState.type;
        setIsAnimating(type);

        try {
            const newFeedbackData = {
                ...feedbackData,
                [type === 'like' ? 'likes' : 'dislikes']: feedbackData[type === 'like' ? 'likes' : 'dislikes'] + 1,
                userFeedback: type
            };

            setFeedbackData(newFeedbackData);

            // Persist to localStorage
            localStorage.setItem(likesStorageKey, newFeedbackData.likes.toString());
            localStorage.setItem(dislikesStorageKey, newFeedbackData.dislikes.toString());
            localStorage.setItem(userFeedbackKey, type);

            // Store feedback text if provided
            if (feedback.trim()) {
                const feedbackStorageKey = `feedback_${pageId}_${Date.now()}`;
                localStorage.setItem(feedbackStorageKey, JSON.stringify({
                    type,
                    feedback: feedback.trim(),
                    timestamp: new Date().toISOString()
                }));
            }

        } catch (error) {
            console.error("Error saving feedback data:", error);
            setFeedbackData(feedbackData);
        }

        setTimeout(() => setIsAnimating(null), 200);
    };

    // Handle modal close
    const handleModalClose = () => {
        setModalState({ isOpen: false, type: null });
    };

    // Format count for display (e.g., 1000 -> 1k)
    const formatCount = (count: number): string => {
        if (count >= 1000000) {
            return `${(count / 1000000).toFixed(1).replace(/\.0$/, "")}M`;
        }
        if (count >= 1000) {
            return `${(count / 1000).toFixed(1).replace(/\.0$/, "")}k`;
        }
        return count.toString();
    };

    return (
        <>
            <div className={cn(
                "flex flex-col sm:flex-row items-center justify-center sm:justify-between gap-3 sm:gap-4 py-4 sm:py-6",
                className
            )}>
                {/* Question */}
                <div className="text-center sm:text-left">
                    <h3 className="text-base sm:text-lg font-medium text-gray-900 dark:text-white mb-1">
                        Was this helpful?
                    </h3>
                    <p className="text-sm text-gray-600 dark:text-gray-400">
                        Let us know if this documentation helped you
                    </p>
                </div>

                {/* Feedback Buttons */}
                <div className="flex items-center gap-3">
                    {/* Like Button */}
                    <div className="flex items-center gap-2">
                        <Button
                            onClick={() => handleFeedback('like')}
                            variant={feedbackData.userFeedback === 'like' ? "default" : "outline"}
                            size="lg"
                            disabled={isAnimating !== null}
                            className={cn(
                                "group relative overflow-hidden transition-all duration-200",
                                feedbackData.userFeedback === 'like'
                                    ? "bg-green-500 hover:bg-green-600 text-white border-green-500"
                                    : "hover:border-green-300 hover:text-green-600 dark:hover:border-green-400 dark:hover:text-green-400",
                                isAnimating === 'like' && "scale-95"
                            )}
                        >
                            <ThumbsUp
                                className={cn(
                                    "h-4 w-4 sm:h-5 sm:w-5 transition-all duration-200",
                                    feedbackData.userFeedback === 'like' ? "fill-current" : "group-hover:fill-current",
                                    isAnimating === 'like' && "scale-110"
                                )}
                            />
                            <span className="text-sm sm:text-base font-medium">
                                {feedbackData.userFeedback === 'like' ? "Liked" : "Helpful"}
                            </span>

                            {/* Animation overlay */}
                            {isAnimating === 'like' && feedbackData.userFeedback === 'like' && (
                                <div className="absolute inset-0 bg-green-400 opacity-30 animate-pulse rounded-md"/>
                            )}
                        </Button>

                        {/* Like Counter */}
                        <div className={cn(
                            "px-2 py-1 rounded-full bg-gray-100 dark:bg-gray-800 border border-gray-200 dark:border-gray-700 transition-all duration-200 min-w-[40px] text-center",
                            isAnimating === 'like' && "scale-105"
                        )}>
                            <span className="text-xs font-semibold text-gray-700 dark:text-gray-300">
                                {formatCount(feedbackData.likes)}
                            </span>
                        </div>
                    </div>

                    {/* Dislike Button */}
                    <div className="flex items-center gap-2">
                        <Button
                            onClick={() => handleFeedback('dislike')}
                            variant={feedbackData.userFeedback === 'dislike' ? "default" : "outline"}
                            size="lg"
                            disabled={isAnimating !== null}
                            className={cn(
                                "group relative overflow-hidden transition-all duration-200",
                                feedbackData.userFeedback === 'dislike'
                                    ? "bg-red-500 hover:bg-red-600 text-white border-red-500"
                                    : "hover:border-red-300 hover:text-red-600 dark:hover:border-red-400 dark:hover:text-red-400",
                                isAnimating === 'dislike' && "scale-95"
                            )}
                        >
                            <ThumbsDown
                                className={cn(
                                    "h-4 w-4 sm:h-5 sm:w-5 transition-all duration-200",
                                    feedbackData.userFeedback === 'dislike' ? "fill-current" : "group-hover:fill-current",
                                    isAnimating === 'dislike' && "scale-110"
                                )}
                            />
                            <span className="text-sm sm:text-base font-medium">
                                {feedbackData.userFeedback === 'dislike' ? "Disliked" : "Not helpful"}
                            </span>

                            {/* Animation overlay */}
                            {isAnimating === 'dislike' && feedbackData.userFeedback === 'dislike' && (
                                <div className="absolute inset-0 bg-red-400 opacity-30 animate-pulse rounded-md"/>
                            )}
                        </Button>

                        {/* Dislike Counter */}
                        <div className={cn(
                            "px-2 py-1 rounded-full bg-gray-100 dark:bg-gray-800 border border-gray-200 dark:border-gray-700 transition-all duration-200 min-w-[40px] text-center",
                            isAnimating === 'dislike' && "scale-105"
                        )}>
                            <span className="text-xs font-semibold text-gray-700 dark:text-gray-300">
                                {formatCount(feedbackData.dislikes)}
                            </span>
                        </div>
                    </div>
                </div>
            </div>

            {/* Feedback Modal */}
            <FeedbackModal
                isOpen={modalState.isOpen}
                type={modalState.type || 'like'}
                onClose={handleModalClose}
                onSubmit={handleModalSubmit}
            />
        </>
    );
};

export default LikeFeature;