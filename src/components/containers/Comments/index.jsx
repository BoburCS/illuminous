import CommentCard from "@cards/CommentCard";
import { BtnRight } from "@elements/Button";
import comments from "@data/comments";

export default function index() {
    return (
        <div className="w-full h-auto px-40">
            <h1 className="font-semibold text-2xl mb-24">Отзывы</h1>

            <div className="flex items-center gap-12">
                <div className="grid grid-cols-3 gap-7">
                    {comments.map(comment => (
                        <CommentCard {...comment} key={comment.id} />
                    ))}
                </div>
                <BtnRight />
            </div>
        </div>
    );
}
