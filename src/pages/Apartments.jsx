import Footer from "../components/Footer"
import Navbar from "../components/Navbar"

import ap1 from "../assets/apartments/ap1.jpg";
import ap2 from "../assets/apartments/ap2.jpg";
import ap4 from "../assets/apartments/ap4.jpg";
import ap5 from "../assets/apartments/ap5.jpeg";
import ap6 from "../assets/apartments/ap6.jpg";
import ap7 from "../assets/apartments/ap7.webp";
import ap8 from "../assets/apartments/ap8.jfif";
import ap9 from "../assets/apartments/ap9.jpg";
import ap10 from "../assets/apartments/ap10.jpg";
import ap11 from "../assets/apartments/ap11.jpg";
import ap12 from "../assets/apartments/ap12.jpg";
import ap13 from "../assets/apartments/ap13.jfif";




function Apartments() {
  return (
    <>

           <Navbar />

        <section className="min-h-screen flex items-center bg-gray-400 px-6 pt-28">

            <div className="max-w-7xl mx-auto grid md:grid-cols-2 gap-16 items-center">
                  <div>
                  
                  <p className="text-blue-600 uppercase tracking-[0.25em] font-semibold">
                      Apartments
                  </p>

                  <h1 className="text-5xl md:text-6xl font-bold text-gray-900 leading-tight mt-4">
                        The Space You've
                        <span className="text-blue-600">Always Dreamed Of</span>
                  </h1>
                  
                  <p className="text-gray-600 text-lg leading-relaxed mt-7 max-w-xl">
                    Discover beautifully designed apartments created for
                            modern living. From thoughtfully planned spaces to
                            elegant interiors, every detail is designed to give
                            you comfort, style, and a place you are proud to
                            call home.
                  </p>

                  <p className="text-gray-600 leading-relaxed mt-5 max-w-xl">
                            Whether you're looking for a peaceful home for your
                            family or a smart investment opportunity, our
                            collection of apartments brings together quality,
                            convenience, and exceptional design.
                    </p>

                    <button className="mt-8 bg-blue-600 text-white px-7 py-3.5 rounded-lg font-semibold hover:bg-blue-700 transition cursor-pointer">
                      Explore Apartments

                    </button>

            </div>

            <div className="h-[500px] rounded-2xl overflow-hidden shadow-xl">

              <img 
                  src={ap1} 
                  alt="apartment interior"
                  className="w-full h-full object-cover"
                  />

            </div>
            </div>

        </section>    

        <section className="py-24 px-6 bg-white">
          <div className="max-w-7xl mx-auto">
            <div className="text-center max-w-2xl mx-auto">
                  <p className="text-blue-600 uppercase tracking-[0.25em] font-semibold">
                        Designed For Living
                  </p>

                  <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mt-3">
                        Interiors That Feel Like Home
                  </h2>

                  <p className="text-gray-500 mt-5">
                        Experience spaces where beautiful architecture,
                            thoughtful interiors, and modern comfort come
                            together.
                  </p>
            </div>

            <div className="grid grid-cols-2 md:grid-cols-4 gap-5 mt-14">

                <div className="h-80 overflow-hidden rounded-2xl">
                  <img 
                      src={ap2} 
                      alt="interior"
                      className="w-full h-full object-cover hover:scale-105 transition duration-500"
                      />
                </div>

                <div className="h-80 overflow-hidden rounded-2xl">
                            <img
                                src={ap13}
                                alt="Modern apartment"
                                className="w-full h-full object-cover hover:scale-105 transition duration-500"
                            />
                  </div>

                  <div className="h-80 overflow-hidden rounded-2xl">
                            <img
                                src={ap4}
                                alt="Luxury apartment interior"
                                className="w-full h-full object-cover hover:scale-105 transition duration-500"
                            />
                        </div>

                        <div className="h-80 overflow-hidden rounded-2xl">
                            <img
                                src={ap12}
                                alt="Modern living space"
                                className="w-full h-full object-cover hover:scale-105 transition duration-500"
                            />
                        </div>
                </div>
          </div>
        </section>

        <section className="py-28 bg-gray-950 text-white">
                <div className="max-w-4xl mx-auto text-center px-6">
                  <p className="text-blue-400 uppercase tracking-[0.25] font-semibold">
                          Your Next Chapter
                  </p>

                  <h2 className="text-4xl md:text-5xl font-bold mt-4">
                        A Home That Matches Your Lifestyle
                  </h2>
                  <p className="text-gray-400 text-lg leading-relaxed mt-6">
                        Your perfect apartment isn't just about four walls.
                        It's about the way you live, the comfort you feel,
                        and the memories you create. Let DreamZone help you
                        find a space that feels truly yours.
                    </p>

                  <button className="mt-9 bg-blue-600 hover:bg-blue-700 px-8 py-4 rounded-lg font-semibold transition cursor-pointer">
                        Find Your Apartment
                    </button>
                </div>
        </section>


          <Footer />
    </>
  )
}

export default Apartments