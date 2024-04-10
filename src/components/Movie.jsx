import Button from "@elements/Button";
import Text from "@elements/Text";

import Interstellar from "@images/movie-interstellar.png";

const InterstellarGenres = ["Драма", "Фантастика", "Приключения", "16+"];

export default function Movie() {
    return (
        <div className="text-white pl-32 pr-24 w-full h-auto">
            <div className="pl-[300px] w-full h-[560px] rounded-medium bg-light-dark flex flex-col justify-center relative">
                <img
                    src={Interstellar}
                    alt="Interstellar"
                    className="absolute left-[-5rem] top-1/2 transform -translate-y-1/2"
                />

                <Text type={"36"} style="mb-4 flex items-center gap-7">
                    Интерстеллар
                    <Text type={"24-medium"}>2014</Text>
                </Text>
                <div className="mb-6 w-full flex gap-4">
                    {InterstellarGenres.map((genre) => (
                        <Text style="text-red" key={genre}>
                            {genre}
                        </Text>
                    ))}
                </div>
                <Text style="mb-7 leading-7">
                    Когда засуха, пыльные бури и вымирание растений <br />{" "}
                    приводят человечество к продовольственному <br /> кризису,
                    коллектив исследователей и учёных...
                </Text>
                <Button style={"self-start"}>Смотреть</Button>
            </div>
        </div>
    );
}
