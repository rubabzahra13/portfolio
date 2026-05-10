"use client";

import { motion } from "framer-motion";
import { Code2, Rocket, Users, Zap, Shield, Sparkles } from "lucide-react";

const About = () => {
  const stats = [
    { value: "50+", label: "Projects Delivered", icon: Rocket },
    { value: "100%", label: "Client Satisfaction", icon: Users },
    { value: "24/7", label: "Support Available", icon: Shield },
  ];

  const values = [
    { 
      icon: Code2, 
      title: "Clean Architecture",
      description: "We build scalable, maintainable systems with industry best practices"
    },
    { 
      icon: Zap, 
      title: "Fast Delivery",
      description: "Agile methodology ensures rapid iteration and quick time-to-market"
    },
    { 
      icon: Sparkles, 
      title: "Innovation First",
      description: "Cutting-edge tech stacks and AI-powered solutions"
    },
  ];

  return (
    <section id="about" className="relative overflow-x-clip border-b border-border bg-surface py-20 sm:py-24">
      <div className="relative z-10 mx-auto min-w-0 max-w-6xl px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.45 }}
          viewport={{ once: true }}
          className="mb-12 text-center sm:mb-16"
        >
          <p className="mb-2 text-xs font-semibold uppercase tracking-widest text-text-muted">Studio</p>
          <h2 className="mb-4 text-balance text-2xl font-semibold tracking-tight text-text-primary sm:text-3xl md:text-4xl">
            About VelocTech
          </h2>
          <p className="mx-auto max-w-2xl text-pretty text-base leading-relaxed text-text-secondary sm:text-lg">
            We are a software engineering studio focused on{" "}
            <span className="font-medium text-text-primary">full-stack delivery</span> and{" "}
            <span className="font-medium text-text-primary">applied AI systems</span>—with the
            rigor you expect from a product team.
          </p>
        </motion.div>

        <div className="mb-12 grid grid-cols-1 gap-4 sm:mb-16 md:grid-cols-3 md:gap-5">
          {stats.map((stat, index) => {
            const Icon = stat.icon;
            return (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 12 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ delay: index * 0.06, duration: 0.4 }}
                viewport={{ once: true }}
                className="rounded-lg border border-border bg-background p-6 text-center shadow-card transition-colors hover:border-border-strong sm:p-8"
              >
                <Icon className="mx-auto mb-3 h-7 w-7 text-accent" aria-hidden />
                <div className="mb-1 text-2xl font-semibold tabular-nums text-text-primary sm:text-3xl">{stat.value}</div>
                <div className="text-sm font-medium text-text-muted">{stat.label}</div>
              </motion.div>
            );
          })}
        </div>

        <div className="grid gap-5 md:grid-cols-3 md:gap-6">
          {values.map((value, index) => {
            const Icon = value.icon;
            return (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 14 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ delay: index * 0.08, duration: 0.4 }}
                viewport={{ once: true }}
                className="rounded-lg border border-border bg-background p-6 shadow-card transition-colors hover:border-border-strong sm:p-7"
              >
                <div className="mb-4 flex h-10 w-10 items-center justify-center rounded-md border border-border bg-elevated">
                  <Icon className="h-5 w-5 text-accent" aria-hidden />
                </div>
                <h3 className="mb-2 text-base font-semibold text-text-primary sm:text-lg">{value.title}</h3>
                <p className="text-sm leading-relaxed text-text-secondary sm:text-base">{value.description}</p>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default About;