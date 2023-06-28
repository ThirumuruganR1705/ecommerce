import connectMongo from "@/lib/mongoose";
import Category from "@/models/category";

const categories = async (req, res) => {
    await connectMongo();
    if (req.method == "POST") {
        const { categoryName, parentCategory } = req.body;
        if (parentCategory != "") {
            const result = await Category.create({
                categoryName: categoryName,
                parentCategory: parentCategory
            });
        }else{
            const result = await Category.create({
                categoryName:categoryName,
                parentCategory:" "
            });
        }
        return res.status(200).json({ message: "Created" });
    } else if (req.method == "GET") {
        const result = await Category.find().populate("parentCategory");
        return res.status(200).json({ message: result });
    }
}

export default categories;