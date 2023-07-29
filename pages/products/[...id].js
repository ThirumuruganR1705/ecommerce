import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import axios from "axios";
import { useRouter } from "next/router";
import { useEffect, useState } from "react";
import Layout from "../Layout";
import { faChevronLeft, faChevronRight, faCircleArrowLeft, faCircleArrowRight } from "@fortawesome/free-solid-svg-icons";
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
    console.log(features);

    const fetchProduct = async () => {
        const res = await axios.post("../api/product?type=get", {
            id: id
        }).then((d)=>{
            setMaxIndex(()=>{return d.data.message.Images.length});
            setProduct(()=>{return d.data.message});
            console.log(d.data.message);
        });        
    }

    useEffect(() => {
        fetchProduct();

    }, [])

    return (
        <Layout>
            <div className="px-2">
                <div className="w-full flex justify-center gap-2">
                    <div className={index==0?"invisible":"flex items-center"}>
                        <FontAwesomeIcon icon={faChevronLeft} className="h-6 border py-1 rounded-full px-2 text-orange-600" onClick={()=>{setIndex(index-1)}} />
                    </div>
                    <div className="w-52 h-52 bg-slate-400 rounded-md">
                        <Image src={product.Images[index]} width={500} height={500} alt="image" className="h-52 w-52"/>
                    </div>
                    <div className={maxIndex>index+1?"flex items-center":"invisible"}>
                        <FontAwesomeIcon icon={faChevronRight} className="h-6 border py-1 px-2 rounded-full text-orange-600" onClick={()=>{setIndex(index+1)}} />
                    </div>
                </div>
                <div className="">
                    <div className="text-center py-2 font-bold">
                        <h2>{product.productName}</h2>
                    </div>
                    <div className="p-2 shadow-lg rounded-md">
                        <h4>Features</h4>
                        <div>
                            {features.map((data)=>(
                                <p className=" py-2">{data}</p>
                            ))}
                        </div>
                    </div>
                </div>
            </div>
        </Layout>
    );
}

export default Productviewer;