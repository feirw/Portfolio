import React, { useRef, useEffect, useState } from 'react';
import { Card, CardContent, CardHeader, CardTitle } from './ui/card';
import { Mail, MapPin, Github, Linkedin, InstagramIcon } from 'lucide-react';
import { usePersonalInfo } from './hooks/usePortfolioData';
// import { Button } from './ui/button';
// import { Input } from './ui/input';
// import { Textarea } from './ui/textarea';
// import { Send } from 'lucide-react';
// import { useToast } from './hooks/use-toast';
// import { useContactForm } from './hooks/usePortfolioData';
import LoadingSpinner from './LoadingSpinner';
import ErrorMessage from './ErrorMessage';

const Contact = () => {
  // const [formData, setFormData] = useState({
  //   name: '',
  //   email: '',
  //   message: ''
  // });
  const [isVisible, setIsVisible] = useState(false);
  const sectionRef = useRef(null);
  // const { toast } = useToast();

  const { personalInfo, loading: personalLoading, error: personalError } = usePersonalInfo();
  // const { submitForm, submitting, error: submitError } = useContactForm();

  useEffect(() => {
    if (personalLoading) return undefined;

    const node = sectionRef.current;
    if (!node) return undefined;

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
        }
      },
      { threshold: 0.2 }
    );

    observer.observe(node);
    return () => observer.disconnect();
  }, [personalLoading, personalInfo, personalError]);

  // const handleInputChange = (e) => {
  //   setFormData({
  //     ...formData,
  //     [e.target.name]: e.target.value
  //   });
  // };

  // const handleSubmit = async (e) => {
  //   e.preventDefault();
  //
  //   try {
  //     await submitForm(formData);
  //     toast({
  //       title: "Message sent successfully!",
  //       description: "Thank you for reaching out. I'll get back to you soon.",
  //     });
  //     setFormData({ name: '', email: '', message: '' });
  //   } catch (err) {
  //     const description =
  //       err?.message ||
  //       err?.text ||
  //       submitError ||
  //       "Please try again later.";
  //     toast({
  //       title: "Error sending message",
  //       description,
  //       variant: "destructive"
  //     });
  //   }
  // };

  if (personalLoading) {
    return (
      <section
        id="contact"
        ref={sectionRef}
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
        ref={sectionRef}
        className="py-20 md:py-28 bg-gradient-to-b from-zinc-950 via-black to-black relative overflow-hidden"
      >
        <div className="container mx-auto max-w-6xl px-4 sm:px-6 relative z-10">
          <ErrorMessage
            message={personalError || "Failed to load contact information"}
            onRetry={() => window.location.reload()}
          />
        </div>
      </section>
    );
  }

  return (
    <section
      id="contact"
      ref={sectionRef}
      className="py-20 md:py-28 bg-gradient-to-b from-zinc-950 via-black to-black relative overflow-hidden"
    >
      {/* Background Animation */}
      <div className="absolute inset-0">
        <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-transparent via-white to-transparent opacity-20 animate-pulse"></div>
        <div className="absolute bottom-0 left-0 w-full h-1 bg-gradient-to-r from-transparent via-white to-transparent opacity-20 animate-pulse delay-1000"></div>
      </div>

      <div className="container mx-auto max-w-6xl px-4 sm:px-6 relative z-10">
        <div className={`text-center mb-12 md:mb-16 transition-all duration-1000 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-white mb-4 tracking-tight">
            Get in <span className="bg-gradient-to-r from-zinc-200 to-white bg-clip-text text-transparent">touch</span>
          </h2>
          <p className="text-zinc-500 text-base sm:text-lg max-w-2xl mx-auto leading-relaxed">
            Open to opportunities, collaborations, or a conversation about tech and learning.
          </p>
          <div className="w-20 h-px bg-gradient-to-r from-transparent via-zinc-500 to-transparent mx-auto mt-6" />
        </div>

        <div className="max-w-xl mx-auto">
          {/* Contact Information */}
          <div className={`space-y-8 transition-all duration-1000 delay-300 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
            <Card className="bg-gradient-to-br from-gray-900/90 to-black/90 border-gray-700 hover:border-gray-500 transition-all duration-500 backdrop-blur-sm">
              <CardHeader>
                <CardTitle className="text-2xl font-bold text-white">Let's Connect</CardTitle>
              </CardHeader>
              <CardContent className="space-y-6">
                <div className="flex items-center space-x-4 p-4 rounded-lg bg-gray-800/50 hover:bg-gray-700/50 transition-colors">
                  <div className="p-3 bg-gray-700 rounded-full shrink-0">
                    <Mail className="w-5 h-5 text-white" />
                  </div>
                  <div className="min-w-0">
                    <h4 className="text-white font-semibold">Email</h4>
                    <a
                      href={`mailto:${personalInfo.email}`}
                      className="text-gray-400 hover:text-white transition-colors break-all"
                    >
                      {personalInfo.email}
                    </a>
                  </div>
                </div>

                <div className="flex items-center space-x-4 p-4 rounded-lg bg-gray-800/50 hover:bg-gray-700/50 transition-colors">
                  <div className="p-3 bg-gray-700 rounded-full shrink-0">
                    <MapPin className="w-5 h-5 text-white" />
                  </div>
                  <div>
                    <h4 className="text-white font-semibold">Location</h4>
                    <p className="text-gray-400">{personalInfo.location}</p>
                  </div>
                </div>
              </CardContent>
            </Card>

            {/* Social Links */}
            <Card className="bg-gradient-to-br from-gray-900/90 to-black/90 border-gray-700 hover:border-gray-500 transition-all duration-500 backdrop-blur-sm">
              <CardHeader>
                <CardTitle className="text-xl font-bold text-white">Social Media</CardTitle>
              </CardHeader>
              <CardContent>
                <div className="flex space-x-4">
                  <a
                    href={personalInfo.social_links.github}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="p-4 bg-gray-800 rounded-lg hover:bg-gray-700 transition-all duration-300 transform hover:scale-110 hover:-translate-y-1 group"
                  >
                    <Github className="w-6 h-6 text-gray-300 group-hover:text-white" />
                  </a>
                  <a
                    href={personalInfo.social_links.linkedin}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="p-4 bg-gray-800 rounded-lg hover:bg-gray-700 transition-all duration-300 transform hover:scale-110 hover:-translate-y-1 group"
                  >
                    <Linkedin className="w-6 h-6 text-gray-300 group-hover:text-white" />
                  </a>
                  <a
                    href={personalInfo.social_links.instagram}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="p-4 bg-gray-800 rounded-lg hover:bg-gray-700 transition-all duration-300 transform hover:scale-110 hover:-translate-y-1 group"
                  >
                    <InstagramIcon className="w-6 h-6 text-gray-300 group-hover:text-white" />
                  </a>
                </div>
              </CardContent>
            </Card>
          </div>

          {/* Contact Form - disabled
          <div className={`transition-all duration-1000 delay-500 ${isVisible ? 'opacity-100 translate-x-0' : 'opacity-0 translate-x-10'}`}>
            <Card className="bg-gradient-to-br from-gray-900/90 to-black/90 border-gray-700 hover:border-gray-500 transition-all duration-500 backdrop-blur-sm">
              <CardHeader>
                <CardTitle className="text-2xl font-bold text-white">Send Message</CardTitle>
              </CardHeader>
              <CardContent>
                <form onSubmit={handleSubmit} className="space-y-6">
                  ...
                </form>
              </CardContent>
            </Card>
          </div>
          */}
        </div>
      </div>
    </section>
  );
};

export default Contact;