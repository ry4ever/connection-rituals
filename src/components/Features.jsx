import React, { useEffect, useRef } from "react";
import { cn } from "@/lib/utils";
import { Sunrise, Sun, Moon, Calendar } from "lucide-react";

const FeatureCard = ({ icon, title, description, ritualCount, examples, index }) => {
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
      className={cn(
        "feature-card glass-card opacity-0 p-4 sm:p-6",
        "lg:hover:bg-gradient-to-br lg:hover:from-white lg:hover:to-teal-50",
        "transition-all duration-300"
      )}
      style={{ animationDelay: `${0.1 * index}s` }}
    >
      <div className="rounded-full bg-teal-50 w-10 h-10 sm:w-12 sm:h-12 flex items-center justify-center text-teal-600 mb-4 sm:mb-5">
        {icon}
      </div>
      <h3 className="text-lg sm:text-xl font-semibold mb-2 sm:mb-3">{title}</h3>
      <p className="text-gray-600 text-sm sm:text-base mb-3">{description}</p>
      <div className="text-xs text-teal-600 font-medium mb-2">{ritualCount} Rituals</div>
      <ul className="text-xs text-gray-500 space-y-1">
        {examples.map((example, idx) => (
          <li key={idx}>• {example}</li>
        ))}
      </ul>
    </div>
  );
};

const Features = () => {
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
    <section className="py-12 sm:py-16 md:py-20 pb-0 relative bg-gray-50" id="features" ref={sectionRef}>
      <div className="section-container">
        <div className="text-center mb-10 sm:mb-16">
          <div className="atlas-chip mx-auto mb-3 sm:mb-4 opacity-0 fade-in-element">
            <span className="inline-flex items-center justify-center w-5 h-5 rounded-full bg-teal-600 text-white mr-2">50+</span>
            <span>Connection Rituals</span>
          </div>
          <h2 className="section-title mb-3 sm:mb-4 opacity-0 fade-in-element">
            Micro-Rituals for <br className="hidden sm:block" />Every Moment
          </h2>
          <p className="section-subtitle mx-auto opacity-0 fade-in-element">
            Transform your relationship with simple, science-based practices organized by time of day. Each ritual takes 5 minutes or less.
          </p>
        </div>
        
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-6 md:gap-8">
          <FeatureCard
            icon={<Sunrise className="w-5 h-5 sm:w-6 sm:h-6" />}
            title="Morning Rituals"
            description="Start your day connected as a team rather than two individuals rushing in different directions."
            ritualCount="10"
            examples={["The Three-Minute Hug", "Coffee & Compliments", "Shared Intention Setting"]}
            index={0}
          />
          <FeatureCard
            icon={<Sun className="w-5 h-5 sm:w-6 sm:h-6" />}
            title="Daytime Rituals"
            description="Stay connected throughout busy workdays with simple touchpoints that remind you of your bond."
            ritualCount="15"
            examples={["Thinking of You Text", "Two-Minute Check-In Call", "Thoughtful Link Share"]}
            index={1}
          />
          <FeatureCard
            icon={<Moon className="w-5 h-5 sm:w-6 sm:h-6" />}
            title="Evening Rituals"
            description="Wind down together and create intimate moments that help you reconnect after long days."
            ritualCount="15"
            examples={["Tech-Free Dinner", "Gratitude Sharing", "Bedtime Story Exchange"]}
            index={2}
          />
          <FeatureCard
            icon={<Calendar className="w-5 h-5 sm:w-6 sm:h-6" />}
            title="Weekend Rituals"
            description="Deepen your connection with longer rituals that create lasting memories and strengthen your bond."
            ritualCount="10"
            examples={["Tech-Free Saturday Morning", "Mini Adventure Day", "Love Letter Exchange"]}
            index={3}
          />
        </div>
      </div>
    </section>
  );
};

export default Features;
