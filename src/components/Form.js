import React from 'react';

function Form() {
  return (
    <div>
      <form
        action='./contactform.php'
        className="flex flex-col items-center pb-8"
        method="post"
      >
        <input
          type="text"
          name="name"
          placeholder="Full name"
          className="w-64 px-4 py-2 rounded-md border border-gray-300 mb-4 focus:outline-none focus:ring focus:border-blue-500"
        />
        <input
          type="text"
          name="mail"
          placeholder="Your e-mail"
          className="w-64 px-4 py-2 rounded-md border border-gray-300 mb-4 focus:outline-none focus:ring focus:border-blue-500"
        />
        <input
          type="text"
          name="subject"
          placeholder="Subject"
          className="w-64 px-4 py-2 rounded-md border border-gray-300 mb-4 focus:outline-none focus:ring focus:border-blue-500"
        />
        <textarea
          name="message"
          placeholder="Your message"
          className="w-64 px-4 py-2 rounded-md border border-gray-300 mb-4 focus:outline-none focus:ring focus:border-blue-500"
          rows={4}
        ></textarea>
        <button
          type="submit"
          name="submit"
          className="w-64 px-4 py-2 bg-blue-500 text-white rounded-md hover:bg-blue-600 focus:outline-none focus:ring focus:border-blue-300"
        >
          SEND MAIL
        </button>
      </form>
    </div>
  );
}

export default Form; 