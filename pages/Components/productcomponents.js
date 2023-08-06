import axios from "axios";
import { useEffect, useRef, useState } from "react";
import Productcard from "./productcard";
import { BeatLoader } from "react-spinners";
import { useRouter } from "next/router";

function Productcomponent() {

    const [products, setProducts] = useState([]);
    const confirmationRef = useRef();
    const loaderref = useRef();
    const maindiv = useRef();
    const router = useRouter();

    const fetchProducts = async () => {
        loaderref.current.className = "flex w-full justify-center items-center h-[70vh]";
        const result = await axios.get('./api/product');
        setProducts(() => { return result.data.message });
        loaderref.current.className = "hidden";
    }

    const fetchProductbyId = async () => {
        const res = await axios.post("./api/product?type=get", {
            id: "64c2250c9987c58423680c21"
        });
        console.log(res);
    }

    useEffect(() => {
        fetchProducts();
        fetchProductbyId();
    }, [])

    const blurfunc = () => {
        confirmationRef.current.className = "block absolute w-full z-10 top-[30%] md:top-[50%]";
        maindiv.current.className = "blur";
    }

    const goBack=()=>{
        confirmationRef.current.className = "hidden";
        maindiv.current.className = "";
    }

    return (
        <div className="relative">
            <div ref={maindiv}>
                <div>
                    <h2 className="font-bold px-2">Newly Added</h2>
                </div>
                <div className="grid gap-2 p-2 grid-cols-2 md:grid-cols-4 justify-between isolate">
                    {products.map((data) => (
                        <div key={data._id}>
                            <Productcard productName={data.productName} price={data.price} image={data.Images[0]} id={data._id} page="home" blurfunc={() => { blurfunc() }} />
                        </div>
                    ))}
                </div>
                <div className="hidden" ref={loaderref} >
                    <BeatLoader color="#fc7b03" />
                </div>
            </div>
            <div className="hidden" ref={confirmationRef} >
                <div className="flex flex-col items-center rounded-md  justify-evenly">
                    <div className="md:w-[20rem] h-20 bg-white px-2 py-1 rounded-md shadow-lg">
                        <h2 className="text-orange-500 font-semibold text-center py-1">You need to login to continue</h2>
                        <div className="flex justify-center gap-6 py-1">
                            <button className="bg-green-500 text-white px-2 py-1 rounded-md cursor-pointer" onClick={()=>{router.push("../login")}}>Login</button>
                            <button className="bg-red-500 text-white px-2 py-1 rounded-md cursor-pointer" onClick={()=>{goBack()}}>Go Back</button>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Productcomponent;