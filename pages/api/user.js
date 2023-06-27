import connectMongo from "@/lib/mongoose";
import { User } from "@/models/user";

export default async function user(req, res) {
    if (req.method == "POST") {
        console.log(req.body);
        const { username, email, password } = req.body;
        await connectMongo();
        if (username != "") {
            const existingUser = await User.find({email:email});
            console.log(existingUser.length);
            if(existingUser.length!=0){
                return res.status(409).json({message:"User Already Exists"});
            }else{
                const user = await User.create({
                    username: username,
                    email: email,
                    password: password
                });
                console.log("created");
                return res.status(201).json({ message: "created" });
            }    
        }else{
            const existingUser = await User.find({email:email});
            if(existingUser.length!=0){
                if(existingUser.password==password){
                    return res.status(200).json({message:existingUser});
                }else{
                    return res.status(401).json({message:"Invalid Password"});
                }
                
            }else{
                return res.status(404).json({message:"User Doesn't Exists"});
            }
        }
    } 
}