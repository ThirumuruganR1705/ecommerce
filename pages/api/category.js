import connectMongo from "@/lib/mongoose";
import Category from "@/models/category";

const categories = async (req, res) => {
    await connectMongo();
    if (req.method == "POST") {
        const { categoryName, parentCategory } = req.body;
        console.log("started");
        const result = await Category.create({
            categoryName:categoryName,
            parentCategory:parentCategory
        });
        return res.status(200).json({ message: "Created" });
    } else if (req.method == "GET") {
        const result = await Category.find();
        return res.status(200).json({ message: result });
    } else if (req.method == "DELETE"){
        const { key } = req.body;
        console.log(key);
        const result = await Category.findByIdAndDelete(key);
        return res.status(200).json({ message: req.body});
    }
}

export default categories;