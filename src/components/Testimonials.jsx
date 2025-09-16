import React, { useRef } from "react";

const testimonials = [{
  content: "We were skeptical at first - how could 5-minute rituals really make a difference? But after just one week of doing the morning coffee ritual and evening gratitude exchange, we're talking more than we have in months. These simple practices have brought back the spark we thought we'd lost.",
  author: "Rachel & Tom",
  role: "⭐⭐⭐⭐⭐",
  gradient: "bg-red-gradient-1"
}, {
  content: "As working parents with two young kids, finding time for our relationship felt impossible. The Connection Rituals gave us bite-sized ways to reconnect throughout our chaotic days. The 'thinking of you' texts and reunion hugs have become our favorite parts of each day. Worth every penny!",
  author: "Maria & Carlos",
  role: "⭐⭐⭐⭐⭐",
  gradient: "bg-red-gradient-2"
}, {
  content: "We've been together for 8 years and honestly felt more like roommates than partners. The tech-free dinner ritual alone has transformed our evenings. Instead of scrolling on our phones, we're actually talking and laughing together again. This guide saved our relationship.",
  author: "Jennifer & Alex",
  role: "⭐⭐⭐⭐⭐",
  gradient: "bg-red-gradient-3"
}, {
  content: "I bought this thinking it would be just another self-help book, but these rituals are genuinely life-changing. The three-minute hug ritual has become sacred time for us. We've implemented 12 of the 37 rituals and feel more connected than when we were newlyweds. Highly recommend!",
  author: "Lisa & Michael",
  role: "⭐⭐⭐⭐⭐",
  gradient: "bg-red-dark-1"
}];

const TestimonialCard = ({
  content,
  author,
  role,
  gradient
}) => {
  return <div className={`${gradient} rounded-lg p-8 h-full flex flex-col justify-between text-white transform transition-transform duration-300 hover:-translate-y-2 relative overflow-hidden`}>
      <div className="absolute top-0 right-0 w-24 h-24 bg-white z-10"></div>
      
      <div className="relative z-0">
        <p className="text-xl mb-8 font-medium leading-relaxed pr-20">{`"${content}"`}</p>
        <div>
          <h4 className="font-semibold text-xl">{author}</h4>
          <p className="text-white/80">{role}</p>
        </div>
      </div>
    </div>;
};

const Testimonials = () => {
  const sectionRef = useRef(null);

  return <section className="py-12 bg-white relative" id="testimonials" ref={sectionRef}> {/* Reduced from py-20 */}
      <div className="container px-6 lg:px-8 mx-auto">
        <div className="flex items-center gap-4 mb-6">
          <div className="atlas-chip">
            <span className="inline-flex items-center justify-center w-5 h-5 rounded-full bg-teal-600 text-white mr-2">💕</span>
            <span>Customer Stories</span>
          </div>
        </div>
        
        <h2 className="text-5xl font-display font-bold mb-12 text-left">Real couples, real results</h2>
        
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {testimonials.map((testimonial, index) => <TestimonialCard key={index} content={testimonial.content} author={testimonial.author} role={testimonial.role} gradient={testimonial.gradient} />)}
        </div>
      </div>
    </section>;
};

export default Testimonials;
