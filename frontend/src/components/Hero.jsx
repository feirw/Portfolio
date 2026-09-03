import React from 'react';
import { Button } from './ui/button';
import { ChevronDown, Github, Linkedin, Mail } from 'lucide-react';
import { usePersonalInfo } from './hooks/usePortfolioData';
import LoadingSpinner from './LoadingSpinner';
import ErrorMessage from './ErrorMessage';

const Hero = () => {
  const { personalInfo, loading, error } = usePersonalInfo();

  const scrollToNext = () => {
    document.getElementById('about')?.scrollIntoView({ behavior: 'smooth', block: 'start' });
  };

  if (loading) {
    return (
      <section className="min-h-screen flex items-center justify-center bg-gradient-to-br from-black via-zinc-950 to-black pt-16">
        <LoadingSpinner size="large" text="Loading portfolio..." />
      </section>
    );
  }

  if (error || !personalInfo) {
    return (
      <section className="min-h-screen flex items-center justify-center bg-gradient-to-br from-black via-zinc-950 to-black pt-16">
        <ErrorMessage
          message={error || 'Failed to load personal information'}
          onRetry={() => window.location.reload()}
        />
      </section>
    );
  }

  return (
    <section className="relative min-h-screen flex flex-col items-center justify-center overflow-hidden bg-gradient-to-br from-black via-zinc-950 to-black pt-20 pb-28 sm:pt-24 sm:pb-20">
      <div
        className="pointer-events-none absolute inset-0"
        style={{
          backgroundImage: `radial-gradient(ellipse 80% 50% at 20% 20%, rgba(255,255,255,0.07) 0%, transparent 55%),
                           radial-gradient(ellipse 60% 40% at 85% 70%, rgba(255,255,255,0.04) 0%, transparent 50%),
                           linear-gradient(rgba(255,255,255,0.04) 1px, transparent 1px),
                           linear-gradient(90deg, rgba(255,255,255,0.04) 1px, transparent 1px)`,
          backgroundSize: '100% 100%, 100% 100%, 48px 48px, 48px 48px',
        }}
      />

      <div className="pointer-events-none absolute inset-0 overflow-hidden">
        <div className="absolute top-24 left-4 sm:left-10 text-zinc-600 font-mono text-xs sm:text-sm opacity-40 motion-reduce:opacity-25 animate-pulse">
          {`{ "status": "coding" }`}
        </div>
        <div className="absolute top-36 right-6 sm:right-16 text-zinc-600 font-mono text-xs sm:text-sm opacity-40 motion-reduce:opacity-25 animate-pulse delay-1000">
          while (true) learn();
        </div>
        <div className="absolute bottom-32 left-8 sm:left-20 text-zinc-600 font-mono text-xs sm:text-sm opacity-40 motion-reduce:opacity-25 animate-pulse delay-2000 max-w-[200px] sm:max-w-none">
          const future = await build();
        </div>
      </div>

      <div className="relative z-10 mx-auto w-full max-w-4xl px-5 sm:px-6 text-center">
        <div className="mb-10 sm:mb-12">
          <p className="mb-3 text-xs font-medium uppercase tracking-[0.2em] text-zinc-500">
            Portfolio
          </p>
          <h1 className="text-4xl sm:text-6xl md:text-7xl lg:text-8xl font-bold tracking-tight bg-gradient-to-b from-white via-zinc-100 to-zinc-500 bg-clip-text text-transparent mb-5 sm:mb-6">
            {personalInfo.name}
          </h1>

          <p className="text-base sm:text-lg text-zinc-500 max-w-xl mx-auto leading-relaxed">
            {personalInfo.tagline}
          </p>
        </div>

        <div className="flex flex-col sm:flex-row gap-3 sm:gap-4 justify-center items-stretch sm:items-center mb-10 sm:mb-12 max-w-md sm:max-w-none mx-auto">
          <Button
            className="bg-white text-black hover:bg-zinc-200 px-8 py-6 sm:py-5 text-base font-semibold shadow-lg shadow-white/5 hover:shadow-white/15 transition-all duration-300 min-h-[48px]"
            onClick={() =>
              document.getElementById('experience')?.scrollIntoView({ behavior: 'smooth', block: 'start' })
            }
          >
            View my work
          </Button>

          <Button
            variant="outline"
            className="border-zinc-600 text-zinc-200 hover:bg-zinc-900/80 hover:text-white hover:border-zinc-500 px-8 py-6 sm:py-5 text-base transition-all duration-300 min-h-[48px]"
            onClick={() =>
              document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth', block: 'start' })
            }
          >
            Get in touch
          </Button>
        </div>

        <div className="flex justify-center gap-4 sm:gap-5">
          <a
            href={personalInfo.social_links.github}
            className="flex h-12 w-12 items-center justify-center border border-zinc-800 bg-zinc-900/50 text-zinc-400 transition-colors duration-300 hover:border-zinc-600 hover:bg-zinc-800 hover:text-white"
            target="_blank"
            rel="noopener noreferrer"
            aria-label="GitHub"
          >
            <Github className="w-5 h-5" />
          </a>
          <a
            href={personalInfo.social_links.linkedin}
            className="flex h-12 w-12 items-center justify-center border border-zinc-800 bg-zinc-900/50 text-zinc-400 transition-colors duration-300 hover:border-zinc-600 hover:bg-zinc-800 hover:text-white"
            target="_blank"
            rel="noopener noreferrer"
            aria-label="LinkedIn"
          >
            <Linkedin className="w-5 h-5" />
          </a>
          <a
            href={`mailto:${personalInfo.email}`}
            className="flex h-12 w-12 items-center justify-center border border-zinc-800 bg-zinc-900/50 text-zinc-400 transition-colors duration-300 hover:border-zinc-600 hover:bg-zinc-800 hover:text-white"
            aria-label="Email"
          >
            <Mail className="w-5 h-5" />
          </a>
        </div>
      </div>

      <div className="absolute bottom-6 left-1/2 z-10 -translate-x-1/2 sm:bottom-8">
        <button
          type="button"
          onClick={scrollToNext}
          className="group flex flex-col items-center gap-1 px-4 py-2 text-zinc-500 transition-colors hover:text-zinc-300 focus-visible:text-white min-h-[48px]"
          aria-label="Scroll to about section"
        >
          <span className="text-[10px] uppercase tracking-widest opacity-70 group-hover:opacity-100">
            About
          </span>
          <ChevronDown className="h-5 w-5 motion-safe:animate-bounce motion-reduce:animate-none" aria-hidden />
        </button>
      </div>
    </section>
  );
};

export default Hero;
