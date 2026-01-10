import React from 'react';

const Trainers = () => {
    const trainers = [
        {
            name: 'John Doe',
            specialty: 'CrossFit & HIIT',
            image: '/images/trainer1.jpg', // Placeholder
            bio: 'Certified CrossFit L3 Trainer with 10 years of experience pushing limits.',
            socials: { instagram: '#', twitter: '#' }
        },
        {
            name: 'Sarah Smith',
            specialty: 'Yoga & Pilates',
            image: '/images/trainer2.jpg', // Placeholder
            bio: 'RYT-500 Yoga Instructor specializing in flexibility and mindfulness.',
            socials: { instagram: '#', facebook: '#' }
        },
        {
            name: 'Mike Tyson',
            specialty: 'Boxing & Strength',
            image: '/images/trainer3.jpg', // Placeholder
            bio: 'Former pro boxer dedicated to teaching the art of the sweet science.',
            socials: { instagram: '#', twitter: '#' }
        }
    ];

    return (
        <section id="trainers" className="py-20 bg-background text-text">
            <div className="container max-w-[1200px] mx-auto px-5">
                <h2 className="text-3xl md:text-4xl font-bold text-center uppercase mb-12">
                    Expert <span className="text-primary">Trainers</span>
                </h2>
                <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                    {trainers.map((trainer, index) => (
                        <div key={index} className="group relative overflow-hidden rounded-2xl">
                            <div className="aspect-[3/4] bg-card relative">
                                {/* Placeholder for image if not found, use a gradient bg */}
                                <div className="absolute inset-0 bg-gradient-to-br from-card to-background-darker flex items-center justify-center text-text-muted">
                                    <span className="text-6xl opacity-20"><i className="fas fa-user"></i></span>
                                    {/* <img src={trainer.image} alt={trainer.name} className="absolute inset-0 w-full h-full object-cover transition-transform duration-500 group-hover:scale-110" /> */}
                                </div>
                                <div className="absolute inset-x-0 bottom-0 bg-gradient-to-t from-black/90 to-transparent p-6 pt-20 translate-y-4 group-hover:translate-y-0 transition-transform duration-300">
                                    <h3 className="text-2xl font-bold uppercase text-primary">{trainer.name}</h3>
                                    <p className="text-sm font-bold uppercase tracking-wider mb-2">{trainer.specialty}</p>
                                    <p className="text-sm text-text-muted mb-4 opacity-0 group-hover:opacity-100 transition-opacity delay-100">{trainer.bio}</p>
                                    <div className="flex gap-4 opacity-0 group-hover:opacity-100 transition-opacity delay-200">
                                        {Object.entries(trainer.socials).map(([platform, link]) => (
                                            <a key={platform} href={link} className="text-text hover:text-primary transition-colors">
                                                <i className={`fab fa-${platform}`}></i>
                                            </a>
                                        ))}
                                    </div>
                                </div>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default Trainers;
