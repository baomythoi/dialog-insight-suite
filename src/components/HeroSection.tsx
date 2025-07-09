
import React, { useState } from 'react';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { useToast } from '@/hooks/use-toast';

const HeroSection = () => {
  const [email, setEmail] = useState('');
  const [isLoading, setIsLoading] = useState(false);
  const { toast } = useToast();

  const handleSubmit = async (e: React.FormEvent) => {
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
      // Simulate API call - replace with actual HubSpot/Mailchimp integration
      await new Promise(resolve => setTimeout(resolve, 1000));
      
      toast({
        title: "Success!",
        description: "Thank you for your interest! We'll be in touch soon.",
      });
      setEmail('');
    } catch (error) {
      toast({
        title: "Error",
        description: "Something went wrong. Please try again.",
        variant: "destructive",
      });
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
      {/* Background Image */}
      <div className="absolute inset-0 z-0">
        <img
          src="/lovable-uploads/9c3ada35-b864-4d3f-8f07-7243d33a41bc.png"
          alt="Fitness Training"
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-fitness-dark/60"></div>
      </div>

      {/* Content */}
      <div className="relative z-10 container mx-auto px-4">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Left Side - Text Content */}
          <div className="text-white animate-fade-in">
            <h1 className="text-5xl md:text-7xl font-heading italic leading-tight mb-6">
              Transform Your
              <br />
              <span className="text-fitness-light">Body</span> and Mind
            </h1>
            <p className="text-xl md:text-2xl font-body mb-8 text-fitness-light/90">
              Discover personalized fitness coaching that adapts to your lifestyle and goals. 
              Join thousands who've transformed their lives with our expert guidance.
            </p>
            
            {/* Stats */}
            <div className="grid grid-cols-3 gap-8 mb-12">
              <div className="text-center">
                <div className="text-3xl md:text-4xl font-heading text-fitness-light mb-2">32k</div>
                <div className="text-sm font-body text-fitness-light/80">Success stories</div>
              </div>
              <div className="text-center">
                <div className="text-3xl md:text-4xl font-heading text-fitness-light mb-2">18+</div>
                <div className="text-sm font-body text-fitness-light/80">Certified trainers</div>
              </div>
              <div className="text-center">
                <div className="text-3xl md:text-4xl font-heading text-fitness-light mb-2">4.5M</div>
                <div className="text-sm font-body text-fitness-light/80">Workouts completed</div>
              </div>
            </div>

            <Button 
              size="lg"
              className="bg-fitness-light text-fitness-dark hover:bg-white transition-all duration-300 px-8 py-6 text-lg font-body"
              onClick={() => document.getElementById('lead-form')?.scrollIntoView({ behavior: 'smooth' })}
            >
              Start Your Journey
            </Button>
          </div>

          {/* Right Side - Lead Capture Form */}
          <div id="lead-form" className="bg-white/95 backdrop-blur-sm p-8 rounded-2xl fitness-shadow animate-slide-up">
            <h3 className="text-2xl font-heading italic text-fitness-dark mb-2">
              Get Your Free
            </h3>
            <h2 className="text-3xl font-heading italic text-fitness-dark mb-6">
              Fitness Assessment
            </h2>
            
            <form onSubmit={handleSubmit} className="space-y-6">
              <div>
                <Input
                  type="text"
                  placeholder="Full Name"
                  className="h-12 text-lg border-fitness-green-200 focus:border-fitness-dark"
                  required
                />
              </div>
              <div>
                <Input
                  type="email"
                  placeholder="Email Address"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  className="h-12 text-lg border-fitness-green-200 focus:border-fitness-dark"
                  required
                />
              </div>
              <div>
                <Input
                  type="tel"
                  placeholder="Phone Number"
                  className="h-12 text-lg border-fitness-green-200 focus:border-fitness-dark"
                />
              </div>
              <div>
                <select className="w-full h-12 text-lg border border-fitness-green-200 rounded-md px-3 focus:border-fitness-dark focus:outline-none">
                  <option value="">Select Your Goal</option>
                  <option value="weight-loss">Weight Loss</option>
                  <option value="muscle-gain">Muscle Gain</option>
                  <option value="endurance">Endurance</option>
                  <option value="general-fitness">General Fitness</option>
                </select>
              </div>
              
              <Button 
                type="submit"
                className="w-full h-12 bg-fitness-dark hover:bg-fitness-green-800 text-white text-lg font-body"
                disabled={isLoading}
              >
                {isLoading ? 'Processing...' : 'Get My Free Assessment'}
              </Button>
              
              <p className="text-sm text-fitness-dark/70 text-center">
                No spam, unsubscribe at any time. We respect your privacy.
              </p>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
