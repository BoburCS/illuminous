import CommentCard from "@cards/CommentCard";
import { BtnRight } from "@elements/Button";
import Text from "@elements/Text";

export default function index({ comments }) {
    return (
        <div className="w-full h-auto px-40">
            <Text type={"24-semibold"} style="mb-24">Отзывы</Text>

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
