import React, { useEffect, useState } from 'react';
import { useRouter } from 'next/router';
import axios from 'axios';
import Image from 'next/image';
import Link from 'next/link';

import service_icon_1 from "../../../public/assets/img/service/sv-icon-3-1.png";
import service_icon_2 from "../../../public/assets/img/service/service-shape-3-1.png";

const baseUrl = process.env.NEXT_PUBLIC_API_URL;

const service_content = {
   title: <>Accounting Software <br /> That Handles it All.</>,
   btn_text: <>get in touch</>,
   bg_img: "/assets/img/service/service-3-bg.png",
   service_title: "CRM Management",
   service_info: <>Generate, Manage, and Convert leads <br /> into Customers. Automatically</>,
};

const PortFolio = () => {
   const [serviceData, setServiceData] = useState([]);
   const router = useRouter();

   useEffect(() => {
      const fetchData = async () => {
         try {
            const response = await axios.get(`${baseUrl}/services`);
            setServiceData(response.data);
         } catch (error) {
            console.error('Error fetching data:', error);
         }
      };
      fetchData();
   }, []);

   return (
      <>
         <div className="tp-service-area pb-120 z-index">
            <div className="container">
               <div className="row">
                  <div className="col-xl-12">
                     <div className="tp-service-section-wrapper mb-60 d-flex justify-content-between align-items-end">
                        <h3 className="tp-section-title tp-title-anim">{service_content.title}</h3>
                        <Link
                           className="tp-btn-inner tp-btn-hover alt-color-black wow tpfadeRight"
                           data-wow-duration=".9s"
                           data-wow-delay=".3s"
                           href="/contact"
                        >
                           <span>{service_content.btn_text}</span>
                           <b></b>
                        </Link>
                     </div>
                  </div>
               </div>
               <div className="row">
                  <div className="col-xl-8 wow tpfadeUp" data-wow-duration=".9s" data-wow-delay=".3s">
                     <div
                        className="tp-service-3-item mb-30 p-relative z-index"
                        style={{ backgroundImage: `url(${service_content.bg_img})` }}
                     >
                        <div className="tp-service-3-icon">
                           <Image src={service_icon_1} alt="service icon" />
                        </div>
                        <div className="tp-service-3-content">
                           <span>{service_content.service_title}</span>
                           <h4 className="tp-service-3-title-sm">
                              <Link href="/service">{service_content.service_info}</Link>
                           </h4>
                        </div>
                        <div className="tp-service-3-btn">
                           <Link className="tp-btn-white-solid" href="/service">
                              Learn More
                           </Link>
                        </div>
                        <div className="tp-service-3-shape">
                           <Image src={service_icon_2} alt="service shape" />
                        </div>
                     </div>
                  </div>

                  {serviceData.map((item, i) => (
                     <div
                        key={i}
                        className="col-xl-4 col-lg-6 col-md-6 wow tpfadeUp"
                        data-wow-duration=".9s"
                        data-wow-delay=".5s"
                     >
                        <div className="tp-service-sm-item mb-30 d-flex flex-column justify-content-between">
                           <Link href={`/service-details/${item._id}`}>
                              <div className="tp-service-sm-icon">
                                 <Image
                                    style={{ maxWidth: '100%', height: '150px', overflow: 'hidden', borderRadius: "10px" }}
                                    src={`${baseUrl}${item.image}`}
                                    alt="service image"
                                    width={300}
                                    height={200}
                                 />
                              </div>
                           </Link>
                           <div className="tp-service-sm-content">
                              <span>{item.category}</span>
                              <h3 className="tp-service-sm-title">
                                 <Link href={`/service-details/${item._id}`}>{item.title.slice(0, 15) + "..."}</Link>
                                 <p>{item.description.slice(0, 40) + "..."}</p>

                              </h3>
                              <div className="tp-service-sm-link">
                                 <Link href={`/service-details/${item._id}`}>
                                    Learn More <i className="far fa-arrow-right"></i>
                                 </Link>
                              </div>
                           </div>
                        </div>
                     </div>
                  ))}
               </div>
            </div>
         </div>
      </>
   );
};

export default PortFolio;
