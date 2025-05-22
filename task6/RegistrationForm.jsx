import { useState } from "react";

export const RegistrationForm = () => {
  const [form, setForm] = useState({
    name: "",
    email: "",
    password: "",
    confirmPassword: "",
  });

  const [errors, setErrors] = useState({});

  const handleChange = (e) => {
    setForm({
      ...form,
      [e.target.name]: e.target.value,
    });
  };

  const validate = () => {
    const newErrors = {};

    if (!form.name.trim()) {
      newErrors.name = "Имя ползоветля";
    }

    if (!form.email.trim()) {
      newErrors.email = "email обезателно";
    } else if (!/^[^\s@]{2,}@[^\s@]+\.[^\s@]+$/.test(form.email))
      newErrors.email = "Некорректный email";

    if (!form.password) {
      newErrors.password = "Пароль обязателен";
    } else if (form.password.length < 6) {
      newErrors.password = "Пароль должен быть не короче 6 символов";
    }
    if (!form.confirmPassword) {
      newErrors.confirmPassword = "Подтверждение пароля обязательно";
    } else if (form.password !== form.confirmPassword) {
      newErrors.confirmPassword = "Пароли не совпадают";
    }

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (validate()) {
      console.log("Данные пользователя:", form);
      alert("Регистрация прошла успешно!");
      setForm({
        name: "",
        email: "",
        password: "",
        confirmPassword: "",
      });
    }
  };
  return (
    <div>
      <form onSubmit={handleSubmit} className="registrForm">
        <h2>Регистрация</h2>

        <div>
          <input
            name="name"
            placeholder="Имя"
            value={form.name}
            onChange={handleChange}
            className="inputs"
          />
          {errors.name && <p style={{ color: "red" }}>{errors.name}</p>}
        </div>

        <div>
          <input
            name="email"
            placeholder="Email"
            value={form.email}
            onChange={handleChange}
            className="inputs"
          />
          {errors.email && <p style={{ color: "red" }}>{errors.email}</p>}
        </div>

        <div>
          <input
            name="password"
            type="password"
            placeholder="Пароль"
            value={form.password}
            onChange={handleChange}
            className="inputs"
          />
          {errors.password && <p style={{ color: "red" }}>{errors.password}</p>}
        </div>

        <div>
          <input
            name="confirmPassword"
            type="password"
            placeholder="Подтверждение пароля"
            value={form.confirmPassword}
            onChange={handleChange}
            className="inputs"
          />
          {errors.confirmPassword && (
            <p style={{ color: "red" }}>{errors.confirmPassword}</p>
          )}
        </div>

        <button type="submit" className="button">
          Зарегистрироваться
        </button>
      </form>
    </div>
  );
};
