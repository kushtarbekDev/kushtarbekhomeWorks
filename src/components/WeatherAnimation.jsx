import styles from "../styles/Weather.module.css";
export const WeatherAnimation = ({ type }) => {
  if (type === "Sunny") return <div className={styles.sun}></div>;
  if (type === "Cloudy") return <div className={styles.cloud}></div>;
  if (type === "Rainy")
    return (
      <div className={styles.rain}>
        <div className={styles.drop} />
        <div className={styles.drop} />
        <div className={styles.drop} />
      </div>
    );
  if (type === "Snowy")
    return (
      <div className={styles.snow}>
        <div>
          <div className={styles.flake}>❄️</div>
          <div className={styles.flake}>❄️</div>
          <div className={styles.flake}>❄️</div>
        </div>
        <div>
          <div>"""""</div>
          <div className={styles.flake}>❄️</div>
          <div className={styles.flake}>❄️</div>
          <div className={styles.flake}>❄️</div>
        </div>
        <div>
          <div className={styles.flake}>❄️</div>
          <div className={styles.flake}>❄️</div>
          <div className={styles.flake}>❄️</div>
        </div>
      </div>
    );
  return null;
};
