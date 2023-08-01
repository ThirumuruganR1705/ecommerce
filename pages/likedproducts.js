import newContext from "@/Context";
import axios from "axios";
import { useContext, useEffect, useState ,useRef} from "react";
import Layout from "./Layout";
import Productcard from "./Components/productcard";
import { BeatLoader } from "react-spinners";

function LikedProducts() {

    const [products, setProducts] = useState([]);
    const loaderref = useRef();
    const [values, setValues] = useContext(newContext);
    console.log(products);
    var i=0;

    const fetchProducts = async () => {
        loaderref.current.className = "flex w-full justify-center items-center h-[70vh]";
        const res = await axios.post("./api/user?type=get", {
            email: values.email
        });
        console.log(res.data.message.liked);
        while ( i < res.data.message.liked.length) {
            const result = await axios.post("./api/product?type=get", {
                id: res.data.message.liked[i]
            });
            console.log(i);
            setProducts((pre) =>  [...pre, result.data.message] );
            i++;
        }
        loaderref.current.className = "hidden";
    }

    useEffect(() => {
        if (values.isloggedIn) {
            fetchProducts();
        }
    }, [])

    return (
        <Layout>
            Liked Products
            <div className="grid gap-2 p-2 grid-cols-2 md:grid-cols-4 md:flex justify-between">
                {products.map((data) => (
                    <div key={data._id}>
                        <Productcard productName={data.productName} price={data.price} image={data.Images[0]} id={data._id} page="liked" />
                    </div>
                ))}
            </div>
            <div className="hidden" ref={loaderref} >
                <BeatLoader color="#fc7b03" />
            </div>
        </Layout>
    );
}

export default LikedProducts;