import React from 'react';

const privacy_policy = {
   bg_img: "/assets/img/cta/cta-bg.jpg",
   title: "Privacy Policy",
   description: (
      <>At CodeCafe Lab, we are committed to protecting your privacy. This Privacy Policy outlines how we handle your personal information.</>
   ),
   btn_text: "Learn More",
   privacyDetails: (
      <>
         <h4>What data do we collect?</h4>
         <p>
            We collect data directly from you, such as information you enter yourself, data regarding your sign-in participation, and data from third-party platforms you link to One signal.
         </p>

         <h4>Data you provide to us?</h4>
         <p>
            Depending on how you use the Services, we may collect different data from or about you.
         </p>

         <h4>From where do we get data about you?</h4>
         <p>
            We use cookies, web beacons, analytics services, and advertising providers to gather the data listed above. These tools can also be helpful for you when you want to have data collection.
         </p>

         <h4>What do we use your data for?</h4>
         <p>
            Responding to your questions and concerns.
            Sending you administrative messages and information, such as messages from admin and Login assistants, updates to our agreements, and notices about changes to our Service.
            Providing updates and other pertinent communications to your wireless device via push notifications (which you can adjust from the "options" or "settings" page of the mobile app).
         </p>

         <h4>Use data choices</h4>
         <p>
            You have the option of not providing certain data to us, but you may be unable to enjoy certain aspects of the services if you do.
         </p>
         <p>
            You can opt-out of getting promotional emails from us by utilizing the unsubscribe option in the promotional communication you receive or adjusting your account's email preferences.
            We will send you transactional and relationship messages about the Services, including administrative confirmations, order confirmations, significant changes about the Services, and notices about our policies, regardless of your email preference choices.
            The browser or device you use may allow you to control cookies and other types of local data storage. Your wireless device may also allow you to control whether location or other data is collected and shared. You can manage Adobe’s LSOs through their Website Storage Settings panel.
            To update the data, you provide it directly, log into your account and update your account at any time.
         </p>
      </>
   ),
};

const { title, description, btn_text, privacyDetails } = privacy_policy;

const PrivacyArea = () => {
   return (
      <>
         <div className="container ">
            <div className="p-4  rounded">
               <div className="row">
                  <div className="col-12">
                     <div className="bg-white  pt-5 rounded ">
                        <div style={{ margin: "55px 10px 0" }} className="text-left text-dark  ">
                           <h3 className="mb-4 text-center relative">{title}</h3>
                           <p>{description}</p>
                           <div className="mb-4">
                              {privacyDetails}
                           </div>
                           {/* <Link href="/privacy-policy">
                              {btn_text}
                           </Link> */}
                        </div>
                     </div>
                  </div>
               </div>
            </div>
         </div>
      </>
   );
};

export default PrivacyArea;
