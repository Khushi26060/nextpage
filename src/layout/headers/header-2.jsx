import useSticky from '@/hooks/use-sticky';
import Offcanvas from '@/common/offcanvas';
import Image from 'next/image';
import Link from 'next/link';
import React, { useState } from 'react';
import NavMenu from './nav-menu';

const HeaderTwo = ({ logos, buttonTexts }) => {
  const { sticky } = useSticky();
  const [sidebarOpen, setSidebarOpen] = useState(false);

  return (
    <>
      <header className="tp-header-height">
        <div id="header-sticky" className={`tp-header-2__area header-sticky-bg-2 tp-header-2__transparent tp-header-2__plr z-index-3 ${sticky && "header-sticky"}`}>
          <div className="container-fluid g-0">
            <div className="row g-0 align-items-center">
              <div className="col-xl-2 col-lg-2 col-md-6 col-6">
                <div className="tp-header-2__logo">
                  <Link className="white-logo" href="/"><Image src={logos.white} alt="White Logo" /></Link>
                  <Link className="black-logo" href="/"><Image src={logos.black} alt="Black Logo" /></Link>
                </div>
              </div>
              <div className="col-xl-7 col-lg-7 d-none d-lg-block">
                <div className="tp-header-2__main-menu text-center">
                  <nav id="mobile-menu">
                    <NavMenu />
                  </nav>
                </div>
              </div>
              <div className="col-xl-3 col-lg-3 col-md-6 col-6">
                <div className="tp-header-2__right d-flex align-items-center justify-content-end">
                  <Link className="tp-header-2__login d-none d-md-block" href="/register">{buttonTexts.login}</Link>
                  <Link className="tp-btn-green-sm d-none d-md-block" href="/sign-in">{buttonTexts.signUp}</Link>
                  <a className="header-bottom__bar tp-menu-bar d-lg-none" 
                     onClick={() => setSidebarOpen(true)}
                  >
                    <i className="fal fa-bars"></i>
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </header>
      <Offcanvas sidebarOpen={sidebarOpen} setSidebarOpen={setSidebarOpen} />
    </>
  );
};

export default HeaderTwo;
