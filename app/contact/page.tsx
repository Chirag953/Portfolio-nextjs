import { Heading } from "@/components/ui/heading";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { SocialLinks } from "@/components/social-links";
import { ThemeToggle } from "@/components/ui/theme-toggle";
import { Navigation } from "@/components/navigation";

export const metadata = {
  title: "Contact - Chirag Dutta",
  description: "Get in touch with me for opportunities, collaborations, or just to say hello.",
};

export default function Contact() {
  const email = "chiradutta953@gmail.com";
  const subject = "Portfolio Contact";

  return (
    <main className="min-h-screen px-4 py-20 pt-24 sm:pt-20">
      <Navigation />
      <div className="fixed top-4 right-4 z-50">
        <ThemeToggle />
      </div>

      <div className="max-w-2xl mx-auto space-y-8 sm:space-y-12">
        <section className="text-center space-y-4 animate-fade-in">
          <Heading level="h1">Get In Touch</Heading>
          <p className="text-body-lg text-[var(--muted-foreground)]">
            I'm always open to discussing new opportunities, interesting
            projects, or just having a conversation about technology.
          </p>
        </section>

        <section className="space-y-8 animate-fade-in">
          <Card>
            <div className="space-y-6 text-center">
              <div>
                <h2 className="text-h3 font-semibold text-[var(--foreground)] mb-2">
                  Send me an email
                </h2>
                <p className="text-body text-[var(--muted-foreground)] mb-6">
                  Click the button below to open your email client and send me a
                  message.
                </p>
                <a
                  href={`mailto:${email}?subject=${encodeURIComponent(subject)}`}
                  className="inline-flex items-center justify-center font-medium rounded-lg transition-colors focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-[var(--ring)] bg-[var(--primary)] text-[var(--primary-foreground)] hover:opacity-90 px-6 sm:px-8 py-3 sm:py-4 text-base sm:text-lg min-h-[44px] sm:min-h-[52px] cursor-pointer"
                >
                  Send Email
                </a>
              </div>
            </div>
          </Card>

          <div className="space-y-4">
            <h2 className="text-h3 font-semibold text-[var(--foreground)] text-center">
              Connect on Social Media
            </h2>
            <div className="flex justify-center">
              <SocialLinks />
            </div>
          </div>

          <Card>
            <div className="space-y-2 text-center">
              <p className="text-body-sm text-[var(--muted-foreground)]">
                Available for freelance work and full-time opportunities
              </p>
             
            </div>
          </Card>
        </section>
      </div>
    </main>
  );
}
