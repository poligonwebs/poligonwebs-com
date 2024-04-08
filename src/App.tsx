import React from 'react';
import GridDemo from './components/GridDemo/GridDemo';
import IconsDemo from './components/IconsDemo/IconsDemo';
import AOSDemo from './components/AOSDemo/AOSDemo';
import BoxiconsDemo from './components/BoxiconsDemo/BoxiconsDemo';
import GlightboxDemo from './components/GLightboxDemo/GLightboxDemo';
import RemixIconDemo from './components/RemixIconDemo/RemixIconDemo';
import SwiperDemo from './components/SwiperDemo/SwiperDemo';

function App() {
  return (
    <div>
      <h1>Bootstrap Grid Demo</h1>
      <GridDemo />
      <h1>Bootstrap Icons Demo</h1>
      <IconsDemo />
      <h1>AOS Demo</h1>
      <AOSDemo />
      <h1>Boxicons Demo</h1>
      <BoxiconsDemo />
      <h1>Glightbox Demo</h1>
      <GlightboxDemo />
      <h1>Remix Icon Demo</h1>
      <RemixIconDemo />
      <h1>Swiper Demo</h1>
      <SwiperDemo />
    </div>
  );
}

export default App;
