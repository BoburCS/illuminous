import { useState } from "react";
import MovieList from "@containers/MovieList";
import TabPanel from "@elements/TabPanel";

import Movies from "@data/movies";

const InitialTabs = [
    { id: "1", title: "Новинки", active: true },
    { id: "2", title: "Популярное", active: false },
    { id: "3", title: "Смотрят сейчас", active: false },
    { id: "4", title: "Рекомендации", active: false },
    { id: "5", title: "Топ 10", active: false },
    { id: "6", title: "Скоро на Illuminous", active: false },
];

export default function News() {
    const [Tabs, setTabs] = useState(InitialTabs);

    const handleTabClick = (id) => {
        setTabs(Tabs.map(tab => tab.id === id ? { ...tab, active: true } : { ...tab, active: false }));
    }

    return (
        <div className="text-white font-montserrat w-full">
            <TabPanel tabs={Tabs} handleTabClick={handleTabClick} />

            <MovieList movies={Movies} /> 
        </div>
    );
}
