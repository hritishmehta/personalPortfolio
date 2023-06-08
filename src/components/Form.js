import React, { useRef } from 'react';
import emailjs from '@emailjs/browser';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

function Form() {
  const form = useRef();

  const resetForm = () => {
      form.current.reset();
  }

  const sendEmail = (e) => {
    e.preventDefault();

    // Get the values from the form fields
    const name = form.current.user_name.value;
    const email = form.current.user_email.value;
    const message = form.current.message.value;

    // Perform conditional checks
    if (!name.trim()) {
      console.log("Please enter your name");
      return;
    }

    if (!email.trim()) {
      console.log("Please enter your email");
      return;
    }

    if (!message.trim()) {
      console.log("Please enter your message");
      return;
    }

    if (!validateEmail(email)) {
      console.log("Please enter a valid email address");
      return;
    }

    // If all checks pass, send the email
    emailjs
      .sendForm('service_sbfjv6p', 'template_pjkke8i', form.current, 'q4Z_dyXE49-uO-cB8')
      .then((result) => {
        notify();
        resetForm();
      })
      .catch((error) => {
        console.log(error.text);
      });
  };


  const validateEmail = (email) => {
    // Simple email validation regex
    const re = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return re.test(email);
  };

  const notify = () => {
    toast.success("Your message was sent!");
  };

  return (
    <div>
      <form ref={form} className="flex flex-col items-center pb-8">
        <div className="p-4">
          <input
            type="text"
            name="user_name"
            className="bg-gray-200 rounded border p-2"
            placeholder="Your name"
          />
        </div>
        <div className="p-4">
          <input
            type="email"
            name="user_email"
            className="bg-gray-200 rounded border p-2"
            placeholder="Your email"
          />
        </div>
        <div className="p-4 pb-8 flex flex-row items-center">
          <textarea
            name="message"
            className="bg-gray-200 rounded border p-2 flex-grow"
            placeholder="Your message"
          />
        </div>
        <button
          type="submit"
          onClick={sendEmail}
          className="bg-teal-500 hover:bg-teal-600 text-white font-semibold py-2 px-4 rounded border border-teal-500"
        >
          Submit
        </button>
      </form>
      <ToastContainer />
    </div>
  );
}

export default Form;
