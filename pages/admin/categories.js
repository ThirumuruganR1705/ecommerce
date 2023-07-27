import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faTrash } from "@fortawesome/free-solid-svg-icons";
import { ToastContainer, toast } from 'react-toastify';
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
        const res = await axios.post("../api/category?query=del",{
            key
        }).catch((e)=>{
            const notify = () => toast.error("e.response.data.message");
            notify();
        }).then(()=>{
            window.location.reload();
        })
        console.log(res);
        // if(res.status==200){
            
        // }else{
        //     const notify = () => toast.error("e.response.data.message");
        //     notify();
        // }
    }

    return (
        <div className="p-2">
            Categories
            <div className="pt-3 md:mr-2">
                <table className="w-full shadow-md ">
                    <thead className="border bg-orange-600 text-white">
                        <tr className="border">
                            <th>Category Name</th>
                            <th>Parent Category</th>
                        </tr>
                    </thead>
                    <tbody>
                        {categories.map((cat)=>(
                            <tr key={cat._id}>
                                <td>{cat.categoryName}</td>
                                <td className="flex justify-between border-none">
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