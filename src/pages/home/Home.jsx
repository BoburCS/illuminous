import PageLayout from "@layouts/PageLayout";
import Hero from "@containers/Hero";
import Banner from "./Banner";
import Search from "@components/Search";
import Genres from "@components/Genres";
import News from "@components/News";
import Movie from "@components/Movie";
import Benefits from "@components/Benefits";
import Subscriptions from "@components/Subscriptions";

const bg = [
    {
        image: "bg-hero",
        title: "Джокер",
        desc: "Готэм. Комик Артур Флек живет с больной матерью, которая с детства учит его «ходить с улыбкой»",
    },
    {
        image: "bg-movie",
        title: "Интерстеллар",
        desc: "Группа исследователей отправляется в космос на поиски нового дома для человечества",
    },
    {
        image: "bg-sherlock",
        title: "Шерлок Холмс",
        desc: "Самый известный сыщик всех времен и народов, Шерлок Холмс, вновь в деле",
    },
    {
        image: "bg-oppenheimer",
        title: "Оппенгеймер",
        desc: "Фильм о создании атомной бомбы и жизни ее создателя Роберта Оппенгеймера",
    },
];

export default function Home() {
    return (
        <PageLayout>
            <Hero bg={bg} Banner={Banner} />
            <Search />
            <Genres />
            <News />
            <Movie />
            <Benefits />
            <Subscriptions btns={true} />
        </PageLayout>
    );
}
