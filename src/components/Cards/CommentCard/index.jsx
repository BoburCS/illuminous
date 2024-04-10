import Text from "@elements/Text";

export default function index({ name, content, date }) {
    return (
        <div className="p-8 bg-light-dark text-grey flex flex-col gap-4 rounded-medium">
            <Text>{name}</Text>
            <Text style="font-medium text-white leading-7">{content}</Text>
            <Text>{date}</Text>
        </div>
    );
}
