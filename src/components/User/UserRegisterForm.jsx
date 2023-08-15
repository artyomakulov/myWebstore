import React, { useState } from "react";

import css from "../../styles/User.module.css";
import { useDispatch } from "react-redux";
import { createUser } from "../../features/user/operation";

const UserRegisterForm = ({ toggleCurrentFormType, closeForm }) => {
  const dispatch = useDispatch();
  const [values, setValues] = useState({
    name: "",
    email: "",
    password: "",
    avatar: "",
  });

  const handleChange = ({ target: { value, name } }) => {
    setValues({ ...values, [name]: value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    const isNotEmpty = Object.values(values).every((value) => value);

    if (!isNotEmpty) return;
    dispatch(createUser(values));
    closeForm();
  };

  return (
    <div className={css.wrapper}>
      <div className={css.close} onClick={closeForm}>
        <svg className="icon">
          <use href="/sprite.svg#close" />
        </svg>
      </div>
      <div className={css.title}>Sign up</div>
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
            type="text"
            placeholder="Your name"
            name="name"
            value={values.name}
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
        <div className={css.group}>
          <input
            type="text"
            placeholder="Your avatar"
            name="avatar"
            value={values.avatar}
            autoComplete="off"
            onChange={handleChange}
            required
          />
        </div>
        <div
          className={css.link}
          onClick={() => toggleCurrentFormType("login")}
        >
          I already have an account
        </div>
        <button type="submit" className={css.submit}>
          Create an account
        </button>
      </form>
    </div>
  );
};

export default UserRegisterForm;
