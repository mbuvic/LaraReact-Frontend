import { motion } from 'framer-motion';
import { Calendar, User, ArrowRight, Heart, Coffee, Lightbulb } from 'lucide-react';

const Blogs = () => {
  const blogPosts = [
    {
      id: 1,
      title: "The Art of Designing with Empathy",
      excerpt: "How understanding your users' emotions can transform your design process and create more meaningful connections.",
      author: "Sarah Johnson",
      date: "March 15, 2024",
      readTime: "5 min read",
      icon: Heart,
      category: "Design Philosophy"
    },
    {
      id: 2,
      title: "Building Brands That Feel Like Home",
      excerpt: "The secret ingredients that make some brands unforgettable while others fade into the background.",
      author: "Michael Chen",
      date: "March 10, 2024",
      readTime: "7 min read",
      icon: Coffee,
      category: "Branding"
    },
    {
      id: 3,
      title: "The Psychology of Warm Colors in Web Design",
      excerpt: "Why choosing the right color palette is about more than aesthetics—it's about creating emotional connections.",
      author: "Emma Rodriguez",
      date: "March 8, 2024",
      readTime: "4 min read",
      icon: Lightbulb,
      category: "Color Theory"
    },
    {
      id: 4,
      title: "Creating Inclusive Design That Celebrates Everyone",
      excerpt: "Our approach to accessibility that goes beyond compliance to create truly welcoming digital experiences.",
      author: "David Park",
      date: "March 5, 2024",
      readTime: "6 min read",
      icon: Heart,
      category: "Accessibility"
    },
    {
      id: 5,
      title: "The Power of Micro-Interactions",
      excerpt: "Small animations and interactions that make a big difference in how users perceive and enjoy your product.",
      author: "Lisa Thompson",
      date: "March 1, 2024",
      readTime: "5 min read",
      icon: Lightbulb,
      category: "UX Design"
    },
    {
      id: 6,
      title: "Finding Inspiration in Everyday Moments",
      excerpt: "How taking time to notice the small beauties around us can fuel our creativity and improve our work.",
      author: "Sarah Johnson",
      date: "February 28, 2024",
      readTime: "3 min read",
      icon: Coffee,
      category: "Inspiration"
    }
  ];

  const categories = ["All", "Design Philosophy", "Branding", "Color Theory", "Accessibility", "UX Design", "Inspiration"];

  return (
    <div className="py-20 lg:py-32">
      <div className="container mx-auto px-4 lg:px-8">
        {/* Hero Section */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="max-w-4xl mx-auto text-center mb-20"
        >
          <h1 className="heading-primary mb-6">
            Our <span className="text-primary">Stories</span>
          </h1>
          <p className="text-xl text-muted-foreground leading-relaxed">
            Thoughts, insights, and behind-the-scenes glimpses from our creative journey. 
            We share what we've learned, what inspires us, and the little moments 
            that make our work meaningful.
          </p>
        </motion.div>

        {/* Category Filter */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="flex flex-wrap justify-center gap-3 mb-16"
        >
          {categories.map((category, index) => (
            <motion.button
              key={category}
              initial={{ opacity: 0, scale: 0.8 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.4, delay: index * 0.1 }}
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className={`px-6 py-2 rounded-full text-sm font-medium transition-all duration-300 ${
                index === 0 
                  ? 'bg-primary text-primary-foreground shadow-soft' 
                  : 'bg-secondary/50 text-secondary-foreground hover:bg-secondary hover:shadow-soft'
              }`}
            >
              {category}
            </motion.button>
          ))}
        </motion.div>

        {/* Blog Posts Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 mb-20">
          {blogPosts.map((post, index) => (
            <motion.article
              key={post.id}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: index * 0.1 }}
              whileHover={{ y: -8 }}
              viewport={{ once: true }}
              className="card-warm group cursor-pointer"
            >
              {/* Category Icon */}
              <div className="flex items-center justify-between mb-4">
                <div className="inline-flex items-center justify-center w-12 h-12 rounded-2xl bg-primary/10 text-primary group-hover:bg-primary group-hover:text-primary-foreground transition-all duration-300">
                  <post.icon className="w-6 h-6" />
                </div>
                <span className="text-xs font-medium text-primary bg-primary/10 px-3 py-1 rounded-full">
                  {post.category}
                </span>
              </div>

              {/* Title */}
              <h3 className="heading-tertiary mb-3 group-hover:text-primary transition-colors duration-300">
                {post.title}
              </h3>

              {/* Excerpt */}
              <p className="text-muted-foreground leading-relaxed mb-6">
                {post.excerpt}
              </p>

              {/* Meta Information */}
              <div className="flex items-center justify-between text-sm text-muted-foreground mb-4">
                <div className="flex items-center space-x-2">
                  <User className="w-4 h-4" />
                  <span>{post.author}</span>
                </div>
                <span>{post.readTime}</span>
              </div>

              <div className="flex items-center justify-between">
                <div className="flex items-center space-x-2 text-sm text-muted-foreground">
                  <Calendar className="w-4 h-4" />
                  <span>{post.date}</span>
                </div>
                
                <motion.div
                  whileHover={{ x: 5 }}
                  className="flex items-center space-x-2 text-primary font-medium"
                >
                  <span>Read More</span>
                  <ArrowRight className="w-4 h-4" />
                </motion.div>
              </div>
            </motion.article>
          ))}
        </div>

        {/* Newsletter Section */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="max-w-2xl mx-auto text-center bg-gradient-hero rounded-3xl p-12"
        >
          <h2 className="heading-secondary mb-4">
            Stay <span className="text-primary">Inspired</span>
          </h2>
          <p className="text-lg text-muted-foreground mb-8 leading-relaxed">
            Get our latest thoughts and stories delivered to your inbox. 
            No spam, just genuine insights and a little bit of creative magic.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 max-w-md mx-auto">
            <input
              type="email"
              placeholder="Enter your email"
              className="flex-grow px-6 py-3 rounded-2xl border border-border bg-card text-foreground placeholder:text-muted-foreground focus:outline-none focus:ring-2 focus:ring-primary focus:border-transparent transition-all duration-300"
            />
            <motion.button
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="btn-warm flex-shrink-0"
            >
              Subscribe
            </motion.button>
          </div>
        </motion.div>
      </div>
    </div>
  );
};

export default Blogs;