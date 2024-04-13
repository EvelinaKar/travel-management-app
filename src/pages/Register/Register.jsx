import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { ROUTES } from "../../routes/consts";
import Button from "../../components/Button/Button";

import styles from "./Register.module.scss";

const RegistrationForm = () => {
  const [formData, setFormData] = useState({
    username: "",
    email: "",
    password: "",
    confirmPassword: "",
  });
  const [errors, setErrors] = useState({});
  const navigate = useNavigate();

  const validateForm = () => {
    let formIsValid = true;
    let errors = {};

    if (!formData.username) {
      formIsValid = false;
      errors["username"] = "Username cannot be empty";
    }

    if (!formData.email) {
      formIsValid = false;
      errors["email"] = "Email cannot be empty";
    } else if (!/\S+@\S+\.\S+/.test(formData.email)) {
      formIsValid = false;
      errors["email"] = "Email is not valid";
    }

    if (formData.password.length < 6) {
      formIsValid = false;
      errors["password"] = "Password must be at least 6 characters";
    }

    if (formData.password !== formData.confirmPassword) {
      formIsValid = false;
      errors["confirmPassword"] = "Passwords do not match";
    }

    setErrors(errors);
    return formIsValid;
  };

  const handleSubmit = async (event) => {
    event.preventDefault();
    if (!validateForm()) {
      return;
    }
    try {
      alert("Registration Successful!");
      navigate("/");
    } catch (error) {
      console.error("Registration failed:", error);
    }
  };

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  return (
    <div className={styles.container}>
      <h2 className={styles.formTitle}>Register</h2>
      <form onSubmit={handleSubmit} className={styles.form}>
        <input
          type="text"
          name="username"
          placeholder="Username"
          value={formData.username}
          onChange={handleChange}
          className={styles.input}
        />
        {errors.username && (
          <span className={styles.error}>{errors.username}</span>
        )}

        <input
          type="email"
          name="email"
          placeholder="Email Address"
          value={formData.email}
          onChange={handleChange}
          className={styles.input}
        />
        {errors.email && <span className={styles.error}>{errors.email}</span>}

        <input
          type="password"
          name="password"
          placeholder="Password"
          value={formData.password}
          onChange={handleChange}
          className={styles.input}
        />
        {errors.password && (
          <span className={styles.error}>{errors.password}</span>
        )}

        <input
          type="password"
          name="confirmPassword"
          placeholder="Confirm Password"
          value={formData.confirmPassword}
          onChange={handleChange}
          className={styles.input}
        />
        {errors.confirmPassword && (
          <span className={styles.error}>{errors.confirmPassword}</span>
        )}

        <Button type="submit" className={styles.submitButton}>
          Register
        </Button>
      </form>
    </div>
  );
};

export default RegistrationForm;
