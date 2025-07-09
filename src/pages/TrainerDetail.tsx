import React from 'react';
import { useParams, Link } from 'react-router-dom';
import { ArrowLeft, Mail, Phone, Star } from 'lucide-react';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import { Button } from '@/components/ui/button';

const TrainerDetail = () => {
  const { id } = useParams();

  // Mock trainer data - in real app this would come from API/database
  const trainer = {
    id: id,
    name: 'Clare Ford',
    specialty: 'YOGA INSTRUCTOR',
    image: '/lovable-uploads/eba8f342-a669-4c0c-b8bc-603c5fa4f979.png',
    bio: 'With over 8 years of experience in yoga instruction, Clare specializes in Hatha, Vinyasa, and Restorative yoga. She believes in the transformative power of yoga to heal both body and mind, and is passionate about guiding students on their journey to wellness.',
    certifications: [
      'RYT-500 Certified Yoga Instructor',
      'Trauma-Informed Yoga Training',
      'Meditation & Mindfulness Coach',
      'Prenatal Yoga Specialist'
    ],
    services: [
      { name: 'Private Yoga Sessions', price: '$85/session' },
      { name: 'Group Classes', price: '$25/class' },
      { name: 'Workshops & Retreats', price: '$150/workshop' },
      { name: 'Online Sessions', price: '$60/session' }
    ],
    schedule: [
      { day: 'Monday', time: '7:00 AM - 11:00 AM' },
      { day: 'Wednesday', time: '6:00 PM - 9:00 PM' },
      { day: 'Friday', time: '7:00 AM - 11:00 AM' },
      { day: 'Saturday', time: '9:00 AM - 2:00 PM' }
    ]
  };

  return (
    <div className="min-h-screen bg-white">
      <Header />
      <main className="pt-20">
        <div className="container mx-auto px-4 py-12">
          {/* Back Button */}
          <Link to="/trainers" className="inline-flex items-center text-fitness-dark hover:text-fitness-green-600 mb-8">
            <ArrowLeft className="w-4 h-4 mr-2" />
            Back to Trainers
          </Link>

          <div className="grid lg:grid-cols-2 gap-12">
            {/* Left Side - Image and Basic Info */}
            <div>
              <div className="aspect-[3/4] overflow-hidden rounded-2xl mb-6">
                <img
                  src={trainer.image}
                  alt={trainer.name}
                  className="w-full h-full object-cover"
                />
              </div>
              
              <div className="text-center lg:text-left">
                <p className="text-fitness-dark/60 font-body mb-2">{trainer.specialty}</p>
                <h1 className="text-4xl font-heading italic text-fitness-dark mb-4">{trainer.name}</h1>
                <div className="flex justify-center lg:justify-start items-center mb-6">
                  <div className="flex text-yellow-400 mr-2">
                    {[...Array(5)].map((_, i) => (
                      <Star key={i} className="w-4 h-4 fill-current" />
                    ))}
                  </div>
                  <span className="text-fitness-dark/70 text-sm">4.9 (127 reviews)</span>
                </div>
                
                <div className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start">
                  <Button className="bg-fitness-dark hover:bg-fitness-green-800 text-white">
                    <Mail className="w-4 h-4 mr-2" />
                    Contact Clare
                  </Button>
                  <Button variant="outline" className="border-fitness-dark text-fitness-dark hover:bg-fitness-dark hover:text-white">
                    <Phone className="w-4 h-4 mr-2" />
                    Book Session
                  </Button>
                </div>
              </div>
            </div>

            {/* Right Side - Details */}
            <div>
              {/* Bio */}
              <section className="mb-8">
                <h2 className="text-2xl font-heading text-fitness-dark mb-4">About Clare</h2>
                <p className="text-fitness-dark/80 font-body leading-relaxed">{trainer.bio}</p>
              </section>

              {/* Certifications */}
              <section className="mb-8">
                <h2 className="text-2xl font-heading text-fitness-dark mb-4">Certifications</h2>
                <ul className="space-y-2">
                  {trainer.certifications.map((cert, index) => (
                    <li key={index} className="flex items-center text-fitness-dark/80 font-body">
                      <div className="w-2 h-2 bg-fitness-green-600 rounded-full mr-3"></div>
                      {cert}
                    </li>
                  ))}
                </ul>
              </section>

              {/* Services & Pricing */}
              <section className="mb-8">
                <h2 className="text-2xl font-heading text-fitness-dark mb-4">Services & Pricing</h2>
                <div className="space-y-3">
                  {trainer.services.map((service, index) => (
                    <div key={index} className="flex justify-between items-center p-3 bg-fitness-light rounded-lg">
                      <span className="text-fitness-dark font-body">{service.name}</span>
                      <span className="text-fitness-dark font-body font-semibold">{service.price}</span>
                    </div>
                  ))}
                </div>
              </section>

              {/* Schedule */}
              <section>
                <h2 className="text-2xl font-heading text-fitness-dark mb-4">Availability</h2>
                <div className="space-y-2">
                  {trainer.schedule.map((slot, index) => (
                    <div key={index} className="flex justify-between items-center py-2 border-b border-fitness-green-200">
                      <span className="text-fitness-dark font-body">{slot.day}</span>
                      <span className="text-fitness-dark/70 font-body">{slot.time}</span>
                    </div>
                  ))}
                </div>
              </section>
            </div>
          </div>
        </div>
      </main>
      <Footer />
    </div>
  );
};

export default TrainerDetail;