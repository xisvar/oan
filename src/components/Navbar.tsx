import React, { useState, useEffect } from "react";
import { cn } from "@/lib/utils";
import { Menu, X, ArrowRight, ChevronRight } from "lucide-react";

const Navbar = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };

    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
    document.body.style.overflow = !isMenuOpen ? 'hidden' : '';
  };

  const closeMenu = () => {
    setIsMenuOpen(false);
    document.body.style.overflow = '';
  };

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
    closeMenu();
  };

  const navLinks = [
    { name: "Home", href: "../"},
    { name: "Whitepaper", href: "/OAN.pdf" },
    { name: "About", href: "/learn-more" },
    { name: "Contact", href: "/#details" },
  ];

  return (
    <>
      <header
        className={cn(
          "fixed top-0 left-0 right-0 z-50 transition-all duration-300 ease-in-out px-4 sm:px-6 lg:px-8",
          isScrolled ? "py-4" : "py-6"
        )}
      >
        <div
          className={cn(
            "mx-auto max-w-7xl transition-all duration-300 rounded-full border",
            isScrolled
              ? "bg-white/80 dark:bg-black/80 backdrop-blur-md border-border shadow-lg px-6 py-3"
              : "bg-transparent border-transparent px-0 py-0"
          )}
        >
          <div className="flex items-center justify-between">
            {/* Logo */}
            <a
              href="#"
              className="flex items-center gap-2 group"
              onClick={(e) => {
                e.preventDefault();
                scrollToTop();
              }}
              aria-label="Open Admissions Network"
            >
              <img
                src="/logo.png"
                alt="OAN Logo"
                className="h-10"
              />
            </a>

            {/* Desktop Navigation */}
            <nav className="hidden md:flex items-center gap-1">
              {navLinks.map((link) => (
                <a
                  key={link.name}
                  href={link.href}
                  onClick={(e) => {
                    if (link.action) {
                      e.preventDefault();
                      link.action();
                    }
                  }}
                  className="px-4 py-2 text-sm font-medium text-muted-foreground hover:text-foreground transition-colors rounded-full hover:bg-secondary/50"
                >
                  {link.name}
                </a>
              ))}
            </nav>

            {/* CTA Button */}
            <div className="hidden md:flex items-center gap-4">
              <a
                href="#join"
                className="inline-flex items-center justify-center px-5 py-2 text-sm font-medium text-white transition-all bg-pulse-600 rounded-full hover:bg-pulse-700 shadow-md hover:shadow-lg hover:-translate-y-0.5"
              >
                Join Network
              </a>
            </div>

            {/* Mobile Menu Button */}
            <button
              className="md:hidden relative z-50 p-2 text-foreground focus:outline-none"
              onClick={toggleMenu}
              aria-label={isMenuOpen ? "Close menu" : "Open menu"}
            >
              <div className={cn(
                "w-6 h-6 flex flex-col justify-center gap-1.5 transition-all duration-300",
                isMenuOpen ? "rotate-180" : ""
              )}>
                <span className={cn(
                  "w-full h-0.5 bg-current rounded-full transition-all duration-300",
                  isMenuOpen ? "rotate-45 translate-y-2" : ""
                )} />
                <span className={cn(
                  "w-full h-0.5 bg-current rounded-full transition-all duration-300",
                  isMenuOpen ? "opacity-0" : ""
                )} />
                <span className={cn(
                  "w-full h-0.5 bg-current rounded-full transition-all duration-300",
                  isMenuOpen ? "-rotate-45 -translate-y-2" : ""
                )} />
              </div>
            </button>
          </div>
        </div>
      </header>

      {/* Mobile Menu Overlay */}
      <div
        className={cn(
          "fixed inset-0 z-40 bg-background/95 backdrop-blur-xl md:hidden transition-all duration-500 ease-in-out",
          isMenuOpen ? "opacity-100 translate-y-0" : "opacity-0 -translate-y-full pointer-events-none"
        )}
      >
        <div className="flex flex-col h-full pt-24 px-6 pb-8">
          <nav className="flex flex-col gap-2">
            {navLinks.map((link, index) => (
              <a
                key={link.name}
                href={link.href}
                onClick={(e) => {
                  if (link.action) {
                    e.preventDefault();
                    link.action();
                  } else {
                    closeMenu();
                  }
                }}
                className="group flex items-center justify-between p-4 text-2xl font-medium text-foreground border-b border-border/50 hover:bg-secondary/30 transition-colors"
                style={{
                  transitionDelay: isMenuOpen ? `${index * 50}ms` : '0ms',
                  opacity: isMenuOpen ? 1 : 0,
                  transform: isMenuOpen ? 'translateY(0)' : 'translateY(20px)',
                  transition: 'all 0.5s ease-out'
                }}
              >
                {link.name}
                <ChevronRight className="w-5 h-5 text-muted-foreground group-hover:text-pulse-500 transition-colors" />
              </a>
            ))}
          </nav>

          <div
            className="mt-auto"
            style={{
              transitionDelay: isMenuOpen ? '200ms' : '0ms',
              opacity: isMenuOpen ? 1 : 0,
              transform: isMenuOpen ? 'translateY(0)' : 'translateY(20px)',
              transition: 'all 0.5s ease-out'
            }}
          >
            <a
              href="#join"
              onClick={closeMenu}
              className="flex items-center justify-center w-full p-4 text-lg font-semibold text-white bg-pulse-600 rounded-xl shadow-lg active:scale-95 transition-transform"
            >
              Join the Network
              <ArrowRight className="ml-2 w-5 h-5" />
            </a>

            <div className="mt-8 text-center text-sm text-muted-foreground">
              <p>© 2024 Open Admissions Network</p>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Navbar;
