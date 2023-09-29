import React, { useState } from 'react';
import ProjectCard from './ProjectCard';

import SectionWrapper from "../../../hoc/SectionWrapper";

const projectsData = [
  { id: 1, category: 'Web Development', title: 'Projet 1', description: 'Description du projet 1' },
  { id: 2, category: 'Graphic Design', title: 'Projet 2', description: 'Description du projet 2' },
  { id: 3, category: 'Graphic Design', title: 'Projet 2', description: 'Description du projet 2' },
  { id: 4, category: 'Graphic Design', title: 'Projet 2', description: 'Description du projet 2' },
  // ... plus de projets
];

function Projects() {
  const [filter, setFilter] = useState('All');

  const filteredProjects = filter === 'All'
    ? projectsData
    : projectsData.filter(project => project.category === filter);

  return (
    <div className="projects-page">
      <div className="filter-buttons">
        <button onClick={() => setFilter('All')}>Tous</button>
        <button onClick={() => setFilter('Web Development')}>Développement Web</button>
        <button onClick={() => setFilter('Graphic Design')}>Design Graphique</button>
        {/* Ajoutez d'autres boutons de filtre selon vos catégories */}
      </div>

      <div className="mt-20 flex flex-wrap gap-7">
        {filteredProjects.map((project,index) => (
          <ProjectCard key={project.id} index={index} project={project} />
        ))}
      </div>
    </div>
  );
}

export default SectionWrapper(Projects, "Projects");
