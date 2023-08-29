import Image from "next/image";
import img from "@/public/headphone.png";

function SpecialOffer() {

    return (
        <div className="relative">
            <div>
                <div className="mt-2 bg-red-50 flex md:px-10 px-3 py-2 md:py-6 md:relative">
                    <div className="w-3/4 md:h-40 flex flex-col justify-evenly h-14">
                        <div className="flex justify-center w-full text-center">
                            <h2 className="md:text-3xl text-xs md:font-extrabold text-green-700 md:tracking-wide">
                                Grab Upto 50% Off On Selected Headphone
                            </h2>
                        </div>
                        <div className="flex justify-center">
                            <button className="bg-green-700 md:text-base text-[8px] text-white md:py-2 md:px-6 px-2 rounded-full">Buy Now</button>
                        </div>
                    </div>
                    <div className="w-1/4 flex justify-center md:absolute top-0 right-20">
                        <Image src={img} height={500} width={500} alt="headphone" className="md:h-52 h-14 w-14 md:w-80" />
                    </div>
                </div>
            </div>

        </div>
    );
}

export default SpecialOffer;