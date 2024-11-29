//  import React, { useState } from 'react';

// const LoginForm = () => {
//   const [email, setEmail] = useState('');
//   const [password, setPassword] = useState('');
//   const [error, setError] = useState('');

//   const handleSubmit = async (event) => {
//     event.preventDefault();

//     if (!email || !password) {
//       setError('Please fill in both fields.');
//       return;
//     }

//     try {
//       const res = await fetch('/api/login', {
//         method: 'POST',
//         headers: {
//           'Content-Type': 'application/json',
//         },
//         body: JSON.stringify({ email, password }),
//       });

//       const data = await res.json();

//       if (res.ok) {
//         window.location.href = '/dashboard'; 
//       } else {
//         setError(data.message || 'Login failed.');
//       }
//     } catch (err) {
//       setError('An unexpected error occurred.');
//     }
//   };

//   return (
//     <div>
//       {error && <p style={{ color: 'red' }}>{error}</p>}
//       <form onSubmit={handleSubmit}>
//         <div>
//           <label htmlFor="email">Email</label>
//           <input
//             type="email"
//             id="email"
//             value={email}
//             onChange={(e) => setEmail(e.target.value)}
//             required
//           />
//         </div>
//         <div>
//           <label htmlFor="password">Password</label>
//           <input
//             type="password"
//             id="password"
//             value={password}
//             onChange={(e) => setPassword(e.target.value)}
//             required
//           />
//         </div>
//         <button type="button" class="btn btn-default"></button>
//       </form>
//     </div>
//   );
// };

// export default LoginForm;
// // import React, { useState } from 'react';

// // const LoginForm = () => {
// //   const [email, setEmail] = useState('');
// //   const [password, setPassword] = useState('');
// //   const [error, setError] = useState('');

//   const handleSubmit = async (event) => {
//     event.preventDefault();

//     if (!email || !password) {
//       setError('Please fill in both fields.');
//       return;
//     }

//     try {
//       const res = await fetch('/api/login', {
//         method: 'POST',
//         headers: {
//           'Content-Type': 'application/json',
//         },
//         body: JSON.stringify({ email, password }),
//       });

//       const data = await res.json();

//       if (res.ok) {
//         window.location.href = '/dashboard'; 
//       } else {
//         setError(data.message || 'Login failed.');
//       }
//     } catch (err) {
//       setError('An unexpected error occurred.');
//     }
//   };

//   return (
//     <div style={{ maxWidth: '400px', margin: '0 auto', padding: '1rem' }}>
//       {error && (
//         <p style={{ color: 'red', marginBottom: '1rem' }}>{error}</p>
//       )}
//       <form onSubmit={handleSubmit} style={{ display: 'flex', flexDirection: 'column' }}>
//         <div style={{ marginBottom: '1rem' }}>
//           <label htmlFor="email" style={{ display: 'block', marginBottom: '0.5rem' }}>Email</label>
//           <input
//             type="email"
//             id="email"
//             value={email}
//             onChange={(e) => setEmail(e.target.value)}
//             required
//             style={{ width: '100%', padding: '0.5rem', borderRadius: '4px', border: '1px solid #ccc' }}
//           />
//         </div>
//         <div style={{ marginBottom: '1rem' }}>
//           <label htmlFor="password" style={{ display: 'block', marginBottom: '0.5rem' }}>Password</label>
//           <input
//             type="password"
//             id="password"
//             value={password}
//             onChange={(e) => setPassword(e.target.value)}
//             required
//             style={{ width: '100%', padding: '0.5rem', borderRadius: '4px', border: '1px solid #ccc' }}
//           />
//         </div>
//         <button
//           type="submit"
//           style={{ padding: '0.75rem', backgroundColor: '#007bff', color: '#fff', border: 'none', borderRadius: '4px', cursor: 'pointer' }}
//         >
//           Login
//         </button>
//       </form>
//     </div>
//   );
// };

// export default LoginForm;
// import React, { useState } from "react";
// import EyeOff from "../svg/eye-off";
// import EyeOn from "../svg/eye-on";
// import { useForm } from "react-hook-form";
// import { yupResolver } from "@hookform/resolvers/yup";
// import * as yup from "yup"; 
// import Link from "next/link";

// // Define the validation schema for registration
// const schema = yup
//   .object({
//     fullname: yup.string().required().label("FullName"),
//     email: yup.string().required().email().label("Email"),
//     password: yup.string().required().min(6).label("Password"),
//   })
//   .required();

// const LoginForm = () => {
//   const {
//     register,
//     handleSubmit,
//     reset,
//     formState: { errors },
//   } = useForm({
//     resolver: yupResolver(schema),
//   });

//   const onSubmit = (data) => {
//     console.log(data);
//     reset();
//   };

//   // Password show & hide state
//   const [passwordType, setPasswordType] = useState("password");
//   const togglePassword = () => {
//     setPasswordType((prevType) => (prevType === "password" ? "text" : "password"));
//   };

//   return (
//     <div className="container mt-5">
//       <form onSubmit={handleSubmit(onSubmit)} className="row">
//         <div className="col-12 ">
//           <div className="form-floating">
//             <input
//               id="fullname"
//               type="text"
//               className={`form-control ${errors.fullname ? 'is-invalid' : ''}`}
//               {...register("fullname")}
//               placeholder="Full Name"
//             />
//             <label htmlFor="fullname">UserName </label>
//             <div className="invalid-feedback">
//               {errors.fullname?.message}
//             </div>
//           </div>
//         </div>
//         <div className="col-12 ">
//           <div className="form-floating">
//             <input
//               id="email"
//               type="email"
//               className={`form-control ${errors.email ? 'is-invalid' : ''}`}
//               {...register("email")}
//               placeholder="Your Email"
//             />
//             <label htmlFor="email">Your Email</label>
//             <div className="invalid-feedback">
//               {errors.email?.message}
//             </div>
//           </div>
//         </div>
//         <div className="col-12  position-relative">
//           <div className="form-floating">
//             <input
//               id="password"
//               type={passwordType}
//               className={`form-control ${errors.password ? 'is-invalid' : ''}`}
//               {...register("password")}
//               placeholder="Password"
//             />
//             <label htmlFor="password">Password</label>
//             <div className="invalid-feedback">
//               {errors.password?.message}
//             </div>
//             <span className="position-absolute end-0 top-50 translate-middle-y pe-3" onClick={togglePassword}>
//               {passwordType === "password" ? (
//                 <EyeOff />
//               ) : (
//                 <EyeOn />
//               )}
//             </span>
//           </div>
//         </div>
//         <div className="col-12 mb-3">
//           <div className="form-check">
//             <input
//               className="form-check-input"
//               type="checkbox"
//               id="rememberMe"
//             />
//             <label className="form-check-label" htmlFor="rememberMe">
//               Chek me
//             </label>
//           </div>
//         </div>
//         <div className="col-12 ">
//           <Link href="#" className="d-block text-end">Forgot password?</Link>
//         </div>
//         <div className="col-12">
//           <button type="submit" className="btn btn-primary w-100">Login Account</button>
//         </div>
//       </form>
//     </div>
//   );
// };

// export default LoginForm;


// import React, { useState } from "react";
// import EyeOff from "../svg/eye-off";
// import EyeOn from "../svg/eye-on";
// import { useForm } from "react-hook-form";
// import { yupResolver } from "@hookform/resolvers/yup";
// import * as yup from "yup";
// import Link from "next/link";

// // Schema for login form
// const schema = yup
//   .object({
//     email: yup.string().required().email().label("Email"),
//     password: yup.string().required().min(6).label("Password"),
//   })
//   .required();

// const LoginForm = () => {
//   const {
//     register,
//     handleSubmit,
//     reset,
//     formState: { errors },
//   } = useForm({
//     resolver: yupResolver(schema),
//   });

//   const onSubmit = (data) => {
//     console.log(data);
//     reset();
//   };

//   // Password show & hide
//   const [passwordType, setPasswordType] = useState("password");
//   const togglePassword = () => {
//     setPasswordType(passwordType === "password" ? "text" : "password");
//   };

//   return (
//     <>
//       <form onSubmit={handleSubmit(onSubmit)}>
//         <div className="row">
//           <div className="col-12 mb-3">
//             <div className="form-floating">
//               <input
//                 id="email"
//                 type="email"
//                 className={`form-control ${errors.email ? 'is-invalid' : ''}`}
//                 {...register("email")}
//                 placeholder="Your Email"
//               />
//               <label htmlFor="email">Your Email</label>
//               <div className="invalid-feedback">
//                 {errors.email?.message}
//               </div>
//             </div>
//           </div>
//           <div className="col-12 mb-3 position-relative">
//             <div className="form-floating">
//               <input
//                 id="password"
//                 type={passwordType}
//                 className={`form-control ${errors.password ? 'is-invalid' : ''}`}
//                 {...register("password")}
//                 placeholder="Password"
//               />
//               <label htmlFor="password">Password</label>
//               <div className="invalid-feedback">
//                 {errors.password?.message}
//               </div>
//               <span
//                 className="position-absolute end-0 top-50 translate-middle-y pe-3"
//                 onClick={togglePassword}
//               >
//                 {passwordType === "password" ? <EyeOff /> : <EyeOn />}
//               </span>
//             </div>
//           </div>
//         </div>

//         <div className="signin-banner-form-remember mb-3">
//           <div className="form-check">
//             <input
//               className="form-check-input"
//               type="checkbox"
//               id="rememberMe"
//             />
//             <label className="form-check-label" htmlFor="rememberMe">
//               Remember me
//             </label>
//           </div>
//         </div>

//         <div className="mb-3 text-end">
//           <Link href="#">Forgot password?</Link>
//         </div>

//         <div className="signin-banner-from-btn mb-3">
//           <button type="submit" className="btn btn-primary w-100">Login</button>
//         </div>
//       </form>
//     </>
//   );
// };

// export default LoginForm;
// import React, { useState } from "react";
// import EyeOff from "../svg/eye-off";
// import EyeOn from "../svg/eye-on";
// import { useForm } from "react-hook-form";
// import { yupResolver } from "@hookform/resolvers/yup";
// import * as yup from "yup"; 
// import Link from "next/link";
// import Login from "@/components/login";
// const baseUrl = process.env.NEXT_PUBLIC_API_URL;
// // Schema for login form
// const schema = yup
//   .object({
//     email: yup.string().required().email().label("Email"),
//     password: yup.string().required().min(6).label("Password"),
//   })
//   .required();

// const LoginForm = () => {
//   const {
//     register,
//     handleSubmit,
//     reset,
//     formState: { errors },
//   } = useForm({
//     resolver: yupResolver(schema),
//   });

//   const onSubmit =  async (data) => { 
//     const baseUrl = 'https://http://localhost:3000/login'
//       const url = `${baseUrl}/Login`

//     console.log(data);
//     reset();
//   };

//   // Password show & hide
//   const [passwordType, setPasswordType] = useState("password");
//   const togglePassword = () => {
//     setPasswordType(passwordType === "password" ? "text" : "password");
//   };

//   return (
//     <>
//       <form onSubmit={handleSubmit(onSubmit)}>
//         <div className="row">
//           <div className="col-12 mb-3">
//             <div className="postbox__comment-input mb-30">
//               <input 
//                 name="email"
//                 {...register("email")}
//                 className="inputText" 
//                 type="email"
//               />
//               <span className="floating-label">Your Email</span>
//               <p className="form_error">{errors.email?.message}</p>
//             </div>
//           </div>
//           <div className="col-12 mb-3">
//             <div className="postbox__comment-input mb-30"> 
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
//             <p className="form_error">{errors.password?.message}</p>
//           </div> 
//         </div>

//         <div className="signin-banner-form-remember mb-3">
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
//                 <Link href="#">Forgot password?</Link>
//               </div>
//             </div>
//           </div>
//         </div>

//         <div className="signin-banner-from-btn mb-3">
//           <button type="submit" className="signin-btn">Login</button>
//         </div>
//       </form>
//     </>
//   );
// };

// export default LoginForm;


// import React, { useState } from "react";
// import EyeOff from "../svg/eye-off";
// import EyeOn from "../svg/eye-on";
// import { useForm } from "react-hook-form";
// import { yupResolver } from "@hookform/resolvers/yup";
// import * as yup from "yup";
// import Link from "next/link";

// // Define the URL
// const baseUrl = process.env.NEXT_PUBLIC_API_URL || 'http://localhost:8000';

// // Schema for login form
// const schema = yup
//   .object({
//     email: yup.string().required().email().label("Email"),
//     password: yup.string().required().min(6).label("Password"),
//   })
//   .required();

// const LoginForm = () => {
//   const {
//     register,
//     handleSubmit,
//     reset,
//     formState: { errors },
//   } = useForm({
//     resolver: yupResolver(schema),
//   });

 
//   const onSubmit = async (data) => {
//     const url = `${baseUrl}/login`;

//     try {
  
//       const response = await fetch(url, {
//         method: 'post',
//         headers: {
//           'Content-Type': 'application/json',
//         },
//         body: JSON.stringify(data),
//       });

//       // if (!response.ok) {
        
//       //   const error = await response.json();
//       //   throw new Error(error.message || 'Login failed');
//       // }

   
//       const responseData = await response.json();
//       console.log('Login successful:', responseData);

      
//       reset();

    

//     } catch (error) {
//       console.error('Error during login:', error.message);
      
//       alert('Failed to login. Please try again.');
//     }
  
//   };
 
//   const [passwordType, setPasswordType] = useState("password");
//   const togglePassword = () => {
//     setPasswordType(passwordType === "password" ? "text" : "password");
//   };

//   return (
//     <>
//       <form onSubmit={handleSubmit(onSubmit)}>
//         <div className="row">
//           <div className="col-12 mb-3">
//             <div className="postbox__comment-input mb-30">
//               <input 
//                 name="email"
//                 {...register("email")}
//                 className="inputText" 
//                 type="email"
//               />
//               <span className="floating-label">Your Email</span>
//               <p className="form_error">{errors.email?.message}</p>
//             </div>
//           </div>
//           <div className="col-12 mb-3">
//             <div className="postbox__comment-input mb-30"> 
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
//                   <span className="eye-on">
//                     <EyeOn />
//                   </span>
//                 )}
//               </span>
//             </div>
//             <p className="form_error">{errors.password?.message}</p>
//           </div> 
//         </div>

//         <div className="signin-banner-form-remember mb-3">
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
//                 <Link href="#">Forgot password?</Link>
//               </div>
//             </div>
//           </div>
//         </div>

//         <div className="signin-banner-from-btn mb-3">
//           <button type="submit" className="signin-btn">Login</button>
//         </div>
//       </form>
//     </>
//   );
// };

// export default LoginForm;


// import React, { useState } from "react";
// import EyeOff from "../svg/eye-off";
// import EyeOn from "../svg/eye-on";
// import { useForm } from "react-hook-form";
// import { yupResolver } from "@hookform/resolvers/yup";
// import * as yup from "yup";
// import Link from "next/link";
// import { useRouter } from "next/router";  // Import useRouter

// // Define the URL
// const baseUrl = process.env.NEXT_PUBLIC_API_URL || 'http://localhost:8000';

// // Schema for login form
// const schema = yup
//   .object({
//     email: yup.string().required().email().label("Email"),
//     password: yup.string().required().min(6).label("Password"),
//   })
//   .required();

// const LoginForm = () => {
//   const {
//     register,
//     handleSubmit,
//     reset,
//     formState: { errors },
//   } = useForm({
//     resolver: yupResolver(schema),
//   });

//   const router = useRouter(); // Initialize the useRouter hook

//   const onSubmit = async (data) => {
//     const url = `${baseUrl}/login`;

//     try {
//       const response = await fetch(url, {
//         method: 'post',
//         headers: {
//           'Content-Type': 'application/json',
//         },
//         body: JSON.stringify(data),
//       });

//       if (!response.ok) {
//          const error = await response.json();
//          throw new Error(error.message || 'Login failed');
//       }

//      const responseData = await response.json();
//       console.log('Login successful:', responseData);

//       reset();

//       // You might want to redirect user on successful login
//       // router.push('/dashboard'); // Replace with your target page

//    } catch (error) {
//        console.error('Error during login:', error.message);
//        alert('Failed to login. Please try again.');
//     }
//   };

//   const [passwordType, setPasswordType] = useState("password");
//   const togglePassword = () => {
//     setPasswordType(passwordType === "password" ? "text" : "password");
//   };

//   return (
//     <>
//       <form onSubmit={handleSubmit(onSubmit)}>
//         <div className="row">
//           <div className="col-12 mb-3">
//             <div className="postbox__comment-input mb-30">
//               <input 
//                 name="email"
//                 {...register("email")}
//                 className="inputText" 
//                 type="email"
//               />
//               <span className="floating-label">Your Email</span>
//               <p className="form_error">{errors.email?.message}</p>
//             </div>
//           </div>
//           <div className="col-12 mb-3">
//             <div className="postbox__comment-input mb-30"> 
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
//                   <span className="eye-on">
//                     <EyeOn />
//                   </span>
//                 )}
//               </span>
//             </div>
//             <p className="form_error">{errors.password?.message}</p>
//           </div> 
//         </div>

//         <div className="signin-banner-form-remember mb-3">
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
//                 <Link href="#">Forgot password?</Link>
//               </div>
//             </div>
//           </div>
//         </div>

//         <div className="signin-banner-from-btn mb-3">
//           <button type="submit" className="signin-btn">Login</button>
//         </div>

//         {/* Add the Sign Up button here */}
//         <div className="signin-banner-from-btn mb-3">
//           <button 
//             type="button" 
//             className="signin-btn" 
//             onClick={() => router.push('/register')} // Redirect to register page
//           >
//             Sign Up
//           </button>
//         </div>
//       </form>
//     </>
//   );
// };

// export default LoginForm;


import React, { useState } from "react";
import EyeOff from "../svg/eye-off";
import EyeOn from "../svg/eye-on";
import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import * as yup from "yup";
import Link from "next/link";
import { useRouter } from "next/router"; // Import useRouter

// Define the URL
const baseUrl = process.env.NEXT_PUBLIC_API_URL || 'http://localhost:8000';

// Schema for login form
const schema = yup
  .object({
    email: yup.string().required().email().label("Email"),
    password: yup.string().required().min(6).label("Password"),
  })
  .required();

const LoginForm = () => {
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
    const url = `${baseUrl}/login`;

    try {
      const response = await fetch(url, {
        method: 'post',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(data),
      });

      if (!response.ok) {
        const error = await response.json();
        throw new Error(error.message || 'Login failed');
      }

      const responseData = await response.json();
      console.log('Login successful:', responseData);

      reset();

      // Redirect to home page after successful login
      // router.push('/home'); // Replace '/home' with your actual home page route

    } catch (error) {
      console.error('Error during login:', error.message);
      alert('Failed to login. Please try again.');
    }
  };

  const [passwordType, setPasswordType] = useState("password");
  const togglePassword = () => {
    setPasswordType(passwordType === "password" ? "text" : "password");
  };

  return (
    <>
      <form onSubmit={handleSubmit(onSubmit)}>
        <div className="row">
          <div className="col-12 mb-3">
            <div className="postbox__comment-input mb-30">
              <input 
                name="email"
                {...register("email")}
                className="inputText" 
                type="email"
              />
              <span className="floating-label">Your Email</span>
              <p className="form_error">{errors.email?.message}</p>
            </div>
          </div>
          <div className="col-12 mb-3">
            <div className="postbox__comment-input mb-30"> 
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

        <div className="signin-banner-form-remember mb-3">
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
                <Link href="#">Forgot password?</Link>
              </div>
            </div>
          </div>
        </div>

        <div className="signin-banner-from-btn mb-3">
          <button type="submit" className="signin-btn">Login</button>
        </div>

        {/* Add the Sign Up button here */}
        <div className="signin-banner-from-btn mb-3">
          <button 
            type="button" 
            className="signin-btn" 
            onClick={() => router.push('/register')} // Redirect to register page
          >
            Sign Up
          </button>
        </div>
      </form>
    </>
  );
};

export default LoginForm;
