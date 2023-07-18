import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faArrowUpFromBracket } from "@fortawesome/free-solid-svg-icons";
import axios from "axios";
import { useEffect, useState } from "react";

const Newproduct = () => {

    const [categories, setCategories] = useState([]);
    const [inputs,setInputs] = useState({
        productName:"",
        category:"",
        description:"",
        price:"",
        Images:[],
        features:""
    })

    console.log(inputs);

    const fetchCategories = async () => {
        const res = await axios.get("./api/category");
        console.log(res.data.message);
        setCategories(res.data.message);
    }

    useEffect(() => {
        fetchCategories();
    }, [])


    return (
        <div>
            <div className="shadow-md rounded-lg mx-2 flex flex-col gap-3 p-3">
                <div className="">
                    <label className="text-sm text-blue-900">Product Name</label>
                    <input placeholder="Product Name" className="border focus:border-blue-800 text-blue-900 h-10 w-full"  onChange={(e)=>{setInputs((pre)=>({...pre,productName:e.target.value}))}} />
                </div>
                <div>
                    <label className="text-sm text-blue-900">Category</label>
                    <div className="pb-3">
                        <select className="border px-3 py-1 outline-none focus:border-blue-800 text-blue-900 h-10 w-full" value={inputs.category} onChange={(e) => { setInputs((pre)=>({...pre,category:e.target.value})) }}>
                            <option value="0">Choose Category</option>
                            {categories.map((cat) => (
                                <option value={cat.categoryName} key={cat._id}>{cat.categoryName}</option>
                            ))}
                        </select>
                    </div>
                </div>
                <div className="">
                    <label className="text-sm text-blue-900">Description</label>
                    <textarea placeholder="Description" className="border focus:border-blue-800 text-blue-900 h-20 w-full outline-none" onChange={(e)=>{setInputs((pre)=>({...pre,description:e.target.value}))}} />
                </div>
                <div className="">
                    <label className="text-sm text-blue-900">Price</label>
                    <input placeholder="Price" type="number" className="border focus:border-blue-800 text-blue-900 h-10 w-full" onChange={(e)=>{setInputs((pre)=>({...pre,price:e.target.value}))}}/>
                </div>
                <div>
                    <label>
                        <p className="text-sm text-blue-900 pb-3">Images</p>
                        <input type="file" className="hidden" />
                        <span><FontAwesomeIcon icon={faArrowUpFromBracket} className="h-12 text-gray-400 border p-5 rounded-md" /></span>
                    </label>
                </div>
                <div className="">
                    <label className="text-sm text-blue-900">Features</label>
                    <textarea placeholder="Features" className="border focus:border-blue-800 text-blue-900 h-32 w-full outline-none" onChange={(e)=>{setInputs((pre)=>({...pre,features:e.target.value}))}} />
                </div>
                <div>
                    <button className="bg-blue-800 text-white px-4 py-2 w-full rounded-md">Save</button>
                </div>
            </div>
        </div>
    )
}

export default Newproduct;