import React from 'react';
import './Home.css';
import Header from './Header';
import Banner from './Banner';
import Product from './Product';

function Home() {
    return (
        <div className="home">
            <Header />
            <Banner />
            <div className="product__container">
                <Product 
                    title="MacBook M1 2020 13-inch 16gb ram 256gb ssd " 
                    imageUrl="https://m.media-amazon.com/images/I/71jG+e7roXL._AC_UY218_.jpg" 
                    price="$2200"
                />
                <Product 
                    title="ipad pro 2020" 
                    imageUrl="https://m.media-amazon.com/images/I/81SGb5l+lZL._AC_UL320_.jpg" 
                    price="$1200"
                />
                <Product 
                    title="mac mini 2020" 
                    imageUrl="https://m.media-amazon.com/images/I/71pcTYT+ICL._AC_UL320_.jpg" 
                    price="$1600"
                />
            </div>
        </div>
    )
}

export default Home;
