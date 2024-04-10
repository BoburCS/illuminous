
export default function Input({ name, type, placeholder }) {
    return (
        <input 
            name={name}
            type={type}
            placeholder={placeholder}
            className="bg-gray w-[350px] py-[14px] px-[18px] rounded-medium text-white"
        />
    );
}
