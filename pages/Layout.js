import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faAngleDown, faMagnifyingGlass, faUser, faCartShopping, faRightToBracket, faList, faBars, faX } from "@fortawesome/free-solid-svg-icons";
import { useContext, useRef, useState } from "react";
import newContext from "@/Context";
import { useRouter } from "next/router";
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

const Layout = ({ children }) => {
    const [values, setValues] = useContext(newContext);
    const router = useRouter();
    const accref = useRef();
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
        <div className="lg:mx-12  h-screen">
            <div className="md:flex justify-between h-16 items-center hidden bg-white relative">
                <div className="p">
                    <h2 className="font-bold text-xl text-orange-400 cursor-pointer">Shopkart</h2>
                </div>
                <div className="flex gap-8">
                    <div className={router.pathname == "/" ? "cursor-pointer text-orange-500 border-b border-orange-500" : "cursor-pointer"} onClick={() => { router.push("../") }}>
                        <p>Home</p>
                    </div>
                    <div className={router.pathname == "/categories" ? "cursor-pointer text-orange-500 border-b border-orange-500" : "cursor-pointer"} onClick={() => { router.push("../categories") }}>
                        <p>categories</p>
                        {/* <p><FontAwesomeIcon icon={faAngleDown} /></p> */}
                    </div>
                    <div className={router.pathname == "/newproducts" ? "cursor-pointer text-orange-500 border-b border-orange-500" : "cursor-pointer"} onClick={() => { router.push("../newproducts") }}>
                        <p>What's New</p>
                    </div>
                    <div className={router.pathname == "/likedproducts" ? "cursor-pointer text-orange-500 border-b border-orange-500" : "cursor-pointer"} onClick={() => { router.push("../likedproducts") }}>
                        <p>Liked</p>
                    </div>
                    {values.email == "thiru@gmail.com" && <div className={router.pathname == "/admin" ? "cursor-pointer text-orange-500 border-b border-orange-500" : "cursor-pointer"} onClick={() => { router.push("../admin") }}>
                        <p>Admin Dashboard</p>
                    </div>}
                </div>
                <div className="bg-gray-100 w-72 h-10 flex items-center justify-between rounded-full pl-2">
                    <input className="bg-gray-100" placeholder="Search Product" />
                    <p className="bg-orange-400 text-white h-10 flex items-center w-10 justify-center rounded-full cursor-pointer"><FontAwesomeIcon icon={faMagnifyingGlass} /></p>
                </div>
                <div className="flex gap-3 border border-orange-400 py-2 px-4 rounded-md text-orange-400 cursor-pointer hover:bg-orange-400 hover:text-white">
                    <p><FontAwesomeIcon icon={faCartShopping} /></p>
                    <p>Cart</p>
                </div>
                <div className="cursor-pointer">
                    {values.isloggedIn && <div className="flex gap-2 cursor-pointer relative w-28" onClick={() => { accountMenu() }}>
                        <p><FontAwesomeIcon icon={faUser} /></p>
                        <p>
                            <p>Account</p>
                        </p>
                        <p><FontAwesomeIcon icon={faAngleDown} /></p>
                    </div>}
                    {!values.isloggedIn && <div className="flex gap-2 bg-orange-400 py-2 px-4 text-white rounded-md" onClick={() => { router.push("./login") }}>
                        <p><FontAwesomeIcon icon={faRightToBracket} /></p>
                        <p>Login</p>
                    </div>}
                    <div className="hidden" ref={accref} >
                        <ul className="flex flex-col" >
                            <li className="border-b-white border-b-2 py-2 hover:bg-orange-500">Profile</li>
                            <li className="border-b-white border-b-2 py-2 hover:bg-orange-500" onClick={() => { logoutHandler() }}>Logout</li>
                        </ul>
                    </div>
                </div>

            </div>
            <div className="md:hidden text-white" >
                <div className="md:hidden flex justify-between h-12 bg-orange-600 items-center px-2 text-white  relative">
                    {values.isloggedIn && <div onClick={() => { menuActions("f") }}>
                        <div>
                            {!xmark && <p><FontAwesomeIcon icon={faBars} /></p>}
                            {xmark && <p><FontAwesomeIcon icon={faX} /></p>}
                        </div>
                    </div>}
                    <div className="font-bold text-lg">
                        <h2>Shopkart</h2>
                    </div>
                    {values.isloggedIn && <div className="flex text-orange-600 bg-white py-1 px-2 rounded-full">
                        <p><FontAwesomeIcon icon={faUser} /></p>
                    </div>}
                    {!values.isloggedIn && <div>
                        <p className="border border-white py-1 px-3 rounded-md" onClick={() => { router.push("./login") }}>Login</p>
                    </div>}
                </div>

                <div className="hidden" ref={menuViewer} >
                    {values.isloggedIn && <div onClick={() => { menuActions() }}>
                        <div className="absolute top-3 left-4">
                            <p><FontAwesomeIcon icon={faX} /></p>
                        </div>
                    </div>}
                    <div>
                        <h2 className="font-bold text-xl py-5">Shopkart</h2>
                    </div>
                    <div className={router.pathname == "/" ? "py-2 ml-2 bg-white text-orange-600" : "py-2 ml-2 "}>
                        <p onClick={() => { router.push("./") }}>Home</p>
                    </div>
                    <div className={router.pathname == "/categories" ? "py-2 ml-2 bg-white text-orange-600" : "py-2 ml-2 "}>
                        <p>categories</p>
                    </div>
                    <div className={router.pathname == "/new" ? "py-2 ml-2 bg-white text-orange-600" : "py-2 ml-2 "}>
                        <p>What's New</p>
                    </div>
                    <div className={router.pathname == "/liked" ? "py-2 ml-2 bg-white text-orange-600" : "py-2 ml-2 "}>
                        <p>Liked</p>
                    </div>
                    <div className={router.pathname == "/cart" ? "py-2 ml-2 bg-white text-orange-600" : "py-2 ml-2 "}>
                        <p>Cart</p>
                    </div>
                    <div className="py-2 pl-2 flex justify-center">
                        <div className="bg-gray-100 w-64 h-10 flex items-center justify-between rounded-full pl-2">
                            <input className="bg-gray-100 text-orange-400" placeholder="Search Product" />
                            <p className=" text-orange-500 bg-gray-200 h-10 flex items-center w-10 justify-center rounded-full cursor-pointer"><FontAwesomeIcon icon={faMagnifyingGlass} /></p>
                        </div>
                    </div>
                    <div className={router.pathname == "/account" ? "py-2 ml-2 bg-white text-orange-600" : "py-2 ml-2 "}>
                        <p>Account</p>
                    </div>
                    {values.email == "thiru@gmail.com" && <div className={router.pathname == "/admin" ? "py-2 ml-2 bg-white text-orange-600" : "py-2 ml-2 "}>
                        <p onClick={() => { router.push("./admin") }}>Admin Dashboard</p>
                    </div>}
                </div>
                {!values.isloggedIn && <div>
                    <p className="border border-white py-1 px-3 rounded-md" onClick={() => { router.push("./login") }}>Login</p>
                </div>}

            </div>
            <div onClick={() => { menuActions("screen") }} className="">
                {children}
            </div>
        </div>


    )
}

export default Layout;