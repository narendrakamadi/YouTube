import { ThumbsUp, ThumbsDown } from "lucide-react";

const Comment = () => {
    const comments = [
        {
            id: 1,
            name: "Rahul Sharma",
            text: "Amazing video! Very well explained 👏",
            time: "2 days ago",
        },
        {
            id: 2,
            name: "Priya Patel",
            text: "This helped me understand the concept clearly. Thanks!",
            time: "1 week ago",
        },
        {
            id: 3,
            name: "Amit Verma",
            text: "Can you make a tutorial on advanced React topics?",
            time: "3 weeks ago",
        },
        {
            id: 4,
            name: "Amit Verma",
            text: "Can you make a tutorial on advanced React topics?",
            time: "3 weeks ago",
        },
        {
            id: 5,
            name: "Amit Verma",
            text: "Can you make a tutorial on advanced React topics?",
            time: "3 weeks ago",
        },
        {
            id: 6,
            name: "Amit Verma",
            text: "Can you make a tutorial on advanced React topics?",
            time: "3 weeks ago",
        },
        {
            id: 7,
            name: "Amit Verma",
            text: "Can you make a tutorial on advanced React topics?",
            time: "3 weeks ago",
        },
        {
            id: 8,
            name: "Amit Verma",
            text: "Can you make a tutorial on advanced React topics?",
            time: "3 weeks ago",
        },
    ];

    return (
        <div className="w-full">
            {/* Comment Input */}
            <div className="flex gap-3 mb-6">
                <img
                    src="https://i.pravatar.cc/40"
                    alt="user"
                    className="w-10 h-10 rounded-full"
                />

                <input
                    type="text"
                    placeholder="Add a comment..."
                    className="flex-1 border-b border-gray-300 focus:border-black outline-none text-sm py-2"
                />
            </div>

            {/* Comment List */}
            <div className="space-y-6">
                {comments.map((comment) => (
                    <div key={comment.id} className="flex gap-3">
                        <img
                            src="https://i.pravatar.cc/40"
                            alt="user"
                            className="w-10 h-10 rounded-full"
                        />

                        <div className="flex-1">
                            <div className="flex items-center gap-2 text-sm">
                                <span className="font-semibold">
                                    {comment.name}
                                </span>
                                <span className="text-gray-500">
                                    {comment.time}
                                </span>
                            </div>

                            <p className="text-sm mt-1">{comment.text}</p>

                            {/* Actions */}
                            <div className="flex items-center gap-4 mt-2 text-gray-600">
                                <button className="flex items-center gap-1 hover:text-black">
                                    <ThumbsUp size={16} />
                                    <span className="text-xs">Like</span>
                                </button>

                                <button className="flex items-center gap-1 hover:text-black">
                                    <ThumbsDown size={16} />
                                    <span className="text-xs">Dislike</span>
                                </button>

                                <button className="text-xs hover:text-black">
                                    Reply
                                </button>
                            </div>
                        </div>
                    </div>
                ))}
            </div>
        </div>
    );
};
export default Comment;
