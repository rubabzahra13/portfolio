"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { ChevronLeft, ChevronRight, Quote } from "lucide-react";
import { testimonials } from "@/lib/data";

const Testimonials = () => {
  const [current, setCurrent] = useState(0);

  const next = () => setCurrent((current + 1) % testimonials.length);
  const prev = () => setCurrent((current - 1 + testimonials.length) % testimonials.length);

  return (
    <section id="testimonials" className="relative overflow-x-clip border-b border-border bg-surface py-20 sm:py-24">
      <div className="relative z-10 mx-auto min-w-0 max-w-3xl px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.45 }}
          viewport={{ once: true }}
          className="mb-10 text-center sm:mb-14"
        >
          <p className="mb-2 text-xs font-semibold uppercase tracking-widest text-text-muted">Clients</p>
          <h2 className="mb-3 text-balance text-2xl font-semibold tracking-tight text-text-primary sm:text-3xl md:text-4xl">
            Testimonials
          </h2>
          <p className="mx-auto max-w-xl text-pretty text-base text-text-secondary sm:text-lg">
            Direct feedback from teams we have shipped with.
          </p>
        </motion.div>

        <div className="relative min-w-0">
          <AnimatePresence mode="wait">
            <motion.div
              key={current}
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -10 }}
              transition={{ duration: 0.28 }}
              className="relative min-w-0 rounded-lg border border-border bg-background p-6 shadow-card sm:p-10 md:p-12"
            >
              <Quote className="absolute left-4 top-4 h-7 w-7 text-border sm:left-8 sm:top-8 sm:h-11 sm:w-11" aria-hidden />

              <p className="relative z-10 mb-8 pl-10 text-pretty text-base font-normal leading-relaxed text-text-primary sm:mb-10 sm:pl-14 sm:text-lg md:text-xl">
                &ldquo;{testimonials[current].text}&rdquo;
              </p>

              <div className="flex flex-col gap-4 border-t border-border pt-5 sm:flex-row sm:items-center sm:gap-5 sm:pt-6">
                <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-md border border-border bg-elevated text-base font-semibold text-text-primary sm:h-14 sm:w-14 sm:text-lg">
                  {testimonials[current].name.charAt(0)}
                </div>
                <div className="min-w-0">
                  <p className="break-words text-base font-semibold text-text-primary sm:text-lg">
                    {testimonials[current].name}
                  </p>
                  <p className="break-words text-sm font-medium text-text-muted sm:text-base">{testimonials[current].role}</p>
                </div>
              </div>
            </motion.div>
          </AnimatePresence>

          <div className="mt-6 flex items-center justify-between gap-3 sm:mt-8">
            <button
              type="button"
              onClick={prev}
              className="rounded-md border border-border bg-background p-2.5 text-text-muted transition-colors hover:border-border-strong hover:bg-subtle hover:text-text-primary"
              aria-label="Previous testimonial"
            >
              <ChevronLeft size={22} />
            </button>

            <div className="mx-1 flex min-w-0 shrink items-center justify-center gap-1.5 sm:gap-2">
              {testimonials.map((_, index) => (
                <button
                  key={index}
                  type="button"
                  onClick={() => setCurrent(index)}
                  className={`h-2 rounded-full transition-all ${
                    index === current ? "w-8 bg-accent" : "w-2 bg-border hover:bg-border-strong"
                  }`}
                  aria-label={`Go to testimonial ${index + 1}`}
                />
              ))}
            </div>

            <button
              type="button"
              onClick={next}
              className="rounded-md border border-border bg-background p-2.5 text-text-muted transition-colors hover:border-border-strong hover:bg-subtle hover:text-text-primary"
              aria-label="Next testimonial"
            >
              <ChevronRight size={22} />
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Testimonials;