"use client";
import Image from "next/image";
import Link from "next/link";
import { useState } from "react";

const portfolioProjects = [
  {
    title: "Car-Animation",
    description: "Car Animation is a fun and interactive project showcasing smooth car motion with modern, responsive design.",
    stack: "HTML & CSS",
    img: "/img/animation.png"
  },

  {
    title: "Docfind",
    description: "DocFind ek smart healthcare platform hai jo users ko unki symptoms ke mutabiq best doctors aur treatment suggestions provide karta hai, taake appointment booking aur medical process fast aur easy ho jaye.",
    stack: "TailwindCSS,Next.JS,Node.JS",
    img: "/img/docfind.png"
  },

  {
    title: "Invoice-Builder",
    description: "Ultrant is a modern web project that provides a clean, user-friendly interface & responsive experience, built using the latest technologies to ensure high performance and smooth usability.",
    stack: "TailwindCSS, JavaScript",
    img: "/img/invoice.png"
  },

  {
    title: "Movie-App",
    description: "Movie App is a sleek and user-friendly web project for browsing and discovering movies with a responsive design.",
    stack: "HTML & CSS , JavaScript",
    img: "/img/movie.png"
  },
  {
    title: "Motel-App",
    description: "Motel App is a simple and responsive web project for searching and booking motels easily.",
    stack: "TailwindCSS , JavaScript",
    img: "/img/motel.png"
  },
  {
    title: "Clone AI",
    description: "ChatGPT Clone ek AI chat app hai jo users ko real-time mein smart aur natural responses deta hai.",
    stack: "TailwindCSS, Next.JS, Node.JS",
    img: "/img/clone.png"
  }
];

export default function Home() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    subject: "",
    message: ""
  });

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!formData.name || !formData.email || !formData.message) {
      alert("Please fill in all required fields.");
      return;
    }

    // Save to LocalStorage
    const existingMessages = JSON.parse(localStorage.getItem("contact_messages") || "[]");
    const newMessage = { ...formData, id: Date.now(), date: new Date().toISOString() };
    localStorage.setItem("contact_messages", JSON.stringify([...existingMessages, newMessage]));

    alert("Message sent successfully! Your data has been stored locally.");
    setFormData({ name: "", email: "", subject: "", message: "" });
  };

  const scrollToSection = (id) => {
    const element = document.getElementById(id);
    if (element) {
      window.scrollTo({
        top: element.offsetTop - 80,
        behavior: "smooth"
      });
    }
  };

  return (
    <main className="min-h-screen bg-[#1a1a2e]  relative overflow-hidden">
      {/* Background gradient accents */}
      <div className="absolute top-0 left-0 w-[400px] h-[400px] bg-gradient-to-br from-[#a855f7]/20 to-transparent rounded-full blur-3xl"></div>
      <div className="absolute bottom-0 right-0 w-[400px] h-[400px] bg-gradient-to-tl from-[#06b6d4]/20 to-transparent rounded-full blur-3xl"></div>

      {/* Hero Section */}
      <section id="Home" className="flex items-center justify-center pt-24 pb-12 lg:min-h-[85vh] px-6 lg:px-10">
        <div className="max-w-[1100px] mx-auto w-full flex flex-col lg:flex-row items-center justify-between gap-12 lg:gap-16">

          {/* Left Side - Text */}
          <div className="w-full lg:max-w-[500px] text-center lg:text-left">
            <h1 className="text-4xl md:text-5xl lg:text-5xl font-bold text-white leading-tight mb-5">
              Hello, I'm <br />
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#a855f7] to-[#06b6d4]">
                Rayyan Ansari
              </span>
            </h1>
            <p className="text-white text-sm md:text-base leading-relaxed mb-8">
              I am a Full Stack Web Developer with experience in HTML, CSS, Advanced CSS (Flexbox, Grid), Bootstrap, Tailwind CSS, React.js, and Next.js. I also work with Node.js, Express.js, and MongoDB for backend development, and have experience with WordPress. I hold an AWS Solution Architect certification and I build high-quality, modern, and well-designed websites.
            </p>
            <button 
              onClick={() => scrollToSection("Contact")}
              className="px-7 py-3 rounded-full bg-gradient-to-r from-[#7c3aed] to-[#a855f7] text-white font-semibold text-base cursor-pointer transition-all duration-300 hover:scale-105 hover:shadow-[0_4px_20px_rgba(124,58,237,0.5)]"
            >
              Say Hello!
            </button>

            {/* Stats */}
            <div className="flex flex-wrap justify-center lg:justify-start mt-10 border border-white/20 rounded-xl overflow-hidden bg-white/5 backdrop-blur-sm">
              <div className="px-6 md:px-8 py-4 text-center border-r border-white/10 flex-1">
                <h3 className="text-xl md:text-2xl font-bold text-white">15 Y.</h3>
                <p className="text-white/60 text-[10px] md:text-xs mt-1 uppercase tracking-wider">Experience</p>
              </div>
              <div className="px-6 md:px-8 py-4 text-center border-r border-white/10 flex-1">
                <h3 className="text-xl md:text-2xl font-bold text-white">250+</h3>
                <p className="text-white/60 text-[10px] md:text-xs mt-1 uppercase tracking-wider">Projects</p>
              </div>
              <div className="px-6 md:px-8 py-4 text-center flex-1">
                <h3 className="text-xl md:text-2xl font-bold text-white">58</h3>
                <p className="text-white/60 text-[10px] md:text-xs mt-1 uppercase tracking-wider">Clients</p>
              </div>
            </div>
          </div>

          {/* Right Side - Image */}
          <div className="relative order-first lg:order-last">
            <div className="w-[260px] h-[280px] md:w-[320px] md:h-[340px] rounded-2xl overflow-hidden border-2 border-white/20 shadow-[0_0_40px_rgba(168,85,247,0.2)]">
              <Image
                src="/img/rayyan.jpg"
                alt="Rayyan Ansari"
                width={380}
                height={420}
                className="w-full h-full object-cover"
                priority
              />
            </div>
            {/* Decorative element */}
            <div className="absolute -bottom-4 -right-4 w-24 h-24 bg-[#7c3aed]/30 rounded-full blur-2xl -z-10"></div>
          </div>

        </div>
      </section>

      {/* About Section */}
      <section id="About" className="relative py-24 px-6 lg:px-10 overflow-hidden bg-[#1a1a2e]">

        <div className="max-w-[1100px] w-full mx-auto bg-white/90 backdrop-blur-md rounded-3xl shadow-[0_8px_40px_rgba(0,0,0,0.15)] p-8 md:p-12 flex flex-col lg:flex-row items-center gap-10 lg:gap-14">

          {/* Left Side - Image */}
          <div className="flex-shrink-0 w-full lg:w-auto flex justify-center">
            <div className="w-[240px] h-[280px] md:w-[260px] md:h-[300px] rounded-2xl overflow-hidden shadow-xl">
              <Image
                src="/img/rayyan.jpg"
                alt="Rayyan Ansari"
                width={260}
                height={300}
                className="w-full h-full object-cover"
              />
            </div>
          </div>

          {/* Right Side - Content */}
          <div className="flex-1 text-center lg:text-left">
            <h2 className="text-2xl md:text-3xl font-bold text-[#1a1a2e] leading-tight mb-5">
              I am Professional User<br className="hidden md:block" /> Experience Designer
            </h2>
            <p className="text-gray-600 text-sm leading-relaxed mb-4">
              I design and develop services for customers specializing creating stylish, modern websites, web services and online stores. My passion is to design digital user experiences.
            </p>
            <div className="flex flex-wrap justify-center lg:justify-start gap-4 mt-6">
              <button 
                onClick={() => scrollToSection("Portfolio")}
                className="px-6 py-3 rounded-xl bg-[#7c3aed] text-white font-semibold text-sm transition-all hover:bg-[#6d28d9] hover:shadow-lg"
              >
                My Projects
              </button>
              <button className="px-6 py-3 rounded-xl bg-white border border-gray-200 text-gray-700 font-semibold text-sm transition-all hover:border-[#7c3aed] hover:text-[#7c3aed] flex items-center gap-2">
                <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4" /><polyline points="7 10 12 15 17 10" /><line x1="12" y1="15" x2="12" y2="3" /></svg>
                Download CV
              </button>
            </div>
          </div>

        </div>
      </section>

      {/* Work Process Section */}
      <section id="Process" className="relative py-24 md:py-32 px-6 lg:px-10 bg-[#1a1a2e]">
        <div className="max-w-[1100px] w-full mx-auto flex flex-col lg:flex-row items-center gap-16 lg:gap-20">

          {/* Left Side - Text */}
          <div className="w-full lg:w-5/12 text-center lg:text-left">
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">Work Process</h2>
            <p className="text-white/80 text-sm md:text-md leading-relaxed mb-6">
              Driven by design and powered by code, I create digital interfaces that feel intuitive and perform seamlessly. Every layout, animation, and component is crafted with intention merging usability with visual clarity.
            </p>
            <p className="text-white/80 text-sm md:text-md leading-relaxed">
              I blend clean design with efficient code to build engaging, user-friendly web experiences that stand out.
            </p>
          </div>

          {/* Right Side - Grid Cards */}
          <div className="w-full lg:w-7/12 grid grid-cols-1 sm:grid-cols-2 gap-6 relative">
            {[
              { id: "1. Research", icon: "path_to_research", desc: "Design meets function in every pixel, blending clarity with intuitive motion." },
              { id: "2. Analyze", icon: "path_to_analyze", desc: "Crafting clean, thoughtful interfaces where form flows seamlessly into function." },
              { id: "3. Design", icon: "path_to_design", desc: "I design seamless digital experiences with precision, purpose, and elegance." },
              { id: "4. Launch", icon: "path_to_launch", desc: "I craft digital products where thoughtful design meets performance-driven code." }
            ].map((item, idx) => (
              <div key={idx} className={`bg-white p-8 rounded-2xl shadow-xl transition-all duration-300 hover:-translate-y-2 ${idx % 2 !== 0 ? "lg:translate-y-12" : ""}`}>
                <div className="w-12 h-12 rounded-xl bg-[#f9ebfe] flex items-center justify-center mb-5">
                  <svg xmlns="http://www.w3.org/2000/svg" width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="#a855f7" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                    {idx === 0 && <path d="M14.5 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V7.5L14.5 2z" />}
                    {idx === 1 && <polyline points="22 12 18 12 15 21 9 3 6 12 2 12" />}
                    {idx === 2 && <path d="M12 20h9M16.5 3.5a2.121 2.121 0 0 1 3 3L7 19l-4 1 1-4L16.5 3.5z" />}
                    {idx === 3 && <rect x="2" y="3" width="20" height="14" rx="2" ry="2" />}
                  </svg>
                </div>
                <h3 className="text-lg font-bold text-[#1a1a2e] mb-3">{item.id}</h3>
                <p className="text-gray-500 text-xs leading-relaxed">{item.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Skills Section */}
      <section id="Skills" className="relative py-24 md:py-32 px-6 lg:px-10 bg-[#1a1a2e]">
        <div className="max-w-[1100px] w-full mx-auto">
          {/* Header */}
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">My Skills</h2>
            <p className="text-white/70 text-sm md:text-md max-w-[600px] mx-auto leading-relaxed">
              I have expertise in modern web technologies, from frontend design systems to full-stack framework development.
            </p>
          </div>

          {/* Skills Slider */}
          <div className="overflow-hidden relative pb-10">
            <div className="flex animate-marquee gap-6 py-4">
              {[
                { name: "HTML & CSS", level: 95, week: "28%", month: "60%" },
                { name: "Flex", level: 92, week: "35%", month: "72%" },
                { name: "Grid", level: 90, week: "42%", month: "68%" },
                { name: "Bootstrap", level: 85, week: "20%", month: "45%" },
                { name: "TAILWIND CSS", level: 86, week: "55%", month: "82%" },
                { name: "JavaScript", level: 88, week: "48%", month: "75%" },
                { name: "React", level: 85, week: "30%", month: "58%" },
                { name: "Next.js", level: 82, week: "25%", month: "50%" },
                { name: "WordPress", level: 90, week: "15%", month: "92%" },
                { name: "MONGO DB", level: 80, week: "18%", month: "40%" },
                { name: "EXPRESS", level: 75, week: "22%", month: "35%" },
                { name: "NODE.JS", level: 87, week: "40%", month: "65%" },
              ].map((skill, index) => (
                <div key={index} className="flex-shrink-0 w-[240px] md:w-[280px] bg-white rounded-2xl p-8 md:p-10 flex flex-col items-center shadow-lg">
                  <h3 className="text-lg md:text-xl font-bold text-[#1a1a2e] mb-6 uppercase tracking-wide">{skill.name}</h3>
                  <div className="relative w-28 h-28 md:w-32 md:h-32 flex items-center justify-center mb-6">
                    <svg className="w-full h-full transform -rotate-90">
                      <circle cx="50%" cy="50%" r="45%" stroke="#f3f4f6" strokeWidth="8" fill="transparent" />
                      <circle cx="50%" cy="50%" r="45%" stroke="#1a1a2e" strokeWidth="8" fill="transparent" 
                        strokeDasharray="283" strokeDashoffset={283 - (283 * skill.level) / 100}
                        strokeLinecap="round" className="transition-all duration-1000" />
                    </svg>
                    <span className="absolute text-xl md:text-2xl font-bold text-[#1a1a2e]">{skill.level}%</span>
                  </div>
                  <div className="w-full grid grid-cols-2 gap-2 border-t border-gray-100 pt-6">
                    <div className="text-center border-r border-gray-100">
                      <span className="block text-sm font-bold text-[#1a1a2e]">{skill.week}</span>
                      <span className="text-[10px] text-gray-400 uppercase">Week</span>
                    </div>
                    <div className="text-center">
                      <span className="block text-sm font-bold text-[#1a1a2e]">{skill.month}</span>
                      <span className="text-[10px] text-gray-400 uppercase">Month</span>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Portfolio Section */}
      <section id="Portfolio" className="relative py-32 px-10 bg-[#1a1a2e]">
        <div className="max-w-[1100px] w-full mx-auto">

          {/* Header */}
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-white mb-4">My Portfolio</h2>
            <p className="text-gray-400 text-sm max-w-[600px] mx-auto leading-relaxed">
              Here is a selection of my recent projects. Each one showcases my expertise in building responsive, user-friendly, and high-performance applications.
            </p>
          </div>

          {/* Projects Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {portfolioProjects.map((project, index) => (
              <div key={index} className="bg-white rounded-2xl overflow-hidden shadow-[0_10px_30px_rgba(0,0,0,0.05)] transition-transform duration-300 hover:-translate-y-2 flex flex-col">

                {/* Project Image */}
                <div className="w-full h-[220px] relative bg-gray-100">
                  <Image
                    src={project.img}
                    alt={project.title}
                    fill
                    className="object-cover"
                  />
                </div>

                {/* Project Details */}
                <div className="p-8 flex-1 flex flex-col items-start text-left">
                  {/* Tech Stack */}
                  <p className="text-[#a855f7] text-xs font-bold tracking-wider uppercase mb-2">
                    {project.stack}
                  </p>

                  {/* Name */}
                  <h3 className="text-xl font-bold text-[#1a1a2e] mb-3">
                    {project.title}
                  </h3>

                  {/* Description */}
                  <p className="text-[#666] text-sm leading-relaxed mb-8 flex-1">
                    {project.description}
                  </p>

                  {/* Live Demo Button */}
                  <button className="px-6 py-2.5 rounded-md bg-gradient-to-r from-[#7c3aed] to-[#a855f7] text-white font-semibold text-sm cursor-pointer transition-all duration-300 hover:shadow-[0_4px_15px_rgba(124,58,237,0.4)] flex items-center gap-2 mt-auto">
                    Live Demo
                    <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M18 13v6a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h6" /><polyline points="15 3 21 3 21 9" /><line x1="10" y1="14" x2="21" y2="3" /></svg>
                  </button>
                </div>

              </div>
            ))}
          </div>

        </div>
      </section>

      {/* Services Section */}
      <section id="Services" className="relative py-32 px-10 bg-[#1a1a2e]">
        <div className="max-w-[1100px] w-full mx-auto">
          {/* Header */}
          <div className="text-center mb-20">
            <h2 className="text-4xl font-bold text-white mb-4">What I Offer</h2>
            <div className="w-20 h-1 bg-gradient-to-r from-[#7c3aed] to-[#a855f7] mx-auto mb-6"></div>
            <p className="text-gray-400 text-md max-w-[600px] mx-auto leading-relaxed">
              Transforming your ideas into high-performance digital realities using the latest industry-standard technologies.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {/* Service 1 - Frontend */}
            <div className="group bg-white p-10 rounded-[32px] border border-white/10 transition-all duration-500 hover:bg-white/10 hover:border-[#f43f5e]/50 hover:-translate-y-3 flex flex-col items-center text-center">
              <div className="w-16 h-16 rounded-2xl bg-gradient-to-br from-[#f43f5e]/20 to-[#fb7185]/20 flex items-center justify-center mb-8 group-hover:scale-110 transition-transform duration-500">
                <svg xmlns="http://www.w3.org/2000/svg" width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="#f43f5e" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><polyline points="16 18 22 12 16 6"/><polyline points="8 6 2 12 8 18"/></svg>
              </div>
              <h3 className="text-2xl font-bold text-black mb-4">Frontend Development</h3>
              <p className="text-black text-sm leading-relaxed mb-6">
                Creating stunning, responsive interfaces using **React.js**, **Tailwind CSS**, and **Next.js**. I focus on performance, accessibility and smooth user experiences.
              </p>
              <div className="flex flex-wrap justify-center gap-2 mt-auto">
                {["React", "Next.JS", "Tailwind", "Bootstrap"].map(tag => (
                  <span key={tag} className="text-[10px] font-bold text-[#f43f5e] bg-[#f43f5e]/10 px-3 py-1 rounded-full uppercase tracking-wider">{tag}</span>
                ))}
              </div>
            </div>

            {/* Service 2 - Full Stack */}
            <div className="group bg-white p-10 rounded-[32px] border border-white/10 transition-all duration-500 hover:bg-white/10 hover:border-[#06b6d4]/50 hover:-translate-y-3 flex flex-col items-center text-center">
              <div className="w-16 h-16 rounded-2xl bg-gradient-to-br from-[#06b6d4]/20 to-[#3b82f6]/20 flex items-center justify-center mb-8 group-hover:scale-110 transition-transform duration-500">
                <svg xmlns="http://www.w3.org/2000/svg" width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="#06b6d4" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><rect x="2" y="3" width="20" height="14" rx="2" ry="2"/><line x1="8" y1="21" x2="16" y2="21"/><line x1="12" y1="17" x2="12" y2="21"/></svg>
              </div>
              <h3 className="text-2xl font-bold text-black mb-4">Full-Stack Solutions</h3>
              <p className="text-black text-sm leading-relaxed mb-6">
                End-to-end development with **Node.js**, **Express**, and **MongoDB**. Building robust backend architectures and seamless database integrations.
              </p>
              <div className="flex flex-wrap justify-center gap-2 mt-auto">
                {["Node.JS", "Express", "MongoDB", "REST API"].map(tag => (
                  <span key={tag} className="text-[10px] font-bold text-[#06b6d4] bg-[#06b6d4]/10 px-3 py-1 rounded-full uppercase tracking-wider">{tag}</span>
                ))}
              </div>
            </div>

            {/* Service 3 - CMS */}
            <div className="group bg-white p-10 rounded-[32px] border border-white/10 transition-all duration-500 hover:bg-white/10 hover:border-[#facc15]/50 hover:-translate-y-3 flex flex-col items-center text-center">
              <div className="w-16 h-16 rounded-2xl bg-gradient-to-br from-[#facc15]/20 to-[#eab308]/20 flex items-center justify-center mb-8 group-hover:scale-110 transition-transform duration-500">
                <svg xmlns="http://www.w3.org/2000/svg" width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="#facc15" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M12 2L2 7l10 5 10-5-10-5z"/><path d="M2 17l10 5 10-5"/><path d="M2 12l10 5 10-5"/></svg>
              </div>
              <h3 className="text-2xl font-bold text-black mb-4">CMS & WordPress</h3>
              <p className="text-black text-sm leading-relaxed mb-6">
                Custom **WordPress** development and theme customization. I build powerful, easy-to-manage websites for blogs and business portfolios.
              </p>
              <div className="flex flex-wrap justify-center gap-2 mt-auto">
                {["WordPress", "Customization", "PHP", "SEO"].map(tag => (
                  <span key={tag} className="text-[10px] font-bold text-[#facc15] bg-[#facc15]/10 px-3 py-1 rounded-full uppercase tracking-wider">{tag}</span>
                ))}
              </div>
            </div>
          </div>

        </div>
      </section>

      {/* Contact Section */}
      <section id="Contact" className="relative py-24 md:py-32 px-6 lg:px-10 bg-[#1a1a2e]">
        <div className="max-w-[1100px] w-full mx-auto">
          <div className="text-center mb-16 md:mb-20">
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">Get In Touch</h2>
            <div className="w-20 h-1 bg-gradient-to-r from-[#7c3aed] to-[#a855f7] mx-auto mb-6"></div>
            <p className="text-white/60 text-sm md:text-md max-w-[600px] mx-auto leading-relaxed px-4">
              Have a project in mind or just want to say hi? Feel free to reach out. I'm always open to discussing new projects and creative ideas.
            </p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-20">
            {/* Left Side - Info */}
            <div className="space-y-8 flex flex-col items-center lg:items-start text-center lg:text-left">
              <h3 className="text-2xl font-bold text-white">Contact Information</h3>
              {[
                { icon: "phone", label: "Phone", val: "+92 3264734251", color: "#7c3aed" },
                { icon: "email", label: "Email", val: "techbyrayyan@gmail.com", color: "#a855f7" },
                { icon: "home", label: "Location", val: "Lahore, Pakistan", color: "#a855f7" }
              ].map((info, i) => (
                <div key={i} className="flex flex-col md:flex-row items-center gap-4 group">
                  <div className={`w-14 h-14 rounded-2xl bg-white/5 border border-white/10 flex items-center justify-center group-hover:bg-[${info.color}] transition-all duration-300`}>
                    <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="white" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                      {info.icon === "phone" && <path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z" />}
                      {info.icon === "email" && <><path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z"/><polyline points="22,6 12,13 2,6"/></>}
                      {info.icon === "home" && <><path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0 1 18 0z"/><circle cx="12" cy="10" r="3"/></>}
                    </svg>
                  </div>
                  <div>
                    <p className="text-white/40 text-[10px] uppercase tracking-widest">{info.label}</p>
                    <p className="text-white font-medium">{info.val}</p>
                  </div>
                </div>
              ))}
            </div>

            {/* Right Side - Form */}
            <div className="bg-white/5 p-6 md:p-10 rounded-3xl border border-white/10 backdrop-blur-sm">
              <form onSubmit={handleSubmit} className="space-y-6">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <input type="text" name="name" value={formData.name || ""} onChange={handleInputChange} placeholder="Your Name" className="w-full bg-white/5 border border-white/10 rounded-xl px-5 py-3 text-white focus:outline-none focus:border-[#7c3aed] transition-all" required />
                  <input type="email" name="email" value={formData.email || ""} onChange={handleInputChange} placeholder="Your Email" className="w-full bg-white/5 border border-white/10 rounded-xl px-5 py-3 text-white focus:outline-none focus:border-[#7c3aed] transition-all" required />
                </div>
                <input type="text" name="subject" value={formData.subject || ""} onChange={handleInputChange} placeholder="Subject" className="w-full bg-white/5 border border-white/10 rounded-xl px-5 py-3 text-white focus:outline-none focus:border-[#7c3aed] transition-all" />
                <textarea rows="4" name="message" value={formData.message || ""} onChange={handleInputChange} placeholder="Message" className="w-full bg-white/5 border border-white/10 rounded-xl px-5 py-3 text-white focus:outline-none focus:border-[#7c3aed] transition-all resize-none" required></textarea>
                <button type="submit" className="w-full py-4 rounded-xl bg-gradient-to-r from-[#7c3aed] to-[#a855f7] text-white font-bold transition-all hover:shadow-[0_10px_30px_rgba(124,58,237,0.3)]">
                  Send Message
                </button>
              </form>
            </div>
          </div>
        </div>
      </section>

    </main>
  );
}
