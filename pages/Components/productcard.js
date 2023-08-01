import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import Image from "next/image";
import { faArrowRightLong, faArrowUpRightFromSquare,faIndianRupeeSign,faHeartCircleCheck } from "@fortawesome/free-solid-svg-icons";
import { useRouter } from "next/router";
import { faHeart } from "@fortawesome/free-regular-svg-icons";
import { useContext, useEffect, useState } from "react";
import newContext from "@/Context";
import axios from "axios";

function Productcard(props) {

    const [values,setValues] = useContext(newContext);
    const [isLiked,setIsLiked] = useState(false);

    const router = useRouter();

    const fetchUser=async()=>{
        const res = await axios.post("../api/user?type=get",{email:values.email});
        for (var i=0;i<res.data.message.liked.length;i++){
            if(res.data.message.liked[i]==props.id){
                setIsLiked(true);
            }
        }
    }

    useEffect(()=>{
        if(values.isloggedIn){
            fetchUser();
        }
    },[])

    const likeHandler =async()=>{
        if(!values.isloggedIn){
            router.push("../login");
        }else if(!isLiked){
            const res = await axios.put("../api/user?type=add",{
                email:values.email,
                productId:props.id
            });
            if(res.status==200){
                setIsLiked(true);
            }
        }else if (isLiked){
            const res = await axios.put("../api/user?type=remove",{
                email:values.email,
                productId:props.id
            });
            if(res.status==200){
                setIsLiked(false);
            }
        }
    }



    return (
        <div className="md:h-72 md:w-64 h-60 w-full p-2 shadow-lg rounded-lg relative">
            {props.page=="home"&&<div className="absolute bg-white right-6 top-3 px-2 rounded-full py-1 cursor-pointer text-orange-600" onClick={()=>{likeHandler()}}>
                {!isLiked && <FontAwesomeIcon icon={faHeart}/>}
                {isLiked && <FontAwesomeIcon icon={faHeartCircleCheck}/>}
            </div>}
            <div className="h-40 md:h-48 rounded-md">
                <Image src={props.image} className="rounded-md w-full md:h-48 h-40 px-2" width={500} height={500} alt={props.productName} />
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