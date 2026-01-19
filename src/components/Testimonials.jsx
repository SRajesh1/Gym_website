import React from 'react';

const Testimonials = () => {
    const testimonials = [
        {
            name: 'Emily R.',
            role: 'Member since 2023',
            quote: "I never thought I could stick to a routine, but the community here is incredible. I've lost 20lbs in 3 months!",
            rating: 5,
            image: '/images/user1.jpg'
        },
        {
            name: 'David K.',
            role: 'Pro Athlete',
            quote: "The facility is top-notch. From the deadlift platforms to the recovery sauna, it has everything a pro needs.",
            rating: 5,
            image: '/images/user2.jpg'
        },
        {
            name: 'Jessica M.',
            role: 'Yoga Enthusiast',
            quote: "The morning yoga classes are the best way to start my day. The instructors are so knowledgeable and calming.",
            rating: 4,
            image: '/images/user3.jpg'
        }
    ];

    return (
        <section id="testimonials" className="py-20 bg-background-darker text-text relative">
            <div className="container max-w-[1200px] mx-auto px-5">
                <h2 className="text-3xl md:text-4xl font-bold text-center uppercase tracking-wider mb-12 -mt-16">
                    Success <span className="text-primary">Stories</span>
                </h2>
                <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                    {testimonials.map((t, index) => (
                        <div key={index} className="bg-card p-8 rounded-2xl border border-white/5 relative">
                            {/* Quote Icon */}
                            <div className="absolute top-4 right-6 text-6xl text-primary/10 font-serif">"</div>

                            <div className="flex items-center gap-4 mb-6">
                                <div className="w-12 h-12 rounded-full bg-primary/20 flex items-center justify-center text-primary font-bold text-xl">
                                    {t.name.charAt(0)}
                                </div>
                                <div>
                                    <h4 className="font-bold">{t.name}</h4>
                                    <p className="text-xs text-text-muted">{t.role}</p>
                                </div>
                            </div>

                            <p className="text-text-muted mb-6 italic relative z-10">"{t.quote}"</p>

                            <div className="flex gap-1 text-primary">
                                {[...Array(t.rating)].map((_, i) => (
                                    <i key={i} className="fas fa-star"></i>
                                ))}
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default Testimonials;
