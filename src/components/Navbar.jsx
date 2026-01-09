import { useState, useEffect } from 'react';

const Navbar = () => {
    const [isScrolled, setIsScrolled] = useState(false);
    const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

    useEffect(() => {
        const handleScroll = () => {
            if (window.scrollY > 50) {
                setIsScrolled(true);
            } else {
                setIsScrolled(false);
            }
        };

        window.addEventListener('scroll', handleScroll);
        return () => window.removeEventListener('scroll', handleScroll);
    }, []);

    const toggleMenu = () => {
        setIsMobileMenuOpen(!isMobileMenuOpen);
    };

    const closeMenu = () => {
        setIsMobileMenuOpen(false);
    };

    return (
        <nav className={`fixed top-0 left-0 w-full z-[1000] border-b border-white/5 transition-all duration-300 ${isScrolled ? 'bg-[#121212]/95 py-4' : 'bg-[#121212]/95 py-5 backdrop-blur-md'}`}>
            <div className="max-w-[1200px] mx-auto px-5 flex justify-between items-center">
                <div className="text-2xl md:text-3xl font-bold uppercase tracking-widest text-text">
                    Iron<span className="text-primary">Forge</span>
                </div>

                {/* Desktop and Mobile Menu */}
                {/* Mobile: fixed full screen slide from right */}
                {/* Desktop: static flex row */}
                <ul className={`
                    fixed top-0 right-0 h-screen w-full max-w-[300px] bg-[#0a0a0a] flex flex-col justify-center items-center gap-8 shadow-2xl z-[1000] transition-transform duration-300 ease-in-out
                    md:static md:h-auto md:w-auto md:max-w-none md:bg-transparent md:flex-row md:justify-end md:gap-8 md:shadow-none md:p-0
                    ${isMobileMenuOpen ? 'translate-x-0' : 'translate-x-full md:translate-x-0'}
                `}>
                    {['Home', 'About', 'Workouts', 'Exercises', 'Roadmap', 'BMI'].map((item) => (
                        <li key={item} className={`transition-all duration-300 ${isMobileMenuOpen ? 'opacity-100 translate-x-0' : 'md:opacity-100 md:translate-x-0 opacity-0 translate-x-5'}`}>
                            <a
                                href={`#${item.toLowerCase()}`}
                                className="text-text font-medium relative hover:text-primary transition-colors text-2xl md:text-base md:font-medium after:content-[''] after:absolute after:w-0 after:h-[2px] after:bottom-[-5px] after:left-0 after:bg-primary after:transition-all hover:after:w-full"
                                onClick={closeMenu}
                            >
                                {item}
                            </a>
                        </li>
                    ))}
                </ul>

                <div className={`md:hidden text-2xl cursor-pointer text-text z-[1001] relative`} onClick={toggleMenu}>
                    <i className={`fas ${isMobileMenuOpen ? 'fa-times' : 'fa-bars'}`}></i>
                </div>
            </div>
        </nav>
    );
};

export default Navbar;
