import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import Image from "next/image";
import { faArrowRightLong, faArrowUpRightFromSquare, faIndianRupeeSign, faHeartCircleCheck } from "@fortawesome/free-solid-svg-icons";
import { useRouter } from "next/router";
import { faHeart } from "@fortawesome/free-regular-svg-icons";
import { useContext, useEffect, useRef, useState } from "react";
import newContext from "@/Context";
import axios from "axios";

function Productcard(props) {

    const [values, setValues] = useContext(newContext);
    const [isLiked, setIsLiked] = useState(false);
    const maindiv = useRef();

    const router = useRouter();

    // const fetchUser = async () => {
    //     const res = await axios.post("../api/user?type=get", { email: values.email });
    //     console.log(res.data.message.length);
    //     for (var i = 0; i < res.data.message.length; i++) {
    //         if (res.data.message[i]._id == props.id) {
    //             setIsLiked(true);
    //         }
    //     }
    // }

    // useEffect(() => {
    //     if (values.isloggedIn) {
    //         fetchUser();
    //     }
    // }, [])

    const likeHandler = async () => {
        if (!values.isloggedIn) {
            // router.push("../login");

            props.blurfunc();
        } else if (!isLiked) {
            const res = await axios.put("../api/user?type=add", {
                email: values.email,
                productId: props.id
            });
            if (res.status == 200) {
                setIsLiked(true);
            }
        } else if (isLiked) {
            const res = await axios.put("../api/user?type=remove", {
                email: values.email,
                productId: props.id
            });
            if (res.status == 200) {
                setIsLiked(false);
            }
        }
    }



    return (
        <div className="h-48 md:h-80 md:w-60 w-32 relative">
            {/* <div className="md:h-72 md:w-64 h-60 w-full p-2 shadow-lg rounded-lg relative" ref={maindiv}>
                {props.page == "home" && <div className="absolute bg-white right-6 top-3 px-2 rounded-full py-1 cursor-pointer text-orange-600 hover:scale-110 transition" onClick={() => { likeHandler() }}>
                    {!isLiked && <FontAwesomeIcon icon={faHeart} />}
                    {isLiked && <FontAwesomeIcon icon={faHeartCircleCheck} />}
                </div>}
                <div className="h-40 md:h-48 rounded-md">
                    <Image src={props.image} className="rounded-md w-full md:h-48 h-40 px-2" width={500} height={500} alt={props.productName} />
                </div>
                <div className="h-16">
                    <div className="flex text-xs md:text-lg justify-between font-bold py-1 md:py-1">
                        <h3 className="text-center">{props.productName}</h3>
                        <h4><FontAwesomeIcon icon={faIndianRupeeSign} className="text-xs md:text-lg" />{props.price}</h4>
                    </div>
                    <div className="md:py-2" >
                        <button className="text-xs md:text-base border border-orange-600 px-2 py-1 rounded-md text-orange-600 hover:text-white hover:bg-orange-600">Add to cart</button>
                        <button className="text-xs md:text-base rounded-md bg-orange-600 text-white py-1 px-2 float-right" onClick={() => { router.push("../products/" + props.id) }}>
                            View
                        </button>
                    </div>
                </div>
            </div> */}

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
                <p className="md:text-[6px] text-[2px] text-gray-600">{props.desc}</p>
            </div>
            <div>
                <button className="md:text-xs text-[2px] border py-1 px-2 rounded-full border-green-700 hover:bg-green-700 hover:text-white">Add to Cart</button>
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