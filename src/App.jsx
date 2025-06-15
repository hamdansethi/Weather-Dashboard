import { useState } from 'react';
import './App.css';
import Header from './components/Header';
import SearchBar from './components/SearchBar';
import WeatherInfo from './components/WeatherInfo';
import Footer from './components/Footer';

const App = () => {
  const [weather, setWeather] = useState(null);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState('');

  const fetchWeather = async (city) => {
    setLoading(true);
    setError('');
    setWeather(null);

    try {
      const apiKey = process.env.REACT_APP_WEATHER_API_KEY;

      // 1. Get location (optional – WeatherAPI supports city name directly)
      // 2. Get weather info directly
      const weatherRes = await fetch(
        `https://api.weatherapi.com/v1/current.json?key=${apiKey}&q=${city}&aqi=no`
      );

      if (!weatherRes.ok) {
        throw new Error('Weather data not found');
      }

      const weatherData = await weatherRes.json();
      setWeather(weatherData);
    } catch (err) {
      setError(err.message || 'Something went wrong');
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="app">
      <Header />
      <SearchBar onSearch={fetchWeather} />
      <main>
        <WeatherInfo weather={weather} loading={loading} error={error} />
      </main>
      <Footer />
    </div>
  );
};

export default App;
