import React from 'react';

const Pricing = () => {
    return (
        <section id="pricing" className="py-20 bg-background text-text">
            <div className="container max-w-[1200px] mx-auto px-5">
                <h2 className="text-3xl md:text-4xl font-bold text-center uppercase mb-12">
                    Membership <span className="text-primary">Plans</span>
                </h2>
                <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                    {/* Basic Plan */}
                    <div className="bg-card p-8 rounded-2xl border border-white/5 hover:border-primary/50 transition-all duration-300 hover:-translate-y-2 relative overflow-hidden group">
                        <div className="absolute top-0 right-0 p-4 opacity-10 group-hover:opacity-20 transition-opacity">
                            <i className="fas fa-dumbbell text-6xl"></i>
                        </div>
                        <h3 className="text-xl font-bold uppercase mb-2">Monthly</h3>
                        <div className="text-4xl font-bold text-primary mb-6">$49<span className="text-lg text-text-muted font-normal">/mo</span></div>
                        <ul className="space-y-4 mb-8 text-text-muted">
                            <li className="flex items-center gap-3"><i className="fas fa-check text-primary"></i> Access to Gym Floor</li>
                            <li className="flex items-center gap-3"><i className="fas fa-check text-primary"></i> Locker Access</li>
                            <li className="flex items-center gap-3"><i className="fas fa-check text-primary"></i> Free WiFi</li>
                            <li className="flex items-center gap-3 opacity-50"><i className="fas fa-times"></i> Group Classes</li>
                            <li className="flex items-center gap-3 opacity-50"><i className="fas fa-times"></i> Personal Trainer</li>
                        </ul>
                        <button className="w-full py-3 rounded-full border border-primary text-primary font-bold uppercase hover:bg-primary hover:text-background transition-all duration-300">
                            Choose Plan
                        </button>
                    </div>

                    {/* Pro Plan */}
                    <div className="bg-card p-8 rounded-2xl border-2 border-primary/50 hover:border-primary transition-all duration-300 transform md:-translate-y-4 relative overflow-hidden shadow-[0_0_30px_rgba(212,255,0,0.1)]">
                        <div className="absolute top-0 right-0 bg-primary text-background text-xs font-bold px-3 py-1 rounded-bl-lg">
                            POPULAR
                        </div>
                        <h3 className="text-xl font-bold uppercase mb-2">Yearly (Pro)</h3>
                        <div className="text-4xl font-bold text-primary mb-6">$399<span className="text-lg text-text-muted font-normal">/yr</span></div>
                        <ul className="space-y-4 mb-8 text-text-muted">
                            <li className="flex items-center gap-3"><i className="fas fa-check text-primary"></i> All Basic Features</li>
                            <li className="flex items-center gap-3"><i className="fas fa-check text-primary"></i> Unlimited Group Classes</li>
                            <li className="flex items-center gap-3"><i className="fas fa-check text-primary"></i> Sauna & Steam Room</li>
                            <li className="flex items-center gap-3"><i className="fas fa-check text-primary"></i> 1 Free PT Session</li>
                            <li className="flex items-center gap-3 opacity-50"><i className="fas fa-times"></i> Nutrition Plan</li>
                        </ul>
                        <button className="w-full py-3 rounded-full bg-primary text-background font-bold uppercase hover:shadow-[0_0_20px_rgba(212,255,0,0.4)] transition-all duration-300">
                            Join Now
                        </button>
                    </div>

                    {/* Elite Plan */}
                    <div className="bg-card p-8 rounded-2xl border border-white/5 hover:border-primary/50 transition-all duration-300 hover:-translate-y-2 relative overflow-hidden">
                        <h3 className="text-xl font-bold uppercase mb-2">Elite</h3>
                        <div className="text-4xl font-bold text-primary mb-6">$89<span className="text-lg text-text-muted font-normal">/mo</span></div>
                        <ul className="space-y-4 mb-8 text-text-muted">
                            <li className="flex items-center gap-3"><i className="fas fa-check text-primary"></i> All Pro Features</li>
                            <li className="flex items-center gap-3"><i className="fas fa-check text-primary"></i> 24/7 Access</li>
                            <li className="flex items-center gap-3"><i className="fas fa-check text-primary"></i> Dedicated Locker</li>
                            <li className="flex items-center gap-3"><i className="fas fa-check text-primary"></i> Monthly Body Analysis</li>
                            <li className="flex items-center gap-3"><i className="fas fa-check text-primary"></i> Custom Nutrition Plan</li>
                        </ul>
                        <button className="w-full py-3 rounded-full border border-primary text-primary font-bold uppercase hover:bg-primary hover:text-background transition-all duration-300">
                            Choose Plan
                        </button>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default Pricing;
