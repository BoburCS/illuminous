import PageLayout from "@layouts/PageLayout";
import Hero from "@containers/Hero";
import Trailer from "@components/Trailer";
import Seasons from "@containers/Seasons";
import Cast from "@containers/Cast";
import Comments from "@containers/Comments";
import Scenes from "@containers/Scenes";
import MovieList from "@containers/MovieList";

import MovieBanner from "@components/MovieBanner";
import DrHouse from "@images/movie-dr-house.png";

import Iflix from "@images/trailer-iflix.png";
import Russian from "@images/trailer-russian-dr-house.png";
import ShowMax from "@images/trailer-showmax.png";

import { houseCast } from "@data/cast";
import { houseComments } from "@data/comments";

import Scene1 from "@images/house-scene-1.png";
import Scene2 from "@images/house-scene-2.png";
import Scene3 from "@images/house-scene-3.png";
import Scene4 from "@images/house-scene-4.png";
import Scene5 from "@images/house-scene-5.png";

import { relatedMovies } from "@data/movies";

const movie = {
    title: "Доктор Хаус",
    date: "2004",
    time: "43м",
    type: "16+",
    country: "США",
    genres: ["Драма", "Детектив"],
    desc: "Культовый сериал о рабочих буднях клинической больницы Принстон-Плейнсборо в штате Нью-Джерси. На протяжении своего существования у сериала вышло восемь сезонов",
    image: DrHouse
};

const trailers = [
    { image: Iflix, title: "Трейлер iflix" },
    { image: Russian, title: "Русский трейлер" },
    { image: ShowMax, title: "Трейлер Showmax" },
];

export default function TVSHOW() {
    return (
        <PageLayout>
            <Hero bg={"bg-tvshow"} Banner={MovieBanner} movie={movie} />
            <Trailer trailers={trailers} />
            <Seasons />
            <Cast cast={houseCast} />
            <Comments comments={houseComments} />
            <Scenes scenes={{ Scene1, Scene2, Scene3, Scene4, Scene5 }} />
            <div className="mx-32">
                <h1 className="font-semibold text-2xl mb-12">Похожие фильмы</h1>

                <MovieList movies={relatedMovies.slice(4, 8)} />
            </div>
        </PageLayout>
    );
}