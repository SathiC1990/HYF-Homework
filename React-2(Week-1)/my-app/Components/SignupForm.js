"use client";

import React, { useRef, useState } from "react";
import { Box, Button, Typography } from "@mui/material";
import { useRouter } from "next/navigation";

export default function SignupForm() {
  const router = useRouter();

  const firstNameRef = useRef();
  const lastNameRef = useRef();
  const emailRef = useRef();
  const phoneRef = useRef();

  const [errors, setErrors] = useState({});

  const handleKeyDown = (e, nextRef) => {
    if (e.key === "Enter" && nextRef.current) {
      e.preventDefault();
      nextRef.current.focus();
    }
  };

  const validate = (values) => {
    const errs = {};
    if (!values.firstName.trim()) errs.firstName = "First name is required";
    if (!values.lastName.trim()) errs.lastName = "Last name is required";
    if (!values.email.includes("@")) errs.email = "Email is invalid";
    if (!/^\d{8,}$/.test(values.phone))
      errs.phone = "Phone must be at least 8 digits";
    return errs;
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const formData = {
      firstName: firstNameRef.current.value,
      lastName: lastNameRef.current.value,
      email: emailRef.current.value,
      phone: phoneRef.current.value,
    };

    const validationErrors = validate(formData);
    setErrors(validationErrors);

    if (Object.keys(validationErrors).length === 0) {
      console.log("Form submitted:", formData);
      router.push("/");
    }
  };

  return (
    <Box
      component="form"
      onSubmit={handleSubmit}
      sx={{ maxWidth: 400, mx: "auto", p: 3 }}
    >
      <Typography variant="h5" mb={2}>
        Sign Up
      </Typography>

      <input
        ref={firstNameRef}
        placeholder="First Name"
        onKeyDown={(e) => handleKeyDown(e, lastNameRef)}
        style={{
          marginBottom: "10px",
          padding: "8px",
          borderColor: errors.firstName ? "red" : "#ccc",
          borderWidth: "1px",
          borderStyle: "solid",
          width: "100%",
        }}
      />
      {errors.firstName && (
        <Typography color="error" variant="caption">
          {errors.firstName}
        </Typography>
      )}

      <input
        ref={lastNameRef}
        placeholder="Last Name"
        onKeyDown={(e) => handleKeyDown(e, emailRef)}
        style={{
          marginBottom: "10px",
          padding: "8px",
          borderColor: errors.lastName ? "red" : "#ccc",
          borderWidth: "1px",
          borderStyle: "solid",
          width: "100%",
        }}
      />
      {errors.lastName && (
        <Typography color="error" variant="caption">
          {errors.lastName}
        </Typography>
      )}

      <input
        ref={emailRef}
        placeholder="Email"
        onKeyDown={(e) => handleKeyDown(e, phoneRef)}
        style={{
          marginBottom: "10px",
          padding: "8px",
          borderColor: errors.email ? "red" : "#ccc",
          borderWidth: "1px",
          borderStyle: "solid",
          width: "100%",
        }}
      />
      {errors.email && (
        <Typography color="error" variant="caption">
          {errors.email}
        </Typography>
      )}

      <input
        ref={phoneRef}
        placeholder="Phone Number"
        style={{
          marginBottom: "10px",
          padding: "8px",
          borderColor: errors.phone ? "red" : "#ccc",
          borderWidth: "1px",
          borderStyle: "solid",
          width: "100%",
        }}
      />
      {errors.phone && (
        <Typography color="error" variant="caption">
          {errors.phone}
        </Typography>
      )}

      <Button
        type="submit"
        variant="contained"
        color="primary"
        fullWidth
        sx={{ mt: 2 }}
      >
        Submit
      </Button>
    </Box>
  );
}
