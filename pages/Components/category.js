import CategoryCard from "./Cards/categoryCard";
import shoe from "@/public/shoe.png";
import headphone from "@/public/headset.png";
import furniture from "@/public/furniture.png";
import bag from "@/public/bag.png";
import laptop from "@/public/laptop.png";
import book from "@/public/book.png";


function Category() {
    return (
            <div className="md:px-12 md:h-[28rem] bg-white">
                <div className="text-3xl border-b  py-4 hidden md:block" >
                    Popular Categories
                </div>
                <div className="md:py-5 grid grid-cols-1 gap-2 md:gap-4 md:grid-cols-2">
                    <CategoryCard img={furniture} name="Furnitures" count="297" />
                    <CategoryCard img={headphone} name="Headphones" count="182"/>
                    <CategoryCard img={shoe} name="Shoes" count="234"/>
                    <CategoryCard img={bag} name="Bags" count="109"/>
                    <CategoryCard img={laptop} name="Laptops and Mobiles" count="319"/>
                    <CategoryCard img={book} name="Books" count="1096"/>
                </div>
            </div>
    );
}

export default Category;