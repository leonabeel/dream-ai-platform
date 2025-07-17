import { useState, useEffect } from 'react';
import { ArrowRight, Download, Github, Linkedin, Mail } from 'lucide-react';
import { Button } from '@/components/ui/button';
import heroImage from '@/assets/hero-ai-banner.jpg';

const roles = [
  'AI Engineer',
  'Machine Learning Researcher',
  'Full-Stack Developer',
  'Data Scientist',
  'Neural Network Architect'
];

export const HeroSection = () => {
  const [currentRoleIndex, setCurrentRoleIndex] = useState(0);
  const [displayText, setDisplayText] = useState('');
  const [isTyping, setIsTyping] = useState(true);

  useEffect(() => {
    const currentRole = roles[currentRoleIndex];
    
    if (isTyping) {
      // Typing effect
      if (displayText.length < currentRole.length) {
        const timeout = setTimeout(() => {
          setDisplayText(currentRole.slice(0, displayText.length + 1));
        }, 100);
        return () => clearTimeout(timeout);
      } else {
        // Pause at end of word
        const timeout = setTimeout(() => {
          setIsTyping(false);
        }, 2000);
        return () => clearTimeout(timeout);
      }
    } else {
      // Erasing effect
      if (displayText.length > 0) {
        const timeout = setTimeout(() => {
          setDisplayText(displayText.slice(0, -1));
        }, 50);
        return () => clearTimeout(timeout);
      } else {
        // Move to next role
        setCurrentRoleIndex((prev) => (prev + 1) % roles.length);
        setIsTyping(true);
      }
    }
  }, [displayText, isTyping, currentRoleIndex]);

  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
      {/* Hero Background */}
      <div 
        className="absolute inset-0 bg-cover bg-center bg-no-repeat opacity-10"
        style={{ backgroundImage: `url(${heroImage})` }}
      />
      
      {/* Gradient Overlay */}
      <div className="absolute inset-0 bg-gradient-to-br from-primary/20 via-transparent to-secondary/20" />
      
      {/* Floating Elements */}
      <div className="absolute top-20 left-10 w-4 h-4 bg-secondary rounded-full animate-float opacity-60" />
      <div className="absolute top-40 right-20 w-6 h-6 bg-accent rounded-full animate-float opacity-40" style={{ animationDelay: '1s' }} />
      <div className="absolute bottom-32 left-20 w-3 h-3 bg-secondary rounded-full animate-float opacity-50" style={{ animationDelay: '2s' }} />

      <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="max-w-4xl mx-auto text-center">
          {/* Main Heading */}
          <div className="space-y-6 animate-fade-in">
            <h1 className="text-5xl md:text-7xl font-bold leading-tight">
              Hi, I'm{' '}
              <span className="bg-gradient-primary bg-clip-text text-transparent">
                Your Name
              </span>
            </h1>
            
            {/* Typewriter Effect */}
            <div className="h-20 flex items-center justify-center">
              <h2 className="text-2xl md:text-4xl font-semibold text-muted-foreground">
                I'm a{' '}
                <span className="text-secondary relative">
                  {displayText}
                  <span 
                    className="inline-block w-0.5 h-8 bg-secondary ml-1 animate-blink"
                    style={{ animation: 'blink 1s infinite' }}
                  />
                </span>
              </h2>
            </div>

            {/* Description */}
            <p className="text-lg md:text-xl text-muted-foreground max-w-2xl mx-auto leading-relaxed animate-fade-in-delay">
              Passionate about building intelligent systems that solve real-world problems. 
              Specializing in deep learning, natural language processing, and scalable AI solutions.
            </p>

            {/* CTA Buttons */}
            <div className="flex flex-col sm:flex-row gap-4 justify-center items-center pt-8 animate-fade-in-delay">
              <Button 
                size="lg"
                className="group bg-gradient-primary hover:shadow-neural transition-all duration-300"
              >
                View My Projects
                <ArrowRight className="ml-2 h-4 w-4 group-hover:translate-x-1 transition-transform" />
              </Button>
              
              <Button 
                variant="outline" 
                size="lg"
                className="hover:shadow-glow transition-all duration-300"
              >
                <Download className="mr-2 h-4 w-4" />
                Download Resume
              </Button>
            </div>

            {/* Social Links */}
            <div className="flex justify-center space-x-6 pt-8 animate-fade-in-delay">
              <Button variant="ghost" size="icon" className="hover:text-secondary hover:scale-110 transition-all">
                <Github className="h-6 w-6" />
              </Button>
              <Button variant="ghost" size="icon" className="hover:text-secondary hover:scale-110 transition-all">
                <Linkedin className="h-6 w-6" />
              </Button>
              <Button variant="ghost" size="icon" className="hover:text-secondary hover:scale-110 transition-all">
                <Mail className="h-6 w-6" />
              </Button>
            </div>
          </div>
        </div>
      </div>

      {/* Scroll Indicator */}
      <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce">
        <div className="w-6 h-10 border-2 border-secondary rounded-full flex justify-center">
          <div className="w-1 h-3 bg-secondary rounded-full animate-pulse mt-2" />
        </div>
      </div>
    </section>
  );
};