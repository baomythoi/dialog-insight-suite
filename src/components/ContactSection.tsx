
import React, { useState } from 'react';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import { useToast } from '@/hooks/use-toast';

const ContactSection = () => {
  const [formData, setFormData] = useState({
    email: '',
    message: ''
  });
  const [isLoading, setIsLoading] = useState(false);
  const { toast } = useToast();

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    
    if (!formData.email || !formData.message) {
      toast({
        title: "Error",
        description: "Please fill in all required fields",
        variant: "destructive",
      });
      return;
    }

    setIsLoading(true);
    
    try {
      // Simulate API call - replace with actual contact form submission
      await new Promise(resolve => setTimeout(resolve, 1000));
      
      toast({
        title: "Message Sent!",
        description: "Thank you for reaching out. We'll get back to you soon.",
      });
      
      setFormData({ email: '', message: '' });
    } catch (error) {
      toast({
        title: "Error",
        description: "Failed to send message. Please try again.",
        variant: "destructive",
      });
    } finally {
      setIsLoading(false);
    }
  };

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  return (
    <section id="contact" className="py-20 bg-fitness-light">
      <div className="container mx-auto px-4">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          {/* Left Side - Images */}
          <div className="animate-on-scroll">
            <div className="grid grid-cols-5 gap-4">
              <div className="col-span-3">
                <div className="aspect-square rounded-full overflow-hidden">
                  <img
                    src="/lovable-uploads/c18b44e9-2bac-4bc8-aaac-9e54fb03e710.png"
                    alt="Fitness group"
                    className="w-full h-full object-cover"
                  />
                </div>
              </div>
              <div className="col-span-2 space-y-4">
                <div className="aspect-square rounded-full overflow-hidden">
                  <img
                    src="/lovable-uploads/78eb1e5c-fee0-44f7-abd6-d6264bb91ae9.png"
                    alt="Yoga session"
                    className="w-full h-full object-cover"
                  />
                </div>
                <div className="aspect-square rounded-full overflow-hidden">
                  <img
                    src="/lovable-uploads/eba8f342-a669-4c0c-b8bc-603c5fa4f979.png"
                    alt="Personal training"
                    className="w-full h-full object-cover"
                  />
                </div>
              </div>
              <div className="col-span-2 space-y-4">
                <div className="aspect-square rounded-full overflow-hidden">
                  <img
                    src="/lovable-uploads/9c3ada35-b864-4d3f-8f07-7243d33a41bc.png"
                    alt="Meditation"
                    className="w-full h-full object-cover"
                  />
                </div>
                <div className="aspect-square rounded-full overflow-hidden">
                  <img
                    src="/lovable-uploads/af677762-cdfa-4d3a-9d12-180f7051b5ab.png"
                    alt="Wellness coaching"
                    className="w-full h-full object-cover"
                  />
                </div>
              </div>
              <div className="col-span-3">
                <div className="aspect-square rounded-full overflow-hidden">
                  <img
                    src="/lovable-uploads/0d8e903a-6b25-4ca5-9c22-e8e1ee1c02d9.png"
                    alt="Fitness training"
                    className="w-full h-full object-cover"
                  />
                </div>
              </div>
            </div>
          </div>

          {/* Right Side - Contact Form */}
          <div className="animate-on-scroll">
            <h2 className="text-4xl md:text-5xl font-heading italic text-fitness-dark mb-6">
              Get in touch.
            </h2>
            <p className="text-lg text-fitness-dark/80 font-body mb-8 leading-relaxed">
              I want to help you overcome all mental and physical hurdles in 
              your everyday life. 6 Years ago, I was electrocuted with 277 
              volts. I suffered 3rd degree burns on my hand and needed 
              neck surgery and they said I couldn't be able to make a full 
              recovery.
            </p>

            <form onSubmit={handleSubmit} className="space-y-6">
              <div>
                <label htmlFor="email" className="block text-fitness-dark font-body mb-2">
                  Email (required)
                </label>
                <Input
                  type="email"
                  id="email"
                  name="email"
                  value={formData.email}
                  onChange={handleInputChange}
                  className="h-12 border-fitness-green-300 focus:border-fitness-dark"
                  required
                />
              </div>

              <div>
                <label htmlFor="message" className="block text-fitness-dark font-body mb-2">
                  Message (required)
                </label>
                <Textarea
                  id="message"
                  name="message"
                  value={formData.message}
                  onChange={handleInputChange}
                  rows={5}
                  className="border-fitness-green-300 focus:border-fitness-dark resize-none"
                  required
                />
              </div>

              <Button
                type="submit"
                disabled={isLoading}
                className="bg-fitness-dark hover:bg-fitness-green-800 text-white px-8 py-3 text-lg font-body"
              >
                {isLoading ? 'Sending...' : 'Send'}
              </Button>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ContactSection;
