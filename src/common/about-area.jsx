import Link from 'next/link';
import Image from 'next/image';
import React from 'react';

// images import 
import about_img_1 from "../../public/assets/img/about/about-bg-shape.png"
import about_img_2 from "../../public/assets/img/about/about-2.jpg"
import about_img_3 from "../../public/assets/img/about/about-1.jpg"
import about_img_4 from "../../public/assets/img/about/about-3.jpg"
import about_img_5 from "../../public/assets/img/about/about-5.png"

// about data
const about_data =[
    {
        id: 1, 
        cls: "bg-shape",
        img: about_img_1
    },
    {
        id: 2, 
        cls: "main-img z-index",
        img: about_img_2
    },
    {
        id: 3, 
        cls: "sub-img-1 d-none d-sm-block z-index-3",
        img: about_img_3
    },
    {
        id: 4, 
        cls: "sub-img-2 d-none d-sm-block",
        img: about_img_4
    },
    {
        id: 5, 
        cls: "sub-img-3 d-none d-sm-block z-index-3",
        img: about_img_5
    },
]

// about content
const about_content = {
    title: "OVER 150K+ CLIENTS",
    sub_title: "We Offer Real-Time Data Solutions",
    des: (
        <>
            At CodecafeLab, our mission is to revolutionize the way businesses leverage data. With a client base exceeding 150,000, we have established ourselves as a leading provider of real-time data solutions that drive business intelligence and operational excellence. Our cutting-edge technology and expertise enable us to deliver insights that are not only timely but also actionable. We specialize in transforming complex data sets into clear, understandable reports and visualizations that support strategic decision-making and enhance overall performance. Whether you’re looking to optimize your digital presence, streamline operations, or gain a competitive edge, our solutions are designed to help you achieve your goals with precision and efficiency.
        </>
    ),
    about_list: [
        <>**Comprehensive Data Analysis**: Our solutions offer a wide range of analysis options, including trend analysis, anomaly detection, and performance metrics, tailored to address your specific business needs.</>,
        <>**Page Load Analysis**: We provide in-depth insights into page load times, sizes, and request counts, helping you optimize website performance for a better user experience and faster loading times.</>,
        <>**Advanced Big Data Analysis**: Our big data solutions are designed to handle and interpret vast amounts of data, enabling you to uncover hidden patterns, make data-driven decisions, and enhance operational efficiency.</>,
        <>**Real-Time Data Monitoring**: Stay ahead with our real-time data monitoring services, which offer continuous updates and alerts, ensuring you’re always informed about critical metrics and changes affecting your business.</>,
        <>**Customizable Dashboards and Reporting**: We create user-friendly dashboards and reports that present complex data in an easily digestible format, allowing for quick insights and informed decision-making.</>,
        <>**Scalable Solutions**: Our technology is built to scale with your business, providing the flexibility to adapt to growing data volumes and evolving business requirements without compromising performance.</>,
        <>**Expert Consulting and Support**: Beyond our data solutions, we offer expert consulting services to help you implement and maximize the value of our technology, ensuring that your data strategy aligns with your business objectives.</>,
        <>**Data Security and Compliance**: We prioritize data security and ensure our solutions comply with industry standards and regulations, protecting your valuable information and maintaining your trust.</>,
    ],
    btn_text: "About Us",
};

const {title, sub_title, des, about_list, btn_text}  = about_content


const AboutArea = () => {
    return (
        <>
            <div className="tp-about__area tp-about__pt-pb pt-100 pb-160">
               <div className="container">
                  <div className="row align-items-center">
                     <div className="col-xl-6 col-lg-6 wow tpfadeLeft" data-wow-duration=".9s" data-wow-delay=".2s">
                        <div className="tp-about__img-wrapper text-center text-lg-end p-relative">
                            {about_data.map((item, i)  => 
                                <div key={i} className={`tp-about__${item.cls}`}>
                                    <Image src={item.img} alt="theme-pure" />
                                </div>
                            )} 
                        </div>
                     </div>
                     <div className="col-xl-6 col-lg-6 wow tpfadeRight" data-wow-duration=".9s" data-wow-delay=".6s">
                        <div className="tp-about__right">
                           <div className="tp-about__section-box">
                              <h4 className="tp-section-subtitle">{title}</h4>
                              <h3 className="tp-section-title mb-15">{sub_title}</h3>
                              <p>{des}</p>
                           </div>
                           <div className="tp-about__list">
                              <ul>
                                {about_list.map((item , i)  =>  <li key={i}><i className="fal fa-check"></i>{item}</li>)}
                              </ul>
                           </div>
                           <div className="tp-about__btn">
                              <Link className="tp-btn tp-btn-hover alt-color-black" href="/about">
                                 <span>{btn_text}</span>
                                 <b></b>
                              </Link>
                           </div>
                        </div>
                     </div>
                  </div>
               </div>
            </div>
        </>
    );
};

export default AboutArea;