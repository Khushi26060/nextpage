import VideoPopup from '@/modals/video-popup';
import React,{useState} from 'react';

const company_content = {
   sub_title: "ABOUT THE COMPANY",
   title: <>CodecafeLab: Empowering Businesses <br /> with Innovative IT Solutions.</>,
   info_1: <>At CodecafeLab, we are dedicated to transforming the IT landscape through innovative solutions designed to meet the evolving needs of modern businesses. Our team of experts leverages cutting-edge technology and industry best practices to deliver high-quality services that drive success and growth. From custom software development to comprehensive IT consulting, we are committed to providing tailored solutions that enhance operational efficiency and deliver exceptional value.</>,
   info_2: <>With a client-centric approach, we prioritize understanding your unique challenges and goals to offer solutions that are both effective and scalable. Our transparent and collaborative process ensures that you are informed and involved every step of the way, leading to successful outcomes and long-term partnerships.</>,
   info_3: <>Our commitment to excellence extends to every aspect of our service, from the reliability of our solutions to the quality of our customer support. By combining technical expertise with a deep understanding of your business needs, we provide peace of mind and a foundation for sustainable growth. Explore how CodecafeLab can help you achieve your IT objectives and drive your business forward.</>,
};

const {sub_title, title, info_1, info_2, info_3}  = company_content


const CompanyArea = () => {
  const [isVideoOpen, setIsVideoOpen] = useState(false);

    return (
        <>
            <div className="ab-company-area pt-105 pb-100">
               <div className="container">
                  <div className="row ab-company-section-space">
                     <div className="col-xl-6">
                        <div className="ab-company-section-box">
                           <h4 className="inner-section-subtitle">{sub_title}</h4>
                           <h3 className="tp-section-title">{title}</h3>
                        </div>
                     </div>
                     <div className="col-xl-6 wow tpfadeRight" data-wow-duration=".9s" data-wow-delay=".5s">
                        <div className="ab-company-right">
                           <div className="ab-company-section-text">
                              <p className="pb-10">{info_1}</p>
                              <p className="pb-10">{info_2}</p>
                              <p><span>{info_3}</span></p>
                           </div>
                        </div>
                     </div>
                  </div>
                  <div className="row align-items-center">
                     <div className="col-xl-4">
                        <div className="ab-company-video">
                           <a className="popup-video" 
                           onClick={() => setIsVideoOpen(true)} 
                           ><i className="fas fa-play"></i></a>
                           <span>Watch Demo</span>
                        </div>
                     </div>
                     <div className="col-xl-8">
                        <div className="row">

                           <div className="col-md-4 col-sm-4 mb-40">
                              <div className="ab-company-fun-fact-wrap d-flex justify-content-start">
                                 <div className="ab-company-fun-fact">
                                    <span>USED BY</span>
                                    <h4>11,000<em>+</em></h4>
                                    <p>Creators</p>
                                 </div>
                              </div>
                           </div>
                           
                           <div className="col-md-4 col-sm-4 mb-40">
                              <div className="ab-company-fun-fact-wrap d-flex justify-content-md-center justify-content-left">
                                 <div className="ab-company-fun-fact">
                                    <span>VALUE</span>
                                    <h4>46<em>m</em></h4>
                                    <p>Revenue per Year</p>
                                 </div>
                              </div>
                           </div>
                           <div className="col-md-4 col-sm-4 mb-40">
                              <div className="ab-company-fun-fact-wrap ab-company-border-none d-flex justify-content-md-center justify-content-left">
                                 <div className="ab-company-fun-fact">
                                    <span>IN</span>
                                    <h4>150<em>+</em></h4>
                                    <p>Countries using</p>
                                 </div>
                              </div>
                           </div>
                        </div>
                     </div>
                  </div>
               </div>
            </div>

             {/* video modal start */}
      <VideoPopup
        isVideoOpen={isVideoOpen}
        setIsVideoOpen={setIsVideoOpen}
        videoId={"EW4ZYb3mCZk"}
      />
      {/* video modal end */}
        </>
    );
};

export default CompanyArea;