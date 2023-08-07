import axios from "axios";
import Image from "next/image";
import { useEffect, useState } from "react";
import Layout from "../Layout";

function Categories() {

    const [categories, setCategories] = useState([]);

    const fetchCategories = async () => {
        const res = await axios.get("../api/category?type=parent");
        console.log(res.data.message);
        setCategories(res.data.message);
    }

    useEffect(() => {
        fetchCategories();
    }, [])

    return (
        <Layout>
            <h2>Categories</h2>
            {categories.length>0 && <div>
                {categories.map((data) => (
                    <div className="p-3 relative">
                        <Image className="w-full h-40 rounded-md brightness-75 opacity-70" src={data.image} width={100} height={100} alt="image" />
                        <div className="absolute top-20 left-32">
                            <p className="text-white font-extrabold text-lg tracking-wider">{data.categoryName}</p>
                        </div>
                    </div>
                ))}
            </div>}
        </Layout>
    );
}

export default Categories;