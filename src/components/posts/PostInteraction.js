import { toPersianDigits } from "@/utils/toPersianDigits";
import {
    BookmarkIcon,
    ChatBubbleBottomCenterTextIcon,
    HeartIcon,
} from "@heroicons/react/24/outline";
import {
    HeartIcon as SolidHeartIcon,
    BookmarkIcon as SolidBookmarkIcon,
} from "@heroicons/react/24/solid";

const PostInteraction = ({ blog, isSmall, className }) => {
    const iconSize = isSmall ? "h-4 w-4" : "h-6 w-6";
    const numberSize = isSmall ? "text-xs" : "text-base";

    return (
        <div
            className={`flex items-center ${
                isSmall ? "gap-x-2" : "gap-x-4"
            } ${className}`}
        >
            <button className="bg-gray-200 p-0.5 rounded flex items-center gap-x-1">
                <ChatBubbleBottomCenterTextIcon
                    className={`${iconSize} stroke-gray-500`}
                />
                <span
                    className={`${numberSize} text-gray-500 font-bold leading-3`}
                >
                    {toPersianDigits(blog.commentsCount || 0)}
                </span>
            </button>
            <button className="bg-red-100 p-0.5 rounded flex items-center gap-x-1 text-red-500 hover:bg-red-500 hover:text-red-100 transition-all">
                {blog.isLiked ? (
                    <SolidHeartIcon className={`${iconSize} fill-current`} />
                ) : (
                    <HeartIcon className={`${iconSize} stroke-current`} />
                )}
                <span className={`${numberSize} block font-bold leading-3`}>
                    {toPersianDigits(blog.likeCount || 0)}
                </span>
            </button>
            <button className="bg-blue-100 text-blue-500 p-0.5 rounded flex items-center gap-x-1 hover:bg-blue-500 hover:text-white transition-all">
                {blog.isBookmarked ? (
                    <SolidBookmarkIcon className={`${iconSize} fill-current`} />
                ) : (
                    <BookmarkIcon className={`${iconSize} stroke-current`} />
                )}
            </button>
        </div>
    );
};

export default PostInteraction;
