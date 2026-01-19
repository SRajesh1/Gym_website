import React from 'react';

const LeadCapture = () => {
    return (
        <section className="py-20 bg-primary text-background relative overflow-hidden">
            {/* Decorative Circles */}
            <div className="absolute -left-20 -top-20 w-64 h-64 bg-white/20 rounded-full blur-3xl"></div>
            <div className="absolute -right-20 -bottom-20 w-64 h-64 bg-white/20 rounded-full blur-3xl"></div>

            <div className="container max-w-[1200px] mx-auto px-5 relative z-10">
                <div className="flex flex-col md:flex-row items-center justify-between gap-10">
                    <div className="w-full md:w-1/2 text-center md:text-left">
                        <h2 className="text-3xl md:text-5xl font-bold uppercase mb-6 leading-tight">
                            Start Your Journey <br /> <span className="text-white drop-shadow-md">For Free</span>
                        </h2>
                        <p className="text-lg font-medium mb-8 max-w-md mx-auto md:mx-0">
                            Get a 7-Day Free Pass and experience the best gym equipment, classes, and community in town. No commitment required.
                        </p>
                        <ul className="space-y-2 mb-8 font-bold hidden md:block">
                            <li className="flex items-center gap-2"><i className="fas fa-check-circle text-background"></i> Full Gym Access</li>
                            <li className="flex items-center gap-2"><i className="fas fa-check-circle text-background"></i> Any Group Class</li>
                            <li className="flex items-center gap-2"><i className="fas fa-check-circle text-background"></i> Free Fitness Assessment</li>
                        </ul>
                    </div>

                    <div className="w-full md:w-1/2 max-w-md bg-background p-8 rounded-2xl shadow-2xl">
                        <h3 className="text-2xl font-bold uppercase text-primary mb-6 text-center">Claim Your Pass</h3>
                        <form className="space-y-4" onSubmit={(e) => e.preventDefault()}>
                            <div>
                                <label className="block text-text text-sm font-bold uppercase mb-2">Name</label>
                                <input type="text" placeholder="John Doe" className="w-full bg-[#2a2a2a] text-text border border-white/10 rounded-lg px-4 py-3 focus:outline-none focus:border-primary transition-colors" />
                            </div>
                            <div>
                                <label className="block text-text text-sm font-bold uppercase mb-2">Email</label>
                                <input type="email" placeholder="john@gmail.com" className="w-full bg-[#2a2a2a] text-text border border-white/10 rounded-lg px-4 py-3 focus:outline-none focus:border-primary transition-colors" />
                            </div>
                            <div>
                                <label className="block text-text text-sm font-bold uppercase mb-2">Phone</label>
                                <input type="tel" placeholder="Mobile Number" className="w-full bg-[#2a2a2a] text-text border border-white/10 rounded-lg px-4 py-3 focus:outline-none focus:border-primary transition-colors" />
                            </div>
                            <button type="submit" className="w-full bg-primary text-background font-bold uppercase px-6 py-4 rounded-lg hover:shadow-[0_4px_14px_0_rgba(212,255,0,0.39)] hover:-translate-y-1 transition-all duration-300 mt-2">
                                Get Free Trial
                            </button>
                            <p className="text-xs text-center text-text-muted mt-4">
                                By signing up, you agree to our Terms & Privacy Policy.
                            </p>
                        </form>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default LeadCapture;
