import React from 'react';
import { ExternalLink } from 'lucide-react';
import { useClientWork } from './hooks/usePortfolioData';
import LoadingSpinner from './LoadingSpinner';
import ErrorMessage from './ErrorMessage';

const ClientWork = () => {
  const { clientWork, loading, error } = useClientWork();

  if (loading) {
    return (
      <section
        id="clients"
        className="pb-20 md:pb-28 bg-gradient-to-b from-black via-zinc-950 to-black relative overflow-hidden"
      >
        <div className="container mx-auto px-6 relative z-10">
          <LoadingSpinner size="large" text="Loading client work..." />
        </div>
      </section>
    );
  }

  if (error || !Array.isArray(clientWork) || clientWork.length === 0) {
    if (error) {
      return (
        <section
          id="clients"
          className="pb-20 md:pb-28 bg-gradient-to-b from-black via-zinc-950 to-black relative overflow-hidden"
        >
          <div className="container mx-auto px-6 relative z-10">
            <ErrorMessage
              message={error || 'Failed to load client work'}
              onRetry={() => window.location.reload()}
            />
          </div>
        </section>
      );
    }
    return null;
  }

  return (
    <section
      id="clients"
      className="pb-20 md:pb-28 bg-gradient-to-b from-black via-zinc-950 to-black relative overflow-hidden"
    >
      <div className="container mx-auto max-w-6xl px-4 sm:px-6 relative z-10">
        <div className="text-center mb-10 md:mb-12">
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-white mb-4 tracking-tight">
            Work for{' '}
            <span className="bg-gradient-to-r from-zinc-200 to-white bg-clip-text text-transparent">
              clients
            </span>
          </h2>
          <p className="text-zinc-500 text-base sm:text-lg max-w-2xl mx-auto leading-relaxed">
            Live websites and digital work delivered for clients.
          </p>
          <div className="w-20 h-px bg-gradient-to-r from-transparent via-zinc-500 to-transparent mx-auto mt-6" />
        </div>

        <div className="grid grid-cols-2 md:grid-cols-3 gap-3 sm:gap-4 max-w-3xl mx-auto">
          {clientWork.map((client) => (
            <a
              key={client.id}
              href={client.url}
              target="_blank"
              rel="noopener noreferrer"
              className="portfolio-card group relative aspect-square overflow-hidden border border-gray-700 bg-zinc-950 block"
              aria-label={`${client.title} — ${client.role}, opens in a new tab`}
            >
              <img
                src={client.image}
                alt=""
                className="absolute inset-0 w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black via-black/55 to-black/10" />
              <div className="absolute inset-0 flex flex-col justify-end p-3 sm:p-4">
                <div className="flex items-start justify-between gap-2">
                  <div className="min-w-0">
                    <h3 className="text-white font-semibold text-sm sm:text-base leading-snug truncate">
                      {client.title}
                    </h3>
                    <p className="text-zinc-400 text-xs sm:text-sm mt-0.5">{client.role}</p>
                  </div>
                  <ExternalLink className="w-4 h-4 text-zinc-300 shrink-0 mt-0.5 opacity-80 group-hover:opacity-100" />
                </div>
              </div>
            </a>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ClientWork;
