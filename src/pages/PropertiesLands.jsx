import Footer from '../components/Footer';
import Navbar from '../components/Navbar';

import prop1 from "../assets/propLands/prop1.jpeg";
import prop2 from "../assets/propLands/prop2.jfif";
import prop3 from "../assets/propLands/prop3.jpeg";
import prop4 from "../assets/propLands/prop4.jfif";
import prop5 from "../assets/propLands/prop5.jpg";
import prop6 from "../assets/propLands/prop6.webp";
import prop7 from "../assets/propLands/prop7.jpg";
import prop8 from "../assets/propLands/prop8.avif";
import prop9 from "../assets/propLands/prop9.jfif";
import prop10 from "../assets/propLands/prop10.jpg";
import prop11 from "../assets/propLands/prop11.jfif";
import prop12 from "../assets/propLands/prop12.webp";
import prop13 from "../assets/propLands/prop13.jpg";
import prop14 from "../assets/propLands/prop14.jfif";
import prop15 from "../assets/propLands/prop15.jfif";
import prop16 from "../assets/propLands/prop16.jfif";


import land1 from "../assets/propLands/land1.jfif";
import land2 from "../assets/propLands/land2.jfif";
import land3 from "../assets/propLands/land3.jpg";
import land4 from "../assets/propLands/land4.jpg";











function PropertiesLands() {
  return (
    <>
        <Navbar/>

        {/* Houses */}
        <section className='pt-32 pb-24 px-6 bg-gray-400'>

            <div className='max-w-7xl mx-auto'>
              <div className="text-center max-w-3xl mx-auto">
                <p className='text-blue-600 font-semibold uppercase tracking-[0.25em]'>
                    Our Properties
                </p>

                <h1 className='text-4xl md:text-6xl font-bold text-gray-900 mt-4'>
                    Find A Place To

                    <span className='text-blue-600'> Call Home</span>
                </h1>

                <p className='text-gray-900 text-lg mt-6 leading-relaxed'>
                      Explore our collection of carefully selected houses
                            and residences in some of Sri Lanka's most desirable
                            locations.
                </p>


                </div>
            

              {/* House cards */}
              <div className='grid sm:grid-cols-2 lg:grid-cols-4 gap-7 mt-16'>



                <div className="h-60 overflow-hidden rounded-2xl">
                    <img 
                        src={prop1} 
                        alt="interior"
                        className="w-full h-full object-cover hover:scale-105 transition duration-500"
                        />
                </div>
                <div className="h-60 overflow-hidden rounded-2xl">
                    <img 
                        src={prop2} 
                        alt="interior"
                        className="w-full h-full object-cover hover:scale-105 transition duration-500"
                        />
                </div>
                <div className="h-60 overflow-hidden rounded-2xl">
                    <img 
                        src={prop3} 
                        alt="interior"
                        className="w-full h-full object-cover hover:scale-105 transition duration-500"
                        />
                </div>
                <div className="h-60 overflow-hidden rounded-2xl">
                    <img 
                        src={prop4} 
                        alt="interior"
                        className="w-full h-full object-cover hover:scale-105 transition duration-500"
                        />
                </div>
                <div className="h-60 overflow-hidden rounded-2xl">
                    <img 
                        src={prop5} 
                        alt="interior"
                        className="w-full h-full object-cover hover:scale-105 transition duration-500"
                        />
                </div>
                <div className="h-60 overflow-hidden rounded-2xl">
                    <img 
                        src={prop6} 
                        alt="interior"
                        className="w-full h-full object-cover hover:scale-105 transition duration-500"
                        />
                </div>
                <div className="h-60 overflow-hidden rounded-2xl">
                    <img 
                        src={prop7} 
                        alt="interior"
                        className="w-full h-full object-cover hover:scale-105 transition duration-500"
                        />
                </div>
                <div className="h-60 overflow-hidden rounded-2xl">
                    <img 
                        src={prop8} 
                        alt="interior"
                        className="w-full h-full object-cover hover:scale-105 transition duration-500"
                        />
                </div>
                <div className="h-60 overflow-hidden rounded-2xl">
                    <img 
                        src={prop9} 
                        alt="interior"
                        className="w-full h-full object-cover hover:scale-105 transition duration-500"
                        />
                </div>
                <div className="h-60 overflow-hidden rounded-2xl">
                    <img 
                        src={prop10} 
                        alt="interior"
                        className="w-full h-full object-cover hover:scale-105 transition duration-500"
                        />
                </div>
                <div className="h-60 overflow-hidden rounded-2xl">
                    <img 
                        src={prop11} 
                        alt="interior"
                        className="w-full h-full object-cover hover:scale-105 transition duration-500"
                        />
                </div>
                <div className="h-60 overflow-hidden rounded-2xl">
                    <img 
                        src={prop12} 
                        alt="interior"
                        className="w-full h-full object-cover hover:scale-105 transition duration-500"
                        />
                </div>
                <div className="h-60 overflow-hidden rounded-2xl">
                    <img 
                        src={prop13} 
                        alt="interior"
                        className="w-full h-full object-cover hover:scale-105 transition duration-500"
                        />
                </div>
                <div className="h-60 overflow-hidden rounded-2xl">
                    <img 
                        src={prop14} 
                        alt="interior"
                        className="w-full h-full object-cover hover:scale-105 transition duration-500"
                        />
                </div>
                <div className="h-60 overflow-hidden rounded-2xl">
                    <img 
                        src={prop15} 
                        alt="interior"
                        className="w-full h-full object-cover hover:scale-105 transition duration-500"
                        />
                </div>
                <div className="h-60 overflow-hidden rounded-2xl">
                    <img 
                        src={prop16} 
                        alt="interior"
                        className="w-full h-full object-cover hover:scale-105 transition duration-500"
                        />
                </div>

              </div>

              </div>



        </section>

        {/* Land */}
        <section className='py-24 px-6 bg-gray-100'>

            <div className='max-w-7xl mx-auto text-center '>

                <p className='text-blue-600 font-semibold uppercase tracking-[0.25em]'>
                    Lands
                </p>

                <h2 className='text-4xl md:text-5xl font-bold text-gray-900 mt-4'>
                      Find The Perfect
                            <span className="text-blue-600"> Piece Of Land</span>
                </h2>

                <p className='text-gray-500 text-lg mt-6 leading-relaxed'>
                      Discover residential, investment, and development
                            lands in locations with excellent potential.
                </p>
            </div>

            <div className='grid sm:grid-cols-2 lg:grid-cols-4 gap-7 mt-16'>
                    <div className="h-60 overflow-hidden rounded-2xl">
                      <img 
                          src={land1} 
                          alt="interior"
                          className="w-full h-full object-cover hover:scale-105 transition duration-500"
                        />
                    </div>
                    <div className="h-60 overflow-hidden rounded-2xl">
                      <img 
                          src={land2} 
                          alt="interior"
                          className="w-full h-full object-cover hover:scale-105 transition duration-500"
                        />
                    </div>
                    <div className="h-60 overflow-hidden rounded-2xl">
                      <img 
                          src={land3} 
                          alt="interior"
                          className="w-full h-full object-cover hover:scale-105 transition duration-500"
                        />
                    </div>
                    <div className="h-60 overflow-hidden rounded-2xl">
                      <img 
                          src={land4} 
                          alt="interior"
                          className="w-full h-full object-cover hover:scale-105 transition duration-500"
                        />
                    </div>

            </div>

        </section>


        <Footer />
    </>
  )
}

export default PropertiesLands;
