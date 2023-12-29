import './slide.css'
import Item from '../../item/item';
import { useNavigate } from 'react-router-dom';
import { Swiper, SwiperSlide } from 'swiper/react';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';

// import required modules
import { Navigation, Pagination, Autoplay } from 'swiper/modules';

const SlideContent = ({ title }) => {

    const navigate = useNavigate()

    function getItemInfomation(name, category, price) {
        navigate(`/${title}/${name}`)
    }

    return (
        <div className="slide-container">
            <h3>{title}</h3>
            <div className="silde-content">
                <Swiper
                    slidesPerView={5}
                    centeredSlides={true}
                    loop={true}
                    cssMode={true}
                    navigation={true}
                    breakpoints={{
                        1250: {
                            slidesPerView: 5,
                        },
                        1100: {
                            slidesPerView: 4,
                        },
                        850: {
                            slidesPerView: 3,
                        },
                        500: {
                            slidesPerView: 2,
                        },
                    }}
                    autoplay={{
                        delay: 3000,
                        disableOnInteraction: true,
                    }}
                    modules={[Navigation, Pagination, Autoplay]}
                    className="mySwiper"
                >
                    <SwiperSlide>
                        <Item
                            name={"Nike Dunk Low Retro 1 "}
                            category={"Basketball"}
                            price={"3,000,000"}
                            getItemInfomation={getItemInfomation}
                        />
                    </SwiperSlide>
                    <SwiperSlide>
                        <Item
                            name={"Nike Dunk Low Retro 1 "}
                            category={"Basketball"}
                            price={"3,000,000"}
                            getItemInfomation={getItemInfomation}
                        />
                    </SwiperSlide>
                    <SwiperSlide>
                        <Item
                            name={"Nike Dunk Low Retro 1 "}
                            category={"Basketball"}
                            price={"3,000,000"}
                            getItemInfomation={getItemInfomation}
                        />
                    </SwiperSlide>
                    <SwiperSlide>
                        <Item
                            name={"Nike Dunk Low Retro 1 "}
                            category={"Basketball"}
                            price={"3,000,000"}
                            getItemInfomation={getItemInfomation}
                        />
                    </SwiperSlide>
                    <SwiperSlide>
                        <Item
                            name={"Nike Dunk Low Retro 1 "}
                            category={"Basketball"}
                            price={"3,000,000"}
                            getItemInfomation={getItemInfomation}
                        />
                    </SwiperSlide>
                    <SwiperSlide>
                        <Item
                            name={"Nike Dunk Low Retro 1 "}
                            category={"Basketball"}
                            price={"3,000,000"}
                            getItemInfomation={getItemInfomation}
                        />
                    </SwiperSlide>
                    <SwiperSlide>
                        <Item
                            name={"Nike Dunk Low Retro 1 "}
                            category={"Basketball"}
                            price={"3,000,000"}
                            getItemInfomation={getItemInfomation}
                        />
                    </SwiperSlide>
                </Swiper>
            </div>
        </div>
    );
}

export default SlideContent;

