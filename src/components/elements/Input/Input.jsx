export default function Input({ name, type, placeholder, style }) {
    return (
        <input
            name={name}
            required
            type={type}
            placeholder={placeholder}
            className={`bg-gray ${
                style ? style : "w-[350px]"
            } py-[14px] px-[18px] rounded-medium text-white outline-none border-2 border-transparent focus:border-red`}
        />
    );
}
