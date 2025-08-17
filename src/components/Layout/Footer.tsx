import { motion } from 'framer-motion';
import { Heart, Instagram, Twitter, Facebook, Mail } from 'lucide-react';

const Footer = () => {
  const socialLinks = [
    { name: 'Instagram', icon: Instagram, href: 'https://instagram.com' },
    { name: 'Twitter', icon: Twitter, href: 'https://twitter.com' },
    { name: 'Facebook', icon: Facebook, href: 'https://facebook.com' },
    { name: 'Email', icon: Mail, href: 'mailto:hello@lovable.com' }
  ];

  return (
    <motion.footer
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      transition={{ duration: 0.6 }}
      viewport={{ once: true }}
      className="bg-gradient-soft border-t border-border"
    >
      <div className="container mx-auto px-4 lg:px-8 py-12">
        <div className="flex flex-col items-center space-y-8">
          {/* Logo */}
          <motion.div
            whileHover={{ scale: 1.05 }}
            transition={{ type: "spring", stiffness: 400, damping: 17 }}
            className="flex items-center space-x-2 text-2xl font-bold text-primary"
          >
            <Heart className="w-8 h-8 fill-current animate-gentle-bounce" />
            <span>Lovable</span>
          </motion.div>

          {/* Social Media Icons */}
          <div className="flex items-center space-x-6">
            {socialLinks.map((social, index) => (
              <motion.a
                key={social.name}
                href={social.href}
                target="_blank"
                rel="noopener noreferrer"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ delay: index * 0.1, duration: 0.5 }}
                whileHover={{ scale: 1.2, rotate: 5 }}
                whileTap={{ scale: 0.95 }}
                viewport={{ once: true }}
                className="p-3 rounded-2xl bg-card hover:bg-primary hover:text-primary-foreground transition-all duration-300 text-muted-foreground hover:shadow-soft"
                aria-label={social.name}
              >
                <social.icon className="w-5 h-5" />
              </motion.a>
            ))}
          </div>

          {/* Copyright */}
          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ delay: 0.6, duration: 0.5 }}
            viewport={{ once: true }}
            className="text-center text-muted-foreground"
          >
            <p className="text-sm">
              © {new Date().getFullYear()} Lovable. Made with{' '}
              <Heart className="inline w-4 h-4 text-primary fill-current mx-1" />
              and lots of care.
            </p>
          </motion.div>

          {/* Decorative Elements */}
          <div className="flex space-x-2 opacity-30">
            {[...Array(5)].map((_, index) => (
              <motion.div
                key={index}
                initial={{ scale: 0 }}
                whileInView={{ scale: 1 }}
                transition={{ 
                  delay: index * 0.1 + 0.8, 
                  duration: 0.5,
                  type: "spring",
                  stiffness: 400,
                  damping: 17
                }}
                viewport={{ once: true }}
                className="w-2 h-2 rounded-full bg-primary"
              />
            ))}
          </div>
        </div>
      </div>
    </motion.footer>
  );
};

export default Footer;