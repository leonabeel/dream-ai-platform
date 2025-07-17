import { useState } from 'react';
import { Github, ExternalLink, Search, Filter } from 'lucide-react';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';

const Projects = () => {
  const [searchTerm, setSearchTerm] = useState('');
  const [selectedCategory, setSelectedCategory] = useState('All');

  const categories = ['All', 'Deep Learning', 'NLP', 'Computer Vision', 'Web Development', 'Data Science'];

  const projects = [
    {
      id: 1,
      title: "Neural Style Transfer",
      description: "Implementation of artistic style transfer using convolutional neural networks. Transforms images by applying the artistic style of famous paintings.",
      category: "Deep Learning",
      techStack: ["Python", "TensorFlow", "OpenCV", "NumPy"],
      githubUrl: "https://github.com",
      liveUrl: "https://demo.com",
      image: "https://images.unsplash.com/photo-1518770660439-4636190af475?w=400&h=250&fit=crop",
      featured: true
    },
    {
      id: 2,
      title: "Sentiment Analysis API",
      description: "RESTful API for real-time sentiment analysis using transformer models. Processes social media data to extract emotional insights.",
      category: "NLP",
      techStack: ["Python", "FastAPI", "Hugging Face", "PostgreSQL"],
      githubUrl: "https://github.com",
      liveUrl: "https://api.demo.com",
      image: "https://images.unsplash.com/photo-1461749280684-dccba630e2f6?w=400&h=250&fit=crop",
      featured: true
    },
    {
      id: 3,
      title: "Object Detection System",
      description: "Real-time object detection and tracking system using YOLO architecture. Deployed for security and surveillance applications.",
      category: "Computer Vision",
      techStack: ["Python", "PyTorch", "OpenCV", "Flask"],
      githubUrl: "https://github.com",
      liveUrl: null,
      image: "https://images.unsplash.com/photo-1488590528505-98d2b5aba04b?w=400&h=250&fit=crop",
      featured: false
    },
    {
      id: 4,
      title: "AI Research Portal",
      description: "Full-stack web application for managing AI research papers, citations, and collaboration tools for research teams.",
      category: "Web Development",
      techStack: ["React", "Node.js", "MongoDB", "TypeScript"],
      githubUrl: "https://github.com",
      liveUrl: "https://portal.demo.com",
      image: "https://images.unsplash.com/photo-1486312338219-ce68d2c6f44d?w=400&h=250&fit=crop",
      featured: false
    }
  ];

  const filteredProjects = projects.filter(project => {
    const matchesSearch = project.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
                         project.description.toLowerCase().includes(searchTerm.toLowerCase()) ||
                         project.techStack.some(tech => tech.toLowerCase().includes(searchTerm.toLowerCase()));
    const matchesCategory = selectedCategory === 'All' || project.category === selectedCategory;
    return matchesSearch && matchesCategory;
  });

  return (
    <div className="min-h-screen py-20">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-16 animate-fade-in">
          <h1 className="text-4xl md:text-5xl font-bold mb-6">
            My <span className="bg-gradient-primary bg-clip-text text-transparent">Projects</span>
          </h1>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            A showcase of my AI/ML projects, research implementations, and full-stack applications.
          </p>
        </div>

        {/* Search and Filter */}
        <div className="mb-12 animate-fade-in-delay">
          <div className="flex flex-col md:flex-row gap-4 items-center justify-between">
            <div className="relative flex-1 max-w-md">
              <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 h-4 w-4 text-muted-foreground" />
              <Input
                placeholder="Search projects..."
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
                className="pl-10"
              />
            </div>
            <div className="flex flex-wrap gap-2">
              {categories.map((category) => (
                <Button
                  key={category}
                  variant={selectedCategory === category ? "default" : "outline"}
                  size="sm"
                  onClick={() => setSelectedCategory(category)}
                  className={selectedCategory === category ? "bg-gradient-primary" : ""}
                >
                  {category}
                </Button>
              ))}
            </div>
          </div>
        </div>

        {/* Projects Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {filteredProjects.map((project, index) => (
            <Card 
              key={project.id} 
              className="group hover:shadow-neural transition-all duration-300 animate-fade-in overflow-hidden"
              style={{ animationDelay: `${index * 100}ms` }}
            >
              {/* Project Image */}
              <div className="relative overflow-hidden">
                <img
                  src={project.image}
                  alt={project.title}
                  className="w-full h-48 object-cover group-hover:scale-105 transition-transform duration-300"
                />
                {project.featured && (
                  <Badge className="absolute top-2 right-2 bg-accent text-accent-foreground">
                    Featured
                  </Badge>
                )}
              </div>

              <CardHeader>
                <div className="flex justify-between items-start">
                  <CardTitle className="text-xl group-hover:text-secondary transition-colors">
                    {project.title}
                  </CardTitle>
                  <Badge variant="outline">{project.category}</Badge>
                </div>
              </CardHeader>

              <CardContent className="space-y-4">
                <p className="text-muted-foreground leading-relaxed">
                  {project.description}
                </p>

                {/* Tech Stack */}
                <div className="flex flex-wrap gap-2">
                  {project.techStack.map((tech) => (
                    <Badge key={tech} variant="secondary" className="text-xs">
                      {tech}
                    </Badge>
                  ))}
                </div>

                {/* Action Buttons */}
                <div className="flex gap-2 pt-2">
                  <Button variant="outline" size="sm" className="flex-1" asChild>
                    <a href={project.githubUrl} target="_blank" rel="noopener noreferrer">
                      <Github className="h-4 w-4 mr-2" />
                      Code
                    </a>
                  </Button>
                  {project.liveUrl && (
                    <Button size="sm" className="flex-1 bg-gradient-primary" asChild>
                      <a href={project.liveUrl} target="_blank" rel="noopener noreferrer">
                        <ExternalLink className="h-4 w-4 mr-2" />
                        Demo
                      </a>
                    </Button>
                  )}
                </div>
              </CardContent>
            </Card>
          ))}
        </div>

        {/* No Results */}
        {filteredProjects.length === 0 && (
          <div className="text-center py-12">
            <Filter className="h-12 w-12 text-muted-foreground mx-auto mb-4" />
            <h3 className="text-xl font-semibold mb-2">No projects found</h3>
            <p className="text-muted-foreground">Try adjusting your search or filter criteria.</p>
          </div>
        )}

        {/* CTA Section */}
        <div className="text-center mt-16 py-12 bg-gradient-card rounded-2xl border animate-fade-in">
          <h2 className="text-2xl font-bold mb-4">Interested in Collaboration?</h2>
          <p className="text-muted-foreground mb-6 max-w-2xl mx-auto">
            I'm always excited to work on innovative AI projects and research opportunities.
          </p>
          <Button size="lg" className="bg-gradient-primary hover:shadow-neural transition-all duration-300">
            Get In Touch
          </Button>
        </div>
      </div>
    </div>
  );
};

export default Projects;