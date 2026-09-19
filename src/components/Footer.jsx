import { FiFacebook, FiInstagram, FiLinkedin, FiMail, FiMapPin, FiPhone, FiTwitter } from "react-icons/fi"


function Footer() {
  return (
    <footer className="bg-gray-950 text-white">

        <div className="max-w-7xl mx-auto px-6 py-16">
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12">
                
                <div>
                    <h2 className="text-2xl font-bold text-mauve-300">
                        Dream<span className="text-[rgb(191,107,64)]">Zone</span>
                    </h2>

                    <p className="text-gray-400 mt-5 leading-relaxed">
                          Turning property aspirations into reality with
                            trusted real estate solutions across Sri Lanka.
                    </p>

                        <div className="flex gap-4 mt-7">
                              <a 
                                href="#"
                                className="w-10 h-10 flex items-center justify-center rounded-full bg-gray-800 hover:bg-blue-600 transition"
                              >
                                  <FiFacebook size={18} />
                              </a>

                              <a 
                                href="#"
                                className="w-10 h-10 flex items-center justify-center rounded-full bg-gray-800 hover:bg-blue-600 transition"
                                >
                                  <FiInstagram size={18} />
                              </a>

                              <a
                                href="#"
                                className="w-10 h-10 flex items-center justify-center rounded-full bg-gray-800 hover:bg-blue-600 transition"
                            >
                                <FiLinkedin size={18} />
                            </a>

                            <a
                                href="#"
                                className="w-10 h-10 flex items-center justify-center rounded-full bg-gray-800 hover:bg-blue-600 transition"
                            >
                                <FiTwitter size={18} />
                            </a>

                        </div>
                </div>

                <div>
                        <h3 className="text-lg font-semibold mb-6">
                            Quick Links
                        </h3>

                        <ul className="space-y-4 text-gray-400">

                            <li>
                                <a
                                    href="/"
                                    className="hover:text-white transition"
                                >
                                    Home
                                </a>
                            </li>

                            <li>
                                <a
                                    href="/propertieslands"
                                    className="hover:text-white transition"
                                >
                                    Properties
                                </a>
                            </li>

                            <li>
                                <a
                                    href="/about"
                                    className="hover:text-white transition"
                                >
                                    About Us
                                </a>
                            </li>

                            <li>
                                <a
                                    href="/services"
                                    className="hover:text-white transition"
                                >
                                    Services
                                </a>
                            </li>

                            <li>
                                <a
                                    href="/contact"
                                    className="hover:text-white transition"
                                >
                                    Contact
                                </a>
                            </li>

                        </ul>
                    </div>


                        <div>
                          <h3 className="text=lg font-semibold mb-6">
                            Our Services
                          </h3>

                          <ul className="space-y-4 text-gray-400">
                              <li>Buy Property</li>
                              <li>Sell Property</li>
                              <li>Rent Property</li>
                              <li>Property Consultation</li>
                              <li>Investment Advisory</li>
                          </ul>
                    </div>


                    <div>
                          <h3 className="text-lg font-semibold mb-6">
                            Contact Us
                          </h3>

                          <div className="space-y-5 text-gray-400">
                              <div className="flex gap-3">
                                  <FiMapPin
                                    className="text-blue-500 mt-1 shrink-0"
                                    size={20}
                                  />

                                  <p>
                                    Colombo, Sri Lanka
                                  </p>
                              </div>

                              <div className="flex gap-3">
                                  <FiPhone
                                    className="text-blue-500 shrink-0"
                                    size={20}
                                />

                                <a 
                                  href="tel:+94112345678"
                                  className="hover:text-white transition"
                                  
                                >
                                    +94 11 234 5678
                                </a>
                              </div>

                              <div className="flex gap-3">
                                      <FiMail
                                          className="text-blue-500 shrink-0"
                                          size={20}
                                      />

                                      <a 
                                          href="mailto:info@dreamzone.lk"
                                          className="hover:text-white transition"
                                      >
                                        info@dreamzone.lk
                                      </a>
                              </div>
                          </div>
                    </div>
            </div>
        </div>

          <div className="border-t border-gray-800">
              <div className="max-w-7xl mx-auto px-6 py-6 flex flex-col md:flex-row items-center justify-between gap-4">
                  <p className="text-gray-500 text-sm">
                        © {new Date().getFullYear()} DreamZone. All rights reserved.
                  </p>

                  <div className="flex gap-6 text-sm text-gray-500">

                        <a
                            href="#"
                            className="hover:text-white transition"
                        >
                            Privacy Policy
                        </a>

                        <a
                            href="#"
                            className="hover:text-white transition"
                        >
                            Terms & Conditions
                        </a>

                  </div>
              </div>
          </div>

    </footer>
  )
}

export default Footer