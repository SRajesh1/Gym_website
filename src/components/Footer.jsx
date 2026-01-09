const Footer = () => {
    return (
        <footer id="contact" className="py-12 bg-[#0a0a0a] border-t border-white/5 text-center">
            <div className="max-w-[1200px] mx-auto px-5">
                <div className="text-2xl font-bold uppercase mb-5">
                    Iron<span className="text-primary">Forge</span>
                </div>
                <p className="text-[#B0B0B0] mb-5">&copy; 2025 IronForge Gym. All rights reserved.</p>
                <div className="flex justify-center gap-5">
                    {['instagram', 'twitter', 'facebook-f'].map(icon => (
                        <a
                            key={icon}
                            href="#"
                            className="w-10 h-10 rounded-full bg-white/10 flex items-center justify-center transition-all duration-300 hover:bg-primary hover:text-background"
                        >
                            <i className={`fab fa-${icon}`}></i>
                        </a>
                    ))}
                </div>
            </div>
        </footer>
    );
};

export default Footer;
