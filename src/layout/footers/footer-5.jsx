import Brwoser from '@/common/brwoser';
import { CopyRight } from '@/common/social-links';
import EmailIcon from '@/svg/email';
import EmailTwo from '@/svg/email-2';
import PhoneTwo from '@/svg/phone-2';
import RightArrow from '@/svg/right-arrow';
import Image from 'next/image';
import Link from 'next/link';
import Slider from 'react-slick';
import React, { useState , useEffect} from 'react';
import axios from 'axios';
import footer_logo from "../../../public/assets/img/logo/logo-black.png";


const footerContent = {
    bg_img: "/assets/img/footer/overly.png",
    title: (
        <>
            Get Early Access to CodeCafe Lab. <br />
            <span>Sip a coffee with Codecafelab and grow.</span>
        </>
    ),
    phone: "+806(000)8899",
    email: "contact@info.com",
    description: <>Build a modern and creative website with crealand</>,
    footer_links: [
        {
            id: 1,
            cls_1: "col-xl-3 col-lg-3",
            cls_2: "footer-col-3-2",
            title: "Services",
            links: [
                { name: "Damo page", link: "/service" },
                { name: "Project", link: "/project" },
                { name: "Team", link: "/team" },
                { name: "Careers", link: "/career" },
            ],
        },
        {
            id: 2,
            cls_1: "col-xl-2 col-lg-2",
            cls_2: "footer-col-3-3",
            title: "Other Links",
            links: [
                { name: "Contact", link: "/contact" },
                { name: "About", link: "/about" },
                { name: "Privacy & Policy", link: "/privacy-policy" },
                { name: "Terms & Conditions", link: "/terms-and-conditions" },
                { name: "Refund Policy", link: "/refund-policy" },
            ],
        },
    ],
    social_links: [
        { link: "http://facebook.com", icon: "fab fa-facebook-f" },
        { link: "http://twitter.com", icon: "fab fa-twitter" },
        { link: "http://www.vimeo.com", icon: "fab fa-vimeo-v" },
        { link: "http://www.instagram.com", icon: "fab fa-instagram" },
    ],
};

const footerSliderData = [
    "Free trial",
    "Lightning-fast onboarding.",
    "All-in-one CRM",
    "Cards for your whole team.",
    "Free migrations",
    "Incredible support",
];

const sliderSettings = {
    speed: 7000,
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
};

const baseUrl = process.env.NEXT_PUBLIC_API_URL;

const FooterFive = () => {
    const [email, setEmail] = useState('');
    const [loading, setLoading] = useState(false);
    const [error, setError] = useState(null);
    const [success, setSuccess] = useState(false);

    const handleSubmit = async (e) => {
        e.preventDefault();
        setLoading(true);
        setError(null);
        setSuccess(false);

        try {
            const response = await axios.post(`${baseUrl}/newsletter`, { email });
            console.log('Newsletter created:', response.data);
            setEmail('');
            setSuccess(true);
        } catch (error) {
            setError('Error submitting email. Please try again.');
            console.error('Error submitting newsletter:', error);
        } finally {
            setLoading(false);
        }
    };


    const [businessDetails, setBusinessDetails] = useState(null);

    useEffect(() => {
      const fetchData = async () => {
        try {
          console.log("Fetching from:", `${baseUrl}/business-detail`);
          const response = await axios.get(`${baseUrl}/business-detail`);
          console.log("API Response:", response.data);
  
          if (response.data && response.data.length > 0) {
            const latestBusinessDetail = response.data[response.data.length - 1];
            setBusinessDetails(latestBusinessDetail);
          } else {
            console.warn("No business details found.");
            setBusinessDetails(null);
          }
        } catch (error) {
          console.error("Error fetching business details:", error);
          setBusinessDetails(null);
        }
      };
      
      fetchData();
    }, []);
  
    const logoSrc = businessDetails?.businessLogo 
  ? `${baseUrl}${businessDetails.businessLogo}` 
  : footer_logo; // Use footer_logo instead of logo

console.log("Logo URL:", logoSrc);
  




    return (
        <div className="footer-bottom-content tp-browser-bg-shape" style={{ backgroundImage: `url(${footerContent.bg_img})` }}>
            <div className="tp-browser-details-area pt-110 pb-30 p-relative">
            <div className="container">
            <div className="row align-items-center">
    <div className="col-12 text-center">
        <h3 className="tp-section-title-3">{footerContent.title}</h3>
    </div>

    <div className="col-12 col-lg-3 text-center text-lg-end mb-40">
        <Link className="tp-btn-blue-lg tp-btn-hover" href="#">
            <span>Get A Call</span>
            <b></b>
        </Link>
    </div>
</div>

    <div className="row">
        <div className="col-12">
            <div className="tp-hero-browser-wrapper footer-browser-item d-flex align-items-center justify-content-center">
                <Brwoser />
            </div>
        </div>
    </div>
</div>

            </div>

            <footer>
                <div className="tp-footer-slide pb-80">
                    <div className="container-fluid g-0">
                        <div className="row g-0 justify-content-center">
                            <Slider {...sliderSettings} className="footer-slide-active">
                                {footerSliderData.map((item, i) => (
                                    <div key={i} className="footer-slide-wrapper">
                                        <div className="footer-slide-item">
                                            <i className="fal fa-check"></i>
                                            <span>{item}</span>
                                        </div>
                                    </div>
                                ))}
                            </Slider>
                        </div>
                    </div>
                </div>

                <div className="tp-footer__pl-pr">
                    <div className="tp-footer__area tp-footer__tp-border-bottom">
                        <div className="container">
                            <div className="row">
                                <div className="col-xl-3 col-lg-3 col-md-6 pb-30">
                                    <div className="tp-footer__widget footer-widget-3 footer-col-3-1">
                                        <Link href="/">
                                            <Image 
                      src={footer_logo} 
                      height={150} 
                      width={150} 
                      alt="logo" 
                    />
                                        </Link>
                                        <div className="tp-footer__contact-info">
                                            <p>{footerContent.description}</p>
                                            <ul>
                                                <li>
                                                    <span><PhoneTwo /></span>
                                                    <Link className="first-child" href={`tel:${footerContent.phone}`}>{footerContent.phone}</Link>
                                                </li>
                                                <li>
                                                    <span><EmailTwo /></span>
                                                    <Link href={`mailto:${footerContent.email}`}>{footerContent.email}</Link>
                                                </li>
                                            </ul>
                                        </div>
                                    </div>
                                </div>

                                {footerContent.footer_links.map((item, i) => (
                                    <div key={i} className={`${item.cls_1} col-md-6 pb-30`}>
                                        <div className={`tp-footer__widget footer-widget-3 ${item.cls_2}`}>
                                            <h4 className="tp-footer__widget-title">{item.title}</h4>
                                            <div className="tp-footer__content">
                                                <ul>
                                                    {item.links.map((link, i) => (
                                                        <li key={i}><Link href={link.link}>{link.name}</Link></li>
                                                    ))}
                                                </ul>
                                            </div>
                                        </div>
                                    </div>
                                ))}

                                <div className="col-xl-4 col-lg-4 col-md-6 pb-30">
                                    <div className="tp-footer__widget footer-widget-3 footer-col-3-4">
                                        <h4 className="tp-footer__widget-title">Our Newsletter</h4>
                                        <div className="tp-footer__input mb-35 p-relative">
                                            <form onSubmit={handleSubmit}>
                                                <input 
                                                    type="text" 
                                                    value={email}
                                                    onChange={(e) => setEmail(e.target.value)} 
                                                    placeholder="Business email address" 
                                                    required 
                                                />
                                                <span><EmailIcon /></span>
                                                <button type="submit">
                                                    <RightArrow />
                                                </button>
                                            </form>
                                        </div>
                                        <div className="tp-footer__social-3">
                                            <h4>Social Media</h4>
                                            {footerContent.social_links.map((link, i) => (
                                                <Link key={i} href={link.link} target="_blank">
                                                    <i className={link.icon}></i>
                                                </Link>
                                            ))}
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>

                    <div className="tp-copyright__area pt-25 pb-40">
                        <div className="container">
                            <div className="row justify-content-center">
                                <div className="col-xl-4 col-lg-6 col-md-6">
                                    <div className="tp-copyright__text tp-copyright__text-3 text-center">
                                        <span><CopyRight /></span>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </footer>
        </div>
    );
};

export default FooterFive;
