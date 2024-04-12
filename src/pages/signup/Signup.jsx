import { useNavigate } from "react-router-dom";
import { useDispatch } from "react-redux";
import { nanoid } from "nanoid";
import { signup } from "@features/userSlice";

import { useValidate } from "../../validation/signupValidation";

import Hero from "@containers/Hero";
import Text from "@elements/Text";
import Button from "@elements/Button";
import Input from "@elements/Input";

import IconGoogle from "@icons/icon-google.svg";
import IconVK from "@icons/icon-vk.svg";
import IconLinkedin from "@icons/icon-linkedin.svg";

export default function Signup() {
    return <Hero bg={"bg-black"} Banner={SignupBanner} />;
}

function SignupBanner() {
    const navigate = useNavigate();
    const dispatch = useDispatch();

    const handleSignup = (e) => {
        e.preventDefault();
        const data = Object.fromEntries(new FormData(e.target));

        if (!useValidate(data)) {
            return;
        }

        const newUser = { ...data, id: nanoid(5), token: false };
        dispatch(signup(newUser));
        navigate("/signin");
        e.target.reset();
    };

    return (
        <div className="py-16 px-36 flex h-auto items-center justify-center">
            <div className="w-full h-full grid grid-cols-2">
                <div className="w-full h-full flex flex-col justify-center items-center bg-gray rounded-tl-medium rounded-bl-medium">
                    <Text type={"24-semibold"} style={"text-center mb-4"}>
                        Регистрация
                    </Text>
                    <Text type={"18"} style={"text-center leading-8 mb-6"}>
                        Зарегистрируйтесь, чтобы получить доступ ко всем
                        преимуществам нашей платформы. Уже есть аккаунт?
                    </Text>
                    <Button style={"py-3"} to={"/signin"}>
                        Войти
                    </Button>
                </div>

                <div className="py-8 w-full h-full flex flex-col justify-center items-center bg-light-dark rounded-tr-medium rounded-br-medium">
                    <Text type={"24-medium"} style={"mb-7"}>
                        Создать аккаунт
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
                        onSubmit={handleSignup}
                        className="flex flex-col items-center gap-5"
                    >
                        <Input
                            name={"userName"}
                            type={"text"}
                            placeholder={"Логин"}
                        />

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
                            <Text type={"18"}>Зарегистрироваться</Text>
                        </Button>
                    </form>
                </div>
            </div>
        </div>
    );
}
