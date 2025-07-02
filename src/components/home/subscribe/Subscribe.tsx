import React from "react";
import { SuccessToast } from "../../common/toasts/SuccessToast";

const Subscribe: React.FC = () => {
  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    const form = e.target as HTMLFormElement;

    form.reset();
    SuccessToast("Your mail has been sent.");
  };

  return (
    <div className="bg-primary2 py-12 text-white" id="contactUs">
      <h1 className="text-center text-4xl mb-8 font-semibold">Contact Us</h1>
      <div className="container mx-auto flex justify-center">
        <form
          onSubmit={handleSubmit}
          className="w-full max-w-lg space-y-5 bg-primary2"
        >
          <div>
            <label htmlFor="name" className="block mb-1 font-medium">
              Name
            </label>
            <input
              id="name"
              type="text"
              placeholder="Your Name"
              className="w-full px-4 py-2 rounded bg-white text-black focus:outline-none focus:ring-2 focus:ring-primary3"
              required
            />
          </div>

          <div>
            <label htmlFor="email" className="block mb-1 font-medium">
              Email
            </label>
            <input
              id="email"
              type="email"
              placeholder="Your Email"
              className="w-full px-4 py-2 rounded bg-white text-black focus:outline-none focus:ring-2 focus:ring-primary3"
              required
            />
          </div>

          <div>
            <label htmlFor="message" className="block mb-1 font-medium">
              Message
            </label>
            <textarea
              id="message"
              rows={4}
              placeholder="Your Message"
              className="w-full px-4 py-2 rounded bg-white text-black resize-none focus:outline-none focus:ring-2 focus:ring-primary3"
              required
            />
          </div>

          <div className="text-center">
            <button
              type="submit"
              className="bg-success hover:bg-primary1/90 transition px-12 py-2 rounded text-white font-semibold"
            >
              Submit
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default Subscribe;
