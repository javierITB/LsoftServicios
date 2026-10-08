import React from 'react';
import Header from '../../Header';
import Hero from '../../Hero';
import Services from '../../Services';
import Experience from '../../Experience';
import Technologies from '../../Technologies';
import Contact from '../../Contact';
import Footer from '../../Footer';

export default function OriginalView() {
  return (
    <div className="original-lsoft-wrapper">
      <Header />
      <main id="inicio">
        <Hero />
        <Services />
        <Experience />
        <Technologies />
        <Contact />
      </main>
      <Footer />
    </div>
  );
}
