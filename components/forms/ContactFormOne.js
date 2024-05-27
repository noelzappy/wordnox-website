import React, { useRef, useState } from "react";
import Alert from "./Alert";
import Input from "./Input";
import axios from "axios";

const ContactFormOne = () => {
  const [showAlert, setShowAlert] = useState(false);
  const [isSuccess, setIsSuccess] = useState(false);
  const [loading, setLoading] = useState(false);
  const form = useRef();

  const sendEmail = async (e) => {
    e.preventDefault();
    setLoading(true);
    setIsSuccess(false);
    setShowAlert(false);
    try {
      const payload = {
        name: form.current.name.value,
        email: form.current.email.value,
        company: form.current.company.value,
        phone: form.current.phone.value,
        subject: "Quote Request",
      };

      await axios.post("/api/contact", payload);
      setIsSuccess(true);
    } catch (error) {
      setIsSuccess(false);
    } finally {
      setLoading(false);
      setShowAlert(true);
    }
  };

  return (
    <form ref={form} onSubmit={sendEmail}>
      <Input name="name" label="Name" isClear={isSuccess} />
      <Input name="email" label="Email" type="email" isClear={isSuccess} />
      <Input name="company" label="Company" isClear={isSuccess} />
      <Input name="phone" label="Phone" isClear={isSuccess} />
      <div className="form-group">
        <button className="axil-button btn-large btn-transparent w-100">
          <span className="button-text">
            {loading ? "Sending..." : "Get Quote"}
          </span>
          <span className="button-icon" />
        </button>
      </div>
      {showAlert && (
        <Alert
          message={
            isSuccess
              ? "Your message was sent successfully"
              : "Something went wrong"
          }
          type={isSuccess ? "success" : "danger"}
        />
      )}
    </form>
  );
};

export default ContactFormOne;
