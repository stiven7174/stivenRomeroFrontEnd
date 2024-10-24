import React from 'react';
import Layout from '../layouts/Layout';
import Carousel from '../components/Carousel';

const Home = () => {
  return (
    <Layout>
      <section className="hero text-center py-16">
        <h1 className="text-4xl font-bold mb-4">about</h1>
        <p className="text-lg mb-8">Find your perfect trip, designed by insiders who know and love their cities!</p>
      </section>
    </Layout>
  );
};

export default Home;
