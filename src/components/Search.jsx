import Text from "@elements/Text";

import SearchIcon from "@icons/icon-search.svg";

export default function Search() {
    return (
        <div className="text-white font-montserrat w-full">
            <Text type={"24-semibold"} style="mb-4">Поиск по сайту</Text>
            <Text style="text-grey mb-[60px]">
                На нашем сайте вы найдете подходящие вам <br /> фильмы и сериалы
            </Text>
            <div className="w-full rounded-medium bg-light-dark flex items-center justify-between">
                <input 
                    name="search" 
                    type="search" 
                    placeholder="Поиск..."
                    className="px-5 py-4 w-full bg-transparent outline-none placeholder:text-grey"
                />
                <img 
                    src={SearchIcon} 
                    alt="Search Icon"
                    className="mr-3" 
                />
            </div>
        </div>
    );
}
