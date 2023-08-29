import Layout from '@/pages/Layout';
import newContext from '@/Context';
import { useRouter } from 'next/router';
import { useContext, useEffect, useState } from 'react';
import "swiper/swiper-bundle.min.css";
import "swiper/swiper.min.css";
import SwiperCore, { Autoplay, Navigation, Pagination } from "swiper";
import { Swiper, SwiperSlide } from "swiper/react";
import axios from 'axios';
import { useRef } from 'react';
import Productcomponent from './Components/productComponent';
import SpecialOffer from './Components/Cards/specialOffer';
import Categories from './categories';

export default function Home() {

  const router = useRouter();
  const [values, setValues] = useContext(newContext);
  const [categories, setCategories] = useState([]);

  const fetchCategories = async () => {
    // const res = await axios.get("./api/category");
    // console.log(res.data.message);
    const res = await axios.get("http://localhost:1337/api/categories");
    console.log(res.data.data);
    setCategories(() => { return res.data.data })
  }

  useEffect(() => {
    fetchCategories();
  }, [])

  return (
    <Layout>
      <div>
        <SpecialOffer />
        <div className='md:hidden'>
          <Categories />
        </div>
        <Productcomponent />
      </div>
    </Layout>
  )

}
