import { useRouter } from "next/router";
import Layout from "../Layout";
import Image from "next/image";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faStar as nonFilled } from "@fortawesome/free-regular-svg-icons";
import { faBagShopping, faStar as filled, faTruck } from "@fortawesome/free-solid-svg-icons";
import headset from "@/public/headset.png";
import { useState } from "react";

function Productviewer() {
    const router = useRouter();
    const [count, setCount] = useState(1);
    const maxCount = 12;
    return (
        <Layout>
            <div className="flex md:flex-row flex-col gap-3 md:gap-10 pt-5">
                <div className="w-full md:w-1/2 py-2 flex flex-col gap-3">
                    <div className="flex justify-center border bg-gray-200 h-80 md:h-[35rem] w-full rounded-xl items-center">
                        <Image src={headset} width={500} height={500} className=" h-68 md:h-[25rem] w-64 md:w-[25rem]" />
                    </div>
                    <div className="flex justify-between">
                        <Image src={headset} width={500} height={500} className="h-16 md:h-32 w-16 md:w-32 bg-gray-200 rounded-xl cursor-pointer p-3" />
                        <Image src={headset} width={500} height={500} className="h-16 md:h-32 w-16 md:w-32 bg-gray-200 rounded-xl cursor-pointer p-3" />
                        <Image src={headset} width={500} height={500} className="h-16 md:h-32 w-16 md:w-32 bg-gray-200 rounded-xl cursor-pointer p-3" />
                        <Image src={headset} width={500} height={500} className="h-16 md:h-32 w-16 md:w-32 bg-gray-200 rounded-xl cursor-pointer p-3" />
                    </div>
                </div>
                <div className="w-full md:w-1/2 flex flex-col gap-4 md:px-10 md:py-5 text-center md:text-left">
                    <div className="border-b flex flex-col gap-3 pb-4 text-center md:text-left">
                        <div>
                            <h2 className="text-center md:text-left text-2xl font-semibold">Airpods - Max</h2>
                        </div>
                        <div>
                            <p className="text-xs text-gray-400">A perfect balance exhilarating high quality audio and effortless magic of Airpods.</p>
                        </div>
                        <div className="flex gap-1 items-center justify-center md:justify-normal">
                            <div>
                                <FontAwesomeIcon icon={filled} className="text-green-700" />
                                <FontAwesomeIcon icon={filled} className="text-green-700" />
                                <FontAwesomeIcon icon={filled} className="text-green-700" />
                                <FontAwesomeIcon icon={filled} className="text-green-700" />
                                <FontAwesomeIcon icon={nonFilled} className="text-green-700" />
                            </div>
                            <div className="">
                                <p className="text-xs text-gray-400">(142)</p>
                            </div>
                        </div>
                    </div>
                    <div className="flex flex-col gap-3 border-b pb-4">
                        <h3 className="text-xl">$499.00 or $49.99/month</h3>
                        <p className="text-xs text-gray-400">Suggested payments with 6 months special financing</p>
                    </div>
                    <div className="flex flex-col gap-3 border-b pb-4">
                        <div>
                            <p className="text-lg">Choose a color</p>
                        </div>
                        <div className="flex gap-3 justify-center md:justify-normal">
                            <div className="cursor-pointer">
                                <p className="h-4 w-8 rounded-t-full bg-red-500"></p>
                                <p className="h-4 w-8 rounded-b-full bg-red-300"></p>
                            </div>
                            <div className="cursor-pointer">
                                <p className="h-4 w-8 rounded-t-full bg-gray-300"></p>
                                <p className="h-4 w-8 rounded-b-full bg-black"></p>
                            </div>
                            <div className="cursor-pointer">
                                <p className="h-4 w-8 rounded-t-full bg-gray-400"></p>
                                <p className="h-4 w-8 rounded-b-full bg-gray-200"></p>
                            </div>
                            <div className="cursor-pointer">
                                <p className="h-4 w-8 rounded-t-full bg-indigo-600"></p>
                                <p className="h-4 w-8 rounded-b-full bg-gray-300"></p>
                            </div>
                        </div>
                    </div>
                    <div className="flex flex-col gap-4">
                        <div className="flex justify-center md:justify-normal items-center gap-3">
                            <div className="flex">
                                <div className="flex border bg-gray-100 py-1 px-2 rounded-full">
                                    <p className="py-1 px-3 cursor-pointer" onClick={() => { if (count != 1) { setCount(count - 1) } }}>-</p>
                                    <p className="py-1 px-3">{count}</p>
                                    <p className="py-1 px-3 cursor-pointer" onClick={() => { if (count != maxCount) { setCount(count + 1) } }}>+</p>
                                </div>
                            </div>
                            <div className="text-xs">
                                <p>Only <span className="text-orange-600">12 items </span>left.</p>
                                <p>Don't miss it.</p>
                            </div>
                        </div>
                        <div className="flex gap-3 justify-evenly md:justify-normal">
                            <button className="bg-green-700 text-white rounded-full py-2 px-5 md:py-3 md:px-16 md:hover:scale-105 transition-transform">Buy Now</button>
                            <button className="border py-2 px-5 md:py-3 md:px-16 border-green-700 text-green-700 rounded-full nd:hover:bg-green-700 md:hover:text-white">Add to cart</button>
                        </div>
                    </div>
                    <div className="border md:px-6 px-2 mb-2 py-3 md:py-5 flex flex-col gap-6">
                        <div className="flex flex-col md:flex-row gap-2">
                            <div>
                                <FontAwesomeIcon icon={faTruck} className="text-orange-700" />
                            </div>
                            <div>
                                <p>Free Delivery</p>
                                <p className="md:text-xs text-[11px]  md:border-b border-b-black font-extralight cursor-pointer">Enter your Postal Code for Delivery Availability</p>
                            </div>
                        </div>
                        <div className="flex flex-col md:flex-row gap-2">
                            <div>
                                <FontAwesomeIcon icon={faBagShopping} className="text-orange-700" />
                            </div>
                            <div>
                                <p>Return Delivery</p>
                                <p className="text-xs font-extralight">Free 30 days delivery Returns.<span className="border-b border-b-black cursor-pointer ">Details</span></p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <div className="py-5 ">
                <h2 className="pb-5 text-lg font-semibold">Specifications</h2>
                <div className="flex flex-col md:flex-row justify-between gap-5">
                    <div className="md:w-1/2 w-full bg-gray-300">
                        <h2 className="md:px-5 py-3 text-white font-bold text-lg">General Details</h2>
                        <table className="w-full md:border-spacing-1 md:border-separate">
                            <tr className="bg-white">
                                <th>Brand</th>
                                <td>Apple</td>
                            </tr>
                            <tr className="bg-white">
                                <th>Model</th>
                                <td>Model Airpods Max Wireless Headphones</td>
                            </tr>
                            <tr className="bg-white">
                                <th>price</th>
                                <td>$549.00</td>
                            </tr>
                            <tr className="bg-white">
                                <th>headphone Type</th>
                                <td>Over-Ear</td>
                            </tr>
                            <tr className="bg-white">
                                <th>Connectivity</th>
                                <td>Wireless</td>
                            </tr>
                        </table>
                    </div>
                    <div className="md:w-1/2 w-full bg-gray-300">
                        <h2 className="px-5 py-3  text-white font-bold text-lg">Product Details</h2>
                        <table className="w-full md:border-spacing-2 md:border-separate">
                            <tr className="bg-white">
                                <th>Brand</th>
                                <td>Apple</td>
                            </tr>
                            <tr className="bg-white">
                                <th>Model</th>
                                <td>Model Airpods Max Wireless Headphones</td>
                            </tr>
                            <tr className="bg-white">
                                <th>price</th>
                                <td>$549.00</td>
                            </tr>
                            <tr className="bg-white">
                                <th>headphone Type</th>
                                <td>Over-Ear</td>
                            </tr>
                            <tr className="bg-white">
                                <th>Connectivity</th>
                                <td>Wireless</td>
                            </tr>
                        </table>
                    </div>
                </div>
            </div>
        </Layout>
    );
}

export default Productviewer;