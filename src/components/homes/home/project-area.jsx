import project_data from '@/data/project-data';
import RightArrow from '@/svg/right-arrow';
import Image from 'next/image';
import Link from 'next/link';
import React, { useEffect, useState } from 'react';
import { Navigation, Scrollbar } from 'swiper/modules';
import { Swiper, SwiperSlide } from 'swiper/react';
import styles from './styles.module.css'; // Import the CSS module
import axios from 'axios';

const setting = {
   loop: true,
   slidesPerView: 3,
   centeredSlides: true,
   spaceBetween: 30,
   breakpoints: {
      '1200': {
         slidesPerView: 3,
      },
      '992': {
         slidesPerView: 1,
      },
      '768': {
         slidesPerView: 1,
      },
      '576': {
         slidesPerView: 1,
      },
      '0': {
         slidesPerView: 1,
      },
   },
   scrollbar: {
      el: ".tp-scrollbar",
      clickable: true,
   },
}

const baseUrl = process.env.NEXT_PUBLIC_API_URL;

const Temtenomial = () => {
   const [isDragged, setIsDragged] = useState(false);
   const [projectData, setProjectData] = useState([]);

   useEffect(() => {
      const fetchData = async () => {
         try {
            const response = await axios.get(`${baseUrl}/projects`);
            setProjectData(response.data);
            console.log("print project data", response.data);
         } catch (error) {
            console.error("Error fetching data", error);
         }
      };
      fetchData();
   }, []);

   const handleSlideChange = () => {
      setIsDragged(true);
   };

   const handleTransitionEnd = () => {
      setIsDragged(false);
   };

   const truncateText = (text, maxLength = 100) => {
      return text.length > maxLength ? text.substring(0, maxLength) + "..." : text;
   };

   return (
      <>
         <div className="tp-project__area grey-bg pt-50 pb-110 fix">
            <div className="container">
               {/* Header Section */}
               <div className="row">
                  <div className="col-xl-12 text-center">
                     <div className="tp-project__section-box wow tpfadeLeft" data-wow-duration=".9s" data-wow-delay=".3s">
                        <h3 className="tp-section-title">
                           Explore the endless digital opportunities for your brand with our full range of solutions.
                        </h3>
                     </div>
                  </div>
               </div>
            </div>

            {/* Slider Section */}
            <div className="container-fluid gx-0">
               <div className="row gx-0">
                  <div className="col-xl-12">
                     <div className="tp-project__slider-section">
                        <Swiper
                           {...setting}
                           onSliderMove={handleSlideChange}
                           onTransitionEnd={handleTransitionEnd}
                           modules={[Navigation, Scrollbar]}
                           className={`swiper-container tp-project__slider-active ${isDragged ? "dragged" : ""}`}
                        >
                           {projectData.map((item, i) => (
                              <SwiperSlide key={i} className="swiper-slide wow tpfadeUp" data-wow-duration=".9s" data-wow-delay=".5s">
                                 <div className="tp-project__slider-wrapper">
                                    <div className="tp-project__item d-flex align-items-center">
                                       <Link href={`/project-details/${item._id}`}>
                                          <div className="tp-project__thumb">
                                             <Image
                                                src={`${baseUrl}${item.image}`}
                                                alt="theme-pure"
                                                className={styles.imgResponsive}
                                                layout="fixed"
                                                width={500}
                                                height={300}
                                             />
                                          </div>
                                       </Link>

                                       <div className="tp-project__content">
                                          <div className="tp-project__brand-icon">
                                             <p>{item.name}</p>
                                          </div>
                                          <div className="tp-project__title-box">
                                             <h4 className="tp-project__title-sm">
                                                <Link href={`/project-details/${item._id}`}>{item.title}</Link>
                                             </h4>
                                             <p className="tp-project__description">
                                                {truncateText(item.description, 150)}
                                                {item.description.length > 150 && (
                                                   <Link href={`/project-details/${item._id}`}>
                                                      <a className={styles.tpProjectLearnMore}> Learn more...</a>
                                                   </Link>
                                                )}
                                             </p>
                                          </div>
                                          <div className="tp-project__meta d-flex align-items-center">
                                             <div className="tp-blog-category category-color-1">
                                                <span>{item.category}</span>
                                             </div>
                                             <div className="tp-project__link">
                                                <Link href={`/project-details/${item._id}`}>
                                                   <RightArrow />
                                                </Link>
                                             </div>
                                          </div>
                                       </div>
                                    </div>
                                 </div>
                              </SwiperSlide>
                           ))}
                        </Swiper>
                        <div className="tp-scrollbar"></div>
                     </div>
                  </div>
               </div>
            </div>
         </div>
      </>
   );
};

export default Temtenomial;
