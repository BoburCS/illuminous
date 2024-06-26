import Button from "@elements/Button";

import Play from "@icons/icon-play.svg";
import Bookmark from "@icons/icon-bookmark.svg";

export default function MovieBanner({ movie }) {
    const { title, image, date, time, type, country, genres, desc } = movie;
    return (
        <div className="py-16 flex items-center justify-center gap-32">
            <div className="w-[300px]">
                <img src={image} alt={title} />
            </div>
            <div className="w-[580px]">
                <h2 className="font-semibold text-3xl mb-4">{title}</h2>
                <div className="font-medium text-base mb-5 flex gap-4">
                    <span>{date}</span>
                    <span>{time}</span>
                    <span>{type}</span>
                    <span>{country}</span>
                    {genres.map((genre, index) => (
                        <span key={index}>{genre}</span>
                    ))}
                </div>
                <p className="break-words font-normal leading-[30px] text-base mb-9">
                    {desc}
                </p>
                <div className="flex gap-7">
                    <Button style={"py-3"}>
                        Смотреть по подписке
                        <img src={Play} alt="Play Icon" />
                    </Button>
                    <Button style={"py-3"}>
                        В избранное
                        <img src={Bookmark} alt="Bookmark icon" />
                    </Button>
                </div>
            </div>
        </div>
    );
}
