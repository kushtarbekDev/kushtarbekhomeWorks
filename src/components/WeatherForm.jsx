import { useState } from "react";
import styles from "../styles/WeatherForm.module.css";

export const WeatherForm = ({ onSearch }) => {
  const [city, setCity] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    onSearch(city.trim());
    setCity("");
    console.log(e);
  };
  return (
    <div>
      <form onSubmit={handleSubmit} className={styles.form}>
        <input
          type="text"
          placeholder="Enter city"
          value={city}
          onChange={(e) => setCity(e.target.value)}
          className={styles.input}
        />
        <button type="submit" className={styles.button}>
          Check Weather
        </button>
      </form>
    </div>
  );
};
