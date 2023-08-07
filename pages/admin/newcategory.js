import axios from "axios";
import { useEffect, useState } from "react";
import { ToastContainer,toast } from "react-toastify";
import 'react-toastify/dist/ReactToastify.css';
import { getDownloadURL, listAll, ref, uploadBytesResumable } from "firebase/storage";
import storage from "@/lib/firebase";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faArrowUpFromBracket } from "@fortawesome/free-solid-svg-icons";
const Newcategory = () => {

    const [categories, setCategories] = useState([]);
    const [imgurl, setImgurl] = useState([]);
    const [inputs, setInputs] = useState({
        categoryName: "",
        parentCategory: "",
        image:""
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
            parentCategory: inputs.parentCategory,
            image:inputs.image
        });
        if (res.status == 200) {
            setInputs(()=>({categoryName:"",parentCategory:"0"}))
            const notify = () => toast.success("Created");
            notify();
        }
    }

    const imageUpload = (e) => {
        console.log("start");
        console.log(e.target.files[0]);
        // setFile(() => { return e.target.files[0] });
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
                        // const notify = () => toast.success('Uploading');
                        // notify();
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
                    setInputs((pre) => ({ ...pre, image: url }));
                    // const notify = () => toast.success('Uploaded');
                    notify();
                })
            }
        )



        // listAll(ref(storage, "images")).then(data => { console.log(data); })

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
                    <label className="text-sm text-orange-600">Category Name</label>
                    <input placeholder="Category Name" value={inputs.categoryName} className="border focus:border-blue-800 text-orange-600 h-10 w-full" onChange={(e) => { setInputs((pre) => ({ ...pre, categoryName: e.target.value })) }} />
                </div>
                <div className="felx flex-col">
                    <label className="text-sm text-orange-600">Parent Category</label>
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
                    <p className="text-sm text-orange-600 pb-3">Images</p>
                    <div className="grid grid-cols-3 md:flex">
                        <label>
                            <div>
                                <input type="file" className="hidden" onChange={(e) => { imageUpload(e) }} />
                                <span><FontAwesomeIcon icon={faArrowUpFromBracket} className="h-12 text-gray-400 border p-5 rounded-md" /></span>
                            </div>
                        </label>
                    </div>
                </div>
                <div>
                    <button className="bg-orange-600 text-white px-4 py-2 w-full rounded-md" onClick={() => { clickHandler() }}>Save</button>
                </div>
            </div>
        </div>
    )
}

export default Newcategory;