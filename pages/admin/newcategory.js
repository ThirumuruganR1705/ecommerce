import axios from "axios";
import { useEffect, useState } from "react";
import { ToastContainer,toast } from "react-toastify";
import 'react-toastify/dist/ReactToastify.css';

const Newcategory = () => {

    const [categories, setCategories] = useState([]);
    const [inputs, setInputs] = useState({
        categoryName: "",
        parentCategory: ""
    });

    // console.log(inputs);

    const fetchCategories = async () => {
        const res = await axios.get("../api/category");
        setCategories(() => { return res.data.message });
    }

    useEffect(() => {
        fetchCategories();
    }, [])

    const clickHandler = async () => {
        const res = await axios.post("../api/category", {
            categoryName: inputs.categoryName,
            parentCategory: inputs.parentCategory
        });
        if (res.status == 200) {
            setInputs(()=>({categoryName:"",parentCategory:"0"}))
            const notify = () => toast.success("Created");
            notify();
        }
    }

    return (
        <div>
            <ToastContainer
                position="top-right"
                autoClose={5000}
                hideProgressBar={false}
                newestOnTop={false}
                closeOnClick
                rtl={false}
                pauseOnFocusLoss
                draggable
                pauseOnHover
                theme="light"
            />
            <ToastContainer />
            <div className="shadow-lg mx-2 flex flex-col gap-3 p-3 rounded-lg">
                <div className="">
                    <label className="text-sm text-blue-900">Category Name</label>
                    <input placeholder="Category Name" value={inputs.categoryName} className="border focus:border-blue-800 text-blue-900 h-10 w-full" onChange={(e) => { setInputs((pre) => ({ ...pre, categoryName: e.target.value })) }} />
                </div>
                <div className="felx flex-col">
                    <label className="text-sm text-blue-900">Parent Category</label>
                    <div className="pb-3">
                        <select className="border px-3 py-1 outline-none" value={inputs.parentCategory} onChange={(e) => { setInputs((pre) => ({ ...pre, parentCategory: e.target.value })) }}>
                            <option value="0">Select Parent Category</option>
                            <option value="1">No Parent Category</option>
                            {categories.map((cat) => (
                                <option value={cat.categoryName} key={cat._id}>{cat.categoryName}</option>
                            ))}
                        </select>
                    </div>
                </div>
                <div>
                    <button className="bg-blue-800 text-white px-4 py-2 w-full rounded-md" onClick={() => { clickHandler() }}>Save</button>
                </div>
            </div>
        </div>
    )
}

export default Newcategory;