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
import Productcomponent from './Components/productcomponents';

export default function Home() {

  const router = useRouter();
  const [values, setValues] = useContext(newContext);
  const [categories, setCategories] = useState([]);

  const fetchCategories = async () => {
    const res = await axios.get("./api/category");
    console.log(res.data.message);
    setCategories(() => { return res.data.message })
  }

  // const windowsixe = useRef(window.innerWidth)

  // console.log(windowsixe.current);

  useEffect(() => {
    fetchCategories();
  }, [])

  const clickHandler = () => {
    if (values.isloggedIn) {
      setValues({ email: "", isloggedIn: false });
    } else {
      router.push("/login");
    }
  }

  return (
    <Layout>
      <div>
        <Productcomponent/>
      </div>
    </Layout>
  )

}
