import React from 'react';
import Card from './Card';
import { slideCards } from './data/slideCards';

export default function Slide() {
  return (
    <section className="slide">
      <div className="slide-cover" />
      <div className="slide-title">
        Software development and optimization
      </div>
      <div className="slide-cards">
        {slideCards.map((el) => <Card key={el.title} data={el} setclass={'slide-card'} /> )}
      </div>
    </section>
  );
}
