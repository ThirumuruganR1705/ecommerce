import connectMongo from "@/lib/mongoose";
import Category from "@/models/category";

const categories = async (req, res) => {
    await connectMongo();
    if (req.method == "POST") {
        if (req.query.query == "del") {
            const { key } = req.body;
            const result = await Category.findByIdAndDelete(key).then(() => {
                return res.status(200).json({ message: "Deleted" });
            }).catch((e) => {
                return res.status(404).json({ message: "Created" });
            })

        }
        else {
            const { categoryName, parentCategory ,image} = req.body;
            const result = await Category.create({
                categoryName: categoryName,
                parentCategory: parentCategory,
                image:image
            });
            return res.status(200).json({ message: "Created" });
        }
    } else if (req.method == "GET") {
        if (req.query.type == "all") {
            console.log("hiiii");
            const result = await Category.find();
            return res.status(200).json({ message: result });
        }else if(req.query.type == "parent"){
            const result = await Category.find({parentCategory:"1"});
            console.log("hi");
            return res.status(200).json({ message: result });
        }
    } else if (req.method == "DELETE") {
        const { key } = req.body;
        const result = await Category.findByIdAndDelete(key);
        return res.status(200).json({ message: req.body });
    }
}

export default categories;