import React from 'react';
import AnswerQuestion from '@/common/answer-question';
import Link from 'next/link';
import Image from 'next/image';
import SEO from '@/common/seo';

const baseUrl = process.env.NEXT_PUBLIC_API_URL;


const ServiceDetailsArea = ({ serviceData }) => {
   if (!serviceData) return null;

   const {
      name,
      title,
      description,
      category,
      image,
   } = serviceData;

   return (
      <>
         <SEO pageTitle={title} />

         <div className="sv-details-area pt-100 pb-100">
            <div className="container">
               <div className="row">
                  <div className="col-xl-4 col-lg-4">
                     <div className="sv-details-widget">
                        <div className="sv-details-category mb-30">
                           <div className="sv-details-category-title">
                              <h4 className="sv-details-title-sm">Service Category</h4>
                           </div>
                           <div className="sv-details-category-list">
                              <ul>
                                 <li className="active">
                                    <Link href="#"><span>{category}</span><i className="fal fa-angle-right"></i></Link>
                                 </li>
                              </ul>
                           </div>
                        </div>

                        <div className="tp-service__dashboard mb-30" style={{ backgroundImage: `url(/assets/img/service/sv-bg.jpg)` }}>
                           <div className="tp-service__top-content">
                              <h3 className="tp-service__title-white">{category}</h3>
                              <p>{title}</p>
                              <Link className="tp-btn-orange tp-btn-hover alt-color-white" href="/contact">
                                 <span>get in touch</span>
                                 <b></b>
                              </Link>
                           </div>

                        </div>

                        {/* <div className="sv-details-social-box mb-30">
                           <h4 className="sv-details-title-sm">Share it.</h4>
                           <div className="sv-details-social-link">
                              <Link href="#"><i className="fab fa-facebook-f"></i></Link>
                              <Link href="#"><i className="fab fa-twitter"></i></Link>
                              <Link href="#"><i className="fab fa-instagram"></i></Link>
                              <Link href="#"><i className="fab fa-youtube"></i></Link>
                           </div>
                        </div> */}

                     </div>
                  </div>

                  <div className="col-xl-8 col-lg-8">
                     <div className="sv-details-wrapper">
                        <div className="sv-details-thumb mb-45">
                           <Image src={`${baseUrl}${image}`} alt={title} width={800} height={500} />
                        </div>
                        <div className="sv-details-title-box mb-55">
                           <h4 className="sv-details-title">{name}</h4>
                           <p>{description}</p>
                        </div>
                        <div className="sv-details-text mb-35">
                           <h4 className="sv-details-text-title pb-10">Service Overview</h4>
                           <p>{description}</p>
                        </div>
                        <div className="sv-details-text-2">
                           <h4 className="sv-details-text-title">The Challenge</h4>
                           <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Maecenas interdum, orci at dapibus, massa ante pharetra tellus. Maecenas interdum, orci at euismod dapibus. Lorem ipsum dolor sit amet.!</p>
                        </div>
                         
                     </div>
                  </div>
               </div>
            </div>
         </div>
      </>
   );
};

export default ServiceDetailsArea;
