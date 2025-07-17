import { GraduationCap, Award, Code, Brain, Database, Cloud } from 'lucide-react';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Button } from '@/components/ui/button';

const About = () => {
  const skills = {
    "Programming Languages": ["Python", "JavaScript", "TypeScript", "R", "SQL", "Java"],
    "ML/AI Frameworks": ["TensorFlow", "PyTorch", "Scikit-learn", "Hugging Face", "OpenCV", "Pandas"],
    "Cloud Platforms": ["AWS", "Google Cloud", "Azure", "Docker", "Kubernetes"],
    "Web Technologies": ["React", "Node.js", "FastAPI", "PostgreSQL", "MongoDB"]
  };

  return (
    <div className="min-h-screen py-20">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-16 animate-fade-in">
          <h1 className="text-4xl md:text-5xl font-bold mb-6">
            About <span className="bg-gradient-primary bg-clip-text text-transparent">Me</span>
          </h1>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            Passionate AI/ML Engineer with a vision to advance artificial intelligence research 
            and create impactful solutions for real-world challenges.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-start">
          {/* Bio Section */}
          <div className="space-y-8 animate-fade-in">
            <Card className="hover:shadow-neural transition-all duration-300">
              <CardHeader>
                <CardTitle className="flex items-center gap-2">
                  <Brain className="h-6 w-6 text-secondary" />
                  My Journey
                </CardTitle>
              </CardHeader>
              <CardContent className="space-y-4">
                <p className="text-muted-foreground leading-relaxed">
                  As an aspiring AI/ML researcher, I'm driven by the potential to solve complex problems 
                  through intelligent systems. My journey began with computer science fundamentals and 
                  has evolved into specializing in cutting-edge AI technologies.
                </p>
                <p className="text-muted-foreground leading-relaxed">
                  Currently pursuing opportunities for advanced research in artificial intelligence, 
                  with goals to contribute to breakthrough AI research and secure a position at a 
                  leading technology company.
                </p>
              </CardContent>
            </Card>

            <Card className="hover:shadow-neural transition-all duration-300">
              <CardHeader>
                <CardTitle className="flex items-center gap-2">
                  <GraduationCap className="h-6 w-6 text-accent" />
                  Education
                </CardTitle>
              </CardHeader>
              <CardContent>
                <div className="space-y-4">
                  <div className="border-l-4 border-secondary pl-4">
                    <h3 className="font-semibold">Master of Computer Science (MCS)</h3>
                    <p className="text-muted-foreground">NUST, Islamabad</p>
                    <p className="text-sm text-muted-foreground">Specialization in AI/ML</p>
                  </div>
                </div>
              </CardContent>
            </Card>

            <Card className="hover:shadow-neural transition-all duration-300">
              <CardHeader>
                <CardTitle className="flex items-center gap-2">
                  <Award className="h-6 w-6 text-accent" />
                  Goals & Aspirations
                </CardTitle>
              </CardHeader>
              <CardContent>
                <ul className="space-y-2 text-muted-foreground">
                  <li className="flex items-start gap-2">
                    <div className="w-2 h-2 bg-secondary rounded-full mt-2 flex-shrink-0" />
                    Secure fully-funded Master's scholarship in AI/ML in the USA
                  </li>
                  <li className="flex items-start gap-2">
                    <div className="w-2 h-2 bg-secondary rounded-full mt-2 flex-shrink-0" />
                    Publish high-impact research papers in top AI conferences
                  </li>
                  <li className="flex items-start gap-2">
                    <div className="w-2 h-2 bg-secondary rounded-full mt-2 flex-shrink-0" />
                    Join a leading tech company as an AI/ML Engineer
                  </li>
                </ul>
              </CardContent>
            </Card>
          </div>

          {/* Skills Section */}
          <div className="space-y-8 animate-fade-in-delay">
            <Card className="hover:shadow-neural transition-all duration-300">
              <CardHeader>
                <CardTitle className="flex items-center gap-2">
                  <Code className="h-6 w-6 text-secondary" />
                  Technical Skills
                </CardTitle>
              </CardHeader>
              <CardContent className="space-y-6">
                {Object.entries(skills).map(([category, skillList]) => (
                  <div key={category}>
                    <h3 className="font-semibold mb-3 text-primary">{category}</h3>
                    <div className="flex flex-wrap gap-2">
                      {skillList.map((skill) => (
                        <Badge 
                          key={skill} 
                          variant="secondary" 
                          className="hover:bg-secondary/80 transition-colors"
                        >
                          {skill}
                        </Badge>
                      ))}
                    </div>
                  </div>
                ))}
              </CardContent>
            </Card>

            <Card className="hover:shadow-neural transition-all duration-300">
              <CardHeader>
                <CardTitle>Research Interests</CardTitle>
              </CardHeader>
              <CardContent>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div className="flex items-center gap-3 p-3 rounded-lg bg-muted/50">
                    <Database className="h-5 w-5 text-secondary" />
                    <span className="text-sm font-medium">Deep Learning</span>
                  </div>
                  <div className="flex items-center gap-3 p-3 rounded-lg bg-muted/50">
                    <Brain className="h-5 w-5 text-secondary" />
                    <span className="text-sm font-medium">NLP</span>
                  </div>
                  <div className="flex items-center gap-3 p-3 rounded-lg bg-muted/50">
                    <Cloud className="h-5 w-5 text-secondary" />
                    <span className="text-sm font-medium">Computer Vision</span>
                  </div>
                  <div className="flex items-center gap-3 p-3 rounded-lg bg-muted/50">
                    <Award className="h-5 w-5 text-secondary" />
                    <span className="text-sm font-medium">Reinforcement Learning</span>
                  </div>
                </div>
              </CardContent>
            </Card>

            <div className="text-center">
              <Button size="lg" className="bg-gradient-primary hover:shadow-neural transition-all duration-300">
                Download Full Resume
              </Button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default About;