'use client';

import React, { useState } from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { ArrowUpRight, X, MapPin, Calendar, Ruler, Award, ShieldCheck } from 'lucide-react';
import { PROJECTS_DATA, ProjectItem } from '@/constants/data';

interface ProjectGalleryProps {
  initialFilter?: string;
  limit?: number;
  showFilters?: boolean;
}

export default function ProjectGallery({
  initialFilter = 'All',
  limit,
  showFilters = true,
}: ProjectGalleryProps) {
  const [activeFilter, setActiveFilter] = useState(initialFilter);
  const [selectedProject, setSelectedProject] = useState<ProjectItem | null>(null);

  const categories = ['All', 'Residential', 'Commercial', 'Coastal'];

  const filteredProjects = PROJECTS_DATA.filter((proj) => {
    if (activeFilter === 'All') return true;
    return proj.category === activeFilter;
  });

  const displayedProjects = limit ? filteredProjects.slice(0, limit) : filteredProjects;

  return (
    <div className="w-full">
      {/* Category filter bar */}
      {showFilters && (
        <div className="flex flex-wrap items-center justify-between gap-4 mb-10 pb-4 border-b border-white/10">
          <div className="flex items-center gap-2">
            {categories.map((cat) => {
              const active = activeFilter === cat;
              return (
                <button
                  key={cat}
                  type="button"
                  onClick={() => setActiveFilter(cat)}
                  className={`px-4 py-2 font-label-caps text-xs uppercase tracking-wider transition-all border ${
                    active
                      ? 'bg-tertiary text-on-tertiary border-tertiary font-semibold'
                      : 'bg-surface-container-low text-on-surface-variant border-transparent hover:bg-surface-container hover:text-on-surface'
                  }`}
                >
                  {cat}
                </button>
              );
            })}
          </div>

          <span className="font-body-sm text-xs text-outline hidden sm:block">
            Showing {displayedProjects.length} Architectural Commissions
          </span>
        </div>
      )}

      {/* Projects Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        {displayedProjects.map((project) => (
          <article
            key={project.id}
            className="group bg-surface-container-low border border-white/10 flex flex-col justify-between overflow-hidden shadow-lg transition-all duration-300 hover:border-tertiary/60"
          >
            <div>
              {/* Image Container with editorial aspect */}
              <div className="relative aspect-[16/10] w-full overflow-hidden bg-surface-container">
                <Image
                  src={project.image}
                  alt={project.title}
                  fill
                  sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                  className="object-cover transition-transform duration-700 ease-out group-hover:scale-105"
                  referrerPolicy="no-referrer"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-surface-container-low via-transparent to-black/20 pointer-events-none"></div>

                {project.subtitle && (
                  <span className="absolute top-3 left-3 px-2.5 py-1 bg-surface-container-lowest/90 backdrop-blur-sm border border-tertiary/30 font-label-caps text-[10px] uppercase text-tertiary">
                    {project.subtitle}
                  </span>
                )}

                <div className="absolute bottom-3 right-3 opacity-0 group-hover:opacity-100 transition-opacity">
                  <span className="w-8 h-8 bg-tertiary text-on-tertiary flex items-center justify-center shadow-lg">
                    <ArrowUpRight className="w-4 h-4" />
                  </span>
                </div>
              </div>

              {/* Body */}
              <div className="p-6 sm:p-7 space-y-4">
                <div className="flex items-center justify-between text-xs font-label-caps uppercase text-outline">
                  <span className="flex items-center gap-1.5 text-on-surface-variant">
                    <MapPin className="w-3 h-3 text-tertiary" />
                    <span>{project.location}</span>
                  </span>
                  <span className="text-tertiary">{project.category}</span>
                </div>

                <h3 className="font-headline-md text-xl text-on-surface font-normal leading-snug group-hover:text-tertiary transition-colors">
                  {project.title}
                </h3>

                <p className="font-body-sm text-xs text-on-surface-variant line-clamp-3 font-light leading-relaxed">
                  {project.description}
                </p>
              </div>
            </div>

            {/* Spec footer */}
            <div className="p-6 sm:p-7 pt-0">
              <div className="pt-4 border-t border-white/5 flex items-center justify-between text-xs">
                <div>
                  <span className="font-headline-md text-sm text-on-surface font-medium block">
                    {project.squareFeet}
                  </span>
                  <span className="font-label-caps text-[9px] uppercase text-outline">Scale</span>
                </div>

                <button
                  type="button"
                  onClick={() => setSelectedProject(project)}
                  className="font-label-caps text-[11px] uppercase text-tertiary hover:text-white transition-colors flex items-center gap-1 group/btn"
                >
                  <span>View Case Study</span>
                  <ArrowUpRight className="w-3.5 h-3.5 group-hover/btn:translate-x-0.5 transition-transform" />
                </button>
              </div>
            </div>
          </article>
        ))}
      </div>

      {/* Case Study Modal */}
      {selectedProject && (
        <div
          role="dialog"
          aria-modal="true"
          className="fixed inset-0 z-50 bg-black/85 backdrop-blur-md flex items-center justify-center p-4 sm:p-6 lg:p-12 overflow-y-auto animate-in fade-in duration-200"
        >
          <div className="relative bg-surface-container-low border border-tertiary/40 max-w-4xl w-full my-auto overflow-hidden shadow-2xl">
            {/* Close button */}
            <button
              type="button"
              onClick={() => setSelectedProject(null)}
              className="absolute top-4 right-4 z-20 w-10 h-10 bg-surface-container-lowest/90 hover:bg-tertiary hover:text-on-tertiary text-on-surface flex items-center justify-center transition-colors border border-white/10"
              aria-label="Close dialog"
            >
              <X className="w-5 h-5" />
            </button>

            {/* Modal Image */}
            <div className="relative h-72 sm:h-96 w-full bg-surface-container">
              <Image
                src={selectedProject.image}
                alt={selectedProject.title}
                fill
                className="object-cover"
                referrerPolicy="no-referrer"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-surface-container-low via-transparent to-transparent"></div>

              <div className="absolute bottom-6 left-6 right-6">
                <span className="font-label-caps text-xs text-tertiary uppercase tracking-widest block mb-1">
                  {selectedProject.location} • {selectedProject.category}
                </span>
                <h3 className="font-headline-xl text-2xl sm:text-4xl text-white font-normal">
                  {selectedProject.title}
                </h3>
              </div>
            </div>

            {/* Modal Content */}
            <div className="p-6 sm:p-10 space-y-6">
              <div className="grid grid-cols-2 sm:grid-cols-4 gap-4 p-4 bg-surface-container-lowest border border-white/5">
                <div>
                  <span className="font-label-caps text-[10px] text-outline uppercase block">
                    Roofing System
                  </span>
                  <span className="font-body-sm text-xs text-on-surface font-medium mt-0.5 block">
                    {selectedProject.roofingSystem}
                  </span>
                </div>
                <div>
                  <span className="font-label-caps text-[10px] text-outline uppercase block">
                    Core Metal
                  </span>
                  <span className="font-body-sm text-xs text-on-surface font-medium mt-0.5 block">
                    {selectedProject.material}
                  </span>
                </div>
                <div>
                  <span className="font-label-caps text-[10px] text-outline uppercase block">
                    Surface Area
                  </span>
                  <span className="font-body-sm text-xs text-tertiary font-medium mt-0.5 block">
                    {selectedProject.squareFeet}
                  </span>
                </div>
                <div>
                  <span className="font-label-caps text-[10px] text-outline uppercase block">
                    Installed
                  </span>
                  <span className="font-body-sm text-xs text-on-surface font-medium mt-0.5 block">
                    {selectedProject.completionYear}
                  </span>
                </div>
              </div>

              <div>
                <h4 className="font-headline-md text-lg text-on-surface mb-2 font-normal">
                  Architectural Envelope Brief
                </h4>
                <p className="font-body-md text-on-surface-variant font-light leading-relaxed">
                  {selectedProject.description}
                </p>
              </div>

              {selectedProject.specs && selectedProject.specs.length > 0 && (
                <div className="space-y-2 pt-2">
                  <h4 className="font-label-caps text-xs text-tertiary uppercase tracking-wider">
                    Engineering Specifications
                  </h4>
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-2 text-xs font-body-sm">
                    {selectedProject.specs.map((s, idx) => (
                      <div
                        key={idx}
                        className="p-3 bg-surface-container flex items-center justify-between border border-white/5"
                      >
                        <span className="text-outline">{s.label}:</span>
                        <span className="text-on-surface font-medium">{s.value}</span>
                      </div>
                    ))}
                  </div>
                </div>
              )}

              <div className="pt-6 border-t border-white/10 flex flex-col sm:flex-row items-center justify-between gap-4">
                <span className="font-body-sm text-xs text-outline">
                  Architect: {selectedProject.architect || 'EliteMetal Architectural Guild'}
                </span>
                <Link
                  href="/contact"
                  className="px-6 py-3 bg-tertiary hover:bg-white text-on-tertiary font-label-caps text-xs uppercase tracking-wider transition-colors font-semibold"
                >
                  Consult on Similar Project
                </Link>
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}
