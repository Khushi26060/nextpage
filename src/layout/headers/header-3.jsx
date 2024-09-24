import React, { useState, useEffect } from 'react';
import useSticky from '@/hooks/use-sticky';
import Offcanvus from '@/common/offcanvus';
import Link from 'next/link';
import NavMenu from './nav-menu';
import Image from 'next/image';
import logo from "../../../public/assets/img/logo/logo-black.png";
import axios from 'axios';

let baseUrl;
if (process.env.NODE_ENV === 'development') {
  baseUrl = process.env.NEXT_PUBLIC_API_URL;
} else {
  baseUrl = process.env.NEXT_PUBLIC_API_URL;
}

const HeaderThree = () => {
  const { sticky } = useSticky();
  const [sidebarOpen, setSidebarOpen] = useState(false);
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
    : logo;

  console.log("Logo URL:", logoSrc);

  return (
    <>
      <header className="tp-header-height">
        <div id="header-sticky" className={`header-bottom__area header__space header-sticky-bg-2 header-bottom__transparent z-index-5 ${sticky && "header-sticky"}`}>
          <div className="container">
            <div className="row align-items-center">
              <div className="col-xxl-2 col-xl-2 col-lg-2 col-md-4 col-6">
                <div className="header-bottom__logo">
                  <Link href="/">
                    <Image 
                      src={logoSrc} 
                      height={150} 
                      width={150} 
                      alt="logo" 
                    />
                  </Link>
                </div>
              </div>
              <div className="col-xxl-6 col-xl-6 col-lg-6 d-none d-lg-block">
                <div className="header-bottom__main-menu header-bottom__main-menu-3">
                  <nav id="mobile-menu">
                    <NavMenu />
                  </nav>
                </div>
              </div>
              <div className="col-xxl-4 col-xl-4 col-lg-4 col-md-8 col-6">
                <div className="header-bottom__right d-flex align-items-center justify-content-end">
                  <div className="header-bottom__action">
                    <Link className="d-none d-lg-inline-block header-bottom__action-2 border-none" href="/register">
                      <span>Log In</span>
                    </Link>
                  </div>
                  <div className="header-bottom__btn d-flex align-items-center">
                    <Link className="tp-btn-blue-sm d-none d-md-inline-block tp-btn-hover alt-color-black" href="/contact">
                      <span>Get In Touch</span>
                      <b></b>
                    </Link>
                    <a className="header-bottom__bar tp-menu-bar d-lg-none" onClick={() => setSidebarOpen(true)}>
                      <i className="fal fa-bars"></i>
                    </a>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </header>
      <Offcanvus sidebarOpen={sidebarOpen} setSidebarOpen={setSidebarOpen} />
    </>
  );
};

export default HeaderThree;
