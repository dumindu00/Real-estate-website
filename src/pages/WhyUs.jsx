import Navbar from "../components/Navbar";
import Footer from "../components/Footer";

import us1 from "../assets/us/us1.jfif"
import us2 from "../assets/us/us2.jpg"

import w1 from "../assets/us/w1.jfif"
import w2 from "../assets/us/w2.jfif"
import w3 from "../assets/us/w3.jpg"
import w4 from "../assets/us/w4.jpg"
import w5 from "../assets/us/w5.avif"


function WhyUs() {
  return (
    <>
      <Navbar />

      <section className="pt-32 pb-24 px-6 bg-gray-900 text-white">
              <div className="max-w-6xl mx-auto text-center">
                        <p className="text-blue-400 font-semibold uppercase tracking-widest mb-4">
                            Why Choose Us
                        </p>

                        <h1 className="text-5xl md:text-6xl font-bold leading-tight">
                          Experience You Can Trust.
                          <br />
                          A Future We Build Together.
                        </h1>

                        <p className="mt-6 max-w-3xl mx-auto text-lg text-gray-300 leading-relaxed">
                              Since 2020, DreamZone has been helping people find the right
                              properties while building lasting relationships with our
                              customers. Our experience, dedicated team, and modern approach
                              continue to shape the way we serve the real estate market.
                        </p>
              </div>
      </section>


      <section className="py-24 px-6 bg-white">
        <div className="max-w-7xl mx-auto grid grid-cols-2 gap-16 items-center">
            
            <div>
                  <p className="text-blue-600 font-semibold uppercase tracking-widest mb-3">
                      Our Journey
                  </p>

                  <h2 className="text-4xl md:text-5xl font-bold text-gray-900 leading-tight">
                      Growing With Experience Since 2020
                  </h2>


                  <p className="mt-6 text-gray-600 text-lg leading-relaxed">
                    Since establishing our business in 2020, DreamZone has grown
                    through dedication, experience, and a strong commitment to our
                    customers. Every property we work with and every customer we
                    serve has helped us build the experience that defines who we are
                    today.
                  </p>

                  <p className="mt-5 text-gray-600 text-lg leading-relaxed">
                    Over the years, we have developed a strong understanding of the
                    real estate market and built relationships that go beyond a
                    single transaction. Our customers are an important part of our
                    journey, and their trust continues to motivate us to improve.
                  </p>
            </div>


            <div>
              <div className="grid grid-cols-2 gap-4">
                  
                  <div className="h-64 overflow-hidden rounded-2xl">
                      <img 
                        src={us1} 
                        alt="DreamZone property"
                        className="w-full h-full object-cover hover:scale-105 transition duration-500" />
                  </div>

                  <div className="h-64 overflow-hidden rounded-2xl">
                      <img 
                        src={us2} 
                        alt="DreamZone property"
                        className="w-full h-full object-cover hover:scale-105 transition duration-500" />
                  </div>
              </div>

            <div className="grid grid-cols-2 gap-4 mt-4">
                <div className="bg-gray-50 rounded-2xl p-6">
                    <h3 className="text-3xl font-bold text-blue-600">2020</h3>
                
                    <p className="mt-2 text-gray-600">
                      The beginning of our journey
                    </p>
                </div>

                <div className="bg-gray-50 rounded-2xl p-6">
                    <h3 className="text-3xl font-bold text-blue-600">
                      6+
                    </h3>

                    <p className="mt-2 text-gray-600">
                      Years of experience
                    </p>
                </div>


                <div className="bg-gray-50 rounded-2xl p-6">
          <h3 className="text-3xl font-bold text-blue-600">
            Strong
          </h3>

          <p className="mt-2 text-gray-600">
            Customer relationships
          </p>
        </div>

        <div className="bg-gray-50 rounded-2xl p-6">
          <h3 className="text-3xl font-bold text-blue-600">
            Modern
          </h3>

          <p className="mt-2 text-gray-600">
            Approach to real estate
          </p>
        </div>
            </div>
            </div>


        </div>

      </section>

















{/* Our People */}
<section className="py-24 px-6 bg-gray-50">
  <div className="max-w-7xl mx-auto">

    {/* Heading */}
    <div className="max-w-3xl mx-auto text-center">

      <p className="text-blue-600 font-semibold uppercase tracking-widest mb-3">
        Our People
      </p>

      <h2 className="text-4xl md:text-5xl font-bold text-gray-900">
        A Great Team Behind Everything We Do
      </h2>

      <p className="mt-5 text-gray-600 text-lg leading-relaxed">
        Behind DreamZone is a dedicated group of professionals who bring
        experience, knowledge, and commitment to everything we do. Our
        people work together with a shared goal of providing our customers
        with a reliable and professional real estate experience.
      </p>

    </div>


    {/* Images */}
    <div className="grid md:grid-cols-3 gap-6 mt-16">

      <div className="h-80 overflow-hidden rounded-2xl">
        <img
          src={w1}
          alt="Professional site visit"
          className="w-full h-full object-cover hover:scale-105 transition duration-500"
        />
      </div>

      <div className="h-80 overflow-hidden rounded-2xl md:mt-10">
        <img
          src={w2}
          alt="Professional site visit"
          className="w-full h-full object-cover hover:scale-105 transition duration-500"
        />
      </div>

      <div className="h-80 overflow-hidden rounded-2xl">
        <img
          src={w3}
          alt="Professional site visit"
          className="w-full h-full object-cover hover:scale-105 transition duration-500"
        />
      </div>

    </div>


    {/* Team Statement */}
    <div className="max-w-4xl mx-auto mt-20 text-center">

      <p className="text-2xl md:text-3xl font-semibold text-gray-900 leading-relaxed">
        "Our greatest strength is our people. We believe that when talented
        and dedicated individuals work together, they create something
        greater than what any one person can achieve alone. Our team is
        committed to growing together, serving our customers, and building
        the future of DreamZone."
      </p>

      <div className="mt-8">
        <div className="w-16 h-1 bg-blue-600 mx-auto rounded-full"></div>

        <p className="mt-4 text-gray-500 font-medium">
          DreamZone
        </p>
      </div>

    </div>

  </div>
</section>





















  <Footer/>
    </>
  )
}

export default WhyUs