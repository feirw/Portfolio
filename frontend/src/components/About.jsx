import React, { useRef } from 'react';
import { Card } from './ui/card';
import { usePersonalInfo } from './hooks/usePortfolioData';
import LoadingSpinner from './LoadingSpinner';
import ErrorMessage from './ErrorMessage';
import Tip from './Tip';

const About = () => {
  const sectionRef = useRef(null);
  const { personalInfo, loading: personalLoading, error: personalError } = usePersonalInfo();

  if (personalLoading) {
    return (
      <section
        id="about"
        ref={sectionRef}
        className="py-20 md:py-28 bg-gradient-to-b from-black via-zinc-950 to-zinc-900 relative overflow-hidden"
      >
        <div className="container mx-auto px-6 relative z-10">
          <LoadingSpinner size="large" text="Loading about information..." />
        </div>
      </section>
    );
  }

  if (personalError || !personalInfo) {
    return (
      <section
        id="about"
        ref={sectionRef}
        className="py-20 md:py-28 bg-gradient-to-b from-black via-zinc-950 to-zinc-900 relative overflow-hidden"
      >
        <div className="container mx-auto px-6 relative z-10">
          <ErrorMessage
            message={personalError || "Failed to load about information"}
            onRetry={() => window.location.reload()}
          />
        </div>
      </section>
    );
  }

  return (
    <section
      id="about"
      ref={sectionRef}
      className="py-20 md:py-28 bg-gradient-to-b from-black via-zinc-950 to-zinc-900 relative overflow-hidden"
    >
      <div className="container mx-auto max-w-6xl px-4 sm:px-6 relative z-10">
        <div className="text-center mb-12 md:mb-16">
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-white mb-4 tracking-tight">
            About <span className="bg-gradient-to-r from-zinc-200 to-white bg-clip-text text-transparent">me</span>
          </h2>
          <p className="text-zinc-500 text-base sm:text-lg max-w-xl mx-auto mb-6">
            Studies, journey into tech, and how I work with teams.
          </p>
          <div className="w-20 h-px bg-gradient-to-r from-transparent via-zinc-500 to-transparent mx-auto" />
        </div>

        <div className="max-w-3xl mx-auto">
          <Card className="portfolio-card bg-gradient-to-br from-zinc-900/90 to-black/90 border-zinc-700/80 p-6 sm:p-8">
            <h3 className="text-2xl font-bold text-white mb-4">
              Hello, I'm {personalInfo.name}
            </h3>
            <p className="text-gray-300 text-lg leading-relaxed">
              I am a secon[d-year student in the Department of Informatics and Telecommunications{' '}
              <Tip title="NKUA" text="National and Kapodistrian University of Athens.">
                NKUA
              </Tip>{' '}
              with a current GPA of{' '}
              <Tip title="GPA" text="Grade point average on a 10-point scale.">
                8.2/10
              </Tip>
              . After living in a small village without any experience in technology and in just one
              year at university, I have participated in several hackathons, attended technology
              events, earned multiple certifications in software development and AI, volunteered in
              tech-related projects, and built a strong professional network. At the same time, I
              run a TikTok and Instagram account, where I provide guidance to students in
              Informatics. My goal is to keep growing as a software engineer, while also helping
              others develop and succeed in technology and{' '}
              <Tip title="STEM" text="Science, Technology, Engineering, and Mathematics.">
                STEM
              </Tip>
              .
            </p>
          </Card>
        </div>
      </div>
    </section>
  );
};

export default About;
