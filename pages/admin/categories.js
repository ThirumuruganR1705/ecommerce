import axios from "axios";
import { useEffect, useState } from "react";

const CategoryList = () => {

    const [categories, setCategories] = useState([]);

    const fetchCategories = async () => {
        const res = await axios.get("../api/category");
        console.log(res.data.message);
        setCategories(() => { return res.data.message });
    }

    useEffect(() => {
        fetchCategories();
    }, [])

    return (
        <div>
            Categories
            <div className="pt-3 md:mr-2">
                <table className="w-full">
                    <thead className="border bg-blue-800 text-white">
                        <tr className="border">
                            <th>Category Name</th>
                            <th>Parent Category</th>
                        </tr>
                    </thead>
                    <tbody>
                        {categories.map((cat)=>(
                            <tr>
                                <td>{cat.categoryName}</td>
                                <td>{cat.parentCategory.categoryName}</td>
                            </tr>
                        ))}
                    </tbody>
                </table>
            </div>
        </div>
    )
}

export default CategoryList;