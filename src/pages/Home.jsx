import { useEffect, useRef, useState } from "react";

import video1 from "../assets/videos/video1.mp4";
import video2 from "../assets/videos/video2.mp4";
import video3 from "../assets/videos/video3.mp4";
import video4 from "../assets/videos/video4.mp4";
import DreamZone from "../assets/logo/DreamZone.mp4";

import prop1 from "../assets/images/prop1.jfif";
import prop2 from "../assets/images/prop2.webp";
import prop3 from "../assets/images/prop3.jfif";
import prop4 from "../assets/images/prop4.jfif";
import prop5 from "../assets/images/prop5.jfif";
import prop6 from "../assets/images/prop6.jfif";
import prop7 from "../assets/images/prop7.jpg";
import prop8 from "../assets/images/prop8.jpg";

import Feed from "../components/Feed";
import Footer from "../components/Footer";
import Navbar from "../components/Navbar";






function Home() {

    const videos = [video1, video2, video3, video4];
    const properties = [prop1, prop2, prop3, prop4, prop5, prop6, prop7, prop8]
    const [currentVideo, setCurrentVideo] = useState(0);
    const [nextVideo, setNextVideo] = useState(null);
    

    const currentVideoRef = useRef(null);
    const nextVideoRef = useRef(null);


    const startTransition = () => {

        if (nextVideo !== null) return;

        const nextIndex = (currentVideo + 1) % videos.length;

        setNextVideo(nextIndex);
    };

    const handleTimeUpdate = () => {

        const video = currentVideoRef.current;

        if (!video) return;

        const timeLeft = video.duration - video.currentTime;

        if (timeLeft <= 1) {
            startTransition();
        }
    };

    useEffect(() => {

        if (nextVideo === null) return;

        const timer = setTimeout(() => {

            setCurrentVideo(nextVideo);
            setNextVideo(null);

        }, 1000);

        return () => clearTimeout(timer);

    }, [nextVideo]);


    return (
        <>

            <Navbar />

            {/* HERO SECTION */}
            <section className="relative h-screen flex items-center justify-center overflow-hidden">

                {/* CURRENT VIDEO */}
                <video
                    ref={currentVideoRef}
                    src={videos[currentVideo]}
                    autoPlay
                    muted
                    playsInline
                    onTimeUpdate={handleTimeUpdate}
                    className={`
                        absolute inset-0
                        w-full h-full
                        object-cover
                        transition-opacity
                        duration-[2000ms]
                        ease-in-out
                        ${nextVideo !== null
                            ? "opacity-0"
                            : "opacity-100"
                        }
                    `}
                />

                {/* NEXT VIDEO */}
                {nextVideo !== null && (
                    <video
                        ref={nextVideoRef}
                        src={videos[nextVideo]}
                        autoPlay
                        muted
                        playsInline
                        className="
                            absolute inset-0
                            w-full h-full
                            object-cover
                            opacity-100
                            transition-opacity
                            duration-[1000ms]
                            ease-in-out
                        "
                    />
                )}

                {/* DARK OVERLAY */}
                <div className="absolute inset-0 bg-black/55"></div>


                {/* HERO CONTENT */}
                <div className="relative z-10 text-center text-white max-w-4xl px-6">

                    <h1 className="text-5xl md:text-7xl font-bold leading-tight">
                        Find Your Dream Property
                    </h1>

                    <p className="mt-6 text-lg md:text-xl text-gray-200">
                        Discover luxury homes, apartments, and commercial
                        properties in prime locations with trusted real estate
                        professionals.
                    </p>

                    <div className="mt-10 flex justify-center gap-5 flex-wrap">

                        <button className="bg-blue-600 px-8 py-4 rounded-lg hover:bg-blue-700 transition cursor-pointer">
                            Explore Properties
                        </button>

                        <button className="border border-white px-8 py-4 rounded-lg hover:bg-white hover:text-black transition cursor-pointer">
                            Contact Us
                        </button>

                    </div>

                </div>
            </section>


            
                {/* Featured Properties */}
            <section className="py-24 px-2 max-w-full mx-auto">
                <h2 className="text-4xl font-bold text-center">
                    Featured Properties
                </h2>

                <p className="text-center text-gray-500 mt-3">
                    Properties that offer exceptional value and comfort.
                </p>

                <div className="grid md:grid-cols-4 gap-10 mt-14">
                    {properties.map((image, index) => (
                        <div
                            key={index}
                            className="rounded-xl overflow-hidden shadow-lg bg-white"
                        >
                            <div className="h-60">
                                <img 
                                    src={image} 
                                    alt={`Property ${index + 1}`}
                                    className="w-full h-full object-cover"
                                    />
                            </div>

                        </div>
                    ))}
                </div>

            </section>

                
                {/* who are we */}
            <section className="py-4 px-6 bg-gray-50">

                    <div className="max-w-7xl mx-auto grid md:grid-cols-2 gap-16 items-center">

                        <div className="relative flex justify-center">
                            <div className="w-full max-w-xl rounded-2xl overflow-hidden shadow-xl">
                                <video 
                                    src={DreamZone}
                                    autoPlay
                                    muted
                                    loop
                                    playsInline
                                    className="w-full h-full object-cover"
                                />
                            </div>
                        </div>

                        <div>
                            <p className="text-blue-600 font-semibold uppercase tracking-widest mb-3">
                                    Who Are We
                            </p>

                            <h2 className="text-4xl md:text-5xl font-bold text-green-900 leading-tight">
                                    Turning Your Property Dreams Into Reality
                            </h2>

                            <p className="mt-6 text-gray-600 text-lg leading-relaxed">
                                DreamZone has been turning property aspirations into reality
                        across Sri Lanka since 2020. With six years of dedicated real
                        estate expertise, we specialize in matching clients with
                        premium residential, commercial, and investment properties.
                            </p>

                            <p className="mt-5 text-gray-600 text-lg leading-relaxed">
                                Our deep market knowledge, commitment to transparency, and
                                client-first approach ensure a seamless and rewarding real
                                estate experience from browsing to closing.
                            </p>

                            <button className="mt-8 bg-blue-600 text-white px-7 py-3.5 rounded-lg font-semibold hover:bg-blue-700 transition cursor-pointer">
                                Discover More
                            </button>

                        </div>
                    </div>
                
            </section>

                <Feed />


     
                <Footer />


        </>
    );
}

export default Home;

