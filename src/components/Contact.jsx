import React from 'react';

const Contact = () => {
    return (
        <section id="contact" className="py-20 bg-background text-text -mb-10">
            <div className="container max-w-[1200px] mx-auto px-5">
                <div className="flex flex-col md:flex-row gap-12">
                    {/* Contact Info */}
                    <div className="w-full md:w-1/3">
                        <h2 className="text-3xl md:text-4xl font-bold uppercase mb-8">
                            Get In <span className="text-primary">Touch</span>
                        </h2>
                        <div className="space-y-8">
                            <div>
                                <h4 className="text-xl font-bold uppercase mb-2 text-primary">Visit Us</h4>
                                <p className="text-text-muted">
                                    123 Fitness Blvd, <br />
                                    Muscle City, CA 90210
                                </p>
                            </div>
                            <div>
                                <h4 className="text-xl font-bold uppercase mb-2 text-primary">Contact</h4>
                                <p className="text-text-muted mb-1">
                                    <i className="fas fa-phone md:mr-2"></i> (555) 123-4567
                                </p>
                                <p className="text-text-muted">
                                    <i className="fas fa-envelope md:mr-2"></i> info@ironforge.gym
                                </p>
                            </div>
                            <div>
                                <h4 className="text-xl font-bold uppercase mb-2 text-primary">Open Hours</h4>
                                <ul className="text-text-muted space-y-1">
                                    <li className="flex justify-between max-w-[200px]"><span>Mon - Fri:</span> <span>5am - 11pm</span></li>
                                    <li className="flex justify-between max-w-[200px]"><span>Saturday:</span> <span>6am - 9pm</span></li>
                                    <li className="flex justify-between max-w-[200px]"><span>Sunday:</span> <span>7am - 8pm</span></li>
                                </ul>
                            </div>
                        </div>
                    </div>

                    {/* Map Placeholder or Embed */}
                    <div className="w-full md:w-2/3 h-[400px] bg-card rounded-2xl overflow-hidden relative">
                        <iframe
                            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3151.835434509374!2d144.9537353153166!3d-37.81627974202166!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x6ad642af0f11fd81%3A0xf577d3a0e168ae09!2sFlinders%20Street%20Station!5e0!3m2!1sen!2sau!4v1620893332464!5m2!1sen!2sau"
                            width="100%"
                            height="100%"
                            style={{ border: 0 }}
                            allowFullScreen=""
                            loading="lazy"
                            title="Gym Location"
                            className="filter grayscale contrast-125 opacity-80 hover:opacity-100 transition-opacity"
                        ></iframe>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default Contact;
