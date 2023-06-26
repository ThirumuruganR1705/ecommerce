import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faTwitter, faFacebook, faGoogle } from "@fortawesome/free-brands-svg-icons";
import { faEnvelope, faLock, faUnlockKeyhole, faUser } from "@fortawesome/free-solid-svg-icons";
import { useContext, useState } from "react";
import { useSession, signIn, signOut } from "next-auth/react";
import { useRouter } from "next/router";
import axios from 'axios';
import newContext from "@/Context";

const login = () => {

    const [reg, setReg] = useState(false);
    const router = useRouter();
    const [values,setValues] = useContext(newContext);
    const [inputs,setInputs] = useState({
        username:"",
        email:"",
        password:""
    });
    console.log(inputs);

    const loginRequest=async()=>{
        const res = await axios.post("http://localhost:3000/api/user",{
            username:inputs.username,
            email:inputs.email,
            password:inputs.password
        }).then((data)=>{
            console.log(data.data.message[0]);
            setValues({email:inputs.email,isloggedIn:true});
            router.push("/");
        }).catch((e)=>{
            console.log(e);
        })
    }

    return (

        <div className="md:p-8 px-2 border h-screen w-screen bg-blue-300 flex justify-center items-center">
            <div className="flex border md:p-16 p-4 gap-3 bg-white rounded-md relative h-auto pb-16">
                <div className="absolute md:right-0 md:top-0 md:p-3 bottom-0 py-3">
                    <p className="">{!reg ? "New User? " : "Existing User? "}<span className="text-blue-400 cursor-pointer" onClick={() => { setReg(!reg) }}>{!reg ? "Sign Up" : "Sign In"}</span></p>
                </div>
                <div className="w-1/2 h-full hidden md:block">
                    <img src="https://brandesignhub.com/images/quote_banner.png" className="w-full" />
                </div>
                <div className="md:w-1/2">
                    <p className="text-2xl md:text-4xl font-bold md:tracking-wide mb-1">Welcome Back!</p>
                    <p className="text-md md:text-lg text-gray-500 ">Login to continue</p>
                    <div className={!reg ? "flex flex-col gap-5 mt-5 md:mt-10" : "flex flex-col gap-1 mt-5 md:mt-10"}>
                        {reg && <div className="md:mr-20 h-12 border flex pl-4 gap-4">
                            <div className="h-12 flex items-center">
                                <FontAwesomeIcon icon={faUser} size="lg" />
                            </div>
                            <input className="text-lg w-full" type="email" placeholder="Username" onChange={(e)=>{setInputs((pre)=>({...pre,username:e.target.value}))}} />
                        </div>}
                        <div className="md:mr-20 h-12 border flex pl-4 gap-4">
                            <div className="h-12 flex items-center">
                                <FontAwesomeIcon icon={faEnvelope} size="lg" />
                            </div>
                            <input className="text-lg w-full" type="email" placeholder="Email" onChange={(e)=>{setInputs((pre)=>({...pre,email:e.target.value}))}} />
                        </div>
                        <div className="md:mr-20 h-12 border flex px-4 gap-4">
                            <div className="h-12 flex items-center">
                                <FontAwesomeIcon icon={faLock} size="lg" />
                            </div>
                            <input className="text-lg w-full" type="password" placeholder="Password" onChange={(e)=>{setInputs((pre)=>({...pre,password:e.target.value}))}} />
                        </div>
                        <div className="md:mt-5 flex gap-5">
                            <button className="px-4 py-2 md:px-16 md:py-5 border bg-blue-400 hover:bg-blue-500 text-white rounded-full font-bold" onClick={()=>{loginRequest()}}>{!reg ? "LOGIN" : "SIGN IN"}</button>
                            {!reg && <a className="flex items-center text-xs md:text-sm text-gray-500 cursor-pointer">FORGET PASSWORD?</a>}
                        </div>
                        <div className="flex gap-12 md:mt-4">
                            <p className="md:p-2">{!reg ? "Login with" : "Sign In With"}</p>
                            <div className="flex md:gap-3 gap-5 ">
                                <div className="md:border md:p-2" onClick={()=>{signIn("google");}}><FontAwesomeIcon icon={faGoogle} size="xl" style={{ color: "#2b3a55", }} className="cursor-pointer" /></div>
                                <div className="md:border md:p-2" onClick={()=>{signIn("facebook")}}><FontAwesomeIcon icon={faFacebook} size="xl" style={{ color: "#2b3a55", }} className="cursor-pointer" /></div>
                                <div className="md:border md:p-2" onClick={()=>{signIn("twitter")}}><FontAwesomeIcon icon={faTwitter} size="xl" style={{ color: "#2b3a55", }} className="cursor-pointer" /></div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>

    )
}

export default login;