import connectMongo from '@/lib/mongoose';
import Products from '@/models/product';
const product = async (req, res) => {
    await connectMongo();
    if (req.method == "POST") {
        const { productName,category,description,price,Images } = req.body;
        const result = await Products.create({
            productName: productName,
            category: category,
            description:description ,
            price: price,
            Images: Images,
        }).then(()=>{
            res.status(200).json({message:"Uploaded"});
        }).catch((e)=>{
            res.status(403).json({message:e});
        })
        console.log("Uploaded");
    }

    else if(req.method==="GET"){
        const result = await Products.find();
        res.status(200).json({message:result});
    }

}

export default product;