import axios from "axios";
import { useEffect, useState } from "react";
import Productcard from "./productcard";

function Productcomponent() {

    const [products,setProducts] = useState([]);

    const fetchProducts = async() =>{
        const result = await axios.get('./api/product');
        console.log(result.data.message);
        setProducts(()=>{return result.data.message})
        console.log(products);
    }

    useEffect(()=>{
        fetchProducts();
    },[])

    return (
        <div>
            <div>
                <h2>Newly Added</h2>
            </div>
            <div className="grid gap-2 p-2 grid-cols-2 md:flex justify-between">
                {products.map((data)=>(
                    <div>
                        <Productcard productName={data.productName} price={data.price} image={data.Images[0]} />
                    </div>
                ))}
            </div>
        </div>
    );
}

export default Productcomponent;