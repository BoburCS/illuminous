import { useNavigate } from "react-router-dom";
import RightArrow from "@icons/icon-right-sm.svg";

export default function Button({ children, style, type, func, to }) {
    const navigate = useNavigate();
    const handleClick = (e) => {
        if (to) {
            navigate(to);
        } 
        else if (func) {
            func(e);
        }
    };

    return (
        <button
            className={`text-white font-normal text-base px-5 py-1 rounded-4xl bg-red flex items-center gap-3 ${style}`}
            type={type}
            onClick={handleClick}
        >
            {children}
        </button>
    );
}

export function BtnRight() {
    return (
        <Button style={"py-4 rounded-full"}>
            <img src={RightArrow} alt="Button Right Icon" />
        </Button>
    );
}
