import connectMongo from '@/lib/mongoose';
import Products from '@/models/product';
const product = async (req, res) => {
    await connectMongo();
    if (req.method == "POST") {
        // console.log(req.body);
        const { productName,category,description,price,Images } = req.body;
        console.log("he");
        console.log(Images);
        const result = await Products.create({
            productName: productName,
            category: category,
            description:description ,
            price: price,
            Images: Images,
        });
        console.log("Uploaded");

        res.status(200).json({message:"Uploaded"});

    }
}

export default product;