import { Badge } from "@/components/ui/badge";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { Calendar, User, Tag, Search, ArrowRight, BookOpen, TrendingUp, Filter, Clock } from "lucide-react";
import { useEffect, useState } from "react";
import { useFirebaseData } from "@/hooks/useFirebaseData";
import { Skeleton } from "@/components/ui/skeleton";

const Blog = () => {
  const { blogs, loading } = useFirebaseData();
  const [searchTerm, setSearchTerm] = useState('');
  const [selectedCategory, setSelectedCategory] = useState('All Posts');

  useEffect(() => {
    document.title = "Blog - Maheshwari Nursing College | News, Updates & Career Guidance";
    document.querySelector('meta[name="description"]')?.setAttribute(
      'content', 
      'Stay updated with the latest news, career guidance, industry trends, and educational articles from Maheshwari Nursing College.'
    );
  }, []);

  const categories = [
    "All Posts",
    "Career Guidance",
    "Success Stories", 
    "Academic Updates",
    "Student Wellness",
    "Clinical Training",
    "Financial Aid"
  ];

  const filteredBlogs = blogs.filter(blog => {
    const matchesSearch = !searchTerm || 
      blog.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
      blog.content.toLowerCase().includes(searchTerm.toLowerCase()) ||
      blog.author.toLowerCase().includes(searchTerm.toLowerCase());
    
    const matchesCategory = selectedCategory === 'All Posts' || blog.category === selectedCategory;
    
    return matchesSearch && matchesCategory;
  });

  const featuredPost = blogs.length > 0 ? blogs[0] : null;

  return (
    <div className="min-h-screen bg-background">
      <Header />
      
      <main>
        {/* Hero Section */}
        <section className="relative py-20 bg-gradient-to-r from-navy via-primary to-healthcare">
          <div className="container mx-auto px-4 text-center">
            <Badge variant="secondary" className="mb-4">
              <BookOpen className="h-4 w-4 mr-2" />
              Educational Blog
            </Badge>
            <h1 className="text-4xl md:text-6xl font-bold mb-6 text-white">
              Blog - Maheshwari Nursing College
            </h1>
            <p className="text-xl text-white/90 max-w-3xl mx-auto mb-8">
              Stay updated with the latest trends in nursing education, career guidance, 
              success stories, and industry insights from our expert faculty and alumni.
            </p>
            
            {/* Search Bar */}
            <div className="flex flex-col sm:flex-row gap-4 justify-center max-w-md mx-auto">
              <div className="relative flex-1">
                <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-muted-foreground h-4 w-4" />
                <Input
                  placeholder="Search articles..."
                  value={searchTerm}
                  onChange={(e) => setSearchTerm(e.target.value)}
                  className="pl-10 bg-white/10 border-white/20 text-white placeholder:text-white/60"
                />
              </div>
              <Button variant="hero" onClick={() => setSearchTerm('')}>
                {searchTerm ? 'Clear' : 'Search'}
              </Button>
            </div>
          </div>
        </section>

        {/* Featured Post */}
        <section className="py-20">
          <div className="container mx-auto px-4">
            <div className="text-center mb-12">
              <Badge variant="outline" className="mb-4">
                <TrendingUp className="h-4 w-4 mr-2" />
                Featured Article
              </Badge>
              <h2 className="text-3xl md:text-4xl font-bold mb-4">Latest Insights</h2>
            </div>

            {loading ? (
              <Card className="mb-16 overflow-hidden">
                <CardContent className="p-0">
                  <div className="grid md:grid-cols-2 gap-0">
                    <Skeleton className="h-64 md:h-auto" />
                    <div className="p-8 space-y-4">
                      <Skeleton className="h-6 w-1/3" />
                      <Skeleton className="h-8 w-full" />
                      <Skeleton className="h-4 w-full" />
                      <Skeleton className="h-4 w-2/3" />
                      <div className="flex gap-2">
                        <Skeleton className="h-6 w-20" />
                        <Skeleton className="h-6 w-20" />
                      </div>
                    </div>
                  </div>
                </CardContent>
              </Card>
            ) : featuredPost ? (
              <Card className="mb-16 overflow-hidden hover:shadow-xl transition-shadow">
                <CardContent className="p-0">
                  <div className="grid md:grid-cols-2 gap-0">
                    <div className="h-64 md:h-auto bg-gradient-to-br from-primary to-healthcare flex items-center justify-center overflow-hidden">
                      {featuredPost.image ? (
                        <img 
                          src={featuredPost.image} 
                          alt={featuredPost.title}
                          className="w-full h-full object-cover"
                        />
                      ) : (
                        <div className="text-center text-white p-8">
                          <BookOpen className="h-16 w-16 mx-auto mb-4 opacity-80" />
                          <p className="text-sm opacity-90">Featured Article</p>
                        </div>
                      )}
                    </div>
                    <div className="p-8">
                      <div className="flex items-center gap-4 mb-4">
                        <Badge variant="secondary">{featuredPost.category}</Badge>
                        <span className="text-sm text-muted-foreground flex items-center gap-1">
                          <Clock className="h-3 w-3" />
                          {featuredPost.readTime || '5 min read'}
                        </span>
                      </div>
                      <h3 className="text-2xl font-bold mb-4">{featuredPost.title}</h3>
                      <p className="text-muted-foreground mb-4">
                        {featuredPost.excerpt || featuredPost.content.substring(0, 150) + '...'}
                      </p>
                      <div className="flex items-center gap-4 text-sm text-muted-foreground mb-6">
                        <div className="flex items-center gap-2">
                          <User className="h-4 w-4" />
                          <span>{featuredPost.author}</span>
                        </div>
                        <div className="flex items-center gap-2">
                          <Calendar className="h-4 w-4" />
                          <span>{new Date(featuredPost.createdAt).toLocaleDateString()}</span>
                        </div>
                      </div>
                      <div className="flex flex-wrap gap-2 mb-6">
                        {featuredPost.tags?.map((tag, index) => (
                          <Badge key={index} variant="outline" className="text-xs">
                            <Tag className="h-3 w-3 mr-1" />
                            {tag}
                          </Badge>
                        ))}
                      </div>
                      <Button>
                        Read Full Article
                        <ArrowRight className="h-4 w-4 ml-2" />
                      </Button>
                    </div>
                  </div>
                </CardContent>
              </Card>
            ) : (
              <div className="text-center py-12">
                <BookOpen className="h-16 w-16 mx-auto mb-4 text-muted-foreground" />
                <p className="text-muted-foreground">No blog posts available yet.</p>
              </div>
            )}
          </div>
        </section>

        {/* Blog Posts Grid */}
        <section className="py-20 bg-muted/50">
          <div className="container mx-auto px-4">
            <div className="flex flex-col lg:flex-row gap-8">
              {/* Main Content */}
              <div className="flex-1">
                <div className="text-center mb-12">
                  <div className="flex items-center justify-between mb-4">
                    <h2 className="text-3xl md:text-4xl font-bold">Recent Articles</h2>
                    <div className="flex items-center gap-2">
                      <Filter className="h-4 w-4 text-muted-foreground" />
                      <span className="text-sm text-muted-foreground">
                        {filteredBlogs.length} article{filteredBlogs.length !== 1 ? 's' : ''}
                      </span>
                    </div>
                  </div>
                  <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
                    Explore our collection of informative articles covering various aspects 
                    of nursing education and career development.
                  </p>
                </div>

                {loading ? (
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                    {[...Array(6)].map((_, index) => (
                      <Card key={index}>
                        <CardHeader>
                          <div className="flex items-center justify-between mb-2">
                            <Skeleton className="h-6 w-20" />
                            <Skeleton className="h-4 w-16" />
                          </div>
                          <Skeleton className="h-6 w-full" />
                        </CardHeader>
                        <CardContent>
                          <Skeleton className="h-4 w-full mb-2" />
                          <Skeleton className="h-4 w-2/3 mb-4" />
                          <div className="flex gap-2 mb-4">
                            <Skeleton className="h-4 w-16" />
                            <Skeleton className="h-4 w-20" />
                          </div>
                          <div className="flex gap-2">
                            <Skeleton className="h-6 w-16" />
                            <Skeleton className="h-6 w-20" />
                          </div>
                        </CardContent>
                      </Card>
                    ))}
                  </div>
                ) : filteredBlogs.length > 0 ? (
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                    {filteredBlogs.map((post) => (
                      <Card key={post.id} className="group cursor-pointer hover:shadow-lg transition-shadow">
                        {post.image && (
                          <div className="h-48 overflow-hidden">
                            <img 
                              src={post.image} 
                              alt={post.title}
                              className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                            />
                          </div>
                        )}
                        <CardHeader>
                          <div className="flex items-center justify-between mb-2">
                            <Badge variant="outline">{post.category}</Badge>
                            <span className="text-sm text-muted-foreground flex items-center gap-1">
                              <Clock className="h-3 w-3" />
                              {post.readTime || '5 min read'}
                            </span>
                          </div>
                          <CardTitle className="group-hover:text-primary transition-colors">
                            {post.title}
                          </CardTitle>
                        </CardHeader>
                        <CardContent>
                          <p className="text-muted-foreground mb-4">
                            {post.excerpt || post.content.substring(0, 120) + '...'}
                          </p>
                          <div className="flex items-center gap-4 text-sm text-muted-foreground mb-4">
                            <div className="flex items-center gap-2">
                              <User className="h-4 w-4" />
                              <span>{post.author}</span>
                            </div>
                            <div className="flex items-center gap-2">
                              <Calendar className="h-4 w-4" />
                              <span>{new Date(post.createdAt).toLocaleDateString()}</span>
                            </div>
                          </div>
                          <div className="flex flex-wrap gap-2 mb-4">
                            {post.tags?.map((tag, tagIndex) => (
                              <Badge key={tagIndex} variant="outline" className="text-xs">
                                <Tag className="h-3 w-3 mr-1" />
                                {tag}
                              </Badge>
                            ))}
                          </div>
                          <Button variant="ghost" className="p-0 h-auto">
                            Read More
                            <ArrowRight className="h-4 w-4 ml-2" />
                          </Button>
                        </CardContent>
                      </Card>
                    ))}
                  </div>
                ) : (
                  <div className="text-center py-12">
                    <BookOpen className="h-16 w-16 mx-auto mb-4 text-muted-foreground" />
                    <p className="text-muted-foreground">
                      {searchTerm || selectedCategory !== 'All Posts' 
                        ? 'No articles match your search criteria.' 
                        : 'No blog posts available yet.'
                      }
                    </p>
                    {(searchTerm || selectedCategory !== 'All Posts') && (
                      <Button 
                        variant="outline" 
                        className="mt-4"
                        onClick={() => {
                          setSearchTerm('');
                          setSelectedCategory('All Posts');
                        }}
                      >
                        Clear Filters
                      </Button>
                    )}
                  </div>
                )}

                {/* Load More */}
                <div className="text-center mt-12">
                  <Button variant="outline" size="lg">
                    Load More Articles
                  </Button>
                </div>
              </div>

              {/* Sidebar */}
              <div className="w-full lg:w-80">
                {/* Categories */}
                <Card className="mb-8">
                  <CardHeader>
                    <CardTitle>Categories</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <div className="space-y-2">
                      {categories.map((category, index) => (
                        <Button
                          key={index}
                          variant={selectedCategory === category ? "default" : "ghost"}
                          className="w-full justify-start"
                          onClick={() => setSelectedCategory(category)}
                        >
                          {category}
                          {category !== 'All Posts' && (
                            <span className="ml-auto text-xs">
                              ({blogs.filter(blog => blog.category === category).length})
                            </span>
                          )}
                        </Button>
                      ))}
                    </div>
                  </CardContent>
                </Card>

                {/* Newsletter */}
                <Card>
                  <CardHeader>
                    <CardTitle>Stay Updated</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <p className="text-sm text-muted-foreground mb-4">
                      Subscribe to our newsletter for the latest updates and educational content.
                    </p>
                    <div className="space-y-3">
                      <Input placeholder="Your email address" />
                      <Button className="w-full">Subscribe</Button>
                    </div>
                  </CardContent>
                </Card>
              </div>
            </div>
          </div>
        </section>
      </main>

      <Footer />
    </div>
  );
};

export default Blog;