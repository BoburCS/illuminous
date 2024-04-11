import Header from "@containers/Header";

export default function Navbar({ bg, Banner, movie }) {
    return (
        <div className={`w-full min-h-screen ${bg} bg-no-repeat bg-cover flex flex-col`}>
            <Header />
            <Banner movie={movie ? movie : null} />
        </div>
    );
}
