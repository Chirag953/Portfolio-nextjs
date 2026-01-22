"use client";

import { Button } from "@/components/ui/button";
import { Heading } from "@/components/ui/heading";
import { SocialLinks } from "@/components/social-links";

export function Hero() {
  return (
    <section className="min-h-screen flex items-center justify-center px-4 py-20 pt-24 sm:pt-20">
      <div className="max-w-4xl mx-auto text-center space-y-6 sm:space-y-8 animate-fade-in">
        <div className="space-y-4 animate-slide-up">
          <Heading level="h1" className="text-display">
            Chirag Dutta
          </Heading>
          <p className="text-h3 text-[var(--muted-foreground)]">
            Full Stack Developer
          </p>
          <p className="text-body-lg text-[var(--muted-foreground)] max-w-2xl mx-auto">
            I build modern web applications with a focus on user experience,
            performance, and clean code. Passionate about creating solutions
            that make a difference.
          </p>
        </div>

        <div className="flex flex-col sm:flex-row gap-4 justify-center items-center animate-slide-up" style={{ animationDelay: "0.2s" }}>
          <Button href="/projects" variant="primary" size="lg">
            View Projects
          </Button>
          <Button href="/contact" variant="outline" size="lg">
            Contact Me
          </Button>
        </div>

        <div className="flex justify-center animate-slide-up" style={{ animationDelay: "0.4s" }}>
          <SocialLinks />
        </div>
      </div>
    </section>
  );
}
