// AOSDemo.tsx
import React, { useEffect } from 'react';
import AOS from 'aos';
import 'aos/dist/aos.css'; // Importar el CSS de AOS aquí

const AOSDemo: React.FC = () => {
  useEffect(() => {
    // Inicializar AOS
    AOS.init({
      duration: 2000, // valores globales de duración de las animaciones
    });
  }, []);

  return (
    <div>
      <div data-aos="fade-up">
        Este texto se animará hacia arriba al hacer scroll.
      </div>
      <div data-aos="fade-down" data-aos-delay="500">
        Este texto se animará hacia abajo al hacer scroll, con un retraso.
      </div>
      
    </div>
  );
};

export default AOSDemo;
