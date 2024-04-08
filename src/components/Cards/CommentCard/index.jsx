
export default function index({ name, content, date }) {
    return (
        <div className="p-8 bg-light-dark flex flex-col gap-4 rounded-medium">
            <h4 className="text-grey font-normal text-base">{name}</h4>
            <p className="font-medium text-base leading-7">{content}</p>
            <span className="text-grey font-normal text-base">{date}</span>
        </div>
    );
}
