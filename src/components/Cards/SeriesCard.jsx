import MoviePlay from "@icons/icon-movie-play.svg";
import Button from "@elements/Button";
import Text from "@elements/Text";

export default function SeriesCard({ serie, index }) {
    return (
        <div className="flex flex-col items-center gap-5">
            <div className="relative w-full">
                <img src={serie.image} className="w-full h-full" alt={serie.title} />

                <Button style={"py-5 absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2"}>
                    <img src={MoviePlay} alt="Play Icon" />
                </Button>
            </div>

            <Text type="18">{index}. {serie.title}</Text>
        </div>
    );
}
