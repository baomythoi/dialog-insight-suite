import React from 'react';
import { useParams, Link } from 'react-router-dom';
import { ArrowLeft, Calendar, Clock, User } from 'lucide-react';
import Header from '@/components/Header';
import Footer from '@/components/Footer';

const BlogPost = () => {
  const { id } = useParams();

  // Mock blog post data - in real app this would come from API/database
  const post = {
    id: id,
    title: 'Full-Body Strength Training: Week Program',
    category: 'Fitness',
    date: 'August 2, 2024',
    readTime: '8 min read',
    author: 'Clare Ford',
    image: '/lovable-uploads/c18b44e9-2bac-4bc8-aaac-9e54fb03e710.png',
    content: `
      <p>Building strength doesn't have to be complicated. This comprehensive 4-week full-body strength training program is designed to help you build muscle, increase your overall strength, and boost your confidence in the gym.</p>
      
      <h2>Week 1: Foundation Building</h2>
      <p>The first week focuses on establishing proper form and getting your body accustomed to the movement patterns. We'll start with bodyweight exercises and light weights to ensure you're moving correctly before we increase the intensity.</p>
      
      <h3>Key Exercises:</h3>
      <ul>
        <li>Squats - 3 sets of 8-12 reps</li>
        <li>Push-ups - 3 sets of 5-10 reps</li>
        <li>Deadlifts (light weight) - 3 sets of 8 reps</li>
        <li>Plank - 3 sets of 30-60 seconds</li>
      </ul>
      
      <h2>Week 2: Progressive Overload</h2>
      <p>In the second week, we'll start to increase the weight and intensity. Your body should be adapting to the movements, and you'll begin to feel stronger and more confident.</p>
      
      <h2>Week 3: Strength Building</h2>
      <p>Week three is where the real strength gains begin. We'll focus on compound movements that work multiple muscle groups simultaneously, maximizing your time and effort.</p>
      
      <h2>Week 4: Peak Performance</h2>
      <p>The final week pushes your limits. By now, you should notice significant improvements in your strength, endurance, and overall fitness level.</p>
      
      <h2>Nutrition Tips</h2>
      <p>Remember, strength training is only half the equation. Proper nutrition plays a crucial role in building muscle and recovering from workouts. Focus on:</p>
      <ul>
        <li>Adequate protein intake (0.8-1g per pound of body weight)</li>
        <li>Complex carbohydrates for energy</li>
        <li>Healthy fats for hormone production</li>
        <li>Plenty of water for hydration</li>
      </ul>
      
      <h2>Recovery and Rest</h2>
      <p>Don't underestimate the importance of rest days. Your muscles grow and repair during rest, not during the workout itself. Make sure to get adequate sleep and allow at least one full rest day between intense training sessions.</p>
      
      <p>Remember, consistency is key. Stick to the program, listen to your body, and don't be afraid to adjust the weights or repetitions based on how you feel. Every small step forward is progress toward your goals.</p>
    `
  };

  return (
    <div className="min-h-screen bg-white">
      <Header />
      <main className="pt-20">
        <div className="container mx-auto px-4 py-12">
          {/* Back Button */}
          <Link to="/blog" className="inline-flex items-center text-fitness-dark hover:text-fitness-green-600 mb-8">
            <ArrowLeft className="w-4 h-4 mr-2" />
            Back to Blog
          </Link>

          <article className="max-w-4xl mx-auto">
            {/* Header */}
            <header className="mb-8">
              <span className="inline-block px-3 py-1 bg-fitness-green-100 text-fitness-dark text-sm font-body rounded-full mb-4">
                {post.category}
              </span>
              
              <h1 className="text-4xl md:text-5xl font-heading italic text-fitness-dark mb-6 leading-tight">
                {post.title}
              </h1>
              
              <div className="flex flex-wrap items-center gap-6 text-fitness-dark/70 font-body text-sm">
                <div className="flex items-center">
                  <User className="w-4 h-4 mr-2" />
                  {post.author}
                </div>
                <div className="flex items-center">
                  <Calendar className="w-4 h-4 mr-2" />
                  {post.date}
                </div>
                <div className="flex items-center">
                  <Clock className="w-4 h-4 mr-2" />
                  {post.readTime}
                </div>
              </div>
            </header>

            {/* Featured Image */}
            <div className="aspect-[16/9] overflow-hidden rounded-2xl mb-8">
              <img
                src={post.image}
                alt={post.title}
                className="w-full h-full object-cover"
              />
            </div>

            {/* Content */}
            <div 
              className="prose prose-lg max-w-none"
              dangerouslySetInnerHTML={{ __html: post.content }}
              style={{
                fontFamily: 'HelveticaNeue-Light',
                lineHeight: '1.7',
                color: 'hsl(120 50% 9%)'
              }}
            />

            {/* Tags */}
            <div className="mt-12 pt-8 border-t border-fitness-green-200">
              <h3 className="text-lg font-heading text-fitness-dark mb-4">Tags</h3>
              <div className="flex flex-wrap gap-2">
                {['Strength Training', 'Fitness', 'Workout Program', 'Muscle Building'].map((tag) => (
                  <span key={tag} className="px-3 py-1 bg-fitness-light text-fitness-dark text-sm font-body rounded-full">
                    {tag}
                  </span>
                ))}
              </div>
            </div>
          </article>
        </div>
      </main>
      <Footer />
    </div>
  );
};

export default BlogPost;