import React, { useState } from "react";
import { triggerToast } from "../utils/handlers";
import { requireAuth } from "utils/auth";

function Contactus() {
  const [name, setname] = useState("");
  const [email, setemail] = useState("");
  const [msg, setmsg] = useState("");
  const [processing, setProcessing] = useState(false);

  const handleSend = async () => {
    if (!name || !email || !msg)
      return triggerToast({ type: "error", message: "All Fields Required!" });
    const settings = {
      method: "POST",
      headers: {
        Accept: "application/json",
        "Content-Type": "application/json",
      },
      body: JSON.stringify({ name, email, msg }),
    };
    try {
      setProcessing(true);
      const response = await fetch(`/api/contactus/`, settings);
      setProcessing(false);

      if (!response.ok)
        return triggerToast({ type: "error", message: "Failed" });
      return triggerToast({ type: "success", message: "Email Sent!" });
    } catch (e) {
      triggerToast({ type: "error", message: "Failed" });
    }
  };
  return (
    <section className="text-gray-600 body-font relative w-full">
      <div className="absolute inset-0 bg-gray-300">
        <iframe
          src="https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d16467.1984520329!2d114.18578369198407!3d22.338720951490195!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0xba9ddacaeeb21620!2sHong%20Kong%20Baptist%20University!5e0!3m2!1sen!2sin!4v1638082533614!5m2!1sen!2sin"
          width="100%"
          height="100%"
          loading="lazy"
        ></iframe>
      </div>
      <div className="container px-5 py-24 mx-auto flex">
        <div className="lg:w-1/3 md:w-1/2 bg-white rounded-lg p-8 flex flex-col md:ml-auto w-full mt-10 md:mt-0 relative z-10 shadow-md">
          <h2 className="text-gray-700 text-2xl mb-1 font-medium title-font">
            Feedback
          </h2>
          <p className="leading-relaxed mb-5 text-gray-600">
            Please fill in the feedback if any
          </p>
          <div className="relative mb-4">
            <label className="leading-7 text-sm text-gray-600">Full Name</label>
            <input
              type="text"
              id="name"
              name="name"
              onChange={(e) => setname(e.target.value)}
              className="w-full bg-white rounded border border-gray-300 focus:border-indigo-500 focus:ring-2 focus:ring-indigo-200 text-base outline-none text-gray-700 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out"
            />
          </div>
          <div className="relative mb-4">
            <label className="leading-7 text-sm text-gray-600">Email</label>
            <input
              type="email"
              id="email"
              name="email"
              onChange={(e) => setemail(e.target.value)}
              className="w-full bg-white rounded border border-gray-300 focus:border-indigo-500 focus:ring-2 focus:ring-indigo-200 text-base outline-none text-gray-700 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out"
            />
          </div>
          <div className="relative mb-4">
            <label className="leading-7 text-sm text-gray-600">Message</label>
            <textarea
              id="message"
              name="message"
              onChange={(e) => setmsg(e.target.value)}
              className="w-full bg-white rounded border border-gray-300 focus:border-indigo-500 focus:ring-2 focus:ring-indigo-200 h-32 text-base outline-none text-gray-700 py-1 px-3 resize-none leading-6 transition-colors duration-200 ease-in-out"
            ></textarea>
          </div>
          <button
            className="text-white bg-indigo-500 border-0 py-2 px-6 focus:outline-none hover:bg-indigo-600 rounded text-lg mb-2"
            onClick={() => handleSend()}
            style={processing ? { pointerEvents: "none", opacity: "0.5" } : {}}
          >
            Send
            {processing && (
              <svg
                className="animate-spin h-4 w-4 mx-3 text-indigo relative inline"
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
              >
                <circle
                  className="opacity-25"
                  cx="12"
                  cy="12"
                  r="20"
                  stroke="currentColor"
                  strokeWidth="4"
                />
                <path
                  className="opacity-75"
                  fill="currentColor"
                  d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"
                />
              </svg>
            )}
          </button>
        </div>
      </div>
    </section>
  );
}

export default requireAuth(Contactus);
