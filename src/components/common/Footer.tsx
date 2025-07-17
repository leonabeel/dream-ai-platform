import { Brain, Github, Linkedin, Mail, Heart } from 'lucide-react';
import { Button } from '@/components/ui/button';

export const Footer = () => {
  return (
    <footer className="bg-primary text-primary-foreground">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          {/* Brand */}
          <div className="col-span-1 md:col-span-2">
            <div className="flex items-center space-x-2 mb-4">
              <div className="p-2 rounded-lg bg-secondary text-secondary-foreground">
                <Brain className="h-6 w-6" />
              </div>
              <span className="text-xl font-bold">AI Portfolio</span>
            </div>
            <p className="text-primary-foreground/80 mb-4 max-w-md">
              Building the future through artificial intelligence and machine learning. 
              Passionate about creating intelligent solutions that make a difference.
            </p>
            <div className="flex space-x-4">
              <Button variant="ghost" size="icon" className="hover:bg-secondary hover:text-secondary-foreground">
                <Github className="h-5 w-5" />
              </Button>
              <Button variant="ghost" size="icon" className="hover:bg-secondary hover:text-secondary-foreground">
                <Linkedin className="h-5 w-5" />
              </Button>
              <Button variant="ghost" size="icon" className="hover:bg-secondary hover:text-secondary-foreground">
                <Mail className="h-5 w-5" />
              </Button>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="font-semibold mb-4">Quick Links</h3>
            <ul className="space-y-2">
              <li><a href="/about" className="text-primary-foreground/80 hover:text-secondary transition-colors">About</a></li>
              <li><a href="/projects" className="text-primary-foreground/80 hover:text-secondary transition-colors">Projects</a></li>
              <li><a href="/blog" className="text-primary-foreground/80 hover:text-secondary transition-colors">Blog</a></li>
              <li><a href="/contact" className="text-primary-foreground/80 hover:text-secondary transition-colors">Contact</a></li>
            </ul>
          </div>

          {/* Expertise */}
          <div>
            <h3 className="font-semibold mb-4">Expertise</h3>
            <ul className="space-y-2">
              <li><span className="text-primary-foreground/80">Machine Learning</span></li>
              <li><span className="text-primary-foreground/80">Deep Learning</span></li>
              <li><span className="text-primary-foreground/80">NLP</span></li>
              <li><span className="text-primary-foreground/80">Computer Vision</span></li>
            </ul>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="border-t border-primary-foreground/20 mt-8 pt-8 flex flex-col md:flex-row justify-between items-center">
          <p className="text-primary-foreground/60 text-sm">
            © 2024 AI Portfolio. All rights reserved.
          </p>
          <p className="text-primary-foreground/60 text-sm flex items-center mt-2 md:mt-0">
            Made with <Heart className="h-4 w-4 mx-1 text-accent" fill="currentColor" /> for advancing AI
          </p>
        </div>
      </div>
    </footer>
  );
};