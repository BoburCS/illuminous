import Text from "@elements/Text";

export default function Trailer({ trailers }) {
    return (
        <div className="px-60 flex flex-col items-center justify-center">
            <Text type={"24-semibold"} style="mb-12 self-start">Трейлеры</Text>
            
            <div className="grid grid-cols-3 gap-8">
                {trailers.map((trailer, index) => (
                    <div className="flex flex-col items-center gap-5 hover:scale-105 duration-500 cursor-pointer" key={index}>
                        <img src={trailer.image} alt={trailer.title} />
                        <Text type={"18"}>{trailer.title}</Text>
                    </div>
                ))}
            </div>
        </div>
    );
}
