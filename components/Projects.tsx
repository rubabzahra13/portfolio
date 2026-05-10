'use client';

import { motion } from 'framer-motion';
import Image from 'next/image';
import { ExternalLink, Github, Sparkles } from 'lucide-react';

const Projects = () => {
  const projects = [
    {
      title: 'E-Commerce Platform',
      description: 'Enterprise-grade e-commerce solution with real-time inventory management, secure payment processing, and advanced analytics dashboard.',
      tech: ['Next.js', 'Node.js', 'MongoDB', 'Stripe'],
      image: 'https://images.unsplash.com/photo-1557821552-17105176677c?w=800&h=600&fit=crop',
      featured: true
    },
    {
      title: 'AI Task Manager',
      description: 'Intelligent task management platform with AI-powered priority suggestions, productivity analytics, and team collaboration features.',
      tech: ['React', 'Python', 'TensorFlow', 'PostgreSQL'],
      image: 'https://images.unsplash.com/photo-1484480974693-6ca0a78fb36b?w=800&h=600&fit=crop',
      featured: false
    },
    {
      title: 'Social Media Dashboard',
      description: 'Comprehensive analytics platform for managing multiple social media accounts with automated reporting and insights.',
      tech: ['TypeScript', 'Express', 'Redis', 'Chart.js'],
      image: 'https://images.unsplash.com/photo-1460925895917-afdab827c52f?w=800&h=600&fit=crop',
      featured: false
    }
  ];

  return (
    <section id="projects" className="relative overflow-x-clip border-b border-border bg-background py-20 sm:py-24">
      <div className="relative z-10 mx-auto min-w-0 max-w-6xl px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.45 }}
          viewport={{ once: true }}
          className="mb-12 text-center sm:mb-16"
        >
          <p className="mb-2 text-xs font-semibold uppercase tracking-widest text-text-muted">Work</p>
          <h2 className="mb-4 text-balance text-2xl font-semibold tracking-tight text-text-primary sm:text-3xl md:text-4xl">
            Selected projects
          </h2>
          <p className="mx-auto max-w-2xl text-pretty text-base text-text-secondary sm:text-lg">
            Representative builds across commerce, AI-native workflows, and data-heavy interfaces.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 gap-5 sm:grid-cols-2 sm:gap-6 lg:grid-cols-3">
          {projects.map((project, idx) => (
            <motion.div
              key={idx}
              initial={{ opacity: 0, y: 14 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.4, delay: idx * 0.06 }}
              viewport={{ once: true }}
              className="group relative min-w-0 overflow-hidden rounded-lg border border-border bg-surface shadow-card transition-colors hover:border-border-strong"
            >
              {project.featured && (
                <div className="absolute right-3 top-3 z-10 flex items-center gap-1 rounded-full border border-border-strong bg-accent px-2 py-0.5 text-xs font-semibold text-white">
                  <Sparkles className="h-3 w-3 shrink-0" aria-hidden />
                  Featured
                </div>
              )}

              <div className="relative aspect-[16/10] w-full overflow-hidden bg-background">
                <Image
                  src={project.image}
                  alt={project.title}
                  fill
                  sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
                  className="object-cover transition-transform duration-300 group-hover:scale-[1.02]"
                />
                <div className="pointer-events-none absolute inset-0 bg-gradient-to-t from-background/90 via-transparent to-transparent opacity-80" />
              </div>

              <div className="border-t border-border p-4 sm:p-5">
                <h3 className="mb-2 text-balance text-lg font-semibold text-text-primary sm:text-xl">
                  {project.title}
                </h3>
                <p className="mb-4 line-clamp-3 text-pretty text-sm leading-relaxed text-text-secondary sm:mb-5 sm:text-base">
                  {project.description}
                </p>

                <div className="mb-4 flex flex-wrap gap-1.5 sm:mb-5">
                  {project.tech.map((tech) => (
                    <span
                      key={tech}
                      className="rounded border border-border bg-background px-2 py-0.5 text-xs font-medium text-text-secondary"
                    >
                      {tech}
                    </span>
                  ))}
                </div>

                <div className="flex flex-wrap gap-4 border-t border-border pt-3 sm:gap-5 sm:pt-4">
                  <a
                    href="#"
                    className="group/link inline-flex items-center gap-1.5 text-sm font-medium text-accent hover:underline"
                  >
                    <ExternalLink className="h-4 w-4 shrink-0" aria-hidden />
                    Live demo
                  </a>
                  <a
                    href="#"
                    className="group/link inline-flex items-center gap-1.5 text-sm font-medium text-text-muted hover:text-text-primary"
                  >
                    <Github className="h-4 w-4 shrink-0" aria-hidden />
                    Code
                  </a>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Projects;
