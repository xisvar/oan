
import React, { useRef, useEffect } from "react";

const TrustSection = () => {
    const sectionRef = useRef<HTMLDivElement>(null);
    const contentRef = useRef<HTMLDivElement>(null);

    useEffect(() => {
        const observer = new IntersectionObserver(
            (entries) => {
                entries.forEach((entry) => {
                    if (entry.isIntersecting) {
                        entry.target.classList.add("opacity-100", "translate-y-0");
                        entry.target.classList.remove("opacity-0", "translate-y-10");
                        observer.unobserve(entry.target);
                    }
                });
            },
            { threshold: 0.2 }
        );

        if (contentRef.current) {
            observer.observe(contentRef.current);
        }

        return () => {
            if (contentRef.current) {
                observer.unobserve(contentRef.current);
            }
        };
    }, []);

    return (
        <section ref={sectionRef} className="w-full py-20 bg-gray-100" id="trust-by-design">
            <div className="container px-6 lg:px-8 mx-auto">
                <div ref={contentRef} className="flex flex-col items-center opacity-0 translate-y-10 transition-all duration-1000">
                    <div className="mb-12 text-center">
                        <div className="pulse-chip mb-4">
                            <span className="inline-flex items-center justify-center w-5 h-5 rounded-full bg-pulse-500 text-white mr-2">03</span>
                            <span>Trust by Design</span>
                        </div>
                        <h2 className="text-3xl sm:text-4xl md:text-5xl font-display font-bold mb-4">
                            Cryptographic Proofs Meet <span className="text-[#FC4D0A]">Open Standards</span>
                        </h2>
                        <p className="text-lg text-gray-600 max-w-3xl mx-auto">
                            The Open Admissions Network replaces opaque bureaucracy with verifiable code.
                            Every credential is signed, every match is transparent, and every record is immutable.
                        </p>
                    </div>

                    <div className="relative w-full max-w-4xl overflow-hidden rounded-3xl shadow-2xl">
                        <img
                            src="/background-section3.png"
                            alt="Abstract visualization of network trust"
                            className="w-full h-[400px] object-cover"
                        />
                        <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black/80 to-transparent p-8">
                            <div className="flex items-center justify-between">
                                <div>
                                    <h3 className="text-white text-xl font-semibold">Verifiable Infrastructure</h3>
                                    <p className="text-white/80">Built on open standards</p>
                                </div>
                                <a href="#details" className="px-6 py-3 bg-pulse-500 hover:bg-pulse-600 text-white font-medium rounded-full transition-colors duration-300">
                                    View Specs
                                </a>
                            </div>
                        </div>
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mt-12">
                        <div className="bg-white p-6 rounded-xl shadow-elegant hover:shadow-elegant-hover transition-all duration-300">
                            <div className="w-12 h-12 bg-pulse-100 rounded-full flex items-center justify-center mb-4">
                                <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                                    <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10" stroke="#FC4D0A" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                                </svg>
                            </div>
                            <h4 className="text-lg font-semibold mb-2">Cryptographic Security</h4>
                            <p className="text-gray-600">Digital signatures ensure that credentials cannot be forged or altered without detection.</p>
                        </div>

                        <div className="bg-white p-6 rounded-xl shadow-elegant hover:shadow-elegant-hover transition-all duration-300">
                            <div className="w-12 h-12 bg-pulse-100 rounded-full flex items-center justify-center mb-4">
                                <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                                    <path d="M21 16V8a2 2 0 0 0-1-1.73l-7-4a2 2 0 0 0-2 0l-7 4A2 2 0 0 0 3 8v8a2 2 0 0 0 1 1.73l7 4a2 2 0 0 0 2 0l7-4A2 2 0 0 0 21 16z" stroke="#FC4D0A" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                                </svg>
                            </div>
                            <h4 className="text-lg font-semibold mb-2">Open Algorithms</h4>
                            <p className="text-gray-600">Matching logic is open-source and audit-ready, eliminating bias and favoritism.</p>
                        </div>

                        <div className="bg-white p-6 rounded-xl shadow-elegant hover:shadow-elegant-hover transition-all duration-300">
                            <div className="w-12 h-12 bg-pulse-100 rounded-full flex items-center justify-center mb-4">
                                <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                                    <path d="M12 2a10 10 0 1 0 10 10 4 4 0 1 1-4-4" stroke="#FC4D0A" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                                    <path d="M12 8a4 4 0 1 0 4 4" stroke="#FC4D0A" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                                </svg>
                            </div>
                            <h4 className="text-lg font-semibold mb-2">Data Sovereignty</h4>
                            <p className="text-gray-600">Students own their data and control who has access to their academic records.</p>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default TrustSection;
