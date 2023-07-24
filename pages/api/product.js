import connectMongo from '@/lib/mongoose';
export default product =async()=>{
    await connectMongo();
    console.log("working...");
}