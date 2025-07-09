
import React, { useState } from 'react';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Smartphone, Download, Star, Apple, Play } from 'lucide-react';
import { useToast } from '@/hooks/use-toast';

const AppPromotion = () => {
  const [webhookUrl, setWebhookUrl] = useState('');
  const [isLoading, setIsLoading] = useState(false);
  const { toast } = useToast();

  const handleZapierTrigger = async (e: React.FormEvent) => {
    e.preventDefault();
    
    if (!webhookUrl) {
      toast({
        title: "Error",
        description: "Please enter your Zapier webhook URL",
        variant: "destructive",
      });
      return;
    }

    setIsLoading(true);
    console.log("Triggering Zapier webhook:", webhookUrl);

    try {
      const response = await fetch(webhookUrl, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        mode: "no-cors",
        body: JSON.stringify({
          event: "app_download_interest",
          timestamp: new Date().toISOString(),
          triggered_from: window.location.origin,
          action: "user_interested_in_app_download"
        }),
      });

      toast({
        title: "Request Sent",
        description: "The request was sent to Zapier. Please check your Zap's history to confirm it was triggered.",
      });
      setWebhookUrl('');
    } catch (error) {
      console.error("Error triggering webhook:", error);
      toast({
        title: "Error",
        description: "Failed to trigger the Zapier webhook. Please check the URL and try again.",
        variant: "destructive",
      });
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <section className="py-20 bg-white">
      <div className="container mx-auto px-4">
        {/* Main App Promotion */}
        <div className="bg-fitness-green-100 rounded-2xl p-8 md:p-12 mb-16 animate-on-scroll">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            {/* Left Content */}
            <div>
              <h2 className="text-3xl md:text-4xl font-heading italic text-fitness-dark mb-6">
                Clearmind, your
                <br />
                partner in mental wellness.
              </h2>
              <p className="text-fitness-dark/80 font-body mb-8 text-lg leading-relaxed">
                Find personal zen and create supportive habits from a private place 
                with our yoga app.
              </p>
              
              {/* Download Buttons */}
              <div className="flex flex-col sm:flex-row gap-4 mb-8">
                <Button className="bg-fitness-dark hover:bg-fitness-green-800 text-white px-6 py-3 rounded-xl">
                  <Apple className="w-5 h-5 mr-3" />
                  <div className="text-left">
                    <div className="text-xs text-white/80">Download on the</div>
                    <div className="font-semibold">App Store</div>
                  </div>
                </Button>
                <Button className="bg-fitness-dark hover:bg-fitness-green-800 text-white px-6 py-3 rounded-xl">
                  <Play className="w-5 h-5 mr-3" />
                  <div className="text-left">
                    <div className="text-xs text-white/80">Get it on</div>
                    <div className="font-semibold">Google Play</div>
                  </div>
                </Button>
              </div>

              {/* App Features */}
              <div className="grid grid-cols-2 gap-6">
                <div className="flex items-center">
                  <Star className="w-5 h-5 text-fitness-green-600 mr-3" />
                  <span className="text-fitness-dark font-body">Personalized workouts</span>
                </div>
                <div className="flex items-center">
                  <Star className="w-5 h-5 text-fitness-green-600 mr-3" />
                  <span className="text-fitness-dark font-body">Progress tracking</span>
                </div>
                <div className="flex items-center">
                  <Star className="w-5 h-5 text-fitness-green-600 mr-3" />
                  <span className="text-fitness-dark font-body">Meditation sessions</span>
                </div>
                <div className="flex items-center">
                  <Star className="w-5 h-5 text-fitness-green-600 mr-3" />
                  <span className="text-fitness-dark font-body">Nutrition guidance</span>
                </div>
              </div>
            </div>

            {/* Right Content - Phone Mockup */}
            <div className="flex justify-center">
              <div className="relative">
                <div className="w-64 h-96 bg-fitness-dark rounded-3xl p-2 fitness-shadow">
                  <div className="w-full h-full bg-white rounded-2xl overflow-hidden">
                    <img
                      src="/lovable-uploads/52dd4df3-e1a4-454f-97f8-b94829f7b1e2.png"
                      alt="Fitness App Interface"
                      className="w-full h-full object-cover"
                    />
                  </div>
                </div>
                <div className="absolute -top-4 -right-4 bg-fitness-light p-4 rounded-full">
                  <Smartphone className="w-8 h-8 text-fitness-dark" />
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Zapier Integration Section */}
        <div className="max-w-2xl mx-auto animate-on-scroll">
          <div className="bg-fitness-dark text-white p-8 rounded-2xl">
            <h3 className="text-2xl font-heading italic text-center mb-6">
              Automate Your Fitness Journey
            </h3>
            <p className="text-white/90 font-body text-center mb-8">
              Connect your fitness data with your favorite apps using Zapier automation. 
              Track progress, sync calendars, and streamline your wellness routine.
            </p>
            
            <form onSubmit={handleZapierTrigger} className="space-y-4">
              <div>
                <Input
                  type="url"
                  placeholder="Enter your Zapier webhook URL"
                  value={webhookUrl}
                  onChange={(e) => setWebhookUrl(e.target.value)}
                  className="bg-white/10 border-white/20 text-white placeholder:text-white/60 h-12"
                  required
                />
              </div>
              <Button 
                type="submit"
                disabled={isLoading}
                className="w-full bg-fitness-light text-fitness-dark hover:bg-white h-12 text-lg font-body"
              >
                {isLoading ? 'Connecting...' : 'Connect Zapier Automation'}
              </Button>
            </form>
            
            <p className="text-white/70 text-sm text-center mt-4">
              This will trigger your Zapier webhook for CRM integration and follow-ups
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AppPromotion;
