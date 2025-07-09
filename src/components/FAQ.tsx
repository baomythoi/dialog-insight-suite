
import React from 'react';
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from '@/components/ui/accordion';

const FAQ = () => {
  const faqs = [
    {
      question: 'What types of yoga classes do you offer?',
      answer: 'We offer a variety of yoga classes including Hatha, Vinyasa, Restorative, and Power Yoga. Each class is designed to meet different skill levels and fitness goals.'
    },
    {
      question: 'Do I need any prior experience to join your fitness programs?',
      answer: 'Not at all! Our programs are designed for all fitness levels, from complete beginners to advanced practitioners. Our expert trainers will customize the approach based on your current fitness level.'
    },
    {
      question: 'How do I book a personalized coaching session?',
      answer: 'You can book a session through our website, mobile app, or by calling our studio directly. We recommend booking at least 24 hours in advance to ensure availability.'
    },
    {
      question: 'What should I bring to a yoga class?',
      answer: 'We provide all necessary equipment including mats, blocks, and straps. Just bring yourself, comfortable clothing, and a water bottle. We also have changing rooms available.'
    },
    {
      question: 'Are your nutrition plans tailored to individual needs?',
      answer: 'Yes, all our nutrition plans are completely personalized based on your dietary preferences, health goals, allergies, and lifestyle. Our certified nutritionists work closely with you to create sustainable meal plans.'
    },
    {
      question: 'How often are wellness workshops held?',
      answer: 'We host wellness workshops monthly, covering topics like stress management, mindful eating, sleep optimization, and mental health. Check our events calendar for upcoming workshops.'
    }
  ];

  return (
    <section className="py-20 bg-fitness-dark text-white">
      <div className="container mx-auto px-4">
        <div className="max-w-4xl mx-auto">
          <div className="text-center mb-16 animate-on-scroll">
            <h2 className="text-4xl md:text-5xl font-heading italic mb-4">
              Frequently
            </h2>
            <h3 className="text-3xl md:text-4xl font-heading italic mb-6">
              asked questions
            </h3>
            <p className="text-white/80 font-body text-lg">
              Everything you need to know about the product and billing.
            </p>
          </div>

          <div className="animate-on-scroll">
            <Accordion type="single" collapsible className="space-y-4">
              {faqs.map((faq, index) => (
                <AccordionItem 
                  key={index} 
                  value={`item-${index}`}
                  className="border border-white/20 rounded-lg px-6 animate-on-scroll"
                  style={{ animationDelay: `${index * 0.1}s` }}
                >
                  <AccordionTrigger className="text-white hover:text-fitness-light font-body text-left py-6">
                    {faq.question}
                  </AccordionTrigger>
                  <AccordionContent className="text-white/80 font-body pb-6 leading-relaxed">
                    {faq.answer}
                  </AccordionContent>
                </AccordionItem>
              ))}
            </Accordion>
          </div>
        </div>
      </div>
    </section>
  );
};

export default FAQ;
