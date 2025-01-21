import Image from 'next/image';
import Link from 'next/link';
import React from 'react';
import Slider from 'react-slick';

// slider img import here
import slider_img_1_1 from "../../../../public/assets/img/integration/integration-1.png";
import slider_img_1_2 from "../../../../public/assets/img/integration/integration-2.png";
import slider_img_1_3 from "../../../../public/assets/img/integration/integration-3.png";
import slider_img_1_4 from "../../../../public/assets/img/integration/integration-4.png";
import slider_img_2_1 from "../../../../public/assets/img/integration/integration-5.png";
import slider_img_2_2 from "../../../../public/assets/img/integration/integration-6.png";
import slider_img_2_3 from "../../../../public/assets/img/integration/integration-7.png";
import slider_img_2_4 from "../../../../public/assets/img/integration/integration-8.png";

const integration_content = {
    sub_title: "Integration",

    title: <> Enhanced by these modern technologies{" "}<span>we deliver cutting-edge solutions tailored to your brand's needs</span></>,
    int_title: <>Integrated with Your Favourite Apps</>,
    btn_text: "See all Integrations",
    bg_img: "/assets/img/integration/integration-bg.jpg"
}
const { sub_title, title, int_title, btn_text, bg_img } = integration_content


const slider_one_data = [
    slider_img_1_1,
    slider_img_1_2,
    slider_img_1_3,
    slider_img_1_4,
]
const slider_two_data = [
    slider_img_2_1,
    slider_img_2_2,
    slider_img_2_3,
    slider_img_2_4,
]


// slider one setting 
const setting_one = {
    speed: 12000,
    autoplay: true,
    autoplaySpeed: 0,
    centerMode: true,
    cssEase: 'linear',
    slidesToShow: 1,
    slidesToScroll: 1,
    variableWidth: true,
    infinite: true,
    initialSlide: 1,
    arrows: false,
    buttons: false,
    responsive: [
        {
            breakpoint: 1200,
            settings: {
            }
        },
        {
            breakpoint: 992,
            settings: {
            }
        },
        {
            breakpoint: 768,
            settings: {
                slidesToShow: 1,
            }
        },
        {
            breakpoint: 480,
            settings: {
                slidesToShow: 1,
            }
        }
    ]
}

// slider two setting 
const setting_two = {
    speed: 12000,
    autoplay: true,
    autoplaySpeed: 0,
    centerMode: true,
    cssEase: 'linear',
    slidesToShow: 1,
    slidesToScroll: 1,
    variableWidth: true,
    infinite: true,
    initialSlide: 1,
    arrows: false,
    buttons: false,
    rtl: true,
    responsive: [
        {
            breakpoint: 1200,
            settings: {
            }
        },
        {
            breakpoint: 992,
            settings: {
            }
        },
        {
            breakpoint: 768,
            settings: {
                slidesToShow: 1,
            }
        },
        {
            breakpoint: 480,
            settings: {
                slidesToShow: 1,
            }
        }
    ]
}

const IntegrationArea = ({ style_integraton }) => {
    return (
        <>
  <div className="tp-integration-area pb-110 tp-integration-mlr mt-8">
    <div className="container">
      <div className="tp-integration-section-space grid grid-cols-1 lg:grid-cols-2 gap-6 mt-8">
        {/* Left Section */}
        <div className="wow tpfadeLeft" data-wow-duration=".9s" data-wow-delay=".5s">
          <div className="tp-integration-section-box">
            {style_integraton ? (
              <>
                <h5 className="tp-integration-subtitle text-center">{sub_title}</h5>
                <h3 className="tp-section-title-3 text-center">{int_title}</h3>
              </>
            ) : (
              <div className="flex justify-center">
                <div className="text-center">
                  <h5 className="tp-integration-subtitle mb-2">{sub_title}</h5>
                  <h3 className="tp-section-title-3 mt-2">{title}</h3>
                </div>
              </div>
            )}
          </div>
        </div>
        {/* Right Section */}
        <div
          className="wow tpfadeRight flex justify-center lg:justify-end items-center"
          data-wow-duration=".9s"
          data-wow-delay=".7s"
        >
          <div className="tp-integration-btn">
            <Link
              className="tp-btn-blue-lg tp-btn-hover alt-color-black"
              href="/integrations"
            >
              <span>{btn_text}</span>
              <b></b>
            </Link>
          </div>
        </div>
      </div>
    </div>

    {/* Slider Section */}
    <div
      className="tp-integration-slider-wrapper pt-50 pb-50 bg-cover bg-center mt-8"
      style={{ backgroundImage: `url(${bg_img})` }}
    >
      <Slider
        {...setting_one}
        className="tp-integration-slider-active mx-auto max-w-[1200px]"
      >
        {slider_one_data.map((item, i) => (
          <div
            key={i}
            className="tp-integration-slider-main slick-slide text-center"
          >
            <div className="tp-integration-slider-item">
              <Image src={item} alt="theme-pure" />
            </div>
          </div>
        ))}
      </Slider>
      <Slider
        {...setting_two}
        className="tp-integration-slider-active-2 carousel-rtl mx-auto max-w-[1200px]"
        dir="rtl"
      >
        {slider_two_data.map((item, i) => (
          <div
            key={i}
            className="tp-integration-slider-main slick-slide text-center"
          >
            <div className="tp-integration-slider-item">
              <Image src={item} alt="theme-pure" />
            </div>
          </div>
        ))}
      </Slider>
    </div>
  </div>
</>

    );
};

export default IntegrationArea;