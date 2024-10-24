import React, { useState, useEffect } from 'react';
import Slider from 'react-slick';
import "slick-carousel/slick/slick.css"; 
import "slick-carousel/slick/slick-theme.css";

const Carousel = () => {
  const [cities, setCities] = useState([]);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchCities = async () => {
      try {
        const response = await fetch('http://localhost:8080/api/cities');
        if (!response.ok) {
          throw new Error(`HTTP error! status: ${response.status}`);
        }
        const data = await response.json();
        setCities(data.slice(0, 4)); // Guarda solo las primeras 4 ciudades
      } catch (error) {
        setError(error.message);
      }
    };

    fetchCities();
  }, []);

  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 2000,
  };

  return (
    <div className="carousel m-16">
      <h2 className="text-center text-2xl mb-4">Popular MyTineraries</h2>
      {error ? (
        <p className="text-red-500 text-center">{error}</p>
      ) : (
        <Slider {...settings}>
          {cities.map((city, index) => (
            <div key={city._id || index} className="slide">
              <CallToAction></CallToAction>
              <img src={city.photo} alt={city.name} className="w-[100vw] h-[30vw]" />
              <h3 className="text-center mt-2">{city.name}</h3>
            </div>
          ))}
        </Slider>
      )}
    </div>
  );
};
function CallToAction() {
  return (
    <div className="">
      <h2 className="text-lg font-bold text-center">My Tinerary</h2>
      <p>
        "Explore and create your next unforgettable journey! Discover unique
        itineraries and customize them to your liking. Click on Get Inspired Now
        and start planning the adventure of your dreams."
      </p>
      <div className="flex justify-end my-3">
        <a href="#">asawswasda</a>
      </div>
    </div>
  );
}

export default Carousel;