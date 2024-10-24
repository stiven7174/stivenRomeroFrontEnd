import React, { useState, useEffect } from 'react';
import Layout from '../layouts/Layout';

const Cities = () => {
    const [expandedCity, setExpandedCity] = useState(null); // Estado para controlar la expansión

  const [search, setSearch] = useState("");
  const [error, setError] = useState(null);
  const [cities, setCities] = useState([]);
  useEffect(() => {
    const fetchCities = async () => {
      try {
        const response = await fetch('http://localhost:8080/api/cities');
        if (!response.ok) {
          throw new Error(`HTTP error! status: ${response.status}`);
        }

        const data = await response.json();
        setCities(data);
      } catch (error) {
        setError(error.message);
      }
    };

    fetchCities();
  }, []);

  const handleExpandClick = (id) => {
    setExpandedCity(expandedCity === id ? null : id); // Alterna entre expandido y colapsado
  };

  const filteredCities = cities.filter(city =>
    city.name.toLowerCase().startsWith(search.toLowerCase())
  );

  return (
    <Layout>
      <section className="cities py-16">
        <h1 className="text-4xl font-bold mb-4 text-center">Cities</h1>
        <div className="flex justify-center mb-8">
          <input 
            type="text" 
            placeholder="Search cities..." 
            className="border p-2 w-1/2"
            value={search}
            onChange={(e) => setSearch(e.target.value)} 
          />
        </div>
        {error ? (
          <p className="text-red-500 text-center">{error}</p>
        ) : (
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
            {filteredCities.length ? (
              filteredCities.map((city) => (
                <div key={city._id} className="border p-4 rounded-lg shadow-lg">
                  <img src={city.photo} alt={city.name} className="w-full h-32 object-cover rounded-lg mb-2" />
                  <p className="mt-2 text-xl font-bold text-center">{city.name}</p>
                  <p className="text-center mb-4">{city.country}</p>
                  <div className="text-center">
                    <button 
                      className="mt-2 bg-blue-500 text-white py-1 px-4 rounded"
                      onClick={() => handleExpandClick(city._id)}
                    >
                      {expandedCity === city._id ? 'Menos información' : 'Más información'}
                    </button>
                  </div>
                  {expandedCity === city._id && (
                    <div className="mt-4 bg-gray-100 p-2 rounded-lg">
                      <p><strong>Continente:</strong> {city.continent}</p>
                      <p><strong>Descripción:</strong> {city.description}</p>
                      <p><strong>Moneda:</strong> {city.currency}</p>
                    </div>
                  )}
                </div>
              ))
            ) : (
              <p className="text-center w-full">No cities match your search.</p>
            )}
          </div>
        )}
      </section>
    </Layout>
  );
};

export default Cities;