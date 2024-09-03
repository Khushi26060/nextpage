// import React, { useState } from "react";
// import EyeOff from "../svg/eye-off";
// import EyeOn from "../svg/eye-on";
// import { useForm } from "react-hook-form";
// import { yupResolver } from "@hookform/resolvers/yup";
// import * as yup from "yup"; 
// import Link from "next/link";


// const schema = yup
//   .object({
//     fullname: yup.string().required().label("FullName"),
//     email: yup.string().required().email().label("Email"),
//     password: yup.string().required().min(6).label("Password"),

//   })
//   .required();


// const RegisterForm = () => {

//   const {
//     register,
//     handleSubmit, reset,
//     formState: { errors },
//   } = useForm({
//     resolver: yupResolver(schema),
//   });
//   const onSubmit = (data) =>{ 
    
//     console.log(data)
//     reset()
//   };

//   // password show & hide
//   const [passwordType, setPasswordType] = useState("password");
//   const togglePassword = () => {
//     if (passwordType === "password") {
//       setPasswordType("text");
//     } else {
//       setPasswordType("password");
//     }
//   };
//   return (
//     <>
//       <form onSubmit={handleSubmit(onSubmit)}>
//         <div className="row">
//           <div className="col-12">
//             <div className="postbox__comment-input mb-30">
//               <input 
//               name="fullname"
//               {...register("fullname")}
//               className="inputText" 
//               />
//               <span className="floating-label">Full Name</span>
//               <p className="form_error">{errors.fullname?.message}</p>
//             </div>
//           </div>
//           <div className="col-12">
//             <div className="postbox__comment-input mb-30"> 
//               <input
//                 name="email"
//                 className="inputText"
//                 {...register("email")}
//               />
//               <span className="floating-label">Your Email</span>
//               <p className="form_error">{errors.email?.message}</p>
//             </div>
//           </div>
//           <div className="col-12">
//             <div className="mb-30">
//             <div className="postbox__comment-input"> 
//               <input
//                 id="myInput"
//                 className="inputText password"
//                 type={passwordType}
//                 name="password"
//                 {...register("password")}
//               />
//               <span className="floating-label">Password</span>
//               <span id="click" className="eye-btn" onClick={togglePassword}>
//                 {passwordType === "password" ? (
//                   <span className="eye-off">
//                     <EyeOff />
//                   </span>
//                 ) : (
//                   <span className="eye-off">
//                     <EyeOn />
//                   </span>
//                 )}
//               </span>
//             </div>
//               <p className="form_error">{errors.password?.message}</p>
//             </div>
//           </div> 
//         </div>

//         <div className="signin-banner-form-remember">
//           <div className="row">
//             <div className="col-6">
//               <div className="postbox__comment-agree">
//                 <div className="form-check">
//                   <input
//                     className="form-check-input"
//                     type="checkbox"
//                     value=""
//                     id="flexCheckDefault"
//                   />
//                   <label
//                     className="form-check-label"
//                     htmlFor="flexCheckDefault"
//                   >
//                     Remember me
//                   </label>
//                 </div>
//               </div>
//             </div>
//             <div className="col-6">
//               <div className="postbox__forget text-end">
//                 <Link href="#">Forgot password ?</Link>
//               </div>
//             </div>
//           </div>
//         </div>
//         <div className="signin-banner-from-btn mb-20">
//           <button type="submit" className="signin-btn ">Register</button>
//         </div>
//       </form>
//     </>
//   );
// };

// export default RegisterForm;



import React, { useState } from "react";
import EyeOff from "../svg/eye-off";
import EyeOn from "../svg/eye-on";
import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import * as yup from "yup"; 
import Link from "next/link";
import { useRouter } from "next/router"; // Import useRouter

// Validation schema
const schema = yup
  .object({
    fullname: yup.string().required().label("FullName"),
    email: yup.string().required().email().label("Email"),
    password: yup.string().required().min(6).label("Password"),
  })
  .required();

const RegisterForm = () => {
  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm({
    resolver: yupResolver(schema),
  });

  const router = useRouter(); // Initialize the useRouter hook

  const onSubmit = async (data) => {
    console.log(data);

    // Simulate a successful registration response
    // Replace this with actual API call if needed
    try {
      // Uncomment and replace with actual registration API call
      // const response = await fetch(`${baseUrl}/register`, {
      //   method: 'POST',
      //   headers: {
      //     'Content-Type': 'application/json',
      //   },
      //   body: JSON.stringify(data),
      // });
      // if (!response.ok) {
      //   throw new Error('Registration failed');
      // }

      // For now, just reset the form and redirect
      reset();
      router.push('/login'); // Redirect to login page
    } catch (error) {
      console.error('Error during registration:', error.message);
      alert('Failed to register. Please try again.');
    }
  };

  // Password show & hide logic
  const [passwordType, setPasswordType] = useState("password");
  const togglePassword = () => {
    setPasswordType(passwordType === "password" ? "text" : "password");
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
                    <span className="eye-on">
                      <EyeOn />
                    </span>
                  )}
                </span>
              </div>
              <p className="form_error">{errors.password?.message}</p>
            </div>
          </div> 
        </div>

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
        <div className="signin-banner-from-btn mb-20">
          <button type="submit" className="signin-btn ">Register</button>
        </div>
      </form>
    </>
  );
};

export default RegisterForm;
