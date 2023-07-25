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
    const [xmark,setXmark] = useState(false);
    const notify = () => toast.success("logged out");
    const clickHandler = () => {
        if (values.isloggedIn) {
            setValues({ email: "", isloggedIn: false });
        } else {
            router.push("/login");
        }
    }

    const accountMenu = () => {
        console.log(accref.current.className);
        if (accref.current.className == "hidden") {
            accref.current.className = "absolute top-16 bg-orange-400 w-28 text-center text-white";
        } else {
            accref.current.className = "hidden";
        }
    }

    const menuActions = () => {
        if (menuViewer.current.className == "hidden") {
            menuViewer.current.className = "absolute top-12 left-0 w-full bg-orange-600 text-center";
            setXmark(true);
        } else {
            menuViewer.current.className = "hidden";
            setXmark(false);
        }
        console.log(menuViewer.current.className);
    }

    const logoutHandler = () => {
        window.location.reload();
    }

    return (
        // <div className="flex gap-2 h-[100vh] w-screen relative flex-col md:flex-row justify-between">
        //     <div className="bg-blue-700 h-full w-[14em] p-3 md:flex flex-col justify-between hidden ">
        //         <div className="flex flex-col gap-7 items-center w-full">
        //             <div className="text-center py-8">
        //                 <h2 className="font-bold text-white cursor-pointer" onClick={() => { router.push("/") }}>SHOPKART</h2>
        //             </div>
        //             <div className="md:flex flex-col gap-7 text-white pl-[2.5em] hidden">
        //                 <p onClick={() => { router.push("/") }} className={"pl-1 gap-2 py-2 w-[11.5em] flex cursor-pointer "+(router.asPath == "/" ? "bg-white rounded-l-md text-blue-700" : "")}><FontAwesomeIcon icon={faHouse} size="lg" />Home</p>
        //                 <p onClick={() => { router.push("/products") }} className={"pl-1 gap-2 py-2 w-[11.5em] flex cursor-pointer "+(router.asPath == "/products" ? "bg-white rounded-l-md text-blue-700" : "")}  ><FontAwesomeIcon icon={faBagShopping} size="lg" />Products</p>
        //                 <p onClick={() => { router.push("/orders") }} className={"pl-1 gap-2 py-2 w-[11.5em] flex cursor-pointer "+(router.asPath == "/orders" ? "bg-white rounded-l-md text-blue-700" : "")}  ><FontAwesomeIcon icon={faTruckFast} size="lg" />Orders</p>
        //                 <p onClick={() => { router.push("/cart") }} className={"pl-1 gap-2 py-2 w-[11.5em] flex cursor-pointer "+(router.asPath == "/cart" ? "bg-white rounded-l-md text-blue-700" : "")}  ><FontAwesomeIcon icon={faCartShopping} size="lg" />Cart</p>
        //                 <p onClick={() => { router.push("/liked") }} className={"pl-1 gap-2 py-2 w-[11.5em] flex cursor-pointer "+(router.asPath == "/liked" ? "bg-white rounded-l-md text-blue-700" : "")}  ><FontAwesomeIcon icon={faHeart} size="lg" />Liked</p>
        //                 {values.email=="thiru@gmail.com" && <p onClick={() => { router.push("/admin") }} className={"pl-1 gap-2 py-2 w-[11.5em] flex cursor-pointer "+(router.asPath == "/admin" ? "bg-white rounded-l-md text-blue-700" : "")}  ><FontAwesomeIcon icon={faScrewdriverWrench} size="lg" />Admin</p>}
        //             </div>
        //         </div>
        //         <div className="flex justify-center">
        //             <button onClick={() => { clickHandler() }} className={!values.isloggedIn ? "px-7 py-2 bg-white rounded-full" : "px-7 py-2 bg-red-400 text-white  rounded-full"}>{values.isloggedIn ? "Logout" : "Login"}</button>
        //         </div>
        //     </div>

        //     <div className=" w-full">
        //         <div className="h-12 shadow-sm flex items-center font-bold mb-3 px-2 justify-between bg-blue-800 text-white md:hidden">
        //             <h1>SHOPKART</h1>
        //             <p><FontAwesomeIcon icon={faCartShopping} size='lg'/></p>
        //         </div>
        //         {children}
        //     </div>
        //     <div className="sticky block bottom-0 md:hidden bg-white  shadow-lg">
        //         <div className="flex justify-evenly py-1 shadow-inner">
        //             <p onClick={() => { router.push("/products") }} className={router.asPath == "/products" ? "text-blue-800" : "p-3 "}  ><FontAwesomeIcon icon={faBagShopping} size="lg" className={router.asPath == "/products" ?"h-10":""} /></p>
        //             <p onClick={() => { router.push("/orders") }} className={router.asPath == "/orders" ? "text-blue-800" : "p-3 "}  ><FontAwesomeIcon icon={faTruckFast} size="lg" className={router.asPath == "/orders" ?"h-10":""} /></p>
        //             <p onClick={() => { router.push("/") }} className={router.asPath == "/" ? "text-blue-800" : "p-3 "}><FontAwesomeIcon icon={faHouse} className={router.asPath == "/" ?"h-10":""} size="lg"/></p>
        //             <p onClick={() => { router.push("/cart") }} className={router.asPath == "/cart" ? "text-blue-800 " : "p-3 "}  ><FontAwesomeIcon icon={faCartShopping} size="lg" className={router.asPath == "/cart" ?"h-10":""} /></p>
        //             <p onClick={() => { router.push("/liked") }} className={router.asPath == "/liked" ? "text-blue-800" : "p-3 "}  ><FontAwesomeIcon icon={faHeart} size="lg" className={router.asPath == "/liked" ?"h-10":""} /></p>
        //         </div>
        //     </div>
        // </div>

        <div className="lg:mx-12  h-screen">
            <div className="md:flex justify-between h-16 items-center  px-4 hidden bg-white relative">
                <div className="p">
                    <h2 className="font-bold text-xl text-orange-400 cursor-pointer">Shopkart</h2>
                </div>
                <div className="flex gap-8">
                    <div className="cursor-pointer">
                        <p>Home</p>
                    </div>
                    <div className="flex gap-2 cursor-pointer">
                        <p>categories</p>
                        {/* <p><FontAwesomeIcon icon={faAngleDown} /></p> */}
                    </div>
                    <div className="cursor-pointer">
                        <p>What's New</p>
                    </div>
                    <div className="cursor-pointer">
                        <p>Liked</p>
                    </div>
                    {values.email == "thiru@gmail.com" && <div className="cursor-pointer">
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
            <div className="md:hidden flex justify-between h-12 bg-orange-600 items-center text-white px-2 relative">
                <div className="font-bold text-lg">
                    <h2>Shopkart</h2>
                </div>
                {values.isloggedIn && <div onClick={() => { menuActions() }}>
                    <div>
                        {!xmark &&<p><FontAwesomeIcon icon={faBars} /></p>}
                        {xmark &&<p><FontAwesomeIcon icon={faX} /></p>}
                    </div>
                </div>}
                <div className="hidden" ref={menuViewer} >
                    <div className="py-2 pl-2">
                        <p className={router.pathname=="/"?"text-orange-200":""}>Home</p>
                    </div>
                    <div className="py-2 pl-2">
                        <p className={router.pathname=="/categories"?"text-orange-200":""}>categories</p>
                    </div>
                    <div className="py-2 pl-2">
                        <p className={router.pathname=="/new"?"text-orange-200":""}>What's New</p>
                    </div>
                    <div className="py-2 pl-2">
                        <p className={router.pathname=="/liked"?"text-orange-200":""}>Liked</p>
                    </div>
                    <div className="py-2 pl-2">
                        <p className={router.pathname=="/cart"?"text-orange-200":""}>Cart</p>
                    </div>
                    <div className="py-2 pl-2 flex justify-center">
                        <div className="bg-gray-100 w-64 h-10 flex items-center justify-between rounded-full pl-2">
                            <input className="bg-gray-100 text-orange-400" placeholder="Search Product" />
                            <p className=" text-orange-500 bg-gray-200 h-10 flex items-center w-10 justify-center rounded-full cursor-pointer"><FontAwesomeIcon icon={faMagnifyingGlass} /></p>
                        </div>
                    </div>
                    <div className="py-2 pl-2">
                        <p>Account</p>
                    </div>
                    {values.email = "thiru@gmail.com" && <div className="py-2 pl-2">
                        <p className={router.pathname=="/admin"?"text-orange-200":""} onClick={()=>{router.push("./admin")}}>Admin Dashboard</p>
                    </div>}
                </div>
                {!values.isloggedIn && <div>
                    <p className="border border-white py-1 px-3 rounded-md" onClick={() => { router.push("./login") }}>Login</p>
                </div>}
            </div>
            <div>
                {children}
            </div>
        </div>


    )
}

export default Layout;