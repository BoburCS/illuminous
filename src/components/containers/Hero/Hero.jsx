import Header from "@containers/Header";

export default function Navbar({ bg, Banner }) {
    return (
        <div className={`w-full h-screen ${bg} bg-no-repeat bg-cover`}>
            <Header />
            <Banner />
        </div>
    );
}
