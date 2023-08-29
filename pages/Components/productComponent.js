import Productcard from "./Cards/productcard";
import img from "@/public/headset.png";

function ProductComponent() {
    return ( 
        <div className="mt-2">
            <div>
                <h2 className="text-sm md:text-base font-semibold">
                    Products For You!
                </h2>
            </div>
            <div className="mt-2 flex flex-wrap justify-between gap-4">
                <Productcard image={img} productName="Headphones" price="1999" desc="A perfect balance of high-fidelity audio"/>
                <Productcard image={img} productName="Headphones" price="1999" desc="A perfect balance of high-fidelity audio"/>
                <Productcard image={img} productName="Headphones" price="1999" desc="A perfect balance of high-fidelity audio"/>
                <Productcard image={img} productName="Headphones" price="1999" desc="A perfect balance of high-fidelity audio"/>
                <Productcard image={img} productName="Headphones" price="1999" desc="A perfect balance of high-fidelity audio"/>
                <Productcard image={img} productName="Headphones" price="1999" desc="A perfect balance of high-fidelity audio"/>
                <Productcard image={img} productName="Headphones" price="1999" desc="A perfect balance of high-fidelity audio"/>
                <Productcard image={img} productName="Headphones" price="1999" desc="A perfect balance of high-fidelity audio"/>
                <Productcard image={img} productName="Headphones" price="1999" desc="A perfect balance of high-fidelity audio"/>
                <Productcard image={img} productName="Headphones" price="1999" desc="A perfect balance of high-fidelity audio"/>
            </div>
        </div>
     );
}

export default ProductComponent;