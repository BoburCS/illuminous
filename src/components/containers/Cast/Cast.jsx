import CastCard from "@cards/CastCard";
import { BtnRight } from "@elements/Button";

export default function Cast({ cast }) {
    return (
        <div className="w-full h-auto px-60">
            <h1 className="font-semibold text-2xl mb-24">Актеры и создатели</h1>

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
