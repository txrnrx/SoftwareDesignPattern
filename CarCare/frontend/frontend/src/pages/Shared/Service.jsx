import Carousel from '@/components/Carousel';
import React from 'react';
import bimg from '../../assets/img/service-bg1.jpg';
import Navbar from '@/components/Shared/Navbar';
import Footer from '@/components/Shared/Footer';

const bImage = {
  backgroundImage: `url(${bimg})`,
  backgroundRepeat: "no-repeat",
  backgroundSize: "cover",
  backgroundPosition: "center",
};

const Service = () => {
  let slides = [
    "https://img.freepik.com/free-photo/navigator-car-road-forest-area-closeup_169016-22253.jpg",
    "https://carfixo.in/wp-content/uploads/2022/05/car-wash-2.jpg",
    "https://boodmo.com/media/images/articles/44142b5.webp",
    "https://ddztmb1ahc6o7.cloudfront.net/westminstertoyota/wp-content/uploads/2024/04/19031356/detailing-1.jpg",
  ];

  let descriptions = [
    "Exclusive Partner Locations",
    "Car Wash: Supreme Cleansing",
    "Top-Tier Car Repair & Care",
    "Luxury Detailing; Elite Refinishing",
  ];

  return (
    <main style={bImage}>
         <Navbar/>
      <div className="bg-gradient-to-r from-primary to bg-primaryDark/70 py-10 ">
        <div className="container mx-auto">
          <Carousel slides={slides}    descriptions={descriptions} />
        </div>
      </div>
      <Footer/>
    </main>
  );
};

export default Service;
