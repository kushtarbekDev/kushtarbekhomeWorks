import { useCallback, useMemo, useState } from "react";

const initialUsers = [
  { id: 1, name: "Alice" },
  { id: 2, name: "Bob" },
  { id: 3, name: "Charlie" },
];

export const FilteredList = () => {
  const [users, setUsers] = useState(initialUsers);
  const [filter, setFilter] = useState("");

  const filteredUsers = useMemo(() => {
    console.log("Фильтрация пользователей...");
    return users.filter((user) =>
      user.name.toLowerCase().includes(filter.toLowerCase())
    );
  }, [filter, users]);

  const handleAddUser = useCallback(() => {
    const newUser = {
      id: Date.now(),
      name: `User${users.length + 1}`,
    };
    setUsers((prevUsers) => [...prevUsers, newUser]);
  }, [users.length]);

  return (
    <div>
      <h2>Список пользователей</h2>
      <input
        className="inputs"
        type="text"
        placeholder="Фильтр по имени"
        value={filter}
        onChange={(e) => setFilter(e.target.value)}
      />

      <ul>
        {filteredUsers.map((user) => (
          <li key={user.id}>{user.name}</li>
        ))}
      </ul>

      <button onClick={handleAddUser}>Добавить пользователя</button>
    </div>
  );
};
