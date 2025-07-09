
import React, { useState } from 'react';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Facebook, Instagram, Twitter, Linkedin } from 'lucide-react';
import { useToast } from '@/hooks/use-toast';

const Footer = () => {
  const [email, setEmail] = useState('');
  const [isLoading, setIsLoading] = useState(false);
  const { toast } = useToast();

  const handleNewsletterSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    
    if (!email) {
      toast({
        title: "Error",
        description: "Please enter your email address",
        variant: "destructive",
      });
      return;
    }

    setIsLoading(true);
    
    try {
      // Simulate API call - replace with actual newsletter subscription
      await new Promise(resolve => setTimeout(resolve, 1000));
      
      toast({
        title: "Subscribed!",
        description: "Thank you for subscribing to our newsletter.",
      });
      setEmail('');
    } catch (error) {
      toast({
        title: "Error",
        description: "Failed to subscribe. Please try again.",
        variant: "destructive",
      });
    } finally {
      setIsLoading(false);
    }
  };

  const services = [
    'Yoga Classes',
    'Fitness Training',
    'Wellness Workshops',
    'Personalized Coaching'
  ];

  const links = [
    'Licensing',
    'Style Guide',
    'Back to Webflow',
    'Privacy Policy'
  ];

  return (
    <footer className="bg-fitness-light py-16">
      <div className="container mx-auto px-4">
        {/* Newsletter Section */}
        <div className="border-b border-fitness-green-200 pb-12 mb-12">
          <div className="max-w-md">
            <div className="font-heading text-2xl font-bold text-fitness-dark italic mb-2">
              Fitness™
            </div>
            <p className="text-fitness-dark/70 font-body mb-6">
              Join our newsletter to stay up to date on features and releases.
            </p>
            
            <form onSubmit={handleNewsletterSubmit} className="flex gap-4 mb-4">
              <Input
                type="email"
                placeholder="Enter your email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                className="flex-1 border-fitness-green-300 focus:border-fitness-dark"
              />
              <Button 
                type="submit"
                disabled={isLoading}
                className="bg-fitness-dark hover:bg-fitness-green-800 text-white px-6"
              >
                {isLoading ? 'Subscribing...' : 'Subscribe'}
              </Button>
            </form>
            
            <p className="text-fitness-dark/60 font-body text-sm">
              By subscribing, you agree to with our Privacy Policy and provide consent to receive updates 
              from our company.
            </p>
          </div>
        </div>

        {/* Footer Links */}
        <div className="grid md:grid-cols-3 gap-12 mb-12">
          {/* Services */}
          <div>
            <h4 className="text-fitness-dark font-heading text-lg mb-6">Our Services</h4>
            <ul className="space-y-3">
              {services.map((service, index) => (
                <li key={index}>
                  <a 
                    href="#" 
                    className="text-fitness-dark/70 hover:text-fitness-dark font-body transition-colors"
                  >
                    {service}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Follow Us */}
          <div>
            <h4 className="text-fitness-dark font-heading text-lg mb-6">Follow Us</h4>
            <div className="flex space-x-4 mb-6">
              <a 
                href="#" 
                className="w-10 h-10 bg-fitness-dark rounded-full flex items-center justify-center text-white hover:bg-fitness-green-800 transition-colors"
              >
                <Facebook className="w-5 h-5" />
              </a>
              <a 
                href="#" 
                className="w-10 h-10 bg-fitness-dark rounded-full flex items-center justify-center text-white hover:bg-fitness-green-800 transition-colors"
              >
                <Instagram className="w-5 h-5" />
              </a>
              <a 
                href="#" 
                className="w-10 h-10 bg-fitness-dark rounded-full flex items-center justify-center text-white hover:bg-fitness-green-800 transition-colors"
              >
                <Twitter className="w-5 h-5" />
              </a>
              <a 
                href="#" 
                className="w-10 h-10 bg-fitness-dark rounded-full flex items-center justify-center text-white hover:bg-fitness-green-800 transition-colors"
              >
                <Linkedin className="w-5 h-5" />
              </a>
            </div>
          </div>

          {/* Links */}
          <div>
            <h4 className="text-fitness-dark font-heading text-lg mb-6">Links</h4>
            <ul className="space-y-3">
              {links.map((link, index) => (
                <li key={index}>
                  <a 
                    href="#" 
                    className="text-fitness-dark/70 hover:text-fitness-dark font-body transition-colors"
                  >
                    {link}
                  </a>
                </li>
              ))}
            </ul>
          </div>
        </div>

        {/* Copyright */}
        <div className="border-t border-fitness-green-200 pt-8">
          <p className="text-fitness-dark/60 font-body text-center">
            © 2024 Template by Temitis. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
