import { useState } from 'react';
import { Calendar, Clock, Tag, Search } from 'lucide-react';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';

const Blog = () => {
  const [searchTerm, setSearchTerm] = useState('');
  const [selectedTag, setSelectedTag] = useState('All');

  const tags = ['All', 'Machine Learning', 'Deep Learning', 'NLP', 'Research', 'Tutorial', 'Career'];

  const blogPosts = [
    {
      id: 1,
      title: "Understanding Transformer Architecture: A Deep Dive",
      excerpt: "Exploring the revolutionary transformer architecture that powers modern NLP models like GPT and BERT.",
      content: "The transformer architecture has revolutionized natural language processing...",
      publishedAt: "2024-01-15",
      readingTime: 8,
      tags: ["Deep Learning", "NLP", "Research"],
      featured: true
    },
    {
      id: 2,
      title: "Building Your First Neural Network with PyTorch",
      excerpt: "A comprehensive tutorial on creating, training, and deploying neural networks using PyTorch framework.",
      content: "PyTorch has become one of the most popular frameworks for deep learning...",
      publishedAt: "2024-01-10",
      readingTime: 12,
      tags: ["Tutorial", "Deep Learning", "Machine Learning"],
      featured: false
    },
    {
      id: 3,
      title: "The Future of AI in Healthcare",
      excerpt: "Examining how artificial intelligence is transforming medical diagnosis, treatment, and patient care.",
      content: "Artificial intelligence is making unprecedented advances in healthcare...",
      publishedAt: "2024-01-05",
      readingTime: 6,
      tags: ["Research", "Machine Learning"],
      featured: true
    },
    {
      id: 4,
      title: "My Journey to AI Research: Lessons Learned",
      excerpt: "Personal insights and advice for aspiring AI researchers entering the field.",
      content: "Starting a career in AI research can be both exciting and overwhelming...",
      publishedAt: "2024-01-01",
      readingTime: 5,
      tags: ["Career", "Research"],
      featured: false
    }
  ];

  const filteredPosts = blogPosts.filter(post => {
    const matchesSearch = post.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
                         post.excerpt.toLowerCase().includes(searchTerm.toLowerCase()) ||
                         post.tags.some(tag => tag.toLowerCase().includes(searchTerm.toLowerCase()));
    const matchesTag = selectedTag === 'All' || post.tags.includes(selectedTag);
    return matchesSearch && matchesTag;
  });

  const formatDate = (dateString: string) => {
    return new Date(dateString).toLocaleDateString('en-US', {
      year: 'numeric',
      month: 'long',
      day: 'numeric'
    });
  };

  return (
    <div className="min-h-screen py-20">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-16 animate-fade-in">
          <h1 className="text-4xl md:text-5xl font-bold mb-6">
            AI Research <span className="bg-gradient-primary bg-clip-text text-transparent">Blog</span>
          </h1>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            Insights, tutorials, and thoughts on artificial intelligence, machine learning, and research.
          </p>
        </div>

        {/* Search and Filter */}
        <div className="mb-12 animate-fade-in-delay">
          <div className="flex flex-col md:flex-row gap-4 items-center justify-between">
            <div className="relative flex-1 max-w-md">
              <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 h-4 w-4 text-muted-foreground" />
              <Input
                placeholder="Search articles..."
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
                className="pl-10"
              />
            </div>
            <div className="flex flex-wrap gap-2">
              {tags.map((tag) => (
                <Button
                  key={tag}
                  variant={selectedTag === tag ? "default" : "outline"}
                  size="sm"
                  onClick={() => setSelectedTag(tag)}
                  className={selectedTag === tag ? "bg-gradient-primary" : ""}
                >
                  {tag}
                </Button>
              ))}
            </div>
          </div>
        </div>

        {/* Featured Posts */}
        {selectedTag === 'All' && searchTerm === '' && (
          <div className="mb-16">
            <h2 className="text-2xl font-bold mb-8">Featured Articles</h2>
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
              {blogPosts.filter(post => post.featured).map((post, index) => (
                <Card 
                  key={post.id}
                  className="group hover:shadow-neural transition-all duration-300 animate-fade-in cursor-pointer"
                  style={{ animationDelay: `${index * 100}ms` }}
                >
                  <CardHeader>
                    <div className="flex justify-between items-start mb-2">
                      <Badge className="bg-accent text-accent-foreground">Featured</Badge>
                      <div className="flex items-center text-sm text-muted-foreground">
                        <Clock className="h-4 w-4 mr-1" />
                        {post.readingTime} min read
                      </div>
                    </div>
                    <CardTitle className="text-xl group-hover:text-secondary transition-colors line-clamp-2">
                      {post.title}
                    </CardTitle>
                  </CardHeader>
                  <CardContent className="space-y-4">
                    <p className="text-muted-foreground leading-relaxed line-clamp-3">
                      {post.excerpt}
                    </p>
                    <div className="flex flex-wrap gap-2">
                      {post.tags.map((tag) => (
                        <Badge key={tag} variant="secondary" className="text-xs">
                          {tag}
                        </Badge>
                      ))}
                    </div>
                    <div className="flex items-center justify-between pt-2">
                      <div className="flex items-center text-sm text-muted-foreground">
                        <Calendar className="h-4 w-4 mr-2" />
                        {formatDate(post.publishedAt)}
                      </div>
                      <Button variant="ghost" size="sm" className="group-hover:text-secondary">
                        Read More →
                      </Button>
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        )}

        {/* All Posts */}
        <div>
          <h2 className="text-2xl font-bold mb-8">
            {selectedTag === 'All' && searchTerm === '' ? 'All Articles' : 'Articles'}
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {filteredPosts.map((post, index) => (
              <Card 
                key={post.id}
                className="group hover:shadow-neural transition-all duration-300 animate-fade-in cursor-pointer"
                style={{ animationDelay: `${index * 100}ms` }}
              >
                <CardHeader>
                  <div className="flex justify-between items-center mb-2">
                    <div className="flex items-center text-sm text-muted-foreground">
                      <Calendar className="h-4 w-4 mr-2" />
                      {formatDate(post.publishedAt)}
                    </div>
                    <div className="flex items-center text-sm text-muted-foreground">
                      <Clock className="h-4 w-4 mr-1" />
                      {post.readingTime} min
                    </div>
                  </div>
                  <CardTitle className="text-lg group-hover:text-secondary transition-colors line-clamp-2">
                    {post.title}
                  </CardTitle>
                </CardHeader>
                <CardContent className="space-y-4">
                  <p className="text-muted-foreground leading-relaxed line-clamp-3">
                    {post.excerpt}
                  </p>
                  <div className="flex flex-wrap gap-2">
                    {post.tags.slice(0, 2).map((tag) => (
                      <Badge key={tag} variant="secondary" className="text-xs">
                        {tag}
                      </Badge>
                    ))}
                    {post.tags.length > 2 && (
                      <Badge variant="outline" className="text-xs">
                        +{post.tags.length - 2}
                      </Badge>
                    )}
                  </div>
                  <Button variant="ghost" size="sm" className="w-full group-hover:text-secondary">
                    Read Article →
                  </Button>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>

        {/* No Results */}
        {filteredPosts.length === 0 && (
          <div className="text-center py-12">
            <Search className="h-12 w-12 text-muted-foreground mx-auto mb-4" />
            <h3 className="text-xl font-semibold mb-2">No articles found</h3>
            <p className="text-muted-foreground">Try adjusting your search or filter criteria.</p>
          </div>
        )}

        {/* Newsletter CTA */}
        <div className="text-center mt-16 py-12 bg-gradient-card rounded-2xl border animate-fade-in">
          <h2 className="text-2xl font-bold mb-4">Stay Updated</h2>
          <p className="text-muted-foreground mb-6 max-w-2xl mx-auto">
            Get notified about new articles, research insights, and AI/ML developments.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center max-w-md mx-auto">
            <Input placeholder="Enter your email" className="flex-1" />
            <Button className="bg-gradient-primary hover:shadow-neural transition-all duration-300">
              Subscribe
            </Button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Blog;