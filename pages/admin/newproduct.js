import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faArrowUpFromBracket } from "@fortawesome/free-solid-svg-icons";
import axios from "axios";
import { useEffect, useState, useRef } from "react";
import storage from "@/lib/firebase";
import { getDownloadURL, listAll, ref, uploadBytesResumable } from "firebase/storage";
import { data } from "autoprefixer";
import { images } from "@/next.config";
import { ToastContainer, toast } from "react-toastify";
import 'react-toastify/dist/ReactToastify.css';
import Image from "next/image";


const Newproduct = () => {

    const [categories, setCategories] = useState([]);
    const [file, setFile] = useState(null);
    const [imgurl, setImgurl] = useState([]);
    const [inputs, setInputs] = useState({
        productName: "",
        category: "",
        description: "",
        price: "",
        images: []
    });
    console.log(inputs);
    console.log(imgurl);

    const fetchCategories = async () => {
        const res = await axios.get("./api/category");
        console.log(res.data.message);
        setCategories(res.data.message);
    }

    const imageUpload = (e) => {
        console.log(e.target.files[0]);
        setFile(() => { return e.target.files[0] });
        const storageRef = ref(storage, "/images/" + e.target.files[0].name);
        const uploadTask = uploadBytesResumable(storageRef, e.target.files[0]);
        console.log(uploadTask);
        uploadTask.on("state_changed",
            (snapshot) => {
                const progress = (snapshot.bytesTransferred / snapshot.totalBytes) * 100;
                console.log('Upload is ' + progress + '% done');

                switch (snapshot.state) {
                    case 'paused':
                        console.log('Upload is paused');
                        break;
                    case 'running':
                        console.log('Upload is running');
                        const notify = () => toast.success('Uploading');
                        notify();
                        break;
                }
            },
            (error) => {
                switch (error.code) {
                    case 'storage/unauthorized':
                        break;
                    case 'storage/canceled':
                        break;
                    case 'storage/unknown':
                        break;
                }
            },
            () => {
                getDownloadURL(uploadTask.snapshot.ref).then((url) => {
                    console.log(url);
                    setImgurl(data => [...data, url]);
                    setInputs((pre) => ({ ...pre, images: [...inputs.images, url] }));
                    const notify = () => toast.success('Uploaded');
                    notify();
                })
            }
        )



        // listAll(ref(storage, "images")).then(data => { console.log(data); })

    }

    useEffect(() => {
        fetchCategories();
    }, [])

    const uploadHandler = async () => {
        const res = await axios.post("../api/product", {
            productName: inputs.productName,
            category: inputs.category,
            description: inputs.description,
            price: inputs.price,
            Images: inputs.images,
        });
        if (res.status == 200) {
            const notify = () => toast.success("Created");
            notify();
        }
    }



    return (
        <div>
            <div className="shadow-md rounded-lg mx-2 flex flex-col gap-3 p-3">
                <div className="">
                    <label className="text-sm text-orange-600">Product Name</label>
                    <input placeholder="Product Name" className="border focus:border-orange-600 text-orange-600 h-10 w-full" onChange={(e) => { setInputs((pre) => ({ ...pre, productName: e.target.value })) }} />
                </div>
                <div>
                    <label className="text-sm text-orange-600">Category</label>
                    <div className="pb-3">
                        <select className="border px-3 py-1 outline-none focus:border-orange-600 text-orange-600 h-10 w-full" value={inputs.category} onChange={(e) => { setInputs((pre) => ({ ...pre, category: e.target.value })) }}>
                            <option value="0">Choose Category</option>
                            {categories.map((cat) => (
                                <option value={cat.categoryName} key={cat._id}>{cat.categoryName}</option>
                            ))}
                        </select>
                    </div>
                </div>
                <div className="">
                    <div className="flex gap-2 items-center">
                        <label className="text-sm text-orange-600">Description</label>
                        <p className="text-xs">( Use "," to separate the feature )</p>
                    </div>
                    <textarea placeholder="Description" className="border focus:border-orange-600 text-orange-600 h-20 w-full outline-none" onChange={(e) => { setInputs((pre) => ({ ...pre, description: e.target.value })) }} />
                </div>
                <div className="">
                    <label className="text-sm text-orange-600">Price</label>
                    <input placeholder="Price" type="number" className="border focus:border-orange-600 text-orange-600 h-10 w-full" onChange={(e) => { setInputs((pre) => ({ ...pre, price: e.target.value })) }} />
                </div>
                <div>
                    <p className="text-sm text-orange-600 pb-3">Images</p>
                    <div className="grid grid-cols-3 md:flex">
                        {inputs.images.map((data) => (
                            <Image src={data} width={500} height={500} className="h-20 w-24" />
                        ))}
                        <label>
                            <div>
                                <input type="file" className="hidden" onChange={(e) => { imageUpload(e) }} />
                                <span><FontAwesomeIcon icon={faArrowUpFromBracket} className="h-12 text-gray-400 border p-5 rounded-md" /></span>
                            </div>
                        </label>
                    </div>
                </div>
                <div>
                    <button className="bg-orange-600 text-white px-4 py-2 w-full rounded-md" onClick={() => { uploadHandler() }}>Save</button>
                </div>
            </div>
        </div>
    )
}

export default Newproduct;