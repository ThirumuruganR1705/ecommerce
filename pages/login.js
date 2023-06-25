import { FontawesomeObject } from "@fortawesome/fontawesome-svg-core";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faGoogle } from "@fortawesome/free-brands-svg-icons";
import { faFacebook } from "@fortawesome/free-brands-svg-icons";
import { faTwitter } from "@fortawesome/free-brands-svg-icons";

const login = () => {
    return (
        <div className="md:p-8 px-2 border h-screen w-screen bg-blue-300 flex justify-center items-center">
            <div className="flex border md:p-16 p-4 gap-3 bg-white rounded-md">
                <div className="w-1/2 h-full hidden md:block">
                    <img src="https://brandesignhub.com/images/quote_banner.png" className="w-full" />
                </div>
                <div className="md:w-1/2">
                    <p className="text-2xl md:text-4xl font-bold md:tracking-wide mb-1">Welcome Back!</p>
                    <p className="text-md md:text-lg text-gray-500 ">Login to continue</p>
                    <div className="flex flex-col gap-5 mt-5 md:mt-10">
                        <div className="md:mr-20 h-12 border flex px-4 gap-4">
                            <div className="h-12 flex items-center">
                                <svg xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor" className="w-6 h-6">
                                    <path strokeLinecap="round" strokeLinejoin="round" d="M15.75 6a3.75 3.75 0 11-7.5 0 3.75 3.75 0 017.5 0zM4.501 20.118a7.5 7.5 0 0114.998 0A17.933 17.933 0 0112 21.75c-2.676 0-5.216-.584-7.499-1.632z" />
                                </svg>
                            </div>
                            <input className="text-lg " placeholder="Username" />
                        </div>
                        <div className="md:mr-20 h-12 border flex px-4 gap-4">
                            <div className="h-12 flex items-center">
                                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" class="w-6 h-6">
                                    <path fill-rule="evenodd" d="M12 1.5a5.25 5.25 0 00-5.25 5.25v3a3 3 0 00-3 3v6.75a3 3 0 003 3h10.5a3 3 0 003-3v-6.75a3 3 0 00-3-3v-3c0-2.9-2.35-5.25-5.25-5.25zm3.75 8.25v-3a3.75 3.75 0 10-7.5 0v3h7.5z" clip-rule="evenodd" />
                                </svg>
                            </div>
                            <input className="text-lg" type="password" placeholder="Password" />
                        </div>
                        <div className="md:mt-5 flex gap-5">
                            <button className="px-4 py-2 md:px-16 md:py-5 border bg-blue-400 text-white rounded-full font-bold">LOGIN</button>
                            <a className="flex items-center text-xs md:text-sm text-gray-500 cursor-pointer">FORGET PASSWORD?</a>
                        </div>
                        <div className="flex gap-12 md:mt-4">
                            <p>Login with</p>
                            <div className="flex md:gap-10 gap-5 ">
                                <div><FontAwesomeIcon icon={faGoogle} size="xl" style={{color: "#2b3a55",}} className="cursor-pointer"/></div>
                                <div><FontAwesomeIcon icon={faFacebook} size="xl" style={{color: "#2b3a55",}} className="cursor-pointer"/></div>
                                <div><FontAwesomeIcon icon={faTwitter} size="xl" style={{color: "#2b3a55",}} className="cursor-pointer"/></div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default login;