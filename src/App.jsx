import { useState } from "react";
import "./App.css";
import { Header } from "./components/Header";
import { UserList } from "./components/UserList";
import weatherData from "./data/weather.json";
import { WeatherForm } from "./components/WeatherForm";
import { Weather } from "./components/Weather";
import { ChildButton } from "./task5/ChildButton";
import { Counter } from "./task5/Counter";
import { FilteredList } from "./task5/FilteredList";

function App() {
  const [weather, setWeather] = useState(null);
  const [error, setError] = useState("");

  const handleSearch = (city) => {
    const cityCap = city.charAt(0).toUpperCase() + city.slice(1).toLowerCase();

    if (weatherData[cityCap]) {
      setWeather(weatherData[cityCap]);
      setError("");
    } else {
      setWeather(null);
      setError("Город не найден");
    }
  };

  return (
    <div className="appBlock">
      <Header />

      {/* <Card /> */}
      <UserList />
      <div className="weatherApp">
        <h1>Прогноз погоды</h1>
        <WeatherForm onSearch={handleSearch} />
        <div className="weatherBlock">
          <Weather weather={weather} error={error} />
        </div>
      </div>
      <Counter />
      <FilteredList />
    </div>
  );
}

export default App;
