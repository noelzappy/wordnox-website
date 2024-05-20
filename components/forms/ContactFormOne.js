import React, { useRef, useState } from "react";
import Alert from "./Alert";
import Input from "./Input";
import axios from "axios";

const ContactFormOne = () => {
  const [showAlert, setShowAlert] = useState(false);
  const [isMessageSent, setIsMessageSent] = useState(false);
  const form = useRef();

  const sendEmail = async (e) => {
    e.preventDefault();
    setShowAlert(false);
    try {
      await axios.post("/api/contact", new FormData(form.current));
      setIsMessageSent(true);
    } catch (error) {
      setShowAlert(true);
      console.error(error);
    }
  };

  return (
    <form ref={form} onSubmit={sendEmail}>
      <Input name="name" label="Name" isClear={isMessageSent} />
      <Input name="email" label="Email" type="email" isClear={isMessageSent} />
      <Input name="company" label="Company" isClear={isMessageSent} />
      <Input name="phone" label="Phone" isClear={isMessageSent} />
      <div className="form-group">
        <button className="axil-button btn-large btn-transparent w-100">
          <span className="button-text">Get Quote</span>
          <span className="button-icon" />
        </button>
      </div>
      {showAlert && (
        <Alert
          message={
            isMessageSent
              ? "Your message was sent successfully"
              : "Something went wrong"
          }
          type={isMessageSent ? "success" : "danger"}
        />
      )}
    </form>
  );
};

export default ContactFormOne;
