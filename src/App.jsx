import { lazy, Suspense } from "react";
import { Routes, Route } from "react-router-dom";
import MainLayout from "@layouts/MainLayout";
import Footer from "@containers/Footer";

const Login = lazy(() => import("@pages/login"));
const Home = lazy(() => import("@pages/home"));
const Movie = lazy(() => import("@pages/movie"));
const TvShow = lazy(() => import ("@pages/tvshow"));

export default function App() {
    return (
        <>
            <MainLayout>
                <Suspense fallback={<h1>Loading...</h1>}>
                    <Routes>
                        <Route exact path="/login" element={<Login />} />
                        <Route exact path="/" element={<Home />} />
                        <Route exact path="/movie" element={<Movie />} />
                        <Route exact path="/tvshow" element={<TvShow />} />

                        <Route path="*" element={<h1 className="text-white">404! Not Found</h1>} />
                    </Routes>
                </Suspense>
                <Footer />
            </MainLayout>
        </>
    );
}
