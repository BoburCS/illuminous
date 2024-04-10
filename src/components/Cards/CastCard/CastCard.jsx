import Text from "@elements/Text";

export default function CastCard({ name, role, image }) {
    return (
        <div className="w-[220px] h-[180px] pt-[100px] rounded-medium flex flex-col items-center bg-light-dark relative hover:scale-105 duration-500 cursor-pointer">
            <img
                src={image}
                alt={name}
                className="absolute left-1/2 -translate-x-1/2 -top-12"
            />
            <Text type="18">{name}</Text>
            <Text>{role}</Text>
        </div>
    );
}
