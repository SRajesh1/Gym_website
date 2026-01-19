const About = () => {
    return (
        <section id="about" className="py-20">
            <div className="max-w-[1200px] mx-auto px-5">
                <h2 className="text-3xl md:text-4xl font-bold text-center uppercase tracking-wider mb-2">
                    About <span className="text-primary">IronForge</span>
                </h2>
                <p className="text-center text-[#B0B0B0] mb-12">More than just a gym. We are a movement.</p>

                <div className="flex flex-col lg:flex-row justify-around gap-5 bg-[#1E1E1E] p-8 rounded-2xl border border-white/5">
                    <div className="lg:w-1/2 flex justify-center">
                        <img
                            src="https://images.unsplash.com/photo-1583454110551-21f2fa2afe61?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80"
                            alt="Bodybuilder Posing"
                            className="w-full max-w-[500px] rounded-2xl object-cover"
                        />
                    </div>
                    <div className="lg:w-1/2 flex flex-col justify-center gap-8 mt-8 lg:mt-0 text-center lg:text-left">
                        <div className="space-y-4 text-[#B0B0B0] text-lg">
                            <p>At IronForge, we believe that fitness is not just about lifting weights; it's about forging a stronger version of yourself. Our philosophy combines old-school grit with modern science to help you break through plateaus and achieve your peak potential.</p>
                            <p>Whether you are a beginner taking your first step or an elite athlete looking for that extra edge, our comprehensive resources and expert-designed plans are here to guide you every rep of the way.</p>
                        </div>
                        <div className="flex flex-wrap justify-center lg:justify-start gap-10">
                            {[
                                { number: '50+', label: 'Expert Trainers' },
                                { number: '100+', label: 'Workout Plans' },
                                { number: '10k+', label: 'Lives Changed' }
                            ].map((stat, index) => (
                                <div key={index} className="text-center lg:text-left">
                                    <h3 className="text-4xl text-primary font-bold mb-1">{stat.number}</h3>
                                    <p className="text-sm text-[#B0B0B0] uppercase tracking-widest">{stat.label}</p>
                                </div>
                            ))}
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default About;
