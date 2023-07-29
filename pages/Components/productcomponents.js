import axios from "axios";
import { useEffect, useRef, useState } from "react";
import Productcard from "./productcard";
import { BeatLoader } from "react-spinners";

function Productcomponent() {

    const [products, setProducts] = useState([]);
    const loaderref = useRef();

    const fetchProducts = async () => {
        loaderref.current.className = "flex w-full justify-center items-center h-[70vh]";
        const result = await axios.get('./api/product');
        setProducts(() => { return result.data.message });
        loaderref.current.className="hidden";
    }

    const fetchProductbyId = async ()=>{
        const res = await axios.post("./api/product?type=get",{
            id:"64c2250c9987c58423680c21"
        });
        console.log(res);
    }

    useEffect(() => {
        fetchProducts();
        fetchProductbyId();
    }, [])

    return (
        <div>
            <div>
                <h2 className="font-bold px-2">Newly Added</h2>
            </div>
            <div className="grid gap-2 p-2 grid-cols-2 md:flex justify-between">
                {products.map((data) => (
                    <div key={data._id}>
                        <Productcard productName={data.productName} price={data.price} image={data.Images[0]} id={data._id} />
                    </div>
                ))}
            </div>
            <div className="hidden" ref={loaderref} >
                <BeatLoader color="#fc7b03" />
            </div>
        </div>
    );
}

export default Productcomponent;