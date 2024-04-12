import { useEffect } from "react";
import { useParams, useNavigate } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";

import PageLayout from "@layouts/PageLayout";
import Hero from "@containers/Hero";
import Subscriptions from "@components/Subscriptions";
import Button from "@elements/Button";
import Text from "@elements/Text";

import Cart from "@icons/icon-shopping-cart.svg";
import Time from "@icons/icon-time.svg";
import Heart from "@icons/icon-heart.svg";
import ListText from "@icons/icon-list-text.svg";

const QuickLinks = [
    { id: "99", icon: Cart, title: "Покупки" },
    { id: "100", icon: Time, title: "История" },
    { id: "101", icon: Heart, title: "Избранное" },
    { id: "102", icon: ListText, title: "Мои подписки" },
];

export default function Profile() {
    return (
        <PageLayout>
            <Hero bg={"bg-black"} Banner={ProfileBanner} />
            <Subscriptions btns={true} />
        </PageLayout>
    );
}

function ProfileBanner() {
    const dispatch = useDispatch();
    const navigate = useNavigate();
    const { id } = useParams();
    const user = useSelector((state) => state.user.user);

    useEffect(() => {
        if (user?.id !== id) {
            navigate("/signup");
        }
    }, [id]);

    return (
        <div className="pt-20 px-32 flex flex-col h-auto items-center justify-center gap-[150px]">
            <div className="w-full flex items-center justify-between">
                <Text type={"32"}>{user?.userName}</Text>
                <Button>Редактировать профиль</Button>
            </div>

            <div className="w-full grid grid-cols-4 gap-[60px]">
                {QuickLinks.map((link) => (
                    <div
                        className="pt-8 pb-11 flex flex-col items-center justify-center cursor-pointer gap-5 rounded-medium bg-light-dark"
                        key={link.id}
                    >
                        <img src={link.icon} alt={link.title} />
                        <Text type={"18"}>{link.title}</Text>
                    </div>
                ))}
            </div>
        </div>
    );
}
