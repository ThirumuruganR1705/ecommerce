import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import Image from "next/image";
import { faIndianRupeeSign, faStar as filledStar } from "@fortawesome/free-solid-svg-icons";
import { useRouter } from "next/router";
import { faHeart, faStar as nonFilledStar } from "@fortawesome/free-regular-svg-icons";

function Productcard(props) {
    const router = useRouter();

    return (
        <div className="h-56 md:h-80 md:w-60 w-32 relative" onClick={() => { router.push("/products/782492") }}>
            <div className="md:h-60 md:w-60 w-32 h-28 bg-gray-200  flex justify-center items-center rounded-md">
                <Image src={props.image} className="md:w-44 w-20 h-20 md:h-44" width={500} height={500} alt={props.productName} />
            </div>
            <div className="flex justify-between md:w-60 w-32 py-1">
                <div className="text-xs md:text-base font-semibold">{props.productName}</div>
                <div className="flex text-xs md:text-base">
                    <p className="text-[8px]"><FontAwesomeIcon icon={faIndianRupeeSign} /></p>
                    <p>{props.price}</p>
                </div>
            </div>
            <div className="md:pb-2 pb-1">
                <p className="md:text-[6px] text-xs text-gray-600">{props.desc}</p>
            </div>
            <div className="pb-1 md:pb-2 text-green-700 text-xs flex">
                <div>
                    <FontAwesomeIcon icon={filledStar} />
                    <FontAwesomeIcon icon={filledStar} />
                    <FontAwesomeIcon icon={filledStar} />
                    <FontAwesomeIcon icon={filledStar} />
                    <FontAwesomeIcon icon={nonFilledStar} />
                </div>
                <div>
                    <p className="text-gray-400 text-[10px]">(122)</p>
                </div>
            </div>
            <div>
                <button className="text-xs border py-1 px-2 rounded-full border-green-700 hover:bg-green-700 hover:text-white">Add to Cart</button>
            </div>
            <div className="absolute top-1 right-1 md:top-2 md:right-2">
                <p className="text-xs md:text-sm bg-white px-[5px] py-[3px] rounded-full cursor-pointer">
                    <FontAwesomeIcon icon={faHeart} />
                </p>
            </div>

        </div>
    );
}

export default Productcard;  