import React, { useState } from "react";

import css from "../../styles/User.module.css";
import { useDispatch } from "react-redux";
import { loginUser } from "../../features/user/operation";

const UserRegisterForm = ({ toggleCurrentFormType, closeForm }) => {
  const dispatch = useDispatch();
  const [values, setValues] = useState({
    email: "",
    password: "",
  });

  const handleChange = ({ target: { value, name } }) => {
    setValues({ ...values, [name]: value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    const isNotEmpty = Object.values(values).every((value) => value);

    if (!isNotEmpty) return;
    dispatch(loginUser(values));
    closeForm();
  };

  return (
    <div className={css.wrapper}>
      <div className={css.close} onClick={closeForm}>
        <svg className="icon">
          <use href="/sprite.svg#close" />
        </svg>
      </div>
      <div className={css.title}>Log in</div>
      <form className={css.form} onSubmit={handleSubmit}>
        <div className={css.group}>
          <input
            type="email"
            placeholder="Your email"
            name="email"
            value={values.email}
            autoComplete="off"
            onChange={handleChange}
            required
          />
        </div>
        <div className={css.group}>
          <input
            type="password"
            placeholder="Your password"
            name="password"
            value={values.password}
            autoComplete="off"
            onChange={handleChange}
            required
          />
        </div>

        <div
          className={css.link}
          onClick={() => toggleCurrentFormType("signup")}
        >
          Create an account
        </div>
        <button type="submit" className={css.submit}>
          Login
        </button>
      </form>
    </div>
  );
};

export default UserRegisterForm;
