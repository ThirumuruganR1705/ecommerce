import Image from "next/image";

function CategoryCard(props) {
    return (
        <div className="flex gap-4 items-center md:p-4 p-2 h-20 w-full md:w-[25rem] md:h-24  bg-gray-100 rounded-lg cursor-pointer md:hover:bg-green-700 md:hover:text-white">
            <div className="md:h-16 h-12 w-12 md:w-16 bg-white flex justify-center items-center">
                <Image src={props.img} width={500} height={500} className="md:h-12 h-8 w-8 md:w-12" />
            </div>
            <div className="flex flex-col h-16 md:h-20 justify-evenly">
                <p className="text-sm md:text-lg">{props.name}</p>
                <p className="text-xs md:text-sm text-gray-400">{props.count} products available</p>
            </div>
        </div>
    );
}

export default CategoryCard;