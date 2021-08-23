import React from 'react';
import { projectsCards } from './data/projectsCards';
import Carousel from './Carousel/Carousel';
import Item from './Carousel/Item';
import Card from './Card';

export default function Projects() {
  return (
    <section className="projects">
      <div className="projects-title">
        Our projects
      </div>
      <Carousel>
        {projectsCards.map((el, i) => 
          <Item key={i}>
            <Card data={el} setclass={'project-card'} />
          </Item>
        )}
      </Carousel>
    </section>
  );
}
