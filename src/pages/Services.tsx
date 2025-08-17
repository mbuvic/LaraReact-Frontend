import { motion } from 'framer-motion';
import { Palette, Globe, Sparkles, Heart, ArrowRight } from 'lucide-react';
import { Link } from 'react-router-dom';

const Services = () => {
  const services = [
    {
      icon: Palette,
      title: "Brand Design",
      description: "We create visual identities that tell your story and capture hearts. From logos to complete brand systems, every element is designed to resonate with your audience.",
      features: ["Logo Design", "Brand Guidelines", "Color Palettes", "Typography", "Brand Assets"],
      color: "primary"
    },
    {
      icon: Globe,
      title: "Web Development",
      description: "Beautiful, responsive websites that work flawlessly across all devices. We combine stunning design with solid functionality to create digital experiences people love.",
      features: ["Responsive Design", "Custom Development", "E-commerce", "CMS Integration", "Performance Optimization"],
      color: "accent"
    },
    {
      icon: Sparkles,
      title: "UI/UX Design",
      description: "User experiences that feel intuitive and delightful. We research, prototype, and test every interaction to ensure your users not only achieve their goals but enjoy the journey.",
      features: ["User Research", "Wireframing", "Prototyping", "User Testing", "Design Systems"],
      color: "secondary"
    },
    {
      icon: Heart,
      title: "Consultation",
      description: "Strategic guidance to help your brand find its voice and direction. Whether you're starting fresh or need a creative refresh, we're here to guide you with expertise and care.",
      features: ["Brand Strategy", "Creative Direction", "Market Analysis", "Competitor Research", "Growth Planning"],
      color: "primary"
    }
  ];

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
            Our <span className="text-primary">Services</span>
          </h1>
          <p className="text-xl text-muted-foreground leading-relaxed">
            From concept to completion, we offer a full spectrum of creative services. 
            Each one is delivered with the same level of care, attention, and love 
            that makes our work truly special.
          </p>
        </motion.div>

        {/* Services Grid */}
        <div className="grid lg:grid-cols-2 gap-8 mb-20">
          {services.map((service, index) => (
            <motion.div
              key={service.title}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: index * 0.2 }}
              whileHover={{ y: -8 }}
              viewport={{ once: true }}
              className="card-gradient group"
            >
              <div className="flex items-start space-x-6">
                <div className={`flex-shrink-0 w-16 h-16 rounded-2xl bg-${service.color}/10 text-${service.color} flex items-center justify-center group-hover:bg-${service.color} group-hover:text-${service.color === 'primary' ? 'primary-foreground' : 'white'} transition-all duration-300`}>
                  <service.icon className="w-8 h-8" />
                </div>
                
                <div className="flex-grow">
                  <h3 className="heading-tertiary mb-4">{service.title}</h3>
                  <p className="text-muted-foreground leading-relaxed mb-6">
                    {service.description}
                  </p>
                  
                  <div className="space-y-2 mb-6">
                    {service.features.map((feature, featureIndex) => (
                      <motion.div
                        key={feature}
                        initial={{ opacity: 0, x: -20 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        transition={{ duration: 0.5, delay: index * 0.1 + featureIndex * 0.1 }}
                        viewport={{ once: true }}
                        className="flex items-center space-x-2 text-sm text-muted-foreground"
                      >
                        <div className={`w-2 h-2 rounded-full bg-${service.color}`} />
                        <span>{feature}</span>
                      </motion.div>
                    ))}
                  </div>
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        {/* CTA Section */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="max-w-3xl mx-auto text-center bg-gradient-hero rounded-3xl p-12"
        >
          <h2 className="heading-secondary mb-6">
            Ready to Create Something <span className="text-primary">Amazing</span>?
          </h2>
          <p className="text-lg text-muted-foreground mb-8 leading-relaxed">
            Every great project starts with a conversation. Let's chat about your dreams, 
            your challenges, and how we can help bring your vision to life with warmth and care.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
            <Link
              to="/contact"
              className="btn-warm group inline-flex items-center space-x-2"
            >
              <span>Start Your Project</span>
              <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
            </Link>
            <Link
              to="/blogs"
              className="btn-soft group inline-flex items-center space-x-2"
            >
              <Sparkles className="w-5 h-5" />
              <span>Read Our Stories</span>
            </Link>
          </div>
        </motion.div>
      </div>
    </div>
  );
};

export default Services;