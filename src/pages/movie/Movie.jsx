import PageLayout from "@layouts/PageLayout";
import Hero from "@containers/Hero";
import MovieBanner from "@components/MovieBanner";
import Trailer from "@components/Trailer";
import Cast from "@containers/Cast";
import Comments from "@containers/Comments";
import Scenes from "@containers/Scenes";

import MovieList from "@containers/MovieList";

import { relatedMovies } from "@data/movies";
import Interstellar from "@images/movie-interstellar.png";

import Russian from "@images/trailer-russian.png"; 
import Teaser from "@images/trailer-teaser.png"; 
import HD from "@images/trailer-hd.png"; 

import cast from "@data/cast";
import comments from "@data/comments";

import Scene1 from "@images/interstellar-scene1.png";
import Scene2 from "@images/interstellar-scene2.png";
import Scene3 from "@images/interstellar-scene3.png";
import Scene4 from "@images/interstellar-scene4.png";
import Scene5 from "@images/interstellar-scene5.png";

const movie = {
    title: "Интерстеллар",
    date: "2014",
    time: "168м",
    type: "18+",
    country: "США",
    genres: ["Драма", "Фантастика", "Приключения"],
    desc: "Когда засуха, пыльные бури и вымирание растений приводят человечество к продовольственному кризису, коллектив исследователей и учёных отправляется сквозь червоточину...",
    image: Interstellar
};

const Trailers = [
    { image: Russian, title: "Русский трейлер" },
    { image: Teaser, title: "Тизер" },
    { image: HD, title: "HD трейлер" },
];

export default function Movie() {
    return (
        <PageLayout>
            <Hero bg={"bg-movie"} Banner={MovieBanner} movie={movie} />
            <Trailer trailers={Trailers} />
            <Cast cast={cast} />
            <Comments comments={comments} />
            <Scenes scenes={{ Scene1, Scene2, Scene3, Scene4, Scene5 }} />
            <div className="mx-32">
                <h1 className="font-semibold text-2xl mb-12">Похожие фильмы</h1>

                <MovieList movies={relatedMovies} />
            </div>
        </PageLayout>
    );
}
