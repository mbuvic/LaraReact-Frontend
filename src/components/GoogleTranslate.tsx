import { useEffect } from 'react';

declare global {
  interface Window {
    googleTranslateElementInit: () => void;
    google: any;
  }
}

const GoogleTranslate = () => {
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
            includedLanguages: 'en,es,fr,de,it,pt,zh-CN,ja,ko,ar,ru',
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

    return () => {
      // Cleanup
      const script = document.getElementById('google-translate-script');
      if (script) {
        script.remove();
      }
      delete window.googleTranslateElementInit;
    };
  }, []);

  return (
    <div 
      id="google_translate_element" 
      className="inline-block"
    />
  );
};

export default GoogleTranslate;
