// GLightboxDemo.tsx
import React, { useEffect } from 'react';
import GLightbox from 'glightbox';
import 'glightbox/dist/css/glightbox.min.css';

const GLightboxDemo: React.FC = () => {
  useEffect(() => {
    const lightbox = GLightbox({
      selector: '.glightbox-demo' // Ajusta este selector al que uses
    });
    
    return () => {
      lightbox.destroy();
    }
  }, []);

  return (
    <div>
      <a href="https://via.placeholder.com/1200" className="glightbox-demo" data-gallery="gallery1" data-glightbox="title: My Title; description: This is a description.">
        <img src="https://via.placeholder.com/200" alt="Placeholder"/>
      </a>
      <a href="https://via.placeholder.com/1200" className="glightbox-demo" data-gallery="gallery1">
        <img src="https://via.placeholder.com/200" alt="Placeholder"/>
      </a>
      {/* Puedes añadir más elementos aquí */}
    </div>
  );
};

export default GLightboxDemo;
