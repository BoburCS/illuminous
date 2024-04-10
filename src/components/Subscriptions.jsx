import Button from "@elements/Button";
import Text from "@elements/Text";
import subs from "@data/subscriptions";

export default function Subscriptions() {
    return (
        <div className="text-white px-[85px] mb-[150px]">
            <Text type={"20"}>
                Выберите подписку которая подходит Вам
            </Text>
            <Text style="text-grey text-center mb-[60px]">
                Мы представляем три варианта подписки, которые <br /> подойдут
                вам по ценеи потребностям
            </Text>

            <div className="w-full grid grid-cols-3 gap-9">
                {subs.map(sub => (
                    <div className="py-12 px-11 w-full bg-light-dark rounded-medium flex flex-col" key={sub.id}>
                        <Text type={"20"}>{sub.title}</Text>
                        <Text style="text-center text-grey mb-10">{sub.desc}</Text>
                        <Text type={"30"} style="text-center text-red mb-12">{sub.price}</Text>
                        <ul className="ml-4 mb-[56px] text-grey flex flex-col gap-9">
                            {sub.benefits.map((benefit, index) => (
                                <li className="flex items-center gap-5" key={index}>
                                    <div className="w-[9px] h-[9px] bg-red rounded-full"></div>
                                    {benefit}
                                </li>
                            ))}
                        </ul>
                        <Button style={"self-center py-3 font-medium"}>Попробовать</Button>
                    </div>
                ))}
            </div>
        </div>
    );
}
