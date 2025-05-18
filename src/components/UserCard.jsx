export const UserCard = ({ name, email, onDelete, age, city, active }) => {
  return (
    <div className="userBlocks">
      <div className="userCard">
        <h3>
          <span className="spanUser">Имя:</span>
          {name}
        </h3>
        <p>
          <span className="spanUser">Почта:</span>
          {email}
        </p>
        <p>
          <span className="spanUser">Город:</span>
          {city}
        </p>
        <p>
          <span className="spanUser">Возраст:</span>
          {age}
        </p>
        <p>
          Активный: {active ? <span style={{ color: "green" }}>✅</span> : "❌"}
        </p>
        <button onClick={onDelete} className="userBtn">
          Удалить
        </button>
      </div>
    </div>
  );
};
