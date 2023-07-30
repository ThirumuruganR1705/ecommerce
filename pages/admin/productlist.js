import axios from "axios";
import { useEffect, useState } from "react";
import admin from "../admin";
const Productlist = () => {

    const [products, setProducts] = useState([]);

    console.log(products);

    const fetchProducts = async () => {
        const res = await axios.get("../api/product");
        console.log(res.data.message);
        setProducts(res.data.message);
    }

    const fetchProductbyId = async(id) =>{
        const res = await axios.post("../api/product?type=get",{id:id});
        console.log(res);
    }

    useEffect(() => {
        fetchProducts();
        fetchProductbyId("64c2250c9987c58423680c21");
    }, [])

    return (
        <div className="">
            <div className="font-bold pb-3 text-lg ">productlist</div>
            <div className="mx-2 md:">
                <table className="w-full border-none">
                    <thead>
                        <tr className="bg-orange-400 text-white font-semibold">
                            <td>Product Name</td>
                            <td>Category</td>
                            <td>Price</td>
                        </tr>
                    </thead>
                    <tbody>
                        {products.map((data) => (
                            <tr>
                                <td>{data.productName}</td>
                                <td>{data.category}</td>
                                <td>{data.price}</td>
                                {/* <td className="hidden md:flex">
                                    <button>Edit</button>
                                    <button>Delete</button>
                                </td>
                                <td className="md:hidden flex border-none">
                                    <button>E</button>
                                    <button>D</button>
                                </td> */}
                            </tr>
                        ))}
                    </tbody>
                </table>
            </div>
        </div>
    )
}

export default Productlist;