import { NavLink } from "react-router-dom";
import { useSelector } from "react-redux";

import Logo from "@icons/icon-logo.svg";
import Profile from "@icons/icon-profile.svg";

const navLinks = [
    { title: "Главная", link: "" },
    { title: "Фильмы", link: "movie" },
    { title: "Сериалы", link: "tvshow" },
    { title: "Мультфильмы", link: "cartoons" },
];

export default function Header() {
    const user = useSelector((state) => state.user.user);

    return (
        <header className="px-12 py-8 w-full">
            <nav className="flex items-center justify-between">
                <div className="flex items-center gap-16">
                    <NavLink to={"/"}>
                        <img src={Logo} alt="Illiminous Logo" />
                    </NavLink>

                    <ul className="flex items-start gap-10">
                        {navLinks.map((navlink, index) => (
                            <li key={index}>
                                <NavLink
                                    to={`/${navlink.link}`}
                                    className="text-white text-base font-poppins font-normal"
                                >
                                    {navlink.title}
                                </NavLink>
                            </li>
                        ))}
                    </ul>
                </div>

                <div>
                    <NavLink to={user ? `/profile/${user.id}` : "/signup"}>
                        <img
                            src={Profile}
                            alt="Profile Icon"
                            className="cursor-pointer"
                        />
                    </NavLink>
                </div>
            </nav>
        </header>
    );
}
