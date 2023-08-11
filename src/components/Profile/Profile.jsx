import React, { useEffect, useState } from "react";

import css from "../../styles/Profile.module.css";
import { useDispatch, useSelector } from "react-redux";
import { updateUser } from "../../features/user/userSlice";

const Profile = () => {
  const dispatch = useDispatch();
  const { currentUser } = useSelector(({ user }) => user);
  const [values, setValues] = useState({
    name: "",
    email: "",
    password: "",
    avatar: "",
  });


  useEffect(() => {
    if (!currentUser) return;
    setValues(currentUser);
  }, [currentUser]);


  const handleChange = ({ target: { value, name } }) => {
    setValues({ ...values, [name]: value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    const isNotEmpty = Object.values(values).every((value) => value);

    if (!isNotEmpty) return;
    dispatch(updateUser(values));
  };

  return (
    <section className={css.profile}>
      {!currentUser ? (
        <span>You need to authorize</span>
      ) : (
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
          <button type="submit" className={css.submit}>
            Update
          </button>
        </form>
      )}
    </section>
  );
};

export default Profile;
