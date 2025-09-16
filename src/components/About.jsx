import React, { useEffect, useRef } from "react";
import { Clock, Heart, Users, Zap, CheckCircle } from "lucide-react";

const BenefitCard = ({ icon, title, description, index }) => {
  const cardRef = useRef(null);
  
  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add("animate-fade-in");
            observer.unobserve(entry.target);
          }
        });
      },
      { threshold: 0.1 }
    );
    
    if (cardRef.current) {
      observer.observe(cardRef.current);
    }
    
    return () => {
      if (cardRef.current) {
        observer.unobserve(cardRef.current);
      }
    };
  }, []);
  
  return (
    <div 
      ref={cardRef}
      className="bg-white p-6 rounded-xl shadow-lg opacity-0 transition-all duration-300 hover:shadow-xl hover:-translate-y-1"
      style={{ animationDelay: `${0.1 * index}s` }}
    >
      <div className="rounded-full bg-teal-50 w-12 h-12 flex items-center justify-center text-teal-600 mb-4">
        {icon}
      </div>
      <h3 className="text-xl font-semibold mb-3">{title}</h3>
      <p className="text-gray-600">{description}</p>
    </div>
  );
};

const About = () => {
  const sectionRef = useRef(null);
  
  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            const elements = entry.target.querySelectorAll(".fade-in-element");
            elements.forEach((el, index) => {
              setTimeout(() => {
                el.classList.add("animate-fade-in");
              }, index * 100);
            });
            observer.unobserve(entry.target);
          }
        });
      },
      { threshold: 0.1 }
    );
    
    if (sectionRef.current) {
      observer.observe(sectionRef.current);
    }
    
    return () => {
      if (sectionRef.current) {
        observer.unobserve(sectionRef.current);
      }
    };
  }, []);

  return (
    <section className="py-16 md:py-20 bg-white" id="about" ref={sectionRef}>
      <div className="container px-4 sm:px-6 lg:px-8 mx-auto">
        {/* Problem Statement */}
        <div className="text-center mb-16">
          <div className="atlas-chip mx-auto mb-4 opacity-0 fade-in-element">
            <span className="inline-flex items-center justify-center w-5 h-5 rounded-full bg-teal-600 text-white mr-2">!</span>
            <span>The Problem</span>
          </div>
          <h2 className="section-title mb-6 opacity-0 fade-in-element">
            The Modern Couple's <br className="hidden sm:block" />Digital Dilemma
          </h2>
          <div className="max-w-4xl mx-auto">
            <div className="grid md:grid-cols-3 gap-8 text-center">
              <div className="opacity-0 fade-in-element">
                <div className="text-3xl font-bold text-teal-600 mb-2">96</div>
                <p className="text-gray-600">Times per day the average person checks their phone</p>
              </div>
              <div className="opacity-0 fade-in-element">
                <div className="text-3xl font-bold text-teal-600 mb-2">10</div>
                <p className="text-gray-600">Minutes between each phone check during waking hours</p>
              </div>
              <div className="opacity-0 fade-in-element">
                <div className="text-3xl font-bold text-teal-600 mb-2">70%</div>
                <p className="text-gray-600">Of couples report feeling more like roommates than lovers</p>
              </div>
            </div>
          </div>
        </div>

        {/* Why Micro-Rituals Work */}
        <div className="mb-16">
          <div className="text-center mb-12">
            <h2 className="section-title mb-6 opacity-0 fade-in-element">
              Why Micro-Rituals Work
            </h2>
            <p className="section-subtitle max-w-3xl mx-auto opacity-0 fade-in-element">
              Grand romantic gestures make for great movies, but sustainable relationships are built on consistent, small acts of love and attention.
            </p>
          </div>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            <BenefitCard
              icon={<Clock className="w-6 h-6" />}
              title="Quick & Easy"
              description="Each ritual takes 5 minutes or less, fitting seamlessly into your busy schedule."
              index={0}
            />
            <BenefitCard
              icon={<Zap className="w-6 h-6" />}
              title="Immediate Impact"
              description="Feel the difference right away while building long-term connection habits."
              index={1}
            />
            <BenefitCard
              icon={<Users className="w-6 h-6" />}
              title="Science-Based"
              description="Grounded in relationship research and neuroscience for proven effectiveness."
              index={2}
            />
            <BenefitCard
              icon={<Heart className="w-6 h-6" />}
              title="Builds Intimacy"
              description="Creates positive neurological patterns through repetition and emotional safety."
              index={3}
            />
          </div>
        </div>

        {/* What You'll Get */}
        <div className="bg-gradient-to-br from-teal-50 to-teal-100 rounded-2xl p-8 md:p-12">
          <div className="text-center mb-8">
            <h2 className="section-title mb-4 opacity-0 fade-in-element">
              What You'll Discover
            </h2>
            <p className="section-subtitle opacity-0 fade-in-element">
              A practical toolkit for busy couples who want to reclaim intimacy in an increasingly distracted world.
            </p>
          </div>
          
          <div className="grid md:grid-cols-2 gap-6 max-w-4xl mx-auto">
            <div className="flex items-start space-x-3 opacity-0 fade-in-element">
              <CheckCircle className="w-5 h-5 text-teal-600 mt-1 flex-shrink-0" />
              <div>
                <h4 className="font-semibold mb-1">50+ Carefully Crafted Rituals</h4>
                <p className="text-gray-600 text-sm">Organized by time of day for maximum convenience and impact.</p>
              </div>
            </div>
            <div className="flex items-start space-x-3 opacity-0 fade-in-element">
              <CheckCircle className="w-5 h-5 text-teal-600 mt-1 flex-shrink-0" />
              <div>
                <h4 className="font-semibold mb-1">No Special Equipment</h4>
                <p className="text-gray-600 text-sm">Every ritual uses what you already have - just you and your partner.</p>
              </div>
            </div>
            <div className="flex items-start space-x-3 opacity-0 fade-in-element">
              <CheckCircle className="w-5 h-5 text-teal-600 mt-1 flex-shrink-0" />
              <div>
                <h4 className="font-semibold mb-1">Adaptable to Any Schedule</h4>
                <p className="text-gray-600 text-sm">Works for couples at any stage with any lifestyle or time constraints.</p>
              </div>
            </div>
            <div className="flex items-start space-x-3 opacity-0 fade-in-element">
              <CheckCircle className="w-5 h-5 text-teal-600 mt-1 flex-shrink-0" />
              <div>
                <h4 className="font-semibold mb-1">Sustainable Habits</h4>
                <p className="text-gray-600 text-sm">Build lasting change through small, consistent actions that compound over time.</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
