import React, { useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { X, MapPin, Calendar, Maximize2, Tag } from 'lucide-react';
import { Button } from './Button';

export function ProjectModal({ project, isOpen, onClose }) {
  useEffect(() => {
    const handleKeyDown = (e) => {
      if (e.key === 'Escape') onClose();
    };
    if (isOpen) {
      document.body.style.overflow = 'hidden';
      window.addEventListener('keydown', handleKeyDown);
    } else {
      document.body.style.overflow = '';
    }
    return () => {
      document.body.style.overflow = '';
      window.removeEventListener('keydown', handleKeyDown);
    };
  }, [isOpen, onClose]);

  if (!project) return null;

  return (
    <AnimatePresence>
      {isOpen && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4 md:p-8">
          {/* Backdrop */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={onClose}
            className="fixed inset-0 bg-black/70 backdrop-blur-sm"
          />

          <motion.div
            data-lenis-prevent
            initial={{ opacity: 0, scale: 0.95, y: 20 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            exit={{ opacity: 0, scale: 0.95, y: 20 }}
            transition={{ duration: 0.3, ease: [0.16, 1, 0.3, 1] }}
            className="relative z-10 w-full max-w-4xl max-h-[85vh] bg-[#F8F6F2] rounded-[10px] shadow-lg overflow-y-auto border border-[#E8E2D8] text-[#1F1F1F] p-6 md:p-10"
          >
            {/* Close Button */}
            <button
              onClick={onClose}
              className="absolute top-6 right-6 p-2 rounded-[10px] bg-white/80 border border-[#E8E2D8] text-[#1F1F1F] hover:bg-[#8C6D46] hover:text-white transition-colors duration-300"
              aria-label="Close Modal"
            >
              <X size={20} />
            </button>

            {/* Header Meta */}
            <div className="mb-6">
              <span className="text-xs uppercase tracking-[0.25em] text-[#8C6D46] font-semibold">
                {project.subtitle}
              </span>
              <h2 className="font-serif text-3xl md:text-5xl font-normal text-[#1F1F1F] mt-2 mb-4">
                {project.title}
              </h2>

              {/* Specs Grid */}
              <div className="grid grid-cols-2 md:grid-cols-4 gap-4 py-4 border-y border-[#E8E2D8] text-xs uppercase tracking-wider text-[#6F6F6F]">
                <div className="flex items-center gap-2">
                  <MapPin size={14} className="text-[#8C6D46]" />
                  <span>{project.subtitle}</span>
                </div>
                <div className="flex items-center gap-2">
                  <Tag size={14} className="text-[#8C6D46]" />
                  <span>{project.category}</span>
                </div>
                <div className="flex items-center gap-2">
                  <Calendar size={14} className="text-[#8C6D46]" />
                  <span>{project.year}</span>
                </div>
                <div className="flex items-center gap-2">
                  <Maximize2 size={14} className="text-[#8C6D46]" />
                  <span>{project.area}</span>
                </div>
              </div>
            </div>

            {/* Main Image */}
            <div className="rounded-[10px] overflow-hidden mb-8 aspect-[16/9] bg-[#EFECE6] border border-[#E8E2D8]">
              <img
                src={project.image}
                alt={project.title}
                className="w-full h-full object-cover luxury-image-filter"
                referrerPolicy="no-referrer"
              />
            </div>

            {/* Description */}
            <div className="mb-8">
              <h3 className="font-serif text-2xl mb-3 text-[#1F1F1F]">Architectural Narrative</h3>
              <p className="text-sm md:text-base text-[#6F6F6F] leading-relaxed">
                {project.description}
              </p>
            </div>

            {/* Gallery Grid */}
            {project.gallery && project.gallery.length > 0 && (
              <div className="mb-8">
                <h3 className="font-serif text-2xl mb-4 text-[#1F1F1F]">Project Gallery</h3>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  {project.gallery.map((imgUrl, idx) => (
                    <div key={idx} className="rounded-[10px] overflow-hidden aspect-[4/3] bg-[#EFECE6] border border-[#E8E2D8]">
                      <img
                        src={imgUrl}
                        alt={`${project.title} detail ${idx + 1}`}
                        className="w-full h-full object-cover luxury-image-filter"
                        referrerPolicy="no-referrer"
                      />
                    </div>
                  ))}
                </div>
              </div>
            )}

            {/* Footer Action */}
            <div className="flex justify-end pt-4 border-t border-[#E8E2D8]">
              <Button variant="dark" href="#contact" onClick={onClose}>
                Inquire About Similar Project
              </Button>
            </div>
          </motion.div>
        </div>
      )}
    </AnimatePresence>
  );
}
