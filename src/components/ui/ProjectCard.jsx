import React from 'react';
import { Button } from './Button';

export function ProjectCard({ project, onOpenModal, className = '' }) {
  return (
    <div
      className={`grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-center w-full ${className}`}
    >
      {/* Project Image Column */}
      <div
        onClick={() => onOpenModal(project)}
        className="lg:col-span-7 overflow-hidden rounded-[10px] bg-[#EFECE6] border border-[#E8E2D8] cursor-pointer h-[260px] sm:h-[380px] md:h-[500px] relative group"
      >
        <img
          src={project.image}
          alt={project.title}
          className="w-full h-full object-cover transition-opacity duration-500 luxury-image-filter group-hover:opacity-95"
          loading="lazy"
          referrerPolicy="no-referrer"
        />
        <div className="absolute inset-0 bg-black/10 opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none" />
      </div>

      {/* Project Info Column */}
      <div className="lg:col-span-5 flex flex-col items-start justify-center">
        <span className="text-xs uppercase tracking-[0.3em] text-[#8C6D46] font-semibold mb-3 block">
          {project.subtitle || project.category}
        </span>
        <h3 className="font-serif text-3xl sm:text-4xl md:text-5xl text-[#1F1F1F] mb-6 font-normal leading-[1.12] tracking-tight">
          {project.title}
        </h3>
        <p className="text-sm md:text-base text-[#6F6F6F] font-light leading-relaxed mb-8 max-w-md">
          {project.description}
        </p>
        <Button variant="dark" onClick={() => onOpenModal(project)}>
          Project Detail
        </Button>
      </div>
    </div>
  );
}
