import CastCard from "@cards/CastCard";
import { BtnRight } from "@elements/Button";
import Text from "@elements/Text";

export default function Cast({ cast }) {
    return (
        <div className="w-full h-auto px-60">
            <Text type={"24-semibold"} style="mb-24">Актеры и создатели</Text>

            <div className="flex items-center gap-12">
                <div className="w-full grid grid-cols-4 gap-9">
                    {cast.map(person => (
                        <CastCard {...person} key={person.id} />
                    ))}
                </div>
                <BtnRight />
            </div>
        </div>
    );
}
