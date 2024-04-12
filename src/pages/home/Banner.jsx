import Button from "@elements/Button";
import Text from "@elements/Text";

import Play from "@icons/icon-play.svg";
import RightArrow from "@icons/icon-right.svg";

export default function Banner({ bg, current, swiper }) {
    return (
        <div className="px-12 py-32 flex items-center justify-between">
            <div className="ml-[120px]">

                <Text style="text-grey mb-6">
                    _______ Выбор Illuminous
                </Text>

                <Text type="40" style={"mb-4"}>
                    {bg[current].title}
                </Text>

                <div className="max-w-[500px] mb-7">
                    <Text type="18">
                        {bg[current].desc}
                    </Text>
                </div>
                
                <Button style={"font-medium py-[14.5px]"}>
                    Смотреть
                    <img src={Play} alt="Movie Play Icon" />
                </Button>

            </div>

            <div>
                <button onClick={swiper}>
                    <img src={RightArrow} alt="Right Arrow Icon" />
                </button>
            </div>

            <div className="ml-32 flex items-end gap-4 absolute bottom-10">
                {bg.map((banner, index) => (
                    <div
                        className={
                            current === index
                                ? "w-1 h-8 rounded-full bg-red"
                                : "w-1 h-5 rounded-full bg-white"
                        }
                        key={index}
                    ></div>
                ))}
            </div>
        </div>
    );
}
