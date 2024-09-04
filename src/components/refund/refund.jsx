import React from 'react'; 


const refund_policy = {
   bg_img: "/assets/img/cta/cta-bg.jpg",
   title: "Refund Policy",
   description: (
       <>At CodeCafe Lab, we value your satisfaction. Please read our refund policy carefully to understand our practices.</>
   ),
   btn_text: "Learn More",
   refundDetails: (
       <>
           <h4>Cancellation and Refunds</h4>
           
           <h5>Eligibility for Refund</h5>
           <p>
               Refunds are available if a cancellation is requested within 24 hours of your service purchase.
           </p>
           
           <h5>Refund Process</h5>
           <p>
               To initiate a refund, please send an email to <a href="mailto:support@codecafelab.com">support@codecafelab.com</a> with your transaction details to request a refund. Our team will review your request and transaction for approval.
           </p>
           
           <h5>Processing Time</h5>
           <p>
               Approved refunds will be processed within 10 working days. The refund will be issued to the same payment method used at the time of the contribution.
           </p>
           
           <h4>Steps to Follow</h4>
           
           <h5>Contact Us</h5>
           <p>
               Email your refund request to <a href="mailto:support@codecafelab.com">support@codecafelab.com</a> within 24 hours of the transaction.
           </p>
           
           <h5>Review and Approval</h5>
           <p>
               We will scrutinize and evaluate your transaction. Upon approval, you will receive a confirmation email.
           </p>
           
           <h5>Refund Issuance</h5>
           <p>
               Refunds are processed back to your original payment method.
           </p>
           
           <h4>Additional Information</h4>
           
           <h5>Delayed Refunds</h5>
           <p>
               If you do not receive your refund within the specified time frame, please contact your credit/debit card issuer or bank.
           </p>
           
           <h5>Questions</h5>
           <p>
               For any inquiries about our refund policy, contact us at <a href="mailto:support@codecafelab.com">support@codecafelab.com</a>.
           </p>
           
           <p>
               Thank you for choosing CodeCafe Lab. We are committed to ensuring a smooth experience.
           </p>
       </>
   ),
};

const { bg_img, title, description, btn_text, refundDetails } = refund_policy;

const Refund = () => {
   return (
      <> r
         <div className="container ">
            <div className=" p-3 rounded">
               <div className="row">
                  <div className="col-12">
                     <div className="bg-white  pt-4 rounded ">
                        <div className="text-left text-dark m-1 mt-4">
                           <h3 className="mb-4 text-center relative">{title}</h3>
                           <p>{description}</p>
                           <div className="mb-4">
                              {refundDetails}
                           </div>
                           {/* <Link href="/terms">
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

export default Refund;
