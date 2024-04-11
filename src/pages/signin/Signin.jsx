import { useNavigate } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { signin } from "@features/userSlice";

import Hero from "@containers/Hero";
import Text from "@elements/Text";
import Button from "@elements/Button";
import Input from "@elements/Input";

import IconGoogle from "@icons/icon-google.svg";
import IconVK from "@icons/icon-vk.svg";
import IconLinkedin from "@icons/icon-linkedin.svg";

export default function Signin() {
    return <Hero bg={"bg-black"} Banner={SigninBanner} />;
}

function SigninBanner() {
    const navigate = useNavigate();
    const dispatch = useDispatch();

    const users = useSelector((state) => state.user.users);

    const handleSignin = (e) => {
        e.preventDefault();
        const data = Object.fromEntries(new FormData(e.target));

        let success = users.find(
            (user) =>
                user.userEmail === data.userEmail &&
                user.userPassword === data.userPassword
        );

        if (!success) {
            alert("Пользователь не найден");
            return;
        }

        dispatch(signin({ ...success, token: true }));
        navigate(`/profile/${success.id}`);
        e.target.reset();
    };

    return (
        <div className="py-16 px-36 flex h-auto items-center justify-center">
            <div className="w-full h-full grid grid-cols-2">
                <div className="py-8 w-full h-full flex flex-col justify-center items-center bg-light-dark rounded-tl-medium rounded-bl-medium">
                    <Text type={"24-medium"} style={"mb-7"}>
                        Войти на аккаунт
                    </Text>

                    <div className="mb-9 flex items-center gap-11">
                        <img src={IconGoogle} alt="Icon Google" />
                        <img src={IconVK} alt="Icon VK" />
                        <img src={IconLinkedin} alt="Icon Linkedin" />
                    </div>

                    <Text type={"14"} style={"mb-6"}>
                        или введите email для регистрации
                    </Text>

                    <form
                        onSubmit={handleSignin}
                        className="flex flex-col items-center gap-5"
                    >
                        <Input
                            name={"userEmail"}
                            type={"email"}
                            placeholder={"E-mail"}
                        />

                        <Input
                            name={"userPassword"}
                            type={"password"}
                            placeholder={"Пароль"}
                        />

                        <Button style={"py-3"} type="submit">
                            <Text type={"18"}>Войти</Text>
                        </Button>
                    </form>
                </div>

                <div className="w-full h-full px-5 flex flex-col justify-center items-center bg-gray rounded-tr-medium rounded-br-medium">
                    <Text type={"24-semibold"} style={"text-center mb-4"}>
                        Регистрация
                    </Text>
                    <Text type={"18"} style={"text-center leading-8 mb-6"}>
                        Добро пожаловать обратно! Введите свои учетные данные,
                        чтобы получить доступ к вашему аккаунту и продолжить
                        использование нашей платформы.
                    </Text>
                    <Button style={"py-3"} to={"/signup"}>
                        Регистрация
                    </Button>
                </div>
            </div>
        </div>
    );
}
