import { useRouter } from "next/router";
import { useState } from "react";
import Layout from "./Layout";
import Productlist from "./admin/productlist";
import Newproduct from "./admin/newproduct";

const admin = () => {
    const router = useRouter();
    const [pager, setPager] = useState("list");

    return (
        <Layout>
            <div className="p-2">
                <div className="md:pt-9">
                    <h2 className="text-lg font-bold">Admin Dashboard</h2>
                </div>
                <div className="flex my-4 border w-fit">
                    <p className={"cursor-pointer "+(pager == "list" ? "bg-blue-800 text-white md:px-4 md:py-2 text-xs md:text-base px-2 py-1" : "md:px-4 md:py-2 text-xs md:text-base px-2 py-1")} onClick={() => { setPager("list") }}>Product List</p>
                    <p className={"cursor-pointer "+(pager == "newproduct" ? "bg-blue-800 text-white md:px-4 md:py-2 text-xs md:text-base px-2 py-1" : "md:px-4 md:py-2 text-xs md:text-base px-2 py-1")} onClick={() => { setPager("newproduct") }}>Add new Product</p>
                    <p className={"cursor-pointer "+(pager == "categories" ? "bg-blue-800 text-white md:px-4 md:py-2 text-xs md:text-base px-2 py-1" : "md:px-4 md:py-2 text-xs md:text-base px-2 py-1")} onClick={() => { setPager("categories") }}>Categories list</p>
                    <p className={"cursor-pointer "+(pager == "newcategory" ? "bg-blue-800 text-white md:px-4 md:py-2 text-xs md:text-base px-2 py-1" : "md:px-4 md:py-2 text-xs md:text-base px-2 py-1")} onClick={() => { setPager("newcategory") }}>Add New Category</p>
                </div>
            </div>
            <div>
                {pager == "list" && <div>
                    <Productlist />
                </div>}

                {pager == "newproduct" && <div>
                    <Newproduct/>
                </div>}

            </div>
        </Layout>
    )
}

export default admin;