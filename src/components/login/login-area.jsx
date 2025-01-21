// import React from 'react';
// import Loginform from '@/forms/login-form';
// import AppleIcon from '@/svg/apple-icon';
// import GoogleIcon from '@/svg/google-icon';
// import Image from 'next/image';
// import Link from 'next/link';

// // shape imports
// import shape_1 from '../../../public/assets/img/login/login-shape-1.png';
// import shape_2 from '../../../public/assets/img/login/login-2.png';
// import shape_3 from '../../../public/assets/img/login/login-1.png';
// import shape_4 from '../../../public/assets/img/login/login-3.png';
// import shape_5 from '../../../public/assets/img/login/login-4.png';

// const login_content = {
//   bg_img: '/assets/img/login/login-bg-shape.png',
//   banner_title: <>Welcome To <br /> Your Softec System.</>,
// };

// const { bg_img, banner_title } = login_content

// const LoginArea = () => {
//   return (
//     <>
//       <div id="smooth-wrapper">
//         <div id="smooth-content">
//           <main>
//             <div className="signin-banner-area d-flex align-items-center">
//               <div
//                 className="signin-banner-left-box p-relative"
//                 style={{ backgroundImage: `url(${bg_img})` }}
//               >
//                 <div className="signin-banner-bottom-shape">
//                   <Image src={shape_1} alt="theme-pure" />
//                 </div>
//                 <div className="signin-banner-left-wrap">
//                   <div className="signin-banner-title-box mb-4">
//                     <h4 className="signin-banner-title tp-char-animation">{banner_title}</h4>
//                   </div>
//                   <div className="signin-banner-img-box position-relative">
//                     <div className="signin-banner-img signin-img-1 d-none d-md-block z-index-3">
//                       <Image src={shape_2} alt="theme-pure" />
//                     </div>
//                     <div className="signin-banner-img signin-img-2 d-none d-md-block">
//                       <Image src={shape_3} alt="theme-pure" />
//                     </div>
//                     <div className="signin-banner-img signin-img-3 d-none d-md-block z-index-5">
//                       <Image src={shape_4} alt="theme-pure" />
//                     </div>
//                     <div className="signin-banner-img signin-img-4 d-none d-sm-block">
//                       <Image src={shape_5} alt="theme-pure" />
//                     </div>
//                   </div>
//                 </div>
//               </div>
//               <div className="signin-banner-form d-flex justify-content-center align-items-center">
//                 <div className="signin-banner-form-wrap">
//                   <div className="signin-banner-title-box mb-4">
//                     <h4 className="signin-banner-form-title">Register Account</h4>
//                   </div>
//                   <div className="signin-banner-login-browser mb-3">
//                   <Link href="#" className="btn btn-outline-secondary d-flex align-items-center">
//   <GoogleIcon className="me-2" />
//   Continue with Google
// </Link>

                    
// <Link href="#" className="btn btn-outline-secondary d-flex align-items-center mt-2">
//                       <AppleIcon className="me-2" />
//                       Continue with Apple
//                     </Link>
//                   </div>
//                   <div className="signin-banner-form-box">
//                     <h5 className="signin-banner-form-subtitle">Or Sign Up with email</h5>
//                     <Loginform />
//                   </div>
//                 </div>
//               </div>
//             </div>
//           </main>
//         </div>
//       </div>
//     </>
//   );
// };

// export default LoginArea;
// import React from 'react';
// import LoginForm from '@/forms/login-form';
// import AppleIcon from '@/svg/apple-icon';
// import GoogleIcon from '@/svg/google-icon';
// import Image from 'next/image';
// import Link from 'next/link';

// // Shape imports
// import shape_1 from '../../../public/assets/img/login/login-shape-1.png';
// import shape_2 from '../../../public/assets/img/login/login-2.png';
// import shape_3 from '../../../public/assets/img/login/login-1.png';
// import shape_4 from '../../../public/assets/img/login/login-3.png';
// import shape_5 from '../../../public/assets/img/login/login-4.png';

// const login_content = {
//   bg_img: '/assets/img/login/login-bg-shape.png',
//   banner_title: <>Welcome Back! <br /> Log in to Your Account.</>,
// };

// const { bg_img, banner_title } = login_content;

// const LoginArea = () => {
//   return (
//     <>
//       <div id="smooth-wrapper">
//         <div id="smooth-content">
//           <main>
//             <div className="signin-banner-area signin-banner-main-wrap d-flex align-items-center">
//               <div
//                 className="signin-banner-left-box signin-banner-bg p-relative"
//                 style={{ backgroundImage: `url(${bg_img})` }}
//               >
//                 <div className="signin-banner-bottom-shape">
//                   <Image src={shape_1} alt="theme-pure" />
//                 </div>
//                 <div className="signin-banner-left-wrap">
//                   <div className="signin-banner-title-box mb-100">
//                     <h4 className="signin-banner-title tp-char-animation">
//                       {banner_title}
//                     </h4>
//                   </div>
//                   <div className="signin-banner-img-box position-relative">
//                     <div className="signin-banner-img signin-img-1 d-none d-md-block z-index-3">
//                       <Image src={shape_2} alt="theme-pure" />
//                     </div>
//                     <div className="signin-banner-img signin-img-2 d-none d-md-block">
//                       <Image src={shape_3} alt="theme-pure" />
//                     </div>
//                     <div className="signin-banner-img signin-img-3 d-none d-md-block z-index-5">
//                       <Image src={shape_4} alt="theme-pure" />
//                     </div>
//                     <div className="signin-banner-img signin-img-4 d-none d-sm-block">
//                       <Image src={shape_5} alt="theme-pure" />
//                     </div>
//                   </div>
//                 </div>
//               </div>
//               <div className="signin-banner-form d-flex justify-content-center align-items-center">
//                 <div className="signin-banner-form-wrap">
//                   <div className="signin-banner-title-box mb-4">
//                     <h4 className="signin-banner-form-title">Log In</h4>
//                   </div>
//                   <div className="signin-banner-login-browser mb-3">
//                     <Link href="#" className="btn btn-outline-secondary d-flex align-items-center">
//                       <GoogleIcon className="me-2" />
//                       Continue with Google
//                     </Link>
//                     <Link href="#" className="btn btn-outline-secondary d-flex align-items-center mt-2">
//                       <AppleIcon className="me-2" />
//                       Continue with Apple
//                     </Link>
//                   </div>
//                   <div className="signin-banner-form-box">
//                     <h5 className="signin-banner-form-subtitle">Or Log In with email</h5>
//                     <LoginForm />
//                   </div>
//                 </div>
//               </div>
//             </div>
//           </main>
//         </div>
//       </div>
//     </>
//   );
// };

// export default LoginArea;



import React from 'react';
import LoginForm from '@/forms/login-form'; // Changed to LoginForm
import AppleIcon from '@/svg/apple-icon'; 
import GoogleIcon from '@/svg/google-icon';
import Image from 'next/image';
import Link from 'next/link';

// shape import here
import shape_1 from "../../../public/assets/img/login/login-shape-1.png";
import shape_2 from "../../../public/assets/img/login/login-2.png";
import shape_3 from "../../../public/assets/img/login/login-1.png";
import shape_4 from "../../../public/assets/img/login/login-3.png";
import shape_5 from "../../../public/assets/img/login/login-4.png";

const login_content = {
   bg_img: "/assets/img/login/login-bg-shape.png",
   banner_title: <>Welcome To <br /> Your Softec System.</>, 
}
const {bg_img, banner_title} = login_content;

const LoginArea = () => {
    return (
        <>
            <div id="smooth-wrapper">
                <div id="smooth-content">
                    <main>
                        <div className="signin-banner-area signin-banner-main-wrap d-flex align-items-center">
                            <div className="signin-banner-left-box signin-banner-bg p-relative" 
                                style={{ backgroundImage: `url(${bg_img})` }}>
                                <div className="signin-banner-bottom-shape">
                                    <Image src={shape_1} alt="theme-pure"/>
                                </div>
                                <div className="signin-banner-left-wrap">
                                    <div className="signin-banner-title-box mb-100">
                                        <h4 className="signin-banner-title tp-char-animation">{banner_title}</h4>
                                    </div>
                                    <div className="signin-banner-img-box position-relative">
                                        <div className="signin-banner-img signin-img-1 d-none d-md-block z-index-3">
                                            <Image src={shape_2} alt="theme-pure"/>
                                        </div>
                                        <div className="signin-banner-img signin-img-2 d-none d-md-block">
                                            <Image src={shape_3} alt="theme-pure"/>
                                        </div>
                                        <div className="signin-banner-img signin-img-3 d-none d-md-block z-index-5">
                                            <Image src={shape_4} alt="theme-pure"/>
                                        </div>
                                        <div className="signin-banner-img signin-img-4 d-none d-sm-block">
                                            <Image src={shape_5} alt="theme-pure"/>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div className="signin-banner-from d-flex justify-content-center align-items-center">
                                <div className="signin-banner-from-wrap">
                                    <div className="signin-banner-title-box">
                                        <h4 className="signin-banner-from-title">Login</h4> {/* Updated to Login */}
                                    </div>
                                    <div className="signin-banner-login-browser">
                                        <Link href="#"> 
                                            <GoogleIcon />
                                            Continue with Google
                                        </Link>
                                        <Link href="#"> 
                                            <AppleIcon />
                                        </Link>
                                    </div>
                                    <div className="signin-banner-from-box">
                                        <h5 className="signin-banner-from-subtitle">Or log in with email</h5> {/* Updated subtitle */}
                                        <LoginForm /> {/* Changed to LoginForm */}
                                    </div>
                                </div>
                            </div>
                        </div>
                    </main>
                </div>
            </div>
        </>
    );
};

export default LoginArea; 
