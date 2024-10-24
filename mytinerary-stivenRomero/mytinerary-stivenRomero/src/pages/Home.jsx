import React from 'react';
import Layout from '../layouts/Layout';
import Carousel from '../components/Carousel';

const Home = () => {
  return (
    <Layout>
      <section className="hero text-center py-16 h-[95vh]" style={{ backgroundImage: 'url(https://r4.wallpaperflare.com/wallpaper/658/395/660/carretera-lago-paisaje-wallpaper-52710270bd162e2b1a78c25520982982.jpg)' }}>
        <h1 className="text-4xl font-bold mb-4">MyTinerary</h1>
        <p className="text-lg mb-8">Find your perfect trip, designed by insiders who know and love their cities!</p>
        <a href="#cities" className="bg-blue-500 text-white py-2 px-4 rounded">Explore Cities</a>
      </section>
      <Carousel />
    </Layout>
  );
};

export default Home;