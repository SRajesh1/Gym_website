import { useState, useEffect } from 'react';

const Hero = () => {
    const slides = [
        '/images/BenchPress.jpg',
        '/images/Squats.jpg',
        '/images/Deadlift.jpg',
        '/images/Pullup.jpg'
    ];

    const [currentSlide, setCurrentSlide] = useState(0);

    useEffect(() => {
        const interval = setInterval(() => {
            setCurrentSlide((prev) => (prev + 1) % slides.length);
        }, 2000);
        return () => clearInterval(interval);
    }, [slides.length]);

    return (
        <header id="home" className="relative h-screen flex items-center justify-center text-center overflow-hidden pt-[80px]">
            {/* Slider */}
            <div className="absolute top-0 left-0 w-full h-full">
                {slides.map((slide, index) => (
                    <div
                        key={index}
                        className={`absolute top-0 left-0 w-full h-full bg-cover bg-center transition-opacity duration-1000 ease-in-out ${index === currentSlide ? 'opacity-100 animate-vertical-slide' : 'opacity-0'}`}
                        style={{ backgroundImage: `url('${slide}')` }}
                    ></div>
                ))}
            </div>

            {/* Overlay */}
            <div className="absolute top-0 left-0 w-full h-full bg-black/60 z-10"></div>

            {/* Content */}
            <div className="container max-w-[1200px] mx-auto px-5 relative z-20 hero-content text-text">
                <h1 className="text-4xl md:text-6xl font-bold uppercase mb-5 leading-[1.1]">
                    Forge Your <span className="text-primary">Legacy</span>
                </h1>
                <p className="text-lg md:text-xl text-[#B0B0B0] mb-10 max-w-[600px] mx-auto">
                    Expert workout routines and personalized diet plans to sculpt your dream physique.
                </p>
                <div className="flex flex-col md:flex-row justify-center gap-4">
                    <a href="#workouts" className="inline-block px-8 py-3 rounded-full font-bold uppercase tracking-wider bg-primary text-background hover:-translate-y-1 hover:shadow-[0_10px_20px_rgba(212,255,0,0.2)] transition-all duration-300">
                        Start Training
                    </a>
                    <a href="#diet-plans" className="inline-block px-8 py-3 rounded-full font-bold uppercase tracking-wider border-2 border-primary text-primary hover:bg-primary hover:text-background transition-all duration-300">
                        View Diet Plans
                    </a>
                </div>
            </div>
        </header>
    );
};

export default Hero;
