
import { Swiper, SwiperSlide } from 'swiper/react';
import { Pagination } from 'swiper/modules';
// Import Swiper styles
import 'swiper/css';
import 'swiper/css/pagination';

import slide1 from '../../../assets/home/slide1.jpg'
import slide2 from '../../../assets/home/slide2.jpg'
import slide3 from '../../../assets/home/slide3.jpg'
import slide4 from '../../../assets/home/slide4.jpg'
import slide5 from '../../../assets/home/slide5.jpg'
import SectionTitle from '../../../Components/SectionTitle/SectionTitle';

const Category = () => {
  return (
    <>
      <section>
        <SectionTitle 
         subHeading={'from 10am to 11pm'}
         heading={'Order Online'}
         >
            
        </SectionTitle>
        <Swiper
          slidesPerView={4}
          spaceBetween={2}
          pagination={{
            clickable: true,
          }}
          modules={[Pagination]}
          className="mySwiper max-w-screen-xl mx-auto mb-20 "
        >
          <SwiperSlide><img src={slide1} alt='' /><h3 className='text-4xl uppercase text-white text-center -mt-16 mb-5 mr-10'>pizza</h3></SwiperSlide>
          <SwiperSlide><img src={slide2} alt='' /><h3 className='text-4xl uppercase text-white text-center -mt-16 mb-5 mr-10'>pizza</h3></SwiperSlide>
          <SwiperSlide><img src={slide3} alt='' /><h3 className='text-4xl uppercase text-white text-center -mt-16 mb-5 mr-10'>pizza</h3></SwiperSlide>
          <SwiperSlide><img src={slide4} alt='' /><h3 className='text-4xl uppercase text-white text-center -mt-16 mb-5 mr-10'>pizza</h3></SwiperSlide>
          <SwiperSlide><img src={slide5} alt='' /><h3 className='text-4xl uppercase text-white text-center -mt-16 mb-5 mr-10'>pizza</h3></SwiperSlide>


        </Swiper>
      </section>
    </>
  );
};

export default Category;