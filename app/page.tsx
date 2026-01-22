import { Hero } from "@/components/hero";
import { ThemeToggle } from "@/components/ui/theme-toggle";
import { Navigation } from "@/components/navigation";

export const metadata = {
  title: "Chirag Dutta - Full Stack Developer",
  description: "Portfolio website showcasing my projects, skills, and experience as a Full Stack Developer.",
};

export default function Home() {
  return (
    <main className="relative">
      <Navigation />
      <div className="fixed top-4 right-4 z-50">
        <ThemeToggle />
      </div>
      <Hero />
    </main>
  );
}
