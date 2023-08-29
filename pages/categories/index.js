import axios from "axios";
import Image from "next/image";
import { useEffect, useState } from "react";
import Layout from "../Layout";
import Category from "../Components/category";

function Categories() {

    const [categories, setCategories] = useState([]);
    console.log(categories.length);

    const fetchCategories = async () => {
        const res = await axios.get("http://localhost:1337/api/categories?populate=*");
        console.log(res.data.data);
        setCategories(res.data.data);
    }

    useEffect(() => {
        fetchCategories();
    }, [])

    return (
        <div className="">
            <h2 className="py-4 sm:text-xs font-semibold">Categories</h2>
            <div>
                <Category />
            </div>
        </div>
    );
}

export default Categories;