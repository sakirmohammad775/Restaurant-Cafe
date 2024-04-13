import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/navigation';
import { Navigation } from 'swiper/modules';
import SectionTitle from '../../../Components/SectionTitle/SectionTitle';
import { useEffect, useState } from 'react';

import '@smastrom/react-rating/style.css'
import { Rating } from '@smastrom/react-rating';

const Testimonials = () => {
    const [review, setReview] = useState([])
    useEffect(() => {
        fetch('reviews.json')
            .then(res => res.json())
            .then(data => setReview(data))
    }, [])
    return (
        <>
            <section>
                <SectionTitle
                    subHeading={'What Our client say'}
                    heading={'TESTIMONIAlS'}>

                </SectionTitle>

                <Swiper navigation={true} modules={[Navigation]} className="mySwiper">
                    {
                        review.map(review =>
                            <SwiperSlide
                                key={review._id}>
                                <div className=' flex flex-col items-center mx-32 my-20 space-y-3'>
                                    <Rating
                                        style={{ maxWidth: 180 }}
                                        value={review.Rating}
                                        readOnly
                                    />
                                    <p>{review.details}</p>
                                    <h3 className='uppercase text-yellow-600'>{review.name}</h3>

                                </div>
                            </SwiperSlide>
                        )
                    }


                </Swiper>
            </section>
        </>
    );
};

export default Testimonials;