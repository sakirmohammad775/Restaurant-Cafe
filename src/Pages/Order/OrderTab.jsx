import 'swiper/css';
import 'swiper/css/pagination';
import { Pagination } from 'swiper/modules';
import { Swiper } from 'swiper';
import { SwiperSlide } from 'swiper/react';
import FoodCard from './FoodCard';

const OrderTab = ({ items }) => {
    const pagination = {
        clickable: true,
        renderBullet: function (index, className) {
            return '<span class="' + className + '">' + (index + 1) + '</span>';
        },
    };
    return (
        <>
            <div>
                <Swiper pagination={pagination}
                    modules={[Pagination]}
                    className="mySwiper">
                    <SwiperSlide>
                        <div className="grid lg:grid-cols-3 md:grid-cols-2">
                            {
                                items.map(item => <FoodCard key={item._id} item={item}></FoodCard>)
                            }
                        </div>
                    </SwiperSlide>


                </Swiper>
            </div>
        </>


    );
};

export default OrderTab;