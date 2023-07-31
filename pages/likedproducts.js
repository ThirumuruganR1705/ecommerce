import newContext from "@/Context";
import axios from "axios";
import { useContext, useEffect, useState } from "react";
import Layout from "./Layout";

function LikedProducts() {

    const [products,setProducts] = useState([]);
    const [values,setValues] = useContext(newContext);

    const fetchProducts = async () =>{
        const res = await axios.post("./api/user?type=get",{
            email:values.email
        });
        console.log(res.data.message.liked);
    }

    useEffect(()=>{
        if(values.isloggedIn){
            fetchProducts();
        }
    },[])

    return ( 
        <Layout>
            Liked Products
        </Layout>
     );
}

export default LikedProducts;