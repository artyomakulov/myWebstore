import React from "react";
import { useDispatch, useSelector } from "react-redux";
import UserLoginForm from "./UserLoginForm";
import css from "../../styles/User.module.css";
import { toggleForm, toggleFormType } from "../../features/user/userSlice";
import UserRegisterForm from "./UserRegisterForm";

const UserForm = () => {
  const dispatch = useDispatch();
  const { showForm, formType } = useSelector(({ user }) => user);

  const closeForm = () => dispatch(toggleForm(false));
  const toggleCurrentFormType = (type) => dispatch(toggleFormType(type));

  return showForm ? (
    <>
      <div className={css.overlay} onClick={closeForm} />
      {formType === "signup" ? (
        <UserRegisterForm
          toggleCurrentFormType={toggleCurrentFormType}
          closeForm={closeForm}
        />
      ) : (
        <UserLoginForm
          toggleCurrentFormType={toggleCurrentFormType}
          closeForm={closeForm}
        />
      )}UserLoginForm
    </>
  ) : (
    <></>
  );
};

export default UserForm;
