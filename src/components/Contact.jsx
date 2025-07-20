import React from 'react';

function Contact() {
  return (
    <section className="w-full bg-gray-200 pt-20 pb-15 px-4">
      <div className="max-w-2xl mx-auto bg-white rounded-xl shadow-md p-8">
        <h2 className="text-2xl font-semibold text-indigo-700 mb-6 text-center">Contact Me...</h2>
        <form className="space-y-5">
          <div>
            <label htmlFor="email" className="block text-lg font-medium text-gray-700 mb-1">
              Your Email
            </label>
            <input
              id="email"
              type="email"
              placeholder="example@gmail.com"
              className="w-full px-4 py-2 border border-gray-300 rounded-lg shadow-sm focus:outline-none focus:ring-2 focus:ring-indigo-500"
              required
            />
          </div>

          
          <div>
            <label htmlFor="msg" className="block text-lg font-medium text-gray-700 mb-1">
              Your Message
            </label>
            <textarea
              id="msg"
              rows="5"
              placeholder="Type your message..."
              className="w-full px-4 py-2 border border-gray-300 rounded-lg shadow-sm focus:outline-none focus:ring-2 focus:ring-indigo-500"
              required
            ></textarea>
          </div>

          
          <div className="text-center">
            <button
              type="submit"
              className="bg-indigo-700 text-white px-6 py-2 rounded-lg font-semibold hover:bg-indigo-800 transition"
            >
              Send Message
            </button>
          </div>
        </form>
      </div>
    </section>
  );
}

export default Contact;
