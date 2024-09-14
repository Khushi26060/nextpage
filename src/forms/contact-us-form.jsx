import React, { useState } from "react";
import NiceSelect from "../ui/nice-select";
import axios from "axios";

const baseUrl = process.env.NEXT_PUBLIC_API_URL;

const ContactUsForm = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phoneno: "",
    topic: "general", // Default topic
    message: ""
  });

  // Handle input changes
  const inputHandler = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  // Handle select dropdown changes
  const selectHandler = (value) => {
    setFormData({ ...formData, topic: value });
  };

  // Handle form submission
  const submitHandler = async (e) => {
    e.preventDefault();
    const { name, email, phoneno, topic, message } = formData;

    try {
      const response = await axios.post(`${baseUrl}/queries`, {
        name,
        email,
        phoneno,
        topic,
        action: { status: "Pending", icon: "default" }, 
        message,
      });
      alert("Query submitted successfully!");
      setFormData({
        name: "",
        email: "",
        phoneno: "",
        topic: "general",
        message: ""
      });
    } catch (error) {
      console.error("Error submitting form", error);
      alert("There was an error submitting your query.");
    }
  };

  return (
    <>
      <form onSubmit={submitHandler} className="box">
        <div className="row gx-20">
          <div className="col-12">
            <div className="postbox__comment-input mb-30">
              <input
                type="text"
                name="name"
                value={formData.name}
                onChange={inputHandler}
                className="inputText"
                required
              />
              <span className="floating-label">Full Name</span>
            </div>
          </div>
          <div className="col-12">
            <div className="postbox__comment-input mb-30">
              <input
                type="email"
                name="email"
                value={formData.email}
                onChange={inputHandler}
                className="inputText"
                required
              />
              <span className="floating-label">Your Email</span>
            </div>
          </div>
          <div className="col-12">
            <div className="postbox__comment-input mb-35">
              <input
                type="text"
                name="phoneno"
                value={formData.phoneno}
                onChange={inputHandler}
                className="inputText"
                required
              />
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
                onChange={(e) => selectHandler(e.target.value)}
              />
            </div>
          </div>
          <div className="col-xxl-12">
            <div className="postbox__comment-input mb-30">
              <textarea
                name="message"
                value={formData.message}
                onChange={inputHandler}
                className="textareaText"
                required
              />
              <span className="floating-label-2">Message...</span>
            </div>
          </div>
          <div className="col-xxl-12">
            <div className="postbox__btn-box">
              <button className="submit-btn w-100" type="submit">
                Send your Request
              </button>
            </div>
          </div>
        </div>
      </form>
    </>
  );
};

export default ContactUsForm;
