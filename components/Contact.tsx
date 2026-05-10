"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import { Send, Mail, MapPin, Loader2 } from "lucide-react";
import { FaGithub, FaLinkedin, FaTwitter } from "react-icons/fa";

const Contact = () => {
  const [formState, setFormState] = useState({
    name: "",
    email: "",
    subject: "",
    message: "",
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitStatus, setSubmitStatus] = useState<"idle" | "success" | "error">("idle");

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    setSubmitStatus("idle");

    try {
      const response = await fetch("https://formspree.io/f/manpnryo", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(formState),
      });

      if (response.ok) {
        setSubmitStatus("success");
        setFormState({ name: "", email: "", subject: "", message: "" });
      } else {
        setSubmitStatus("error");
      }
    } catch (error) {
      setSubmitStatus("error");
    } finally {
      setIsSubmitting(false);
    }
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormState({ ...formState, [e.target.name]: e.target.value });
  };

  const socialLinks = [
    { icon: FaGithub, url: "https://github.com/yourusername", label: "GitHub" },
    { icon: FaLinkedin, url: "https://linkedin.com/in/yourusername", label: "LinkedIn" },
    { icon: FaTwitter, url: "https://twitter.com/yourusername", label: "Twitter" },
  ];

  return (
    <section id="contact" className="relative overflow-x-clip border-b border-border bg-background py-20 sm:py-24">
      <div className="relative z-10 mx-auto min-w-0 max-w-6xl px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.45 }}
          viewport={{ once: true }}
          className="mb-10 text-center sm:mb-14"
        >
          <p className="mb-2 text-xs font-semibold uppercase tracking-widest text-text-muted">Contact</p>
          <h2 className="mb-3 text-balance text-2xl font-semibold tracking-tight text-text-primary sm:text-3xl md:text-4xl">
            Get in touch
          </h2>
          <p className="mx-auto max-w-xl text-pretty text-base text-text-secondary sm:text-lg">
            Tell us about your timeline, constraints, and what success looks like—we reply within one business day.
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 gap-8 sm:gap-12">
          {/* Contact Info */}
          <motion.div
            initial={{ opacity: 0, y: 12 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.45 }}
            viewport={{ once: true }}
          >
            <div className="min-w-0 rounded-lg border border-border bg-surface p-5 shadow-card sm:p-8">
              <h3 className="mb-2 text-balance text-lg font-semibold text-text-primary sm:text-xl">
                Prefer email?
              </h3>
              <p className="mb-8 text-sm leading-relaxed text-text-secondary sm:text-base">
                Skip the form—reach us directly. We read every message.
              </p>

              <div className="space-y-4">
                <div className="flex items-center gap-3 rounded-md border border-border bg-background p-3 transition-colors hover:border-border-strong">
                  <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-md border border-border bg-elevated">
                    <Mail className="text-accent" size={18} aria-hidden />
                  </div>
                  <div>
                    <p className="text-xs font-medium text-text-muted">Email</p>
                    <p className="font-semibold text-text-primary">hello@veloctech.com</p>
                  </div>
                </div>

                <div className="flex items-center gap-3 rounded-md border border-border bg-background p-3 transition-colors hover:border-border-strong">
                  <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-md border border-border bg-elevated">
                    <MapPin className="text-accent" size={18} aria-hidden />
                  </div>
                  <div>
                    <p className="text-xs font-medium text-text-muted">Location</p>
                    <p className="font-semibold text-text-primary">San Francisco, CA</p>
                  </div>
                </div>
              </div>

              <div className="mt-8 border-t border-border pt-6">
                <p className="mb-3 text-xs font-semibold uppercase tracking-wider text-text-muted">Social</p>
                <div className="flex gap-2">
                  {socialLinks.map((social) => (
                    <a
                      key={social.label}
                      href={social.url}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex h-10 w-10 items-center justify-center rounded-md border border-border bg-background text-text-muted transition-colors hover:border-border-strong hover:bg-subtle hover:text-text-primary"
                      aria-label={social.label}
                    >
                      <social.icon size={18} />
                    </a>
                  ))}
                </div>
              </div>
            </div>
          </motion.div>

          {/* Contact Form */}
          <motion.form
            initial={{ opacity: 0, y: 12 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.45 }}
            viewport={{ once: true }}
            onSubmit={handleSubmit}
            className="space-y-4"
          >
            <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 sm:gap-4">
              <div>
                <label className="mb-1.5 block text-sm font-medium text-text-secondary">Name</label>
                <input
                  type="text"
                  name="name"
                  value={formState.name}
                  onChange={handleChange}
                  placeholder="Your name"
                  required
                  className="w-full min-w-0 rounded-md border border-border bg-background px-3 py-2.5 text-base text-text-primary shadow-sm placeholder:text-text-muted focus:border-accent focus:outline-none focus:ring-2 focus:ring-accent/25"
                />
              </div>
              <div>
                <label className="mb-1.5 block text-sm font-medium text-text-secondary">Email</label>
                <input
                  type="email"
                  name="email"
                  value={formState.email}
                  onChange={handleChange}
                  placeholder="you@company.com"
                  required
                  className="w-full min-w-0 rounded-md border border-border bg-background px-3 py-2.5 text-base text-text-primary shadow-sm placeholder:text-text-muted focus:border-accent focus:outline-none focus:ring-2 focus:ring-accent/25"
                />
              </div>
            </div>

            <div>
              <label className="mb-1.5 block text-sm font-medium text-text-secondary">Subject</label>
              <input
                type="text"
                name="subject"
                value={formState.subject}
                onChange={handleChange}
                placeholder="What is this about?"
                required
                className="w-full min-w-0 rounded-md border border-border bg-background px-3 py-2.5 text-base text-text-primary shadow-sm placeholder:text-text-muted focus:border-accent focus:outline-none focus:ring-2 focus:ring-accent/25"
              />
            </div>

            <div>
              <label className="mb-1.5 block text-sm font-medium text-text-secondary">Message</label>
              <textarea
                name="message"
                value={formState.message}
                onChange={handleChange}
                rows={6}
                placeholder="Context, stack, timeline…"
                required
                className="max-h-64 w-full min-w-0 resize-y rounded-md border border-border bg-background px-3 py-2.5 text-base text-text-primary shadow-sm placeholder:text-text-muted focus:border-accent focus:outline-none focus:ring-2 focus:ring-accent/25 sm:max-h-none"
              />
            </div>

            <button
              type="submit"
              disabled={isSubmitting}
              className="mt-1 flex w-full items-center justify-center gap-2 rounded-md border border-border-strong bg-accent px-4 py-3 text-sm font-semibold text-white transition-colors hover:bg-accent/90 disabled:cursor-not-allowed disabled:opacity-50"
            >
              {isSubmitting ? (
                <>
                  <Loader2 className="animate-spin" size={20} />
                  Sending...
                </>
              ) : (
                <>
                  <Send size={20} />
                  Send Message
                </>
              )}
            </button>

            {/* Status Messages */}
            {submitStatus === "success" && (
              <motion.p
                initial={{ opacity: 0, y: -10 }}
                animate={{ opacity: 1, y: 0 }}
                className="text-green-500 text-center"
              >
                ✓ Message sent successfully!
              </motion.p>
            )}
            {submitStatus === "error" && (
              <motion.p
                initial={{ opacity: 0, y: -10 }}
                animate={{ opacity: 1, y: 0 }}
                className="text-red-500 text-center"
              >
                ✗ Failed to send message. Please try again.
              </motion.p>
            )}
          </motion.form>
        </div>
      </div>
    </section>
  );
};

export default Contact;