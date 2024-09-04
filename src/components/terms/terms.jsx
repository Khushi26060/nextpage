import React from 'react';  

const terms_content = {
   bg_img: "/assets/img/cta/cta-bg.jpg",
   title: "Terms & Conditions",
   description: <>Welcome to CodeCafe Lab! We are committed to providing you with a great experience while ensuring your privacy and security. Please read these terms carefully before using our services.</>,
   // btn_text: "Read More",
   termsAndConditions: (
      <>
         <h4>1. Data Privacy</h4>
         <p>
            <strong>Protection Measures:</strong> Outline how customer data is protected, including encryption and secure storage.
         </p>
         <p>
            <strong>Compliance:</strong> Adherence to regulations like GDPR or PCI DSS.
         </p>

         <h4>2. Fees and Charges</h4>
         <p>
            <strong>Transaction Fees:</strong> Details on per-transaction costs and any additional fees.
         </p>
         <p>
            <strong>Monthly Charges:</strong> Information on subscription or maintenance fees.
         </p>
         <p>
            <strong>Hidden Costs:</strong> Clarification of any potential extra charges.
         </p>
         <p>
            <strong>Refund Policy:</strong> Terms regarding how and when refunds are processed.
         </p>

         <h4>3. Refund Policy</h4>
         <p>
            <strong>Timeline:</strong> Refunds typically processed within 7 days.
         </p>
         <p>
            <strong>Conditions:</strong> Criteria required for issuing a refund, such as proof of purchase or return.
         </p>
         <p>
            <strong>Method:</strong> Refunds are usually credited to the original payment method.
         </p>
         <p>
            <strong>Fees:</strong> Any deductions from the refund, such as restocking or processing fees.
         </p>
         <p>
            <strong>Notification:</strong> Process for informing both the merchant and the customer.
         </p>

         <h4>4. Security Measures</h4>
         <p>
            <strong>Encryption:</strong> Use of SSL/TLS for secure transactions.
         </p>
         <p>
            <strong>Fraud Detection:</strong> Systems in place to identify and prevent fraudulent activities.
         </p>
         <p>
            <strong>Responsibility:</strong> Obligations of both the gateway and merchant to maintain security.
         </p>

         <h4>5. Usage Restrictions</h4>
         <p>
            <strong>Transaction Types:</strong> Specification of allowed and prohibited transactions.
         </p>
         <p>
            <strong>Limits:</strong> Any caps on transaction amounts or frequency.
         </p>

         <h4>6. Termination Conditions</h4>
         <p>
            <strong>Termination Rights:</strong> Circumstances under which either party can terminate the agreement.
         </p>
         <p>
            <strong>Post-Termination:</strong> Handling of funds and data after termination.
         </p>

         <h4>7. Dispute Resolution</h4>
         <p>
            <strong>Process:</strong> Steps for resolving disputes between users and the gateway.
         </p>
         <p>
            <strong>Jurisdiction:</strong> Specified legal jurisdiction and governing laws.
         </p>

         <h4>8. Service Level Agreements (SLAs)</h4>
         <p>
            <strong>Uptime:</strong> Guarantees for service availability and performance.
         </p>
         <p>
            <strong>Support:</strong> Details on customer support and maintenance services.
         </p>

         <h4>9. Liabilities and Indemnities</h4>
         <p>
            <strong>Limitations:</strong> Scope of liability for both parties.
         </p>
         <p>
            <strong>Indemnification:</strong> Protection against third-party claims.
         </p>

         <h4>Termination</h4>
         <p>
            We may terminate or suspend your access to our services at any time, with or without cause or notice, effective immediately. If you wish to terminate your agreement or CodeCafe Lab account, simply stop using our services. All provisions of the agreement that should survive termination, such as ownership, warranty disclaimers, indemnity, and limitations of liability, will remain in effect.
         </p>

         <h4>Disclaimer</h4>
         <p>
            Our services are provided on an "AS IS" and "AS AVAILABLE" basis. CodeCafe Lab and its suppliers disclaim all warranties, express or implied, including warranties of merchantability, fitness for a particular purpose, and non-infringement. We do not guarantee that our services will be error-free or uninterrupted. You understand that you use our services at your own risk.
         </p>

         <h4>Jurisdiction and Applicable Law</h4>
         <p>
            Unless otherwise specified by law, the agreement and any use of our services are governed by the laws of India. Any disputes will be resolved in the state and federal courts located in India.
         </p>

         <h4>Changes</h4>
         <p>
            CodeCafe Lab reserves the right to modify or replace these terms at any time at our discretion. If we make significant changes, we will notify you by posting on our website or via email before the changes take effect. You will have at least 30 days' notice before any changes become effective. If you disagree with the changes, stop using our services within the notice period or after the changes take effect. Continued use of our services indicates acceptance of the new terms.
         </p>

         <h4>Contact Us</h4>
         <p>
            For questions about these terms, please contact us at <a href="mailto:support@codecafeLab.com">support@codecafeLab.com</a>.
         </p>
      </>
   ),
}


const { bg_img, title, description, btn_text, termsAndConditions } = terms_content;

const TermsArea = () => {
   return (
      <>
          <div className="container ">
            <div className=" p-3 rounded">
               <div className="row">
                  <div className="col-12">
                  <div className="bg-white  pt-4 rounded ">
                  <div className="text-left text-dark m-1 mt-4">
                           <h3 className="mb-4 text-center relative">{title}</h3>
                           <p>{description}</p>
                           <div className="mb-4">
                              {termsAndConditions}
                           </div>
                       
                        </div>
                     </div>
                  </div>
               </div>
            </div>
         </div>

       </>
   );
};

export default TermsArea;
