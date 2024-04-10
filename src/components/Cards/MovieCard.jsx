import Text from "@elements/Text";

export default function MovieCard({ image, title, score, release }) {
    return (
        <div className="font-montserrat w-auto h-auto flex flex-col relative cursor-pointer hover:scale-105 duration-500">
            <img src={image} alt={title} className="mb-5" />
            <Text type={"18-semibold"} style="mb-[10px]">{title}</Text>
            <Text>{release}</Text>
            <div className="bg-red rounded-bl-[5px] rounded-br-[5px] absolute top-0 left-5 px-[2px] py-[10px]">
                <Text type={"13"} style="w-8 text-center">
                    {score}
                </Text>
            </div>
        </div>
    );
}
