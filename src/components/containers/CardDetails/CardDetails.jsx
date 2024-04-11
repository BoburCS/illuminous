import Button from "@elements/Button";
import Text from "@elements/Text";
import Input from "@elements/Input";

export default function CardDetails() {
    return (
        <div className="w-full h-auto flex flex-col items-center justify-center">
            <Text type={"24-semibold"} style={"mb-[60px]"}>
                Введите данные карты
            </Text>

            <div className="flex flex-col gap-6 mb-10">
                
                <Input
                    name={"userCardNumber"}
                    type={"number"}
                    placeholder={"Номер карты"}
                    style={"w-[550px]"}
                />

                <div className="w-[550px] flex items-center gap-5">

                    <Input
                        name={"userCardDate"}
                        type={"text"}
                        placeholder={"мм/гг"}
                        style={"w-full"}
                    />

                    <Input
                        name={"userCardCVV"}
                        type={"number"}
                        placeholder={"cvv"}
                        style={"w-full"}
                    />

                </div>
            </div>

            <Button style={"py-3"}>Оплатить</Button>
        </div>
    );
}
