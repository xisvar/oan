
import React, { useEffect, useRef, useState } from "react";
import { cn } from "@/lib/utils";
import { ArrowRight } from "lucide-react";
import LottieAnimation from "./LottieAnimation";

const Hero = () => {
  const containerRef = useRef<HTMLDivElement>(null);
  const imageRef = useRef<HTMLImageElement>(null);
  const [lottieData, setLottieData] = useState<any>(null);
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    const checkMobile = () => {
      setIsMobile(window.innerWidth < 768);
    };

    checkMobile();
    window.addEventListener('resize', checkMobile);
    return () => window.removeEventListener('resize', checkMobile);
  }, []);

  useEffect(() => {
    fetch('/loop-header.lottie')
      .then(response => response.json())
      .then(data => setLottieData(data))
      .catch(error => console.error("Error loading Lottie animation:", error));
  }, []);

  useEffect(() => {
    if (isMobile) return;

    const handleMouseMove = (e: MouseEvent) => {
      if (!containerRef.current || !imageRef.current) return;

      const { left, top, width, height } = containerRef.current.getBoundingClientRect();
      const x = (e.clientX - left) / width - 0.5;
      const y = (e.clientY - top) / height - 0.5;

      imageRef.current.style.transform = `perspective(1000px) rotateY(${x * 5}deg) rotateX(${-y * 5}deg) scale3d(1.02, 1.02, 1.02)`;
    };

    const handleMouseLeave = () => {
      if (!imageRef.current) return;
      imageRef.current.style.transform = `perspective(1000px) rotateY(0deg) rotateX(0deg) scale3d(1, 1, 1)`;
    };

    const container = containerRef.current;
    if (container) {
      container.addEventListener("mousemove", handleMouseMove);
      container.addEventListener("mouseleave", handleMouseLeave);
    }

    return () => {
      if (container) {
        container.removeEventListener("mousemove", handleMouseMove);
        container.removeEventListener("mouseleave", handleMouseLeave);
      }
    };
  }, [isMobile]);

  return (
    <section
      className="relative overflow-hidden bg-background pt-24 pb-16 lg:pt-32 lg:pb-24"
      id="hero"
      ref={containerRef}
    >
      {/* Background Elements */}
      <div className="absolute top-0 left-0 w-full h-full overflow-hidden -z-10">
        <div className="absolute -top-[20%] -right-[10%] w-[70%] h-[70%] bg-gradient-to-br from-pulse-500/20 to-purple-500/20 rounded-full blur-3xl opacity-60 animate-pulse-slow" />
        <div className="absolute top-[20%] -left-[10%] w-[50%] h-[50%] bg-gradient-to-tr from-blue-500/20 to-cyan-500/20 rounded-full blur-3xl opacity-50 animate-pulse-slow" style={{ animationDelay: '1s' }} />
        <div className="absolute bottom-0 right-0 w-full h-px bg-gradient-to-r from-transparent via-border to-transparent" />
      </div>

      <div className="container px-4 sm:px-6 lg:px-8 mx-auto">
        <div className="flex flex-col lg:flex-row gap-12 lg:gap-20 items-center">

          {/* Text Content */}
          <div className="w-full lg:w-1/2 flex flex-col items-start text-left z-10">
            <div
              className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-white/80 dark:bg-white/10 backdrop-blur-md border border-pulse-200 dark:border-white/10 shadow-sm mb-8 opacity-0 animate-fade-in"
              style={{ animationDelay: "0.1s" }}
            >
              <span className="flex h-2 w-2 rounded-full bg-pulse-500 animate-pulse" />
              <span className="text-sm font-medium text-pulse-700 dark:text-pulse-300">Reimagining Admissions</span>
            </div>

            <h1
              className="text-5xl sm:text-6xl lg:text-7xl font-bold tracking-tight leading-[1.1] mb-6 opacity-0 animate-fade-in"
              style={{ animationDelay: "0.2s" }}
            >
              Open Admissions <br />
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-pulse-600 to-purple-600 dark:from-pulse-400 dark:to-purple-400">
                Network
              </span>
            </h1>

            <p
              className="text-lg sm:text-xl text-muted-foreground leading-relaxed max-w-xl mb-8 opacity-0 animate-fade-in"
              style={{ animationDelay: "0.3s" }}
            >
              A decentralized platform for verifiable credentials and transparent admissions. Empowering institutions and students with trust and efficiency.
            </p>

            <div
              className="flex flex-col sm:flex-row gap-4 w-full sm:w-auto opacity-0 animate-fade-in"
              style={{ animationDelay: "0.4s" }}
            >
              <a
                href="#details"
                className="group relative inline-flex items-center justify-center px-8 py-4 text-base font-semibold text-white transition-all duration-200 bg-pulse-600 rounded-full hover:bg-pulse-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-pulse-600 shadow-lg hover:shadow-xl hover:-translate-y-0.5"
              >
                Join the Network
                <ArrowRight className="ml-2 w-5 h-5 transition-transform group-hover:translate-x-1" />
                <div className="absolute inset-0 rounded-full ring-2 ring-white/20 group-hover:ring-white/40 transition-all" />
              </a>

              <a
                href="/learn-more"
                className="inline-flex items-center justify-center px-8 py-4 text-base font-medium text-foreground transition-all duration-200 bg-white/50 dark:bg-white/5 border border-border rounded-full hover:bg-white/80 dark:hover:bg-white/10 backdrop-blur-sm hover:shadow-md"
              >
                Learn more
              </a>
            </div>

            <div className="mt-12 flex items-center gap-4 text-sm text-muted-foreground opacity-0 animate-fade-in" style={{ animationDelay: "0.5s" }}>
              <div className="flex -space-x-2">
                {[1, 2, 3, 4].map((i) => (
                  <div key={i} className="w-8 h-8 rounded-full border-2 border-background bg-gray-200 dark:bg-gray-800" />
                ))}
              </div>
              <p>Trusted by 50+ institutions</p>
            </div>
          </div>

          {/* Visual Content */}
          <div className="w-full lg:w-1/2 relative perspective-1000">
            <div className="relative z-10 transition-transform duration-500 ease-out preserve-3d" ref={imageRef}>
              {lottieData ? (
                <div className="relative rounded-3xl overflow-hidden shadow-2xl bg-white/5 backdrop-blur-sm border border-white/10 animate-fade-in" style={{ animationDelay: "0.6s" }}>
                  <LottieAnimation
                    animationPath={lottieData}
                    className="w-full h-auto"
                    loop={true}
                    autoplay={true}
                  />
                </div>
              ) : (
                <div className="relative rounded-3xl overflow-hidden shadow-2xl group">
                  <div className="absolute inset-0 bg-gradient-to-tr from-pulse-500/20 to-purple-500/20 mix-blend-overlay z-10 transition-opacity duration-500 group-hover:opacity-0" />
                  <img
                    src="/stdnts.jpg"
                    alt="Open Admissions Network Platform"
                    className="w-full h-auto object-cover rounded-3xl transform transition-transform duration-700 hover:scale-105"
                  />
                  {/* Floating Elements */}
                  <div className="absolute -bottom-6 -left-6 p-4 bg-white dark:bg-gray-900 rounded-2xl shadow-xl border border-border z-20 animate-float">
                    <div className="flex items-center gap-3">
                      <div className="w-10 h-10 rounded-full bg-green-100 dark:bg-green-900/30 flex items-center justify-center text-green-600 dark:text-green-400">
                        <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                        </svg>
                      </div>
                      <div>
                        <p className="text-xs text-muted-foreground">Status</p>
                        <p className="text-sm font-bold">Verified</p>
                      </div>
                    </div>
                  </div>
                </div>
              )}
            </div>

            {/* Decorative Blobs behind image */}
            <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[120%] h-[120%] bg-gradient-to-tr from-pulse-500/10 to-purple-500/10 rounded-full blur-3xl -z-10" />
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
