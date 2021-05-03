import React from 'react';
import './Banner.css';

function Banner() {
    return (
        <div className="banner">
            <img 
                className="banner__image" 
                src={"https://images-na.ssl-images-amazon.com/images/G/01/AmazonExports/Fuji/2020/May/Hero/Fuji_TallHero_45M_v2_1x._CB432458380_.jpg"}
                alt=""
            />
        </div>
    )
}

export default Banner;