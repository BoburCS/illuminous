import Hero from "@containers/Hero";
import Text from "@elements/Text";
import Button from "@elements/Button";
import Input from "@elements/Input";

import IconGoogle from "@icons/icon-google.svg";
import IconVK from "@icons/icon-vk.svg";
import IconLinkedin from "@icons/icon-linkedin.svg";

export default function Login() {
    return <Hero bg={"bg-black"} Banner={LoginBanner} />;
}

export function LoginBanner() {
    return (
        <div className="py-16 px-36 flex flex-grow items-center justify-center">
            <div className="w-full h-full grid grid-cols-2">
                <div className="w-full h-full flex flex-col justify-center items-center bg-gray rounded-tl-medium rounded-bl-medium">
                    <Text type={"24-semibold"} style={"text-center mb-4"}>
                        Регистрация
                    </Text>
                    <Text type={"18"} style={"text-center leading-8 mb-6"}>
                        Зарегистрируйтесь, чтобы получить доступ ко всем
                        преимуществам нашей платформы. Уже есть аккаунт?
                    </Text>
                    <Button style={"py-3"}>Войти</Button>
                </div>

                <div className="w-full h-full flex flex-col justify-center items-center bg-light-dark rounded-tr-medium rounded-br-medium">
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
                    <form className="flex flex-col items-center gap-5">
                        <Input type={"text"} placeholder={"Логин"} />
                        <Input type={"email"} placeholder={"E-mail"} />
                        <Input type={"password"} placeholder={"Пароль"} />
                        <Button style={"py-3"} type="submit">
                            <Text type={"18"}>Зарегистрироваться</Text>
                        </Button>
                    </form>
                </div>
            </div>
        </div>
    );
}
