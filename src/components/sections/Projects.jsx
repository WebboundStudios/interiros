import React, { useState } from 'react';
import { PROJECTS_DATA } from '../../constants/data';
import { SectionTitle } from '../ui/SectionTitle';
import { ProjectCard } from '../ui/ProjectCard';
import { ProjectModal } from '../ui/ProjectModal';
import { motion } from 'framer-motion';

export function Projects() {
  const [activeModalProject, setActiveModalProject] = useState(null);

  return (
    <section id="projects" className="py-24 md:py-36 bg-[#F8F6F2] relative">
      <div className="max-w-7xl mx-auto px-6 md:px-12">
        {/* Section Header */}
        <div className="mb-14 md:mb-20">
          <SectionTitle
            subtitle="PROJECTS"
            title="Selected works that define our architectural philosophy"
          />
        </div>

        {/* Stacked Curtain Reveal Cards Container — Sticky overlap on mobile and desktop */}
        <div className="relative flex flex-col space-y-24 sm:space-y-36 md:space-y-44 pb-24">
          {PROJECTS_DATA.map((project, index) => (
            <motion.div
              key={project.id}
              initial={{ opacity: 0, y: 50, scale: 0.98 }}
              whileInView={{ opacity: 1, y: 0, scale: 1 }}
              viewport={{ once: true, margin: '-50px' }}
              transition={{ duration: 0.6, ease: [0.16, 1, 0.3, 1] }}
              style={{ top: `${60 + index * 12}px` }}
              className="sticky min-h-[75vh] sm:min-h-[80vh] md:min-h-[85vh] flex items-center bg-[#F8F6F2] rounded-[10px] border border-[#E8E2D8] p-6 sm:p-10 md:p-14 transition-shadow duration-500 shadow-[0_25px_60px_-30px_rgba(31,31,31,0.35)] hover:shadow-[0_35px_80px_-25px_rgba(31,31,31,0.4)]"
            >
              {/* Stacking index marker, reinforces order in the curtain-reveal sequence */}
              <span className="hidden md:flex absolute top-8 right-10 items-center gap-2 text-[11px] uppercase tracking-[0.25em] text-[#8C6D46] font-semibold">
                <span className="w-6 h-px bg-[#8C6D46]/60" />
                {String(index + 1).padStart(2, '0')} / {String(PROJECTS_DATA.length).padStart(2, '0')}
              </span>

              <ProjectCard
                project={project}
                onOpenModal={(proj) => setActiveModalProject(proj)}
              />
            </motion.div>
          ))}
        </div>

        {/* Deep Dive Project Detail Modal */}
        <ProjectModal
          project={activeModalProject}
          isOpen={!!activeModalProject}
          onClose={() => setActiveModalProject(null)}
        />
      </div>
    </section>
  );
}