import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import axios from "axios";
import { useRouter } from "next/router";
import { useEffect, useState } from "react";
import Layout from "../Layout";
import { faChevronLeft, faChevronRight, faCircleArrowLeft, faCircleArrowRight,faCheck,faIndianRupeeSign } from "@fortawesome/free-solid-svg-icons";
import Image from "next/image";

function Productviewer() {
    const router = useRouter();
    const id = router.query?.id;
    const [index, setIndex] = useState(0);
    const [maxIndex,setMaxIndex] = useState(0);
    const [product,setProduct] = useState({
        productName:"",
        description:"",
        price:"",
        Images:[]
    });
    const features = product.description.split(",");

    const fetchProduct = async () => {
        const res = await axios.post("../api/product?type=get", {
            id: id
        }).then((d)=>{
            setMaxIndex(()=>{return d.data.message.Images.length});
            setProduct(()=>{return d.data.message});
        });        
    }

    useEffect(() => {
        fetchProduct();

    }, [])

    return (
        <Layout>
            <div className="px-2 md:flex md:justify-evenly md:py-10">
                <div className="flex justify-center gap-2 md:w-auto">
                    <div className={index==0?"invisible":"flex items-center"}>
                        <FontAwesomeIcon icon={faChevronLeft} className="h-6 border py-1 rounded-full px-2 text-orange-600" onClick={()=>{setIndex(index-1)}} />
                    </div>
                    <div className="w-52 h-52 bg-slate-400 rounded-md md:w-full md:h-[70vh]">
                        <Image src={product.Images[index]} width={400} height={500} alt="image" className="h-52 w-52 md:w-72 rounded-md md:h-[70vh]"/>
                    </div>
                    <div className={maxIndex>index+1?"flex items-center":"invisible"}>
                        <FontAwesomeIcon icon={faChevronRight} className="h-6 border py-1 px-2 rounded-full text-orange-600" onClick={()=>{setIndex(index+1)}} />
                    </div>
                </div>
                <div className="md:w-1/2 flex flex-col gap-2">
                    <div className="text-center md:text-left md:text-lg py-2 font-bold text-orange-500">
                        <h2>{product.productName}</h2>
                    </div>
                    <div className="">
                        <p className="text-lg gap-1 items-center flex justify-center md:justify-normal"><FontAwesomeIcon icon={faIndianRupeeSign}/>{product.price}</p>
                    </div>
                    <div className="p-2 md:p-0 ">
                        <h4 className="font-semibold">Features</h4>
                        <div>
                            {features.map((data)=>(
                                <p className=" py-2"><FontAwesomeIcon icon={faCheck} className="text-orange-500"/> {data}</p>
                            ))}
                        </div>
                    </div>
                    <div className="flex gap-5 py-4 justify-evenly md:justify-normal">
                        <button className="border px-2 py-1 border-orange-600 text-orange-600 rounded-md hover:bg-orange-600 hover:text-white">Add To Cart</button>
                        <button className="border px-2 py-1 border-orange-600 bg-orange-600 text-white rounded-md">Buy Now</button>
                    </div>
                </div>
            </div>
        </Layout>
    );
}

export default Productviewer;