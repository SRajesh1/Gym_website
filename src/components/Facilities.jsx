import React from 'react';

const Facilities = () => {
    // Placeholder image data or structure
    const facilities = [
        { name: 'Cardio Zone', desc: 'Latest treadmills & ellipticals' },
        { name: 'Weight Room', desc: 'Free weights up to 150 lbs' },
        { name: 'Yoga Studio', desc: 'Peaceful environment for flow' },
        { name: 'Olympic Pool', desc: '25m heated indoor pool' },
        { name: 'Sauna & Steam', desc: 'Post-workout recovery' },
        { name: 'CrossFit Box', desc: 'Functional training area' },
    ];

    return (
        <section id="facilities" className="py-20 bg-background text-text">
            <div className="container max-w-[1200px] mx-auto px-5">
                <h2 className="text-3xl md:text-4xl font-bold text-center uppercase mb-12">
                    World Class <span className="text-primary">Facilities</span>
                </h2>

                <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4">
                    {facilities.map((item, index) => (
                        <div key={index} className="group relative h-64 rounded-2xl overflow-hidden bg-card border border-white/5 cursor-pointer">
                            {/* Placeholder Background */}
                            <div className="absolute inset-0 bg-[#2a2a2a] group-hover:bg-[#333] transition-colors duration-300 flex items-center justify-center">
                                <i className="fas fa-camera text-4xl text-white/10 group-hover:text-primary/50 transition-colors"></i>
                            </div>

                            {/* Overlay Content */}
                            <div className="absolute inset-0 bg-black/40 p-6 flex flex-col justify-end transition-opacity duration-300">
                                <h3 className="text-xl font-bold uppercase transform translate-y-2 group-hover:translate-y-0 transition-transform duration-300">{item.name}</h3>
                                <p className="text-primary text-sm opacity-0 group-hover:opacity-100 transform translate-y-4 group-hover:translate-y-0 transition-all duration-300 delay-75">{item.desc}</p>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default Facilities;
