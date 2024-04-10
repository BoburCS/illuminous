import Button from "@elements/Button";
import Text from "@elements/Text";

import Call from "@icons/icon-call.svg";
import Mail from "@icons/icon-mail.svg";
import Telegram from "@icons/icon-telegram.svg";

const links = ["О нас", "Блог", "Вакансии", "Акции"];
const contacts = [
    "Вопросы и ответы",
    "Список устройств",
    "Дистрибьютерам",
    "Контакты",
];
const socialLinks = [Call, Mail, Telegram];

export default function Footer() {
    return (
        <footer className="text-white bg-light-dark pt-12 pb-3">
            <div className="w-full flex justify-center gap-[200px] mb-12">
                <div className="flex flex-col gap-5">
                    <Text type={"18"}>Illuminous</Text>
                    <ul className="flex flex-col gap-5">
                        {links.map((link, index) => (
                            <li className="font-normal text-base" key={index}>
                                <a href="">{link}</a>
                            </li>
                        ))}
                    </ul>
                </div>

                <div className="flex flex-col gap-5">
                    <Text type={"18"}>Помощь</Text>
                    <ul className="flex flex-col gap-5">
                        {contacts.map((contact, index) => (
                            <li className="font-normal text-base" key={index}>
                                <a href="">{contact}</a>
                            </li>
                        ))}
                    </ul>
                </div>

                <div>
                    <Text type={"18"} style={"mb-4"}>
                        Поддержка
                    </Text>
                    <Text style="mb-4">
                        Мы всегда готовы вам помочь. <br /> Наши операторы
                        онлайн 24/7
                    </Text>
                    <div className="mb-6 flex gap-5">
                        {socialLinks.map((sl, index) => (
                            <button
                                className="p-2 bg-red rounded-full"
                                key={index}
                            >
                                <img src={sl} />
                            </button>
                        ))}
                    </div>
                    <Button style={"text-xs"}>Написать в чате</Button>
                </div>
            </div>

            <div className="px-32 flex justify-between">
                <Text type={"12"}>© 2015-2023 Illuminous</Text>
                <Text type={"12"}>Пользовательские соглашения</Text>
            </div>
        </footer>
    );
}
