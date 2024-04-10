import Button from "@elements/Button";
import Text from "@elements/Text";

import Play from "@icons/icon-play.svg";
import RightArrow from "@icons/icon-right.svg";

const Banners = [
    { id: "1", active: true },
    { id: "2", active: false },
    { id: "3", active: false },
    { id: "4", active: false },
];

export default function Banner() {
    return (
        <div className="px-12 py-32 flex items-center justify-between">
            <div className="text-white font-montserrat ml-[120px]">
                <Text style="text-grey mb-6">
                    _______ Выбор Illuminous
                </Text>
                <Text type="40" style={"mb-4"}>Джокер</Text>
                <Text type="18" style={"mb-7"}>
                    Готэм. Комик Артур Флек живет с больной матерью, <br />
                    которая с детства учит его «ходить с улыбкой»
                </Text>
                <Button style={"font-medium py-[14.5px]"}>
                    Смотреть
                    <img src={Play} alt="Movie Play Icon" />
                </Button>
            </div>

            <div>
                <button>
                    <img src={RightArrow} alt="Right Arrow Icon" />
                </button>
            </div>

            <div className="ml-32 flex items-end gap-4 absolute bottom-10">
                {Banners.map((banner) => (
                    <div
                        className={
                            banner.active
                                ? "w-1 h-8 rounded-full bg-red"
                                : "w-1 h-5 rounded-full bg-white"
                        }
                        key={banner.id}
                    ></div>
                ))}
            </div>
        </div>
    );
}
