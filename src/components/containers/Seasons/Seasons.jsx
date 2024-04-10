import { useState } from "react";
import TabPanel from "@elements/TabPanel";
import SeriesCard from "@cards/SeriesCard";
import { BtnRight } from "@elements/Button";

import { drHouseSeries } from "@data/series";

const InitialTabs = [
    { id: "1", title: "1 cезон", active: true },
    { id: "2", title: "2 cезон", active: false },
    { id: "3", title: "3 cезон", active: false },
    { id: "4", title: "4 cезон", active: false },
    { id: "5", title: "5 cезон", active: false },
    { id: "6", title: "6 cезон", active: false },
    { id: "7", title: "7 cезон", active: false },
    { id: "8", title: "8 cезон", active: false },
];

export default function Seasons() {
    const [Tabs, setTabs] = useState(InitialTabs);

    const handleTabClick = (id) => {
        setTabs(Tabs.map(tab => tab.id === id ? { ...tab, active: true } : { ...tab, active: false }));
    }

    return (
        <div className="mx-[185px]">
            <TabPanel tabs={Tabs} handleTabClick={handleTabClick} />

            <div className="flex items-center gap-20">
                <div className="grid grid-cols-4 gap-12">
                    {drHouseSeries.slice(0, 4).map((serie, index) => (
                        <SeriesCard serie={serie} index={index + 1} key={serie.id} />
                    ))}
                </div>

                <BtnRight />
            </div>
        </div>
    );
}
