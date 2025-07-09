
import React, { useState, useEffect } from 'react';
import { Menu, X, ShoppingCart, User } from 'lucide-react';
import { Button } from '@/components/ui/button';

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
      setIsMenuOpen(false);
    }
  };

  return (
    <header 
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled ? 'bg-fitness-light/95 backdrop-blur-sm shadow-md' : 'bg-transparent'
      }`}
    >
      <div className="container mx-auto px-4 py-4">
        <div className="flex items-center justify-between">
          {/* Logo */}
          <div className="font-heading text-2xl font-bold text-fitness-dark italic">
            Fitness™
          </div>

          {/* Desktop Navigation */}
          <nav className="hidden md:block">
            <ul className="flex items-center space-x-8">
              <li>
                <button 
                  onClick={() => scrollToSection('trainers')}
                  className="text-fitness-dark hover:text-fitness-green-600 transition-colors font-body"
                >
                  Trainers
                </button>
              </li>
              <li>
                <button 
                  onClick={() => scrollToSection('blog')}
                  className="text-fitness-dark hover:text-fitness-green-600 transition-colors font-body"
                >
                  Blog
                </button>
              </li>
              <li>
                <button 
                  onClick={() => scrollToSection('pricing')}
                  className="text-fitness-dark hover:text-fitness-green-600 transition-colors font-body"
                >
                  Plans
                </button>
              </li>
              <li>
                <button 
                  onClick={() => scrollToSection('contact')}
                  className="text-fitness-dark hover:text-fitness-green-600 transition-colors font-body"
                >
                  Contact
                </button>
              </li>
            </ul>
          </nav>

          {/* Desktop Actions */}
          <div className="hidden md:flex items-center space-x-4">
            <Button variant="ghost" size="sm" className="text-fitness-dark">
              <ShoppingCart className="w-4 h-4 mr-2" />
              0
            </Button>
            <Button 
              variant="outline" 
              size="sm"
              className="border-fitness-dark text-fitness-dark hover:bg-fitness-dark hover:text-white"
            >
              <User className="w-4 h-4 mr-2" />
              Log in
            </Button>
          </div>

          {/* Mobile Menu Button */}
          <Button
            variant="ghost"
            size="sm"
            className="md:hidden text-fitness-dark"
            onClick={() => setIsMenuOpen(!isMenuOpen)}
          >
            {isMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </Button>
        </div>

        {/* Mobile Menu */}
        {isMenuOpen && (
          <div className="md:hidden mt-4 pb-4 border-t border-fitness-green-200">
            <nav className="flex flex-col space-y-4 pt-4">
              <button 
                onClick={() => scrollToSection('trainers')}
                className="text-fitness-dark hover:text-fitness-green-600 transition-colors text-left font-body"
              >
                Trainers
              </button>
              <button 
                onClick={() => scrollToSection('blog')}
                className="text-fitness-dark hover:text-fitness-green-600 transition-colors text-left font-body"
              >
                Blog
              </button>
              <button 
                onClick={() => scrollToSection('pricing')}
                className="text-fitness-dark hover:text-fitness-green-600 transition-colors text-left font-body"
              >
                Plans
              </button>
              <button 
                onClick={() => scrollToSection('contact')}
                className="text-fitness-dark hover:text-fitness-green-600 transition-colors text-left font-body"
              >
                Contact
              </button>
              <div className="flex items-center space-x-4 pt-4">
                <Button variant="ghost" size="sm" className="text-fitness-dark">
                  <ShoppingCart className="w-4 h-4 mr-2" />
                  0
                </Button>
                <Button 
                  variant="outline" 
                  size="sm"
                  className="border-fitness-dark text-fitness-dark hover:bg-fitness-dark hover:text-white"
                >
                  <User className="w-4 h-4 mr-2" />
                  Log in
                </Button>
              </div>
            </nav>
          </div>
        )}
      </div>
    </header>
  );
};

export default Header;
