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
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: '-50px' }}
              transition={{ duration: 0.5, ease: [0.16, 1, 0.3, 1] }}
              style={{ top: `${60 + index * 12}px` }}
              className="sticky min-h-[75vh] sm:min-h-[80vh] md:min-h-[85vh] flex items-center bg-[#F8F6F2] rounded-[10px] border border-[#E8E2D8] p-6 sm:p-10 md:p-14 transition-all duration-300 shadow-sm"
            >
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
