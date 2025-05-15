
import { useState, useEffect } from "react";
import { Button } from "@/components/ui/button";

const Navbar = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 10) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  const scrollToContact = () => {
    document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' });
    setIsMobileMenuOpen(false);
  };

  return (
    <header
      className={`fixed top-0 w-full z-50 transition-all duration-300 ${
        isScrolled 
          ? "bg-white/90 shadow-sm backdrop-blur-md py-4"
          : "bg-transparent py-6"
      }`}
    >
      <div className="container flex justify-between items-center">
        <a href="#" className="flex items-center space-x-2 text-company-blue">
          <span className="font-bold text-xl">TwoBuddy<span className="text-company-teal">Solutions</span></span>
        </a>

        {/* Desktop Navigation */}
        <nav className="hidden md:flex space-x-8">
          <a href="#about" className="text-company-gray hover:text-company-blue font-medium transition-colors">
            About
          </a>
          <a href="#founders" className="text-company-gray hover:text-company-blue font-medium transition-colors">
            Founders
          </a>
          <a href="#solutions" className="text-company-gray hover:text-company-blue font-medium transition-colors">
            Solutions
          </a>
          <a href="#contact" className="text-company-gray hover:text-company-blue font-medium transition-colors">
            Contact
          </a>
        </nav>

        <div className="hidden md:block">
          <Button 
            variant="default" 
            className="bg-company-blue hover:bg-company-blue/90 text-white"
            onClick={scrollToContact}
          >
            Get Started
          </Button>
        </div>

        {/* Mobile Menu Button */}
        <button
          className="md:hidden text-company-blue"
          onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
        >
          {isMobileMenuOpen ? (
            <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
              <line x1="18" y1="6" x2="6" y2="18"></line>
              <line x1="6" y1="6" x2="18" y2="18"></line>
            </svg>
          ) : (
            <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
              <line x1="3" y1="12" x2="21" y2="12"></line>
              <line x1="3" y1="6" x2="21" y2="6"></line>
              <line x1="3" y1="18" x2="21" y2="18"></line>
            </svg>
          )}
        </button>
      </div>

      {/* Mobile Menu */}
      {isMobileMenuOpen && (
        <div className="md:hidden bg-white absolute w-full shadow-md animate-fade-in">
          <div className="container py-4 flex flex-col space-y-4">
            <a 
              href="#about" 
              className="text-company-gray hover:text-company-blue font-medium transition-colors p-2"
              onClick={() => setIsMobileMenuOpen(false)}
            >
              About
            </a>
            <a 
              href="#founders" 
              className="text-company-gray hover:text-company-blue font-medium transition-colors p-2"
              onClick={() => setIsMobileMenuOpen(false)}
            >
              Founders
            </a>
            <a 
              href="#solutions" 
              className="text-company-gray hover:text-company-blue font-medium transition-colors p-2"
              onClick={() => setIsMobileMenuOpen(false)}
            >
              Solutions
            </a>
            <a 
              href="#contact" 
              className="text-company-gray hover:text-company-blue font-medium transition-colors p-2"
              onClick={() => setIsMobileMenuOpen(false)}
            >
              Contact
            </a>
            <Button 
              variant="default" 
              className="bg-company-blue hover:bg-company-blue/90 text-white w-full"
              onClick={scrollToContact}
            >
              Get Started
            </Button>
          </div>
        </div>
      )}
    </header>
  );
};

export default Navbar;
