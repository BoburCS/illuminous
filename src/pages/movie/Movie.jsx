import Hero from "@containers/Hero";
import PageLayout from "@layouts/PageLayout";
import MovieBanner from "@components/MovieBanner";
import Trailer from "@components/Trailer";
import Cast from "@containers/Cast";
import Comments from "@containers/Comments";

export default function Movie() {
    return (
        <PageLayout>
            <Hero bg={"bg-movie"} Banner={MovieBanner}/>
            <Trailer />
            <Cast />
            <Comments />
            <div></div>
        </PageLayout>
    );
}
