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
        {/* <Swiper
          effect={"coverflow"}
          grabCursor={true}
          centeredSlides={true}
          slidesPerView={"auto"}
          coverflowEffect={{
            rotate: 50,
            stretch: 0,
            depth: 1,
            modifier: 1,
            slideShadows: true,
          }}
          pagination={true}
          className="mySwiper"
        >
          {categories.map((cat) => (
            <SwiperSlide>
              <div className='border h-20 mx-3 w-30'>
                <p>{cat.categoryName}</p>
              </div>
            </SwiperSlide>
          ))}
        </Swiper> */}
        <button onClick={() => { clickHandler() }}>{values.isloggedIn ? "Logout" : "Login"}</button>
      </div>
    </Layout>
  )

}
