import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faArrowUpFromBracket } from "@fortawesome/free-solid-svg-icons";

const Newproduct = () => {
    return (
        <div>
            <div className="border mx-2 flex flex-col gap-3 p-3">
                <div className="">
                    <label className="text-sm text-blue-900">Product Name</label>
                    <input placeholder="Product Name" className="border focus:border-blue-800 text-blue-900 h-10 w-full" />
                </div>
                <div className="">
                    <label className="text-sm text-blue-900">Description</label>
                    <textarea placeholder="Description" className="border focus:border-blue-800 text-blue-900 h-20 w-full outline-none" />
                </div>
                <div className="">
                    <label className="text-sm text-blue-900">Price</label>
                    <input placeholder="Price" type="number" className="border focus:border-blue-800 text-blue-900 h-10 w-full" />
                </div>
                <div>
                    <label>
                        <p className="text-sm text-blue-900 pb-3">Images</p>
                        <input type="file" className="hidden" />
                        <span><FontAwesomeIcon icon={faArrowUpFromBracket} className="h-12 text-gray-400 border p-5 rounded-md" /></span>
                    </label>
                </div>
                <div>
                    <button className="bg-blue-800 text-white px-4 py-2">Save</button>
                </div>
            </div>
        </div>
    )
}

export default Newproduct;