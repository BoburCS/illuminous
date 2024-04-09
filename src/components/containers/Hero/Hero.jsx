import Header from "@containers/Header";

export default function Navbar({ bg, Banner, movie }) {
    return (
        <div className={`w-full h-screen ${bg} bg-no-repeat bg-cover`}>
            <Header />
            <Banner movie={movie ? movie : null} />
        </div>
    );
}
