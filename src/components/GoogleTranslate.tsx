import { useEffect, useState } from 'react';
import { Globe } from 'lucide-react';

declare global {
  interface Window {
    googleTranslateElementInit: () => void;
    google: any;
  }
}

const GoogleTranslate = () => {
  const [isOpen, setIsOpen] = useState(false);

  useEffect(() => {
    // Check if script is already loaded
    if (document.getElementById('google-translate-script')) {
      return;
    }

    // Define the initialization function
    window.googleTranslateElementInit = () => {
      if (window.google?.translate?.TranslateElement) {
        new window.google.translate.TranslateElement(
          {
            pageLanguage: 'en',
            includedLanguages: 'en,es,fr,de,it,pt,zh-CN,ja,ko,ar,ru,sw,luo',
            layout: window.google.translate.TranslateElement.InlineLayout.SIMPLE,
            autoDisplay: false,
          },
          'google_translate_element'
        );
      }
    };

    // Create and load the script
    const script = document.createElement('script');
    script.id = 'google-translate-script';
    script.src = '//translate.google.com/translate_a/element.js?cb=googleTranslateElementInit';
    script.async = true;
    document.body.appendChild(script);

    // Hide the Google Translate top bar
    const style = document.createElement('style');
    style.innerHTML = `
      .goog-te-banner-frame.skiptranslate,
      .goog-te-banner-frame,
      .goog-te-banner-frame.skiptranslate iframe,
      iframe.goog-te-banner-frame.skiptranslate {
        display: none !important;
        visibility: hidden !important;
      }
      body {
        top: 0 !important;
        position: static !important;
      }
      body.translated-ltr {
        margin-top: 0 !important;
      }
    `;
    style.id = 'google-translate-custom-styles';
    document.head.appendChild(style);

    // Additional observer to catch the banner when it appears
    const observer = new MutationObserver(() => {
      const banner = document.querySelector('.goog-te-banner-frame');
      if (banner) {
        (banner as HTMLElement).style.display = 'none';
        (banner as HTMLElement).style.visibility = 'hidden';
      }
      document.body.style.top = '0';
      document.body.style.position = 'static';
    });

    observer.observe(document.body, {
      childList: true,
      subtree: true
    });

    return () => {
      // Cleanup
      observer.disconnect();
      const script = document.getElementById('google-translate-script');
      if (script) {
        script.remove();
      }
      const styles = document.getElementById('google-translate-custom-styles');
      if (styles) {
        styles.remove();
      }
      delete window.googleTranslateElementInit;
    };
  }, []);

  return (
    <div className="relative">
      <button
        onClick={() => setIsOpen(!isOpen)}
        className="flex items-center gap-2 px-4 py-2 rounded-xl bg-secondary/50 text-secondary-foreground hover:bg-secondary transition-all duration-300 font-medium"
      >
        <Globe className="w-4 h-4" />
        <span className="hidden sm:inline">Language</span>
      </button>
      
      <div 
        id="google_translate_element" 
        className={`absolute top-full right-0 mt-2 ${isOpen ? 'block' : 'hidden'}`}
      />
    </div>
  );
};

export default GoogleTranslate;
