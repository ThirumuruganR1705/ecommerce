import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faHouse, faCartShopping, faTruckFast, faBagShopping, faHeart,faScrewdriverWrench } from "@fortawesome/free-solid-svg-icons";
import { useContext } from "react";
import newContext from "@/Context";
import { useRouter } from "next/router";
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

const Layout = ({ children }) => {
    const [values, setValues] = useContext(newContext);
    const router = useRouter();
    const notify = () => toast.success("logged out");
    const clickHandler = () => {
        if (values.isloggedIn) {
            setValues({ email: "", isloggedIn: false });           
        } else {
            router.push("/login");
        }
    }
    return (
        <div className="flex gap-2 h-[100vh] w-screen relative flex-col md:flex-row justify-between">
            <div className="bg-blue-700 h-full w-[14em] p-3 md:flex flex-col justify-between hidden ">
                <div className="flex flex-col gap-7 items-center w-full">
                    <div className="text-center py-8">
                        <h2 className="font-bold text-white cursor-pointer" onClick={() => { router.push("/") }}>SHOPKART</h2>
                    </div>
                    <div className="md:flex flex-col gap-7 text-white pl-[2.5em] hidden">
                        <p onClick={() => { router.push("/") }} className={"pl-1 gap-2 py-2 w-[11.5em] flex cursor-pointer "+(router.asPath == "/" ? "bg-white rounded-l-md text-blue-700" : "")}><FontAwesomeIcon icon={faHouse} size="lg" />Home</p>
                        <p onClick={() => { router.push("/products") }} className={"pl-1 gap-2 py-2 w-[11.5em] flex cursor-pointer "+(router.asPath == "/products" ? "bg-white rounded-l-md text-blue-700" : "")}  ><FontAwesomeIcon icon={faBagShopping} size="lg" />Products</p>
                        <p onClick={() => { router.push("/orders") }} className={"pl-1 gap-2 py-2 w-[11.5em] flex cursor-pointer "+(router.asPath == "/orders" ? "bg-white rounded-l-md text-blue-700" : "")}  ><FontAwesomeIcon icon={faTruckFast} size="lg" />Orders</p>
                        <p onClick={() => { router.push("/cart") }} className={"pl-1 gap-2 py-2 w-[11.5em] flex cursor-pointer "+(router.asPath == "/cart" ? "bg-white rounded-l-md text-blue-700" : "")}  ><FontAwesomeIcon icon={faCartShopping} size="lg" />Cart</p>
                        <p onClick={() => { router.push("/liked") }} className={"pl-1 gap-2 py-2 w-[11.5em] flex cursor-pointer "+(router.asPath == "/liked" ? "bg-white rounded-l-md text-blue-700" : "")}  ><FontAwesomeIcon icon={faHeart} size="lg" />Liked</p>
                        {values.email=="thiru@gmail.com" && <p onClick={() => { router.push("/admin") }} className={"pl-1 gap-2 py-2 w-[11.5em] flex cursor-pointer "+(router.asPath == "/admin" ? "bg-white rounded-l-md text-blue-700" : "")}  ><FontAwesomeIcon icon={faScrewdriverWrench} size="lg" />Admin</p>}
                    </div>
                </div>
                <div className="flex justify-center">
                    <button onClick={() => { clickHandler() }} className={!values.isloggedIn ? "px-7 py-2 bg-white rounded-full" : "px-7 py-2 bg-red-400 text-white  rounded-full"}>{values.isloggedIn ? "Logout" : "Login"}</button>
                </div>
            </div>
            
            <div className=" w-full">
                <div className="h-12 shadow-sm flex items-center font-bold mb-3 px-2 justify-between bg-blue-800 text-white md:hidden">
                    <h1>SHOPKART</h1>
                    <p><FontAwesomeIcon icon={faCartShopping} size='lg'/></p>
                </div>
                {children}
            </div>
            <div className="sticky block bottom-0 md:hidden bg-white  shadow-lg">
                <div className="flex justify-evenly py-1 shadow-inner">
                    <p onClick={() => { router.push("/products") }} className={router.asPath == "/products" ? "text-blue-800" : "p-3 "}  ><FontAwesomeIcon icon={faBagShopping} size="lg" className={router.asPath == "/products" ?"h-10":""} /></p>
                    <p onClick={() => { router.push("/orders") }} className={router.asPath == "/orders" ? "text-blue-800" : "p-3 "}  ><FontAwesomeIcon icon={faTruckFast} size="lg" className={router.asPath == "/orders" ?"h-10":""} /></p>
                    <p onClick={() => { router.push("/") }} className={router.asPath == "/" ? "text-blue-800" : "p-3 "}><FontAwesomeIcon icon={faHouse} className={router.asPath == "/" ?"h-10":""} size="lg"/></p>
                    <p onClick={() => { router.push("/cart") }} className={router.asPath == "/cart" ? "text-blue-800 " : "p-3 "}  ><FontAwesomeIcon icon={faCartShopping} size="lg" className={router.asPath == "/cart" ?"h-10":""} /></p>
                    <p onClick={() => { router.push("/liked") }} className={router.asPath == "/liked" ? "text-blue-800" : "p-3 "}  ><FontAwesomeIcon icon={faHeart} size="lg" className={router.asPath == "/liked" ?"h-10":""} /></p>
                </div>
            </div>
        </div>
    )
}

export default Layout;