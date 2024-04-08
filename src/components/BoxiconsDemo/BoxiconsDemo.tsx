// BoxiconsDemo.tsx
import React from 'react';

const BoxiconsDemo: React.FC = () => {
  return (
    <div>
      <div>
        <i className="bx bx-alarm" style={{ fontSize: '24px', color: 'tomato' }}></i>
        <span> Icono de Alarma</span>
      </div>
      <div>
        <i className="bx bx-walk" style={{ fontSize: '24px', color: 'skyblue' }}></i>
        <span> Icono de Caminar</span>
      </div>
      <div>
        <i className="bx bx-coffee" style={{ fontSize: '24px', color: 'seagreen' }}></i>
        <span> Icono de Café</span>
      </div>
    </div>
  );
};

export default BoxiconsDemo;
