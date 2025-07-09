
import React, { useState } from 'react';
import { Button } from '@/components/ui/button';
import { Check } from 'lucide-react';
import { useToast } from '@/hooks/use-toast';

const PricingSection = () => {
  const [isLoading, setIsLoading] = useState<string | null>(null);
  const { toast } = useToast();

  const plans = [
    {
      id: 'starter',
      name: 'Starter Plan',
      price: 14,
      period: 'per user, per month',
      description: 'Perfect for beginners starting their fitness journey',
      features: [
        '5 group classes per month',
        'Access to fitness app',
        'Basic nutrition guide',
        'Community support',
        'Monthly wellness newsletter'
      ],
      buttonText: 'Join Membership',
      popular: false
    },
    {
      id: 'basic',
      name: 'Basic plan',
      price: 29,
      period: 'per user, per month',
      description: 'Most popular choice for serious fitness enthusiasts',
      features: [
        'Unlimited group classes',
        '4 personal training sessions',
        'Custom meal planning',
        'Access to online resources',
        'Weekly progress tracking',
        'Access to all yoga sessions'
      ],
      buttonText: 'Start My 30-Day Trial',
      popular: true
    },
    {
      id: 'premium',
      name: 'Premium plan',
      price: 139,
      period: 'per user, per month',
      description: 'Complete transformation package with premium support',
      features: [
        'Unlimited personal training',
        '2 personal coaching sessions per week',
        'Advanced meal planning',
        'Access to premium equipment',
        'Weekly wellness evaluations',
        'Priority booking and support'
      ],
      buttonText: 'Join Membership',
      popular: false
    }
  ];

  const handlePurchase = async (planId: string, price: number) => {
    setIsLoading(planId);
    
    try {
      // Simulate Stripe checkout - replace with actual Stripe integration
      toast({
        title: "Redirecting to checkout...",
        description: `Processing payment for $${price}/month plan`,
      });

      // Simulate API call to create Stripe checkout session
      await new Promise(resolve => setTimeout(resolve, 2000));
      
      // In a real implementation, you would redirect to Stripe Checkout here
      // window.location.href = checkoutUrl;
      
      toast({
        title: "Success!",
        description: "Your membership has been activated. Welcome aboard!",
      });

    } catch (error) {
      toast({
        title: "Error",
        description: "Failed to process payment. Please try again.",
        variant: "destructive",
      });
    } finally {
      setIsLoading(null);
    }
  };

  return (
    <section id="pricing" className="py-20 bg-white">
      <div className="container mx-auto px-4">
        {/* Header */}
        <div className="text-center mb-16 animate-on-scroll">
          <h2 className="text-4xl md:text-5xl font-heading italic text-fitness-dark mb-4">
            Community
          </h2>
          <h3 className="text-3xl md:text-4xl font-heading italic text-fitness-dark mb-6">
            Social Classes
          </h3>
          <p className="text-lg text-fitness-dark/80 max-w-2xl mx-auto">
            If you love working with a supportive group class Fitness training 
            and yoga classes in the ideal place to build your foundation
          </p>
        </div>

        {/* Pricing Cards */}
        <div className="grid md:grid-cols-3 gap-8 max-w-6xl mx-auto">
          {plans.map((plan, index) => (
            <div 
              key={plan.id}
              className={`relative p-8 rounded-2xl fitness-shadow fitness-hover animate-on-scroll ${
                plan.popular 
                  ? 'bg-fitness-dark text-white transform scale-105' 
                  : 'bg-white border border-fitness-green-200'
              }`}
              style={{ animationDelay: `${index * 0.2}s` }}
            >
              {plan.popular && (
                <div className="absolute -top-4 left-1/2 transform -translate-x-1/2">
                  <span className="bg-fitness-light text-fitness-dark px-6 py-2 rounded-full text-sm font-body">
                    Most Popular
                  </span>
                </div>
              )}

              <div className="text-center mb-8">
                <h3 className={`text-2xl font-heading mb-2 ${plan.popular ? 'text-white' : 'text-fitness-dark'}`}>
                  {plan.name}
                </h3>
                <div className="mb-4">
                  <span className={`text-4xl font-heading ${plan.popular ? 'text-white' : 'text-fitness-dark'}`}>
                    ${plan.price}
                  </span>
                  <span className={`text-sm font-body ml-2 ${plan.popular ? 'text-white/80' : 'text-fitness-dark/70'}`}>
                    {plan.period}
                  </span>
                </div>
                <p className={`text-sm font-body ${plan.popular ? 'text-white/90' : 'text-fitness-dark/70'}`}>
                  {plan.description}
                </p>
              </div>

              <ul className="space-y-4 mb-8">
                {plan.features.map((feature, featureIndex) => (
                  <li key={featureIndex} className="flex items-start">
                    <Check className={`w-5 h-5 mr-3 mt-0.5 flex-shrink-0 ${
                      plan.popular ? 'text-fitness-light' : 'text-fitness-green-600'
                    }`} />
                    <span className={`text-sm font-body ${
                      plan.popular ? 'text-white/90' : 'text-fitness-dark/80'
                    }`}>
                      {feature}
                    </span>
                  </li>
                ))}
              </ul>

              <Button
                onClick={() => handlePurchase(plan.id, plan.price)}
                disabled={isLoading === plan.id}
                className={`w-full py-3 text-lg font-body transition-all duration-300 ${
                  plan.popular
                    ? 'bg-fitness-light text-fitness-dark hover:bg-white'
                    : 'bg-fitness-dark text-white hover:bg-fitness-green-800'
                }`}
              >
                {isLoading === plan.id ? 'Processing...' : plan.buttonText}
              </Button>
            </div>
          ))}
        </div>

        {/* Discount Banner */}
        <div className="mt-16 animate-on-scroll">
          <div className="bg-fitness-dark text-white p-8 rounded-2xl max-w-4xl mx-auto">
            <div className="grid md:grid-cols-2 gap-8 items-center">
              <div>
                <h3 className="text-3xl font-heading italic mb-4">
                  25% off discount<br />
                  Fitness classes this summer
                </h3>
                <p className="text-white/90 font-body mb-6">
                  Download our app and get perfect workouts and meal plans, specially 
                  crafted. That motivates and empowers you as well as ensuring you enjoy.
                </p>
                <Button className="bg-fitness-light text-fitness-dark hover:bg-white">
                  Join Member
                </Button>
              </div>
              <div className="flex justify-center">
                <img
                  src="/lovable-uploads/52dd4df3-e1a4-454f-97f8-b94829f7b1e2.png"
                  alt="Fitness Training"
                  className="rounded-xl max-w-sm w-full"
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default PricingSection;
