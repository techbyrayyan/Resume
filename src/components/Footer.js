"use client";
import Link from "next/link";

export default function Footer() {
    const scrollToSection = (id) => {
        const element = document.getElementById(id);
        if (element) {
            window.scrollTo({
                top: element.offsetTop - 80,
                behavior: "smooth"
            });
        }
    };

    const navLinks = ["Home", "About", "Process", "Skills", "Portfolio", "Services", "Contact"];

    return (
        <footer className="bg-[#1a1a2e] border-t border-white/10 pt-20 pb-10 px-6 lg:px-10">
            <div className="max-w-[1100px] mx-auto w-full">
                {/* Top Section */}
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 mb-16">

                    {/* Column 1: Logo & Info */}
                    <div className="flex flex-col gap-6">
                        <div className="flex items-center gap-3">
                            <div className="w-[42px] h-[42px] rounded-full bg-linear-to-br from-[#7c3aed] to-[#a855f7] flex items-center justify-center text-white font-bold text-lg">
                                RA
                            </div>
                            <span className="text-white text-xl font-semibold tracking-wide">
                                Rayyan Ansari
                            </span>
                        </div>
                        <p className="text-white/60 text-sm leading-relaxed">
                            Professional Full Stack Web Developer specializing in creating modern,
                            responsive, and premium digital experiences.
                        </p>
                    </div>

                    {/* Column 2: Quick Links */}
                    <div className="flex flex-col gap-6">
                        <h3 className="text-white font-bold text-lg">Quick Links</h3>
                        <ul className="flex flex-col gap-3">
                            {navLinks.slice(0, 4).map((link) => (
                                <li key={link}>
                                    <button
                                        onClick={() => scrollToSection(link)}
                                        className="text-white/60 hover:text-[#a855f7] text-sm transition-colors duration-300"
                                    >
                                        {link}
                                    </button>
                                </li>
                            ))}
                        </ul>
                    </div>

                    {/* Column 3: Services */}
                    <div className="flex flex-col gap-6">
                        <h3 className="text-white font-bold text-lg">Services</h3>
                        <ul className="flex flex-col gap-3">
                            <li><button onClick={() => scrollToSection("Services")} className="text-white/60 hover:text-[#a855f7] text-sm transition-colors duration-300 text-left">Frontend Dev</button></li>
                            <li><button onClick={() => scrollToSection("Services")} className="text-white/60 hover:text-[#a855f7] text-sm transition-colors duration-300 text-left">Full Stack Solutions</button></li>
                            <li><button onClick={() => scrollToSection("Services")} className="text-white/60 hover:text-[#a855f7] text-sm transition-colors duration-300 text-left">CMS & WordPress</button></li>
                            <li><button onClick={() => scrollToSection("Services")} className="text-white/60 hover:text-[#a855f7] text-sm transition-colors duration-300 text-left">UI/UX Design</button></li>
                        </ul>
                    </div>

                    {/* Column 4: Contact Info */}
                    <div className="flex flex-col gap-6">
                        <h3 className="text-white font-bold text-lg">Help & Support</h3>
                        <div className="flex flex-col gap-4">
                            <p className="text-white/60 text-sm">Have a task in mind?</p>
                            <button
                                onClick={() => scrollToSection("Contact")}
                                className="w-full py-3 rounded-xl bg-white/5 border border-white/10 text-white font-semibold text-sm hover:bg-white/10 transition-all duration-300"
                            >
                                Send a Message
                            </button>
                        </div>
                    </div>

                </div>

                {/* Bottom Section */}
                <div className="pt-10 border-t border-white/10 flex flex-col md:flex-row items-center justify-between gap-6 overflow-hidden">
                    <p className="text-white/40 text-xs md:text-sm text-center md:text-left">
                        &copy; {new Date().getFullYear()} <span className="text-white font-semibold">Rayyan Ansari</span>. All Rights Reserved.
                    </p>
                    <div className="flex items-center gap-8">
                        <Link href="#" className="text-white/40 hover:text-white text-xs transition-colors">Privacy Policy</Link>
                        <Link href="#" className="text-white/40 hover:text-white text-xs transition-colors">Terms of Service</Link>
                    </div>
                </div>
            </div>
        </footer>
    );
}
