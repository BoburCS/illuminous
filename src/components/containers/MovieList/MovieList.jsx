import MovieCard from "@cards/MovieCard";
import { BtnRight } from "@elements/Button";

export default function MovieList({ movies }) {
    return (
        <div className="w-full flex items-center gap-20">
            <div className="w-full grid grid-cols-4 gap-11">
                {movies.map(movie => (
                    <MovieCard {...movie} key={movie.id} />
                ))}
            </div>
            <BtnRight />
        </div>
    );
}
