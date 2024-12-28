import React from 'react';
import { Project } from '../../data/projects';

interface ProjectCardProps {
  project: Project;
  onClick: () => void;
  index: number;
}

export default function ProjectCard({ project, onClick, index }: ProjectCardProps) {
  const isEven = index % 2 === 0;

  return (
    <div className="relative">
      {/* Timeline dot */}
      <div className={`absolute ${isEven ? 'left-0' : 'right-0'} w-4 h-4 rounded-full bg-blue-600 dark:bg-blue-400`} />
      
      {/* Timeline line */}
      <div className={`absolute ${isEven ? 'left-2' : 'right-2'} top-4 bottom-0 w-px bg-gray-200 dark:bg-gray-800`} />

      <div className={`${isEven ? 'ml-12' : 'mr-12'}`}>
        <div className={`flex items-center gap-4 ${!isEven && 'flex-row-reverse'}`}>
          <span className="text-sm text-gray-500 dark:text-gray-400">{project.year}</span>
        </div>
        <div 
          className="mt-2 group cursor-pointer"
          onClick={onClick}
        >
          <h3 className={`text-2xl font-bold text-gray-900 dark:text-white mb-4 ${!isEven && 'text-right'}`}>
            {project.title}
          </h3>
          <div className={`grid grid-cols-1 md:grid-cols-2 gap-8 ${!isEven && 'md:flex md:flex-row-reverse'}`}>
            <div className="aspect-video rounded-lg overflow-hidden">
              <img
                src={project.image}
                alt={project.title}
                className="w-full h-full object-cover transform group-hover:scale-105 transition-transform duration-300"
              />
            </div>
            <div className={!isEven ? 'text-right' : ''}>
              <p className="text-gray-600 dark:text-gray-300 mb-4">
                {project.description}
              </p>
              <div className={`flex flex-wrap gap-2 ${!isEven && 'justify-end'}`}>
                {project.tech.map(tech => (
                  <span
                    key={tech}
                    className="px-3 py-1 text-sm rounded-full bg-gray-100 dark:bg-gray-800 text-gray-800 dark:text-gray-200"
                  >
                    {tech}
                  </span>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}