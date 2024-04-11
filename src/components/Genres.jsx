import { BtnRight } from "@elements/Button";
import Text from "@elements/Text";

import GenresObj from "@data/genres";

export default function Genres() {
    return (
        <div className="w-full px-[170px]">
            <Text type={"24-semibold"} style="mb-4">
                Смотрите фильмы, которые вам нравятся
            </Text>
            <Text style="text-grey mb-[60px]">
                На нашем сайте собрано огромное количество <br /> 
                фильмов и сериалов на любой вкус
            </Text>

            <div className="w-full flex items-center gap-[60px]">
                <div className="grid grid-cols-3 gap-10">
                    {GenresObj.map((genre) => (
                        <div key={genre.id} className="px-10 py-11 rounded-medium bg-light-dark flex items-center gap-8">
                            <div className="p-5 bg-black rounded-full">
                                <img src={genre.image} alt={genre.title} />
                            </div>
                            <div className="flex flex-col gap-[10px]">
                                <Text type={"18"}>{genre.title}</Text>
                                <Text style="text-red">{genre.desc}</Text>
                            </div>
                        </div>
                    ))}
                </div>
                <BtnRight />
            </div>
        </div>
    );
}
