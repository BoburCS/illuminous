import { useState, useEffect } from "react";
import Header from "@containers/Header";

export default function Navbar({ bg, Banner, movie }) {
    const [current, setCurrent] = useState(0);
    const [backgroundImage, setBackgroundImage] = useState(null);

    useEffect(() => {
        if (Array.isArray(bg)) {
            setBackgroundImage(bg[current].image);
        } else {
            setBackgroundImage(bg);
        }
    }, [bg, current]);

    const swiper = () => {
        if (current < bg.length - 1) {
            setCurrent(current + 1);
        } else {
            setCurrent(0);
        }
    };

    useEffect(() => {
        const interval = setInterval(() => {
            swiper();
        }, 5000);

        return () => clearInterval(interval);
    }, [current]);

    return (
        <div className={`w-full min-h-screen ${backgroundImage} bg-no-repeat bg-cover flex flex-col`}>
            <Header />
            <Banner
                movie={movie ? movie : null}
                bg={bg}
                current={current}
                swiper={swiper}
            />
        </div>
    );
}
