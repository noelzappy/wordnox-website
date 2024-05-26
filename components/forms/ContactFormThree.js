import React, { useRef, useState } from "react";
import Alert from "./Alert";
import Input from "./Input";

const ContactFormThree = () => {
  const [showAlert, setShowAlert] = useState(false);
  const [isMessageSent, setIsMessageSent] = useState(false);
  const form = useRef();

  const sendEmail = (e) => {
    e.preventDefault();
    console.log(form.current);
  };

  return (
    <form ref={form} onSubmit={sendEmail}>
      <Input name="name" label="Name" isClear={isMessageSent} />
      <Input name="email" label="Email" type="email" isClear={isMessageSent} />
      <Input name="phone" label="Phone" isClear={isMessageSent} />
      <Input
        name="message"
        label="Your message"
        type="textarea"
        isClear={isMessageSent}
      />
      <div className="form-group">
        <input type="submit" value="Send message" />
        <p className="form-messege"></p>
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

export default ContactFormThree;
