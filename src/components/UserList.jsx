import { useState } from "react";
import { UserCard } from "./UserCard";

export const UserList = () => {
  const [users, setUsers] = useState([
    {
      id: 1,
      name: "Куштарбек",
      city: "Бишкек",
      age: 15,
      email: "kushtarbek@gmail.com",
      active: true,
    },
    {
      id: 2,
      name: "Байэл",
      city: "Бишкек",
      age: 21,
      email: "bayel@gmail.com",
      active: false,
    },
    {
      id: 3,
      name: "Валихан",
      city: "Ташкент",
      age: 35,
      email: "valihan@gmail.com",
      active: true,
    },
  ]);

  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [age, setAge] = useState("");
  const [city, setCity] = useState("");
  const [active, setActive] = useState(false);

  const handleAddUser = (e) => {
    e.preventDefault();

    const newUser = {
      id: Date.now(),
      name,
      email,
      age,
      city,
      active,
    };
    setUsers([...users, newUser]);
    setName("");
    setEmail("");
    setAge("");
    setCity("");
    setActive("");
  };

  const handleDeleteUser = (id) => {
    const updatedUsers = users.filter((user) => user.id !== id);
    setUsers(updatedUsers);
  };
  return (
    <div>
      <div className="userDiv">
        <form className="fromList" onSubmit={handleAddUser}>
          <input
            type="text"
            placeholder="Имя"
            value={name}
            onChange={(e) => setName(e.target.value)}
            className="userInput"
          />
          <input
            type="email"
            placeholder="Email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            className="userInput"
          />
          <input
            type="text"
            placeholder="Город"
            value={city}
            onChange={(e) => setCity(e.target.value)}
            className="userInput"
          />
          <input
            type="number"
            placeholder="Age"
            value={age}
            onChange={(e) => setAge(e.target.value)}
            className="userInput"
          />{" "}
          <label class="checkbox-wrapper">
            <input
              type="checkbox"
              value={active}
              onChange={(e) => setActive(e.target.checked)}
            />
            <div class="checkmark">
              <svg viewBox="0 0 24 24" fill="none" stroke="currentColor">
                <path
                  d="M20 6L9 17L4 12"
                  stroke-width="3"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                ></path>
              </svg>
            </div>
            <span class="label">Active</span>
          </label>
          <button type="submit" className="userBtn">
            добовить
          </button>
        </form>
      </div>
      <div className="mapDiv">
        {users.map((user) => (
          <UserCard
            key={user.id}
            name={user.name}
            email={user.email}
            age={user.age}
            city={user.city}
            active={user.active}
            onDelete={() => handleDeleteUser(user.id)}
          />
        ))}
      </div>
    </div>
  );
};
