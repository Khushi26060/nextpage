import React, { useState } from "react";
import EyeOff from "../svg/eye-off";
import EyeOn from "../svg/eye-on";
import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import * as yup from "yup";
import Link from "next/link";
import axios from "axios";
import { useRouter } from 'next/router';


const schema = yup
  .object({
    fullname: yup.string().required().label("FullName"),
    email: yup.string().required().email().label("Email"),
    password: yup.string().required().min(6).label("Password"),

  })
  .required();


const RegisterForm = () => {
  const [serverError, setServerError] = useState('');

  const {
    register,
    handleSubmit, reset,
    formState: { errors },
  } = useForm({
    resolver: yupResolver(schema),
  });
  const onSubmit = async (data) => {
    try {
      // Send POST request to your API endpoint using Axios
      const response = await axios.post('http://localhost:8000/admin-register', data);

      if (response.status === 200) {
        console.log('Success:', response.data);
        reset();
        router.push('/login');

      } else {
        console.error('Error:', response.data.message);
        setServerError(response.data.message);
      }
    } catch (error) { 
      setServerError(error.response?.data.message || 'An unexpected error occurred. Please try again.'); // Set generic error message
      console.error('Request failed', error.response?.data || error.message);

    }
    // reset()
  };

  // password show & hide
  const [passwordType, setPasswordType] = useState("password");
  const togglePassword = () => {
    if (passwordType === "password") {
      setPasswordType("text");
    } else {
      setPasswordType("password");
    }
  };
  return (
    <>
      <form onSubmit={handleSubmit(onSubmit)}>
        <div className="row">
          <div className="col-12">
            <div className="postbox__comment-input mb-30">
              <input
                name="fullname"
                {...register("fullname")}
                className="inputText"
              />
              <span className="floating-label">Full Name</span>
              <p className="form_error">{errors.fullname?.message}</p>
            </div>
          </div>
          <div className="col-12">
            <div className="postbox__comment-input mb-30">
              <input
                name="email"
                className="inputText"
                {...register("email")}
              />
              <span className="floating-label">Your Email</span>
              <p className="form_error">{errors.email?.message}</p>
            </div>
          </div>
          <div className="col-12">
            <div className="mb-30">
              <div className="postbox__comment-input">
                <input
                  id="myInput"
                  className="inputText password"
                  type={passwordType}
                  name="password"
                  {...register("password")}
                />
                <span className="floating-label">Password</span>
                <span id="click" className="eye-btn" onClick={togglePassword}>
                  {passwordType === "password" ? (
                    <span className="eye-off">
                      <EyeOff />
                    </span>
                  ) : (
                    <span className="eye-off">
                      <EyeOn />
                    </span>
                  )}
                </span>
              </div>
              <p className="form_error">{errors.password?.message}</p>
            </div>
          </div>
        </div>
        {/* Display server error */}

        <div className="signin-banner-form-remember">
          <div className="row">
            <div className="col-6">
              <div className="postbox__comment-agree">
                <div className="form-check">
                  <input
                    className="form-check-input"
                    type="checkbox"
                    value=""
                    id="flexCheckDefault"
                  />
                  <label
                    className="form-check-label"
                    htmlFor="flexCheckDefault"
                  >
                    Remember me
                  </label>
                </div>
              </div>
            </div>
            <div className="col-6">
              <div className="postbox__forget text-end">
                <Link href="#">Forgot password ?</Link>
              </div>
            </div>
          </div>
        </div>
        <div className="signin-banner-from-btn mb-20 ">
          {serverError && <p style={{ color: 'red' }}>{serverError}</p>}
          <button type="submit" className="signin-btn ">Register</button>
        </div>
      </form>
    </>
  );
};

export default RegisterForm;
