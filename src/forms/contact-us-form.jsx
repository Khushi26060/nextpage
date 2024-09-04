import React from "react";
import NiceSelect from "../ui/nice-select";

const ContactUsForm = () => {
  const selectHandler = (e) => { };
  return (
    <>
      <form onSubmit={(e) => e.preventDefault()} className="box">
        <div className="row gx-20">
          <div className="col-12">
            <div className="postbox__comment-input mb-30">
              <input type="text" className="inputText" required />
              <span className="floating-label">Full Name</span>
            </div>
          </div>
          <div className="col-12">
            <div className="postbox__comment-input mb-30">
              <input type="text" className="inputText" required />
              <span className="floating-label">Your Email</span>
            </div>
          </div>
          <div className="col-12">
            <div className="postbox__comment-input mb-35">
              <input type="text" className="inputText" required />
              <span className="floating-label">Phone Number</span>
            </div>
          </div>
          <div className="col-12">
            <div className="postbox__select mb-30">
              <NiceSelect
                options={[
                  { value: "general", text: "General Inquiry" },
                  { value: "technical_support", text: "Technical Support" },
                  { value: "service_requests", text: "Service Requests" },
                  { value: "consultation", text: "Consultation Requests" },
                  { value: "partnership", text: "Partnership Opportunities" },
                  { value: "feedback", text: "Feedback and Suggestions" },
                ]}
                defaultCurrent={0}
                onChange={selectHandler}
              />
            </div>
          </div>
          <div className="col-xxl-12">
            <div className="postbox__comment-input mb-30">
              <textarea className="textareaText" required></textarea>
              <span className="floating-label-2">Message...</span>
            </div>
          </div>
          <div className="col-xxl-12">
            <div className="postbox__btn-box">
              <button className="submit-btn w-100">Send your Request</button>
            </div>
          </div>
        </div>
      </form>
    </>
  );
};

export default ContactUsForm;
