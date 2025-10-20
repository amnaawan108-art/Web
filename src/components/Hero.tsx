import { Button } from "@/components/ui/button";
import { Github, Linkedin, Twitter, Instagram } from "lucide-react";

const Hero = () => {
  return (
    <section
      id="home"
      className="min-h-screen flex items-center justify-center bg-gradient-to-br from-[hsl(var(--hero-gradient-start))] to-[hsl(var(--hero-gradient-end))] text-white pt-16"
    >
      <div className="container mx-auto px-4 text-center">
        <div className="mb-8">
          <img
            src="https://amna-portfolio-magic.lovable.app/assets/profile-aAuUpyt_.jpg"
            alt="Amna Awan"
            className="w-48 h-48 rounded-full mx-auto border-4 border-white/30 shadow-2xl object-cover"
          />
        </div>

        <h1 className="text-5xl md:text-6xl font-bold mb-4">Amna Awan</h1>
        <p className="text-xl md:text-2xl mb-8 text-white/90">Web Developer</p>

        <div className="flex justify-center gap-4 mb-8">
          <Button
            variant="outline"
            size="icon"
            className="rounded-full bg-white/10 border-white/30 hover:bg-white/20 text-white"
          >
            <Github className="h-5 w-5" />
          </Button>
          <Button
            variant="outline"
            size="icon"
            className="rounded-full bg-white/10 border-white/30 hover:bg-white/20 text-white"
          >
            <Linkedin className="h-5 w-5" />
          </Button>
          <Button
            variant="outline"
            size="icon"
            className="rounded-full bg-white/10 border-white/30 hover:bg-white/20 text-white"
          >
            <Twitter className="h-5 w-5" />
          </Button>
          <Button
            variant="outline"
            size="icon"
            className="rounded-full bg-white/10 border-white/30 hover:bg-white/20 text-white"
          >
            <Instagram className="h-5 w-5" />
          </Button>
        </div>

        <Button
          size="lg"
          className="bg-white text-primary hover:bg-white/90"
          onClick={() =>
            document.getElementById("about")?.scrollIntoView({ behavior: "smooth" })
          }
        >
          View My Work
        </Button>

        <div className="mt-12 max-w-3xl mx-auto">
          <p className="bg-gray-100/95 text-foreground p-6 rounded-lg text-lg">
            I'm a Front-End Web Developer skilled in HTML, CSS, PHP, Python, WordPress, and MS
            Office tools. My expertise in Software & Technical Documentation and Project Management
            allows me to deliver efficient, responsive, and user-centered digital solutions. I aim
            to combine technical excellence with clear communication and organized project execution
            to achieve impactful results.
          </p>
        </div>
      </div>
    </section>
  );
};

export default Hero;
