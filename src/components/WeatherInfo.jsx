const WeatherInfo = ({ weather, loading, error }) => {
  if (loading) return <p className="status-msg">Loading weather data...</p>;
  if (error) return <p className="status-msg error">Error: {error}</p>;
  if (!weather) return <p className="status-msg">Enter a city to see the weather.</p>;

  return (
    <div className="weather-card">
      <h2>{weather.location.name}, {weather.location.country}</h2>
      <img
        src={weather.current.condition.icon}
        alt={weather.current.condition.text}
        className="weather-icon"
      />
      <div className="temp">{weather.current.temp_c}°C</div>
      <div className="description">{weather.current.condition.text}</div>
      <div className="details">
        <p><strong>Humidity:</strong> {weather.current.humidity}%</p>
        <p><strong>Wind Speed:</strong> {weather.current.wind_kph} kph</p>
        <p><strong>Feels Like:</strong> {weather.current.feelslike_c}°C</p>
      </div>
    </div>
  );
};

export default WeatherInfo;
