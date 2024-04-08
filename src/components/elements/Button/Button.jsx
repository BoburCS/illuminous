import RightArrow from "@icons/icon-right-sm.svg";

export default function Button({ children, style }) {
    return (
        <button className={`text-white font-normal text-base px-5 py-1 rounded-4xl bg-red flex items-center gap-3 ${style}`}>
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

