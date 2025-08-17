import { motion } from 'framer-motion';
import { Heart, Users, Award, Coffee } from 'lucide-react';

const About = () => {
  const stats = [
    { number: '500+', label: 'Happy Clients', icon: Heart },
    { number: '50+', label: 'Team Members', icon: Users },
    { number: '100+', label: 'Awards Won', icon: Award },
    { number: '∞', label: 'Cups of Coffee', icon: Coffee }
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
            Our <span className="text-primary">Story</span>
          </h1>
          <p className="text-xl text-muted-foreground leading-relaxed">
            Born from a simple belief that design should touch hearts, not just eyes. 
            We're a family of creatives who found each other through shared dreams 
            and a love for making the world a little more beautiful.
          </p>
        </motion.div>

        {/* Main Story */}
        <div className="max-w-4xl mx-auto mb-20">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="card-gradient mb-12"
          >
            <h2 className="heading-secondary mb-6">How It All Started</h2>
            <div className="space-y-6 text-lg text-muted-foreground leading-relaxed">
              <p>
                It was a rainy Tuesday morning in 2018 when our founder, Sarah, sketched the first 
                Lovable logo on a coffee-stained napkin. She had just left her corporate job, 
                tired of creating soulless designs that no one remembered or cared about.
              </p>
              <p>
                "What if we could make people feel something?" she wondered. "What if every website, 
                every brand, every digital experience could be a warm hug instead of a cold handshake?"
              </p>
              <p>
                That simple question became our mission. We started small, working from Sarah's 
                living room with just a laptop and an endless supply of chamomile tea. But word 
                spread quickly about the "design studio that actually cares."
              </p>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            viewport={{ once: true }}
            className="card-warm"
          >
            <h2 className="heading-secondary mb-6">What Drives Us Today</h2>
            <div className="space-y-6 text-lg text-muted-foreground leading-relaxed">
              <p>
                Five years later, we're still that same team of dreamers, just a bit bigger and 
                with more comfortable chairs. We believe that behind every pixel is a person, 
                and behind every person is a story worth telling beautifully.
              </p>
              <p>
                We don't just create designs; we craft experiences that make people smile, 
                websites that feel like home, and brands that customers genuinely love. 
                Because in a world full of noise, we choose to be the gentle whisper that 
                says "you matter."
              </p>
            </div>
          </motion.div>
        </div>

        {/* Stats Section */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="grid grid-cols-2 lg:grid-cols-4 gap-8 mb-20"
        >
          {stats.map((stat, index) => (
            <motion.div
              key={stat.label}
              initial={{ opacity: 0, scale: 0.8 }}
              whileInView={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              whileHover={{ scale: 1.05 }}
              viewport={{ once: true }}
              className="text-center p-6 rounded-3xl bg-card hover:bg-card-hover transition-all duration-300 hover:shadow-soft"
            >
              <div className="inline-flex items-center justify-center w-16 h-16 rounded-2xl bg-primary/10 text-primary mb-4">
                <stat.icon className="w-8 h-8" />
              </div>
              <div className="text-3xl font-bold text-primary mb-2">{stat.number}</div>
              <div className="text-muted-foreground">{stat.label}</div>
            </motion.div>
          ))}
        </motion.div>

        {/* Values Section */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="max-w-3xl mx-auto text-center"
        >
          <h2 className="heading-secondary mb-12">
            Our <span className="text-primary">Values</span>
          </h2>
          <div className="grid md:grid-cols-3 gap-8">
            {[
              {
                title: "Empathy First",
                description: "We design with hearts, not just minds. Every decision considers the human on the other side."
              },
              {
                title: "Quality Always",
                description: "Good enough isn't good enough. We pour love into every detail until it's perfect."
              },
              {
                title: "Joy in Everything",
                description: "Work should be fun, life should be celebrated, and designs should spark happiness."
              }
            ].map((value, index) => (
              <motion.div
                key={value.title}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.2 }}
                viewport={{ once: true }}
                className="text-center"
              >
                <h3 className="heading-tertiary mb-4 text-primary">{value.title}</h3>
                <p className="text-muted-foreground leading-relaxed">{value.description}</p>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>
    </div>
  );
};

export default About;