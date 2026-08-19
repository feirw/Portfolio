import React from 'react';
import { Card, CardContent, CardHeader, CardTitle } from './ui/card';
import { Mail, MapPin, Github, Linkedin, InstagramIcon } from 'lucide-react';
import { usePersonalInfo } from './hooks/usePortfolioData';
import LoadingSpinner from './LoadingSpinner';
import ErrorMessage from './ErrorMessage';

const Contact = () => {
  const { personalInfo, loading: personalLoading, error: personalError } = usePersonalInfo();

  if (personalLoading) {
    return (
      <section
        id="contact"
        className="py-20 md:py-28 bg-gradient-to-b from-zinc-950 via-black to-black relative overflow-hidden"
      >
        <div className="container mx-auto max-w-6xl px-4 sm:px-6 relative z-10">
          <LoadingSpinner size="large" text="Loading contact information..." />
        </div>
      </section>
    );
  }

  if (personalError || !personalInfo) {
    return (
      <section
        id="contact"
        className="py-20 md:py-28 bg-gradient-to-b from-zinc-950 via-black to-black relative overflow-hidden"
      >
        <div className="container mx-auto max-w-6xl px-4 sm:px-6 relative z-10">
          <ErrorMessage
            message={personalError || 'Failed to load contact information'}
            onRetry={() => window.location.reload()}
          />
        </div>
      </section>
    );
  }

  return (
    <section
      id="contact"
      className="py-20 md:py-28 bg-gradient-to-b from-zinc-950 via-black to-black relative overflow-hidden"
    >
      <div className="container mx-auto max-w-6xl px-4 sm:px-6 relative z-10">
        <div className="text-center mb-12 md:mb-16">
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-white mb-4 tracking-tight">
            Get in <span className="bg-gradient-to-r from-zinc-200 to-white bg-clip-text text-transparent">touch</span>
          </h2>
          <p className="text-zinc-500 text-base sm:text-lg max-w-2xl mx-auto leading-relaxed">
            Open to opportunities, collaborations, or a conversation about tech and learning.
          </p>
          <div className="w-20 h-px bg-gradient-to-r from-transparent via-zinc-500 to-transparent mx-auto mt-6" />
        </div>

        <div className="max-w-xl mx-auto space-y-8">
          <div className="promise-box">
            Response time: I usually reply within 3–5 working days. During exams or events it may
            take a little longer.
          </div>

          <Card className="portfolio-card bg-gradient-to-br from-gray-900/90 to-black/90 border-gray-700">
            <CardHeader>
              <CardTitle className="text-2xl font-bold text-white">Let&apos;s connect</CardTitle>
            </CardHeader>
            <CardContent className="space-y-6">
              <div className="flex items-center space-x-4 p-4 bg-gray-800/50">
                <div className="p-3 bg-gray-700 shrink-0">
                  <Mail className="w-5 h-5 text-white" aria-hidden />
                </div>
                <div className="min-w-0">
                  <h3 className="text-white font-semibold">Email</h3>
                  <a
                    href={`mailto:${personalInfo.email}`}
                    className="text-gray-400 hover:text-white transition-colors break-all"
                  >
                    {personalInfo.email}
                  </a>
                </div>
              </div>
              <div className="flex items-center space-x-4 p-4 bg-gray-800/50">
                <div className="p-3 bg-gray-700 shrink-0">
                  <MapPin className="w-5 h-5 text-white" aria-hidden />
                </div>
                <div>
                  <h3 className="text-white font-semibold">Location</h3>
                  <p className="text-gray-400">{personalInfo.location}</p>
                </div>
              </div>
            </CardContent>
          </Card>

          <Card className="portfolio-card bg-gradient-to-br from-gray-900/90 to-black/90 border-gray-700">
            <CardHeader>
              <CardTitle className="text-xl font-bold text-white">Social</CardTitle>
            </CardHeader>
            <CardContent>
              <div className="flex space-x-4">
                <a
                  href={personalInfo.social_links.github}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="p-4 bg-gray-800 hover:bg-gray-700 transition-colors duration-300"
                  aria-label="GitHub"
                >
                  <Github className="w-6 h-6 text-gray-300" />
                </a>
                <a
                  href={personalInfo.social_links.linkedin}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="p-4 bg-gray-800 hover:bg-gray-700 transition-colors duration-300"
                  aria-label="LinkedIn"
                >
                  <Linkedin className="w-6 h-6 text-gray-300" />
                </a>
                <a
                  href={personalInfo.social_links.instagram}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="p-4 bg-gray-800 hover:bg-gray-700 transition-colors duration-300"
                  aria-label="Instagram"
                >
                  <InstagramIcon className="w-6 h-6 text-gray-300" />
                </a>
              </div>
            </CardContent>
          </Card>
        </div>
      </div>
    </section>
  );
};

export default Contact;
