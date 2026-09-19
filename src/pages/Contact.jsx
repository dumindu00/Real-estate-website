import React from "react";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";

import {
  FiMapPin,
  FiPhone,
  FiMail,
  FiClock,
} from "react-icons/fi";

function Contact() {
  return (
    <>
      <Navbar />

      {/* Hero Section */}
      <section className="pt-32 pb-20 px-6 bg-gray-900 text-white">
        <div className="max-w-5xl mx-auto text-center">

          <p className="text-blue-400 font-semibold uppercase tracking-widest mb-4">
            Contact Us
          </p>

          <h1 className="text-5xl md:text-6xl font-bold">
            Let's Talk About Your
            <br />
            Next Property
          </h1>

          <p className="mt-6 max-w-2xl mx-auto text-lg text-gray-300 leading-relaxed">
            Whether you are looking for a new home, an investment opportunity,
            or the perfect piece of land, our team is ready to help.
          </p>

        </div>
      </section>


      {/* Contact Information + Form */}
      <section className="py-24 px-6 bg-gray-50">
        <div className="max-w-7xl mx-auto grid lg:grid-cols-2 gap-16">

          {/* Contact Information */}
          <div>

            <p className="text-blue-600 font-semibold uppercase tracking-widest mb-3">
              Get In Touch
            </p>

            <h2 className="text-4xl font-bold text-gray-900">
              We Would Love To Hear From You
            </h2>

            <p className="mt-6 text-gray-600 text-lg leading-relaxed">
              Have a question about a property? Looking for land or a new
              home? Get in touch with our team and we will be happy to
              discuss your requirements.
            </p>


            {/* Location */}
            <div className="flex gap-5 mt-10">
              <div className="w-12 h-12 shrink-0 rounded-full bg-blue-100 flex items-center justify-center">
                <FiMapPin className="text-blue-600 text-xl" />
              </div>

              <div>
                <h3 className="font-bold text-gray-900">
                  Our Location
                </h3>

                <p className="mt-1 text-gray-600">
                  Colombo, Sri Lanka
                </p>
              </div>
            </div>


            {/* Phone */}
            <div className="flex gap-5 mt-7">
              <div className="w-12 h-12 shrink-0 rounded-full bg-blue-100 flex items-center justify-center">
                <FiPhone className="text-blue-600 text-xl" />
              </div>

              <div>
                <h3 className="font-bold text-gray-900">
                  Phone
                </h3>

                <p className="mt-1 text-gray-600">
                  +94 11 234 5678
                </p>
              </div>
            </div>


            {/* Email */}
            <div className="flex gap-5 mt-7">
              <div className="w-12 h-12 shrink-0 rounded-full bg-blue-100 flex items-center justify-center">
                <FiMail className="text-blue-600 text-xl" />
              </div>

              <div>
                <h3 className="font-bold text-gray-900">
                  Email
                </h3>

                <p className="mt-1 text-gray-600">
                  info@dreamzone.lk
                </p>
              </div>
            </div>


            {/* Opening Hours */}
            <div className="flex gap-5 mt-7">
              <div className="w-12 h-12 shrink-0 rounded-full bg-blue-100 flex items-center justify-center">
                <FiClock className="text-blue-600 text-xl" />
              </div>

              <div>
                <h3 className="font-bold text-gray-900">
                  Opening Hours
                </h3>

                <p className="mt-1 text-gray-600">
                  Monday – Saturday
                </p>

                <p className="text-gray-600">
                  9:00 AM – 6:00 PM
                </p>
              </div>
            </div>

          </div>


          {/* Contact Form */}
          <div className="bg-white rounded-2xl shadow-lg p-8 md:p-10">

            <h2 className="text-2xl font-bold text-gray-900">
              Send Us A Message
            </h2>

            <p className="mt-2 text-gray-500">
              Fill in the form and our team will get back to you.
            </p>


            <form className="mt-8 space-y-5">

              {/* Name */}
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">
                  Your Name
                </label>

                <input
                  type="text"
                  placeholder="Enter your name"
                  className="w-full px-4 py-3 border border-gray-300 rounded-lg outline-none focus:ring-2 focus:ring-blue-500"
                />
              </div>


              {/* Email */}
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">
                  Email Address
                </label>

                <input
                  type="email"
                  placeholder="Enter your email"
                  className="w-full px-4 py-3 border border-gray-300 rounded-lg outline-none focus:ring-2 focus:ring-blue-500"
                />
              </div>


              {/* Phone */}
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">
                  Phone Number
                </label>

                <input
                  type="tel"
                  placeholder="Enter your phone number"
                  className="w-full px-4 py-3 border border-gray-300 rounded-lg outline-none focus:ring-2 focus:ring-blue-500"
                />
              </div>


              {/* Message */}
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">
                  Message
                </label>

                <textarea
                  rows="5"
                  placeholder="Tell us what you are looking for..."
                  className="w-full px-4 py-3 border border-gray-300 rounded-lg outline-none focus:ring-2 focus:ring-blue-500 resize-none"
                ></textarea>
              </div>


              {/* Button */}
              <button
                type="submit"
                className="w-full bg-blue-600 text-white py-3.5 rounded-lg font-semibold hover:bg-blue-700 transition cursor-pointer"
              >
                Send Message
              </button>

            </form>

          </div>

        </div>
      </section>


      {/* Closing Section */}
      <section className="py-20 px-6 bg-white">
        <div className="max-w-4xl mx-auto text-center">

          <h2 className="text-3xl md:text-4xl font-bold text-gray-900">
            Your Next Property Journey Starts Here
          </h2>

          <p className="mt-5 text-gray-600 text-lg leading-relaxed">
            At DreamZone, we are always ready to listen, understand your
            needs, and help you take the next step toward the property
            you have been looking for.
          </p>

        </div>
      </section>


      <Footer />
    </>
  );
}

export default Contact;