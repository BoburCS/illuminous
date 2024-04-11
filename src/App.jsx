import { lazy, Suspense } from "react";
import { Routes, Route } from "react-router-dom";
import MainLayout from "@layouts/MainLayout";
import Footer from "@containers/Footer";

const Signup = lazy(() => import("@pages/signup"));
const Signin = lazy(() => import("@pages/signin"));
const Home = lazy(() => import("@pages/home"));
const Movie = lazy(() => import("@pages/movie"));
const TvShow = lazy(() => import ("@pages/tvshow"));
const Subscriptions = lazy(() => import("@pages/subscriptions"));
const Profile = lazy(() => import("@pages/profile"));

export default function App() {
    return (
        <>
            <MainLayout>
                <Suspense fallback={<h1>Loading...</h1>}>
                    <Routes>
                        <Route exact path="/signup" element={<Signup />} />
                        <Route exact path="/signin" element={<Signin />} />
                        <Route exact path="/" element={<Home />} />
                        <Route exact path="/movie" element={<Movie />} />
                        <Route exact path="/tvshow" element={<TvShow />} />
                        <Route exact path="/subscriptions" element={<Subscriptions />} />
                        <Route exact path="/profile/:id" element={<Profile />} />

                        <Route path="*" element={<h1 className="text-white">404! Not Found</h1>} />
                    </Routes>
                </Suspense>
                <Footer />
            </MainLayout>
        </>
    );
}
