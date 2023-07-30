import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import Image from "next/image";
import { faArrowRightLong, faArrowUpRightFromSquare,faIndianRupeeSign } from "@fortawesome/free-solid-svg-icons";
import { useRouter } from "next/router";
import { faHeart } from "@fortawesome/free-regular-svg-icons";

function Productcard(props) {

    const router = useRouter();

    return (
        <div className="md:h-72 md:w-64 h-56 w-full p-2 shadow-lg rounded-lg relative">
            <div className="absolute bg-white right-6 top-3 px-2 rounded-full py-1 cursor-pointer text-orange-600">
                <FontAwesomeIcon icon={faHeart}/>
            </div>
            <div className="h-36 md:h-48 rounded-md">
                <Image src={props.image} className="rounded-md w-full md:h-48 h-36 px-2" width={500} height={500} alt={props.productName} />
            </div>
            <div className="h-16">
                <div  className="flex text-xs md:text-lg justify-between font-bold py-1 md:py-1">
                    <h3 className="text-center">{props.productName}</h3>
                    <h4><FontAwesomeIcon icon={faIndianRupeeSign} className="text-xs md:text-lg"/>{props.price}</h4>
                </div>
                <div className="md:py-2" >
                    <button className="text-xs md:text-base border border-orange-600 px-2 py-1 rounded-md text-orange-600 hover:text-white hover:bg-orange-600">Add to cart</button>
                    <button className="text-xs md:text-base rounded-md bg-orange-600 text-white py-1 px-2 float-right" onClick={()=>{router.push("../products/"+props.id)}}>
                        View
                    </button>
                </div>
            </div>
        </div>
    );
}

export default Productcard;