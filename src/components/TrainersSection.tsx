
import React from 'react';
import { Button } from '@/components/ui/button';
import { ArrowRight } from 'lucide-react';

const TrainersSection = () => {
  const trainers = [
    {
      id: 1,
      name: 'Clare Ford',
      specialty: 'YOGA INSTRUCTOR',
      image: '/lovable-uploads/eba8f342-a669-4c0c-b8bc-603c5fa4f979.png',
      description: 'With a passion for strength training, Clare is dedicated to helping you build muscle and boost endurance.'
    },
    {
      id: 2,
      name: 'Alicia Regis',
      specialty: 'PERSONAL TRAINER',
      image: '/lovable-uploads/af677762-cdfa-4d3a-9d12-180f7051b5ab.png',
      description: 'Specializing in personalized fitness programs tailored to your unique goals and lifestyle.'
    },
    {
      id: 3,
      name: 'Sarah Johnson',
      specialty: 'WELLNESS COACH',
      image: '/lovable-uploads/9c3ada35-b864-4d3f-8f07-7243d33a41bc.png',
      description: 'Focused on holistic wellness, combining fitness with mental and emotional well-being.'
    },
    {
      id: 4,
      name: 'Maya Chen',
      specialty: 'NUTRITION SPECIALIST',
      image: '/lovable-uploads/0d8e903a-6b25-4ca5-9c22-e8e1ee1c02d9.png',
      description: 'Expert in creating sustainable nutrition plans that complement your fitness journey.'
    }
  ];

  const reviews = [
    {
      name: 'Clare Benford',
      review: 'My brother I can\'t thank you enough even if you say do it one',
      date: '23.03.2021'
    },
    {
      name: 'Jamie Kohrt',
      review: 'I started going to the gym but that felt like I was what I was',
      date: '23.03.2021'
    },
    {
      name: 'Clare Benford',
      review: 'My brother I can\'t thank you enough even if you say do it one',
      date: '23.03.2021'
    },
    {
      name: 'Clare Benford',
      review: 'I started going to the gym but that felt like I was what I was',
      date: '23.03.2021'
    },
    {
      name: 'Clare Benford',
      review: 'My brother I can\'t thank you enough even if you say do it one',
      date: '23.03.2021'
    }
  ];

  return (
    <section id="trainers" className="py-20 bg-white">
      <div className="container mx-auto px-4">
        {/* Header */}
        <div className="text-center mb-16 animate-on-scroll">
          <p className="text-fitness-dark/60 font-body mb-2">YOGA INSTRUCTOR</p>
          <h2 className="text-4xl md:text-5xl font-heading italic text-fitness-dark mb-8">
            Clare Ford
          </h2>
        </div>

        {/* Featured Trainer Section */}
        <div className="grid lg:grid-cols-3 gap-8 mb-20 animate-on-scroll">
          <div className="lg:col-span-3">
            <div className="grid md:grid-cols-3 gap-6">
              <div className="aspect-[3/4] overflow-hidden rounded-2xl">
                <img
                  src="/lovable-uploads/eba8f342-a669-4c0c-b8bc-603c5fa4f979.png"
                  alt="Clare Ford"
                  className="w-full h-full object-cover"
                />
              </div>
              <div className="aspect-[3/4] overflow-hidden rounded-2xl">
                <img
                  src="/lovable-uploads/af677762-cdfa-4d3a-9d12-180f7051b5ab.png"
                  alt="Trainer"
                  className="w-full h-full object-cover"
                />
              </div>
              <div className="aspect-[3/4] overflow-hidden rounded-2xl">
                <img
                  src="/lovable-uploads/0d8e903a-6b25-4ca5-9c22-e8e1ee1c02d9.png"
                  alt="Trainer"
                  className="w-full h-full object-cover"
                />
              </div>
            </div>
          </div>
        </div>

        {/* Services Offered */}
        <div className="mb-20 animate-on-scroll">
          <h3 className="text-3xl font-heading italic text-fitness-dark text-center mb-12">
            Services Offered
          </h3>
          <div className="grid md:grid-cols-3 gap-8">
            <div className="text-center p-6">
              <div className="w-16 h-16 bg-fitness-green-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <span className="text-2xl">🧘‍♀️</span>
              </div>
              <h4 className="text-xl font-heading text-fitness-dark mb-3">Yoga Sessions</h4>
              <p className="text-fitness-dark/70 font-body">
                One-on-one sessions focused on personalized instruction and individual goals.
              </p>
            </div>
            <div className="text-center p-6">
              <div className="w-16 h-16 bg-fitness-green-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <span className="text-2xl">👥</span>
              </div>
              <h4 className="text-xl font-heading text-fitness-dark mb-3">Group Classes</h4>
              <p className="text-fitness-dark/70 font-body">
                Dynamic group sessions designed to improve flexibility, strength, and mindfulness.
              </p>
            </div>
            <div className="text-center p-6">
              <div className="w-16 h-16 bg-fitness-green-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <span className="text-2xl">🌟</span>
              </div>
              <h4 className="text-xl font-heading text-fitness-dark mb-3">Workshops</h4>
              <p className="text-fitness-dark/70 font-body">
                Immersive workshops that deepen your practice and enhance your wellness.
              </p>
            </div>
          </div>
          
          <div className="text-center mt-8">
            <Button className="bg-fitness-dark hover:bg-fitness-green-800 text-white px-8 py-3">
              Book A Consultation
            </Button>
          </div>
        </div>

        {/* Reviews Section */}
        <div className="animate-on-scroll">
          <div className="text-center mb-12">
            <h3 className="text-3xl md:text-4xl font-heading italic text-fitness-dark mb-4">
              Over 200+ reviews
            </h3>
            <p className="text-fitness-dark/80 font-body">from our clients</p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-5 gap-6">
            {reviews.map((review, index) => (
              <div 
                key={index}
                className="bg-fitness-light p-6 rounded-xl fitness-shadow animate-on-scroll"
                style={{ animationDelay: `${index * 0.1}s` }}
              >
                <div className="flex items-center mb-4">
                  <div className="w-10 h-10 bg-fitness-green-200 rounded-full flex items-center justify-center mr-3">
                    <span className="text-fitness-dark font-body text-sm">{review.name.charAt(0)}</span>
                  </div>
                  <div>
                    <h4 className="text-fitness-dark font-body text-sm font-semibold">{review.name}</h4>
                    <div className="flex text-yellow-400 text-xs">
                      {'★'.repeat(5)}
                    </div>
                  </div>
                </div>
                <p className="text-fitness-dark/80 font-body text-sm mb-3">
                  "{review.review}"
                </p>
                <p className="text-fitness-dark/60 font-body text-xs">{review.date}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default TrainersSection;
