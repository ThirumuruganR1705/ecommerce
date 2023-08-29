import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faAngleDown, faMagnifyingGlass, faRightToBracket, faList, faBars, faUser, faX, faCartPlus, faChevronDown,faCartShopping } from "@fortawesome/free-solid-svg-icons";
import { useContext, useRef, useState } from "react";
import newContext from "@/Context";
import { useRouter } from "next/router";
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import Image from "next/image";
import icon from "../public/icon.png";
import Category from "./Components/category";

const Layout = ({ children }) => {
    const [values, setValues] = useContext(newContext);
    const router = useRouter();
    const accref = useRef();
    const catref = useRef();
    const menuViewer = useRef();
    const [xmark, setXmark] = useState(false);
    const notify = () => toast.success("logged out");
    const clickHandler = () => {
        if (values.isloggedIn) {
            setValues({ email: "", isloggedIn: false });
        } else {
            if (router.pathname == "/products") {
                router.push("../login");
            } else {
                router.push("/login");
            }

        }
    }

    console.log(values);

    const accountMenu = () => {
        if (accref.current.className == "hidden") {
            accref.current.className = "absolute top-16 bg-orange-400 w-28 text-center text-white z-10";
        } else {
            accref.current.className = "hidden";
        }
    }

    const menuActions = (e) => {
        if (menuViewer.current.className == "hidden" && e != "screen") {
            menuViewer.current.className = "absolute top-0 left-0 bg-orange-600 text-center w-3/4 h-screen py-12 z-10";
            setXmark(true);
        } else {
            menuViewer.current.className = "hidden";
            setXmark(false);
        }
    }

    const logoutHandler = () => {
        window.location.reload();
    }

    return (
        <div className="md:mx-16  h-screen ">
            <div className="hidden md:flex items-center justify-between gap-4 border-b py-4 bg-white">
                <div className="flex gap-3 items-center">
                    <Image src={icon} width={500} height={500} className="h-8 w-8" />
                    <h2 className="font-extrabold text-2xl text-green-700">Shopkart</h2>
                </div>
                <div className="flex gap-12">
                    <div className="flex items-center gap-1 cursor-pointer" onMouseOver={()=>{catref.current.className="absolute top-20 left-60"}} onMouseOut={()=>{var interval=setInterval(()=>{catref.current.className="hidden"},1000);clearInterval(interval);}} >
                        <p>Categories</p>
                        <FontAwesomeIcon icon={faChevronDown} />
                    </div>
                    <div className="cursor-pointer">Deals</div>
                    <div className="cursor-pointer">what's New</div>
                    <div className="cursor-pointer">Delivery</div>
                </div>

                <div className="flex gap-10">
                    <div className="border bg-gray-50 px-2 py-2 flex rounded-xl">
                        <input type="text" placeholder="Search Product" className="bg-gray-50 w-56" />
                        <div className="cursor-pointer"><FontAwesomeIcon icon={faMagnifyingGlass} /></div>
                    </div>
                    <div className="flex items-center gap-2 cursor-pointer">
                        <FontAwesomeIcon icon={faUser} />
                        <p>{values.isloggedIn ? "Account" : "Login"}</p>
                    </div>
                    <div className="flex items-center gap-2 cursor-pointer">
                        <FontAwesomeIcon icon={faCartPlus} />
                        <p>Cart</p>
                    </div>
                </div>
            </div>
            <div className="md:hidden flex items-center justify-between border-b py-3 px-3">
                <div>
                    <FontAwesomeIcon icon={faBars} />
                </div>
                <div className="flex gap-1 items-center">
                    {/* <Image src={icon} width={500} height={500} className="h-5 w-5" /> */}
                    <h2 className="font-extrabold text-lg text-green-700">Shopkart</h2>
                </div>
                <div className="flex gap-3 text-gray-500">
                    <FontAwesomeIcon icon={faCartShopping} />
                </div>
            </div>
            <div className="flex md:hidden mt-2 p-2 bg-gray-50 mx-3 justify-between">
                <input type="text" placeholder="Search Product" className="bg-gray-50 w-56" />
                <div className="cursor-pointer"><FontAwesomeIcon icon={faMagnifyingGlass} /></div>
            </div>
            <div className="mx-3 h-full">
                {children}
            </div>
            <div className="hidden" ref={catref} onMouseOver={()=>{catref.current.className="absolute top-20 left-60"}} onMouseOut={()=>{catref.current.className="hidden"}}>
                <Category />
            </div>
        </div>


    )
}

export default Layout;