import React, { useState } from "react";
import "bootstrap/dist/css/bootstrap.min.css";

const FormComponent = () => {
  // State hooks for form values and errors
  const [formValues, setFormValues] = useState({
    firstName: "",
    lastName: "",
    email: "",
    password: "",
    confirmPassword: ""
  });
  const [formErrors, setFormErrors] = useState({});

  // Function to handle input changes
  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormValues({ ...formValues, [name]: value });
  };

  // Function to handle form submission
  const handleSubmit = (e) => {
    e.preventDefault();
    const errors = validateForm();
    if (Object.keys(errors).length === 0) {
      alert("Form submitted successfully!");
    } else {
      setFormErrors(errors);
    }
  };

  // Validation function
  const validateForm = () => {
    const errors = {};
    const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

    if (!formValues.firstName) {
      errors.firstName = "First Name is required";
    }
    if (!formValues.lastName) {
      errors.lastName = "Last Name is required";
    }
    if (!formValues.email) {
      errors.email = "Email is required";
    } else if (!emailPattern.test(formValues.email)) {
      errors.email = "Invalid email format";
    }
    if (!formValues.password) {
      errors.password = "Password is required";
    }
    if (!formValues.confirmPassword) {
      errors.confirmPassword = "Confirm Password is required";
    } else if (formValues.password !== formValues.confirmPassword) {
      errors.confirmPassword = "Passwords do not match";
    }

    return errors;
  };

  return (
    <div className="container mt-5">
      <h2 className="text-center mb-4">Registration Form</h2>
      <form onSubmit={handleSubmit} className="p-4 border rounded shadow-sm bg-light">
        <div className="mb-3">
          <label className="form-label">First Name</label>
          <input
            type="text"
            name="firstName"
            className={`form-control ${formErrors.firstName ? "is-invalid" : ""}`}
            value={formValues.firstName}
            onChange={handleChange}
          />
          {formErrors.firstName && <div className="invalid-feedback">{formErrors.firstName}</div>}
        </div>

        <div className="mb-3">
          <label className="form-label">Last Name</label>
          <input
            type="text"
            name="lastName"
            className={`form-control ${formErrors.lastName ? "is-invalid" : ""}`}
            value={formValues.lastName}
            onChange={handleChange}
          />
          {formErrors.lastName && <div className="invalid-feedback">{formErrors.lastName}</div>}
        </div>

        <div className="mb-3">
          <label className="form-label">Email</label>
          <input
            type="email"
            name="email"
            className={`form-control ${formErrors.email ? "is-invalid" : ""}`}
            value={formValues.email}
            onChange={handleChange}
          />
          {formErrors.email && <div className="invalid-feedback">{formErrors.email}</div>}
        </div>

        <div className="mb-3">
          <label className="form-label">Password</label>
          <input
            type="password"
            name="password"
            className={`form-control ${formErrors.password ? "is-invalid" : ""}`}
            value={formValues.password}
            onChange={handleChange}
          />
          {formErrors.password && <div className="invalid-feedback">{formErrors.password}</div>}
        </div>

        <div className="mb-3">
          <label className="form-label">Confirm Password</label>
          <input
            type="password"
            name="confirmPassword"
            className={`form-control ${formErrors.confirmPassword ? "is-invalid" : ""}`}
            value={formValues.confirmPassword}
            onChange={handleChange}
          />
          {formErrors.confirmPassword && <div className="invalid-feedback">{formErrors.confirmPassword}</div>}
        </div>

        <button type="submit" className="btn btn-primary w-100 mt-3">
          Register
        </button>
      </form>
    </div>
  );
};

export default FormComponent;
