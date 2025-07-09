
import React from 'react';
import { Button } from '@/components/ui/button';
import { ArrowRight } from 'lucide-react';

const BlogSection = () => {
  const blogPosts = [
    {
      id: 1,
      category: 'Fitness',
      title: 'Full-Body Strength Training: Week Program',
      date: 'August 2, 2024',
      image: '/lovable-uploads/c18b44e9-2bac-4bc8-aaac-9e54fb03e710.png',
      excerpt: 'Build muscle and increase your strength with our 4-Week Full-Body Strength Training Program.',
    },
    {
      id: 2,
      category: 'Wellness',
      title: 'Restorative Yoga for Stress Relief',
      date: 'August 10, 2024',
      image: '/lovable-uploads/78eb1e5c-fee0-44f7-abd6-d6264bb91ae9.png',
      excerpt: 'Learn gentle yoga techniques to reduce stress and improve your mental well-being.',
    },
    {
      id: 3,
      category: 'Fitness',
      title: '10 Minute Fitness Boost: Quick Workouts',
      date: 'July 28, 2024',
      image: '/lovable-uploads/eba8f342-a669-4c0c-b8bc-603c5fa4f979.png',
      excerpt: 'Short on time? These quick workout routines will keep you active throughout your busy day.',
    },
    {
      id: 4,
      category: 'Wellness',
      title: 'Morning Routine: Start Your Day with Wellness',
      date: 'August 3, 2024',
      image: '/lovable-uploads/9c3ada35-b864-4d3f-8f07-7243d33a41bc.png',
      excerpt: 'Discover morning rituals that will energize your body and focus your mind for the day ahead.',
    },
    {
      id: 5,
      category: 'Yoga Sessions',
      title: '7 Day Yoga Flexibility Series for this Year',
      date: 'August 7, 2024',
      image: '/lovable-uploads/af677762-cdfa-4d3a-9d12-180f7051b5ab.png',
      excerpt: 'Improve your flexibility and mobility with this comprehensive week-long yoga program.',
    },
    {
      id: 6,
      category: 'Yoga Sessions',
      title: '5 Day Challenge Trainer Series',
      date: 'August 23, 2024',
      image: '/lovable-uploads/0d8e903a-6b25-4ca5-9c22-e8e1ee1c02d9.png',
      excerpt: 'Take on our 5-day fitness challenge designed to push your limits and build strength.',
    }
  ];

  return (
    <section id="blog" className="py-20 bg-fitness-light">
      <div className="container mx-auto px-4">
        {/* Header */}
        <div className="text-center mb-16 animate-on-scroll">
          <h2 className="text-4xl md:text-6xl font-heading italic text-fitness-dark mb-4">
            Blog <span className="font-normal">fitness</span> for
          </h2>
          <h3 className="text-3xl md:text-4xl font-heading text-fitness-dark mb-6">
            more exigentes
          </h3>
          <p className="text-lg text-fitness-dark/80 max-w-3xl mx-auto">
            I want to show others we have the power to overcome anything put in front of us if we want to 
            fight for it and change our mind over time. I hope to Show people that no matter what we are 
            going thru we can come out of it on the other side so much stronger.
          </p>
        </div>

        {/* Blog Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 mb-12">
          {blogPosts.map((post, index) => (
            <article 
              key={post.id}
              className="bg-white rounded-2xl fitness-shadow fitness-hover overflow-hidden animate-on-scroll"
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              <div className="aspect-[4/3] overflow-hidden">
                <img
                  src={post.image}
                  alt={post.title}
                  className="w-full h-full object-cover transition-transform duration-300 hover:scale-105"
                />
              </div>
              <div className="p-6">
                <span className="inline-block px-3 py-1 bg-fitness-green-100 text-fitness-dark text-sm font-body rounded-full mb-3">
                  {post.category}
                </span>
                <h3 className="text-xl font-heading text-fitness-dark mb-3 leading-tight">
                  {post.title}
                </h3>
                <p className="text-fitness-dark/70 font-body text-sm mb-4 line-clamp-3">
                  {post.excerpt}
                </p>
                <div className="flex items-center justify-between">
                  <span className="text-fitness-dark/60 text-sm font-body">
                    {post.date}
                  </span>
                  <Button 
                    variant="ghost" 
                    size="sm"
                    className="text-fitness-dark hover:text-fitness-green-600 p-0"
                  >
                    Read More <ArrowRight className="w-4 h-4 ml-2" />
                  </Button>
                </div>
              </div>
            </article>
          ))}
        </div>

        {/* CTA */}
        <div className="text-center animate-on-scroll">
          <Button className="bg-fitness-dark hover:bg-fitness-green-800 text-white px-8 py-3 text-lg font-body">
            View All Articles
          </Button>
        </div>
      </div>
    </section>
  );
};

export default BlogSection;
