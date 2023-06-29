import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faTrash } from "@fortawesome/free-solid-svg-icons";
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

    const deleteHandler=async(key)=>{
        console.log(key);
        const id = key;
        const res = await axios.delete("../api/category",{
            key:"283u48829"
        });
        console.log(res);
    }

    return (
        <div className="p-2">
            Categories
            <div className="pt-3 md:mr-2">
                <table className="w-full shadow-md ">
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
                                <td className="flex justify-between">
                                    {cat.parentCategory=="1"?"no parent":cat.parentCategory}
                                    <button value={cat._id} className="text-red-600 border py-2 px-3 rounded-full bg-gray-50 cursor-pointer" onClick={()=>{deleteHandler(cat._id)}}><FontAwesomeIcon icon={faTrash}/></button>
                                </td>
                            </tr>
                        ))}
                    </tbody>
                </table>
            </div>
        </div>
    )
}

export default CategoryList;