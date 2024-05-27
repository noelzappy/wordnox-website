import React, { useRef, useState } from "react";
import Alert from "./Alert";
import Input from "./Input";
import axios from "axios";

const ContactFormThree = () => {
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
        phone: form.current.phone.value,
        subject: "Contact From " + form.current.name.value,
        message: form.current.message.value,
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
      <Input name="name" label="Name" isClear={isSuccess} required />
      <Input
        name="email"
        label="Email"
        type="email"
        isClear={isSuccess}
        required
      />
      <Input name="phone" label="Phone" isClear={isSuccess} required />
      <Input
        name="message"
        label="Your message"
        type="textarea"
        isClear={isSuccess}
        required
      />
      <div className="form-group">
        <input
          type="submit"
          value={loading ? "Sending..." : "Send Message"}
          className="axil-button btn-large btn-transparent w-100"
        />

        <p className="form-messege"></p>
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

export default ContactFormThree;
