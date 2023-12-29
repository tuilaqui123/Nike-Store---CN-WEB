import React from 'react';
import './home.css'
import nike_40yrs from '../../asset/Video/nike_40yrs.mp4'
import nike_sale from '../../asset/Video/nike_sale.mp4'
import nike_sport from '../../asset/Video/nike_sport.mp4'
import nike_clothing from '../../asset/Video/nike_clothing.mp4'
import SeasonContent from './season content/season';
import SlideContent from './slide content/slide';

function Home() {
    return (
        <div className="home-container">
            <SeasonContent
                videoUrl={nike_sale}
                tilte={"Mark Your Calendar"}
                content={"Explore the latest discounts and promos"}
            />

            <SlideContent
                title={"New Arrivals"}
            />

            <SeasonContent
                videoUrl={nike_40yrs}
                tilte={"Air Force 1"}
                content={"Join Forces: Celebrating 40 Years of Force"}
            />

            <SlideContent
                title={"Always Iconic"}
            />

            <SeasonContent
                videoUrl={nike_clothing}
                tilte={"Believe In More"}
                content={"Be yourself and show the world your personality"}
            />

            <SeasonContent
                videoUrl={nike_sport}
                tilte={"Find Your Passion"}
                content={"Let's Nike go with you on your jouney"}
            />

            <SlideContent
                title={"Shop By Sport"}
            />
        </div>
    );
}

export default Home;