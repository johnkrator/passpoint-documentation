import React, {useState, useEffect} from "react";
import {Heart} from "lucide-react";
import {Button} from "@/components/ui/button";
import {cn} from "@/lib/utils";

interface LikeFeatureProps {
    pageId: string;
    className?: string;
}

interface LikeData {
    count: number;
    userHasLiked: boolean;
}

const LikeFeature: React.FC<LikeFeatureProps> = ({pageId, className = ""}) => {
    const [likeData, setLikeData] = useState<LikeData>({count: 0, userHasLiked: false});
    const [isAnimating, setIsAnimating] = useState(false);

    // Storage keys for persistence
    const storageKey = `page_likes_${pageId}`;
    const userLikeKey = `user_liked_${pageId}`;

    // Load like data from localStorage on component mount
    useEffect(() => {
        const loadLikeData = () => {
            try {
                const savedCount = localStorage.getItem(storageKey);
                const userHasLiked = localStorage.getItem(userLikeKey) === "true";

                setLikeData({
                    count: savedCount ? parseInt(savedCount, 10) : 0,
                    userHasLiked
                });
            } catch (error) {
                console.error("Error loading like data:", error);
                // Fallback to default values if localStorage fails
                setLikeData({count: 0, userHasLiked: false});
            }
        };

        loadLikeData();
    }, [pageId, storageKey, userLikeKey]);

    // Handle like/unlike action
    const handleLike = () => {
        if (isAnimating) return; // Prevent spam clicking

        setIsAnimating(true);

        try {
            const newUserHasLiked = !likeData.userHasLiked;
            const newCount = newUserHasLiked ? likeData.count + 1 : likeData.count - 1;

            // Update state
            const newLikeData = {
                count: Math.max(0, newCount), // Ensure count doesn't go below 0
                userHasLiked: newUserHasLiked
            };

            setLikeData(newLikeData);

            // Persist to localStorage
            localStorage.setItem(storageKey, newLikeData.count.toString());
            localStorage.setItem(userLikeKey, newLikeData.userHasLiked.toString());

        } catch (error) {
            console.error("Error saving like data:", error);
            // Revert state if storage fails
            setLikeData(likeData);
        }

        // Reset animation after a short delay
        setTimeout(() => setIsAnimating(false), 200);
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
        <div className={cn(
            "flex flex-col sm:flex-row items-center justify-center sm:justify-start gap-3 sm:gap-4 py-4 sm:py-6",
            className
        )}>
            {/* Like Question */}
            <div className="text-center sm:text-left">
                <h3 className="text-base sm:text-lg font-medium text-gray-900 dark:text-white mb-1">
                    Was this helpful?
                </h3>
                <p className="text-sm text-gray-600 dark:text-gray-400">
                    Let us know if this documentation helped you
                </p>
            </div>

            {/* Like Button and Counter */}
            <div className="flex items-center gap-2 sm:gap-3">
                <Button
                    onClick={handleLike}
                    variant={likeData.userHasLiked ? "default" : "outline"}
                    size="lg"
                    disabled={isAnimating}
                    className={cn(
                        "group relative overflow-hidden transition-all duration-200",
                        likeData.userHasLiked
                            ? "bg-red-500 hover:bg-red-600 text-white border-red-500"
                            : "hover:border-red-300 hover:text-red-600 dark:hover:border-red-400 dark:hover:text-red-400",
                        isAnimating && "scale-95"
                    )}
                >
                    <Heart
                        className={cn(
                            "h-4 w-4 sm:h-5 sm:w-5 transition-all duration-200",
                            likeData.userHasLiked ? "fill-current" : "group-hover:fill-current",
                            isAnimating && "scale-110"
                        )}
                    />
                    <span className="text-sm sm:text-base font-medium">
                        {likeData.userHasLiked ? "Liked" : "Helpful"}
                    </span>

                    {/* Animation overlay for like action */}
                    {isAnimating && likeData.userHasLiked && (
                        <div className="absolute inset-0 bg-red-400 opacity-30 animate-pulse rounded-md"/>
                    )}
                </Button>

                {/* Like Counter */}
                <div className="flex flex-col items-center gap-1">
                    <div className={cn(
                        "px-2 sm:px-3 py-1 sm:py-1.5 rounded-full bg-gray-100 dark:bg-gray-800 border border-gray-200 dark:border-gray-700 transition-all duration-200",
                        isAnimating && "scale-105"
                    )}>
                        <span className="text-xs sm:text-sm font-semibold text-gray-700 dark:text-gray-300">
                            {formatCount(likeData.count)}
                        </span>
                    </div>
                    <span className="text-xs text-gray-500 dark:text-gray-400">
                        {likeData.count === 1 ? "person" : "people"} found this helpful
                    </span>
                </div>
            </div>
        </div>
    );
};

export default LikeFeature;
