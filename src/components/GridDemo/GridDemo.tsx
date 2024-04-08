// GridDemo.tsx
import React from 'react';

const GridDemo: React.FC = () => {
  return (
    <div className="container">
      <div className="row">
        <div className="col-lg-4 col-md-6 col-sm-12" style={{ backgroundColor: 'lightblue' }}>
          Columna 1
        </div>
        <div className="col-lg-4 col-md-6 col-sm-12" style={{ backgroundColor: 'lightgreen' }}>
          Columna 2
        </div>
        <div className="col-lg-4 col-md-12 col-sm-12" style={{ backgroundColor: 'lightcoral' }}>
          Columna 3
        </div>
      </div>
    </div>
  );
};

export default GridDemo;
