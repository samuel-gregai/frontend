"use client";
import { Sparkles } from "lucide-react";
const HeroSection = () => {
  return (
    <section className="min-h-screen flex items-center justify-center relative overflow-hidden bg-background">
      {/* Background gradient effects with lower z-index */}
      <div className="absolute inset-0 z-0 pointer-events-none select-none">
        <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-primary/20 rounded-full blur-3xl animate-pulse-glow"></div>
        <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-accent/20 rounded-full blur-3xl animate-pulse-glow animation-delay-2000"></div>
      </div>

      <div className="container mx-auto px-6 text-center fade-in-up relative z-10 flex items-center justify-center">
        {/* Main heading */}
        <h1 className="text-6xl md:text-8xl lg:text-9xl font-bold mb-6 tracking-tight">
          <span className="text-gradient animate-gradient-shift bg-[length:200%_auto]">
            GREG.
          </span>
        </h1>

        {/* Badge */}
        <div className="inline-flex items-center gap-2 bg-card-elevated border border-primary/20 rounded-full px-4 py-2 mb-8 w-max justify-center">
          <Sparkles className="w-4 h-4 text-primary" />
          <span className="text-sm font-medium text-foreground/80">
            Post Sales Reinvented
          </span>
        </div>

        {/* Subheading */}
        <p className="text-xl md:text-2xl text-muted-foreground mb-12 max-w-3xl mx-auto leading-relaxed">
          Let your AI-powered assistant handle the admin chaos,
          <br />
          <span className="text-foreground">
            so you can focus on what moves the needle: your customers.
          </span>
        </p>
      </div>

      {/* Scroll indicator */}
      <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce z-10">
        <div className="w-6 h-10 border-2 border-muted rounded-full flex justify-center">
          <div className="w-1 h-3 bg-muted rounded-full mt-2 animate-pulse"></div>
        </div>
      </div>
    </section>
  );
};
export default HeroSection;
