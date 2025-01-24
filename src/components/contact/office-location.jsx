import React from 'react';


import img_1 from "../../../public/assets/img/contact/contact-icon-sm-5.png";
import img_2 from "../../../public/assets/img/contact/contact-icon-sm-6.png";
import img_3 from "../../../public/assets/img/contact/contact-icon-sm-7.png";
import Image from 'next/image';
import Link from 'next/link';


// office location data
const office_data = [
    {
        id: 1, 
        cls:"",
        img: img_1,
        location: "India",
        address: <>C-2 Sagar enclave,patrakar colony,Mansarovar,Jaipur <br />Rajasthan,302020</>,
    },
    {
        id: 2, 
        cls:"p-relative",
        img: img_2,
        badge: "Main Office",
        location: "Phillippines",
        address: <>Metro Manila, Quzeon City <br /> 1121</>,
    },
    {
        id: 3, 
        cls:"",
        img: img_3,
        location: "Australia",
        address: <>555 Bourke Street, <br />  Melbourne, VIC 3000</>,
    },
]

const OfficeLocation = () => {
    return (
      <>
        <div className="contact-info-area pb-90">
          <div className="container">
            <div className="row">
              {office_data.map((item, i) => (
                <div key={i} className="col-xl-4 col-lg-4 mb-30">
                  <div className={`contact-info-item ${item.cls}`}>
                    {item.badge && (
                      <div className="contact-info-badge">
                        <span>Main Office</span>
                      </div>
                    )}
                    <div className="contact-info-img">
                      <Image src={item.img} alt="theme-pure" />
                    </div>
                    <div className="contact-info-title-box">
                      <h5 className="contact-info-title-sm">
                        <Link href="#">{item.location}</Link>
                      </h5>
                      <p>{item.address}</p>
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

export default OfficeLocation;