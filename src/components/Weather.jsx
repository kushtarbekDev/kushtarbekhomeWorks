import styles from "../styles/Weather.module.css";
import { WeatherAnimation } from "./WeatherAnimation";

export const Weather = ({ weather, error }) => {
  if (error) {
    return <p className={styles.error}>{error}</p>;
  }

  if (!weather) return null;

  return (
    <div className={styles.card}>
      <WeatherAnimation type={weather.type} />

      <span className={styles.icon}>{weather.icon}</span>
      <h2>{weather.temp}C°</h2>
      <p>{weather.description}</p>
    </div>
  );
};
