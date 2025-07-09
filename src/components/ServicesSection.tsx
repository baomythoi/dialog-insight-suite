
import React from 'react';
import { Users, Dumbbell, Heart, Trophy } from 'lucide-react';

const ServicesSection = () => {
  const services = [
    {
      icon: <Users className="w-12 h-12 text-fitness-dark" />,
      title: "Yoga Classes",
      description: "Choose from 5 levels from beginner to instructor. Each class focuses on different techniques and goals."
    },
    {
      icon: <Dumbbell className="w-12 h-12 text-fitness-dark" />,
      title: "Fitness Training",
      description: "Personalized strength training and cardio to your fitness level. Focus on your specific goals and nutrition."
    },
    {
      icon: <Heart className="w-12 h-12 text-fitness-dark" />,
      title: "Wellness Laps",
      description: "Find an athlete mindset through fitness programs and nutrition. Support for all of your wellness goals."
    }
  ];

  const features = [
    {
      icon: <Trophy className="w-8 h-8 text-white" />,
      title: "Flexible Scheduling",
      description: "Work out when it's convenient for you. Book sessions that fit your busy lifestyle and maintain consistency."
    },
    {
      icon: <Users className="w-8 h-8 text-white" />,
      title: "Personalized Programs",
      description: "Access our goal specific, science-backed fitness and nutrition programs that are tailored just for you."
    },
    {
      icon: <Heart className="w-8 h-8 text-white" />,
      title: "Expert Instructors",
      description: "Our experienced and qualified trainers help provide the knowledge and confidence to reach your goals."
    },
    {
      icon: <Dumbbell className="w-8 h-8 text-white" />,
      title: "Holistic Wellness",
      description: "Maintaining physical and mental balance. Find peace of mind and confidence through our fitness programs."
    }
  ];

  return (
    <section className="py-20 bg-fitness-light">
      <div className="container mx-auto px-4">
        {/* Services Header */}
        <div className="text-center mb-16 animate-on-scroll">
          <h2 className="text-4xl md:text-5xl font-heading italic text-fitness-dark mb-4">
            Our Services
          </h2>
          <p className="text-lg text-fitness-dark/80 max-w-2xl mx-auto">
            Whether you're looking for one-on-one personal training or prefer to exercise 
            in a supportive group setting, we've got the perfect solution for you.
          </p>
        </div>

        {/* Services Grid */}
        <div className="grid md:grid-cols-3 gap-8 mb-20">
          {services.map((service, index) => (
            <div 
              key={index}
              className="text-center p-8 bg-white rounded-2xl fitness-shadow fitness-hover animate-on-scroll"
              style={{ animationDelay: `${index * 0.2}s` }}
            >
              <div className="flex justify-center mb-6">
                {service.icon}
              </div>
              <h3 className="text-2xl font-heading text-fitness-dark mb-4">{service.title}</h3>
              <p className="text-fitness-dark/70 font-body leading-relaxed">
                {service.description}
              </p>
            </div>
          ))}
        </div>

        {/* Why Choose Us Section */}
        <div className="animate-on-scroll">
          <div className="text-center mb-12">
            <h3 className="text-3xl md:text-4xl font-heading italic text-fitness-dark mb-4">
              Why Choose Us?
            </h3>
            <p className="text-lg text-fitness-dark/80 max-w-2xl mx-auto">
              Our commitment to your total wellness journey sets us apart from other fitness programs. 
              Discover why our clients achieve lasting success.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {features.map((feature, index) => (
              <div 
                key={index}
                className="bg-fitness-dark p-6 rounded-xl text-white fitness-hover animate-on-scroll"
                style={{ animationDelay: `${index * 0.1}s` }}
              >
                <div className="flex items-center mb-4">
                  {feature.icon}
                  <h4 className="text-lg font-heading ml-3">{feature.title}</h4>
                </div>
                <p className="text-white/80 font-body text-sm leading-relaxed">
                  {feature.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default ServicesSection;
