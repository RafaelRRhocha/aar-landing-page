'use client';

import { useState } from 'react';
import Image from 'next/image';
import { Play, Youtube } from 'lucide-react';

import { CONTACT_INFO } from '@/lib/constants';
import type { YouTubeVideo } from '@/lib/youtube';

import { Button } from './Button';

interface YouTubePlayerProps {
  videos: Array<YouTubeVideo>;
}

const thumbnailUrl = (id: string, quality: 'maxresdefault' | 'hqdefault') =>
  `https://i.ytimg.com/vi/${id}/${quality}.jpg`;

const formatDate = (date: string) =>
  new Date(date).toLocaleDateString('pt-BR', {
    day: 'numeric',
    month: 'long',
    year: 'numeric',
    timeZone: 'America/Sao_Paulo',
  });

function Poster({ video }: { video: YouTubeVideo }) {
  const [hasMaxRes, setHasMaxRes] = useState(true);

  // Shorts thumbnails are 16:9 with side bars, so the 9:16 crop needs a much wider image
  return (
    <Image
      src={thumbnailUrl(video.id, hasMaxRes ? 'maxresdefault' : 'hqdefault')}
      alt=""
      fill
      className="object-cover"
      sizes={video.isShort ? '1024px' : '(max-width: 1280px) 100vw, 600px'}
      onError={() => setHasMaxRes(false)}
    />
  );
}

export function YouTubePlayer({ videos }: YouTubePlayerProps) {
  const [activeId, setActiveId] = useState(videos[0]?.id);
  const [isPlaying, setIsPlaying] = useState(false);

  const activeVideo =
    videos.find((video) => video.id === activeId) ?? videos[0];

  if (!activeVideo) {
    return null;
  }

  const handleSelect = (id: string) => {
    setActiveId(id);
    setIsPlaying(true);
  };

  return (
    <div className="desktop:grid-cols-2 grid grid-cols-1 items-center gap-8 sm:gap-12">
      <div
        className={`relative mx-auto w-full overflow-hidden rounded-2xl bg-black shadow-lg sm:rounded-3xl ${
          activeVideo.isShort ? 'aspect-9/16 max-w-xs' : 'aspect-video'
        }`}
      >
        {isPlaying ? (
          <iframe
            key={activeVideo.id}
            src={`https://www.youtube-nocookie.com/embed/${activeVideo.id}?autoplay=1&rel=0`}
            title={activeVideo.title}
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
            referrerPolicy="strict-origin-when-cross-origin"
            allowFullScreen
            className="absolute inset-0 h-full w-full border-0"
          />
        ) : (
          <button
            onClick={() => setIsPlaying(true)}
            aria-label={`Assistir: ${activeVideo.title}`}
            className="group absolute inset-0 h-full w-full"
          >
            <Poster key={activeVideo.id} video={activeVideo} />
            <span className="absolute inset-0 bg-black/20 transition-colors duration-300 group-hover:bg-black/10" />
            <span className="bg-primary absolute top-1/2 left-1/2 flex h-16 w-16 -translate-x-1/2 -translate-y-1/2 items-center justify-center rounded-full text-white shadow-lg transition-transform duration-300 group-hover:scale-110 sm:h-20 sm:w-20">
              <Play className="ml-1 h-7 w-7 fill-current sm:h-8 sm:w-8" />
            </span>
          </button>
        )}
      </div>

      <div className="desktop:text-left text-center">
        <p className="text-primary mb-2 text-xs font-semibold tracking-wider uppercase sm:text-sm">
          Publicado em {formatDate(activeVideo.publishedAt)}
        </p>
        <h3 className="text-foreground mb-6 text-xl leading-snug font-bold sm:text-2xl">
          {activeVideo.title}
        </h3>

        {videos.length > 1 && (
          <ul className="mt-0 mb-6 space-y-2 p-0">
            {videos.map((video) => (
              <li key={video.id}>
                <button
                  onClick={() => handleSelect(video.id)}
                  aria-current={video.id === activeVideo.id}
                  className={`font-inter flex w-full items-center gap-3 rounded-xl p-2 text-left transition-colors ${
                    video.id === activeVideo.id
                      ? 'bg-white shadow-sm ring-1 ring-black/5'
                      : 'hover:bg-white/60'
                  }`}
                >
                  <span className="relative aspect-video w-24 shrink-0 overflow-hidden rounded-lg bg-black sm:w-28">
                    <Image
                      src={thumbnailUrl(video.id, 'hqdefault')}
                      alt=""
                      fill
                      className="object-cover"
                      sizes="112px"
                    />
                  </span>
                  <span className="min-w-0">
                    <span className="text-foreground line-clamp-2 text-sm leading-snug font-medium">
                      {video.title}
                    </span>
                    <span className="text-foreground/60 mt-1 block text-xs">
                      {formatDate(video.publishedAt)}
                    </span>
                  </span>
                </button>
              </li>
            ))}
          </ul>
        )}

        <div className="desktop:justify-start flex flex-col justify-center gap-3 sm:flex-row">
          <Button
            variant="primary"
            href={`${CONTACT_INFO.socialMedia.youtube}?sub_confirmation=1`}
            target="_blank"
          >
            <Youtube className="mr-2 h-5 w-5" />
            Inscreva-se no Canal
          </Button>
          <Button
            variant="outline"
            href={CONTACT_INFO.socialMedia.youtube}
            target="_blank"
          >
            Ver Todos os Vídeos
          </Button>
        </div>
      </div>
    </div>
  );
}
