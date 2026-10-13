import { YOUTUBE_CHANNEL_ID } from './constants';

export interface YouTubeVideo {
  id: string;
  title: string;
  publishedAt: string;
  isShort: boolean;
}

const FEED_URL = `https://www.youtube.com/feeds/videos.xml?channel_id=${YOUTUBE_CHANNEL_ID}`;

const FALLBACK_VIDEOS: Array<YouTubeVideo> = [
  {
    id: 'YUlUmfk2ViU',
    title:
      'Caminhada em prol da vida, realizada no dia 27/09/2026. Dia Nacional de Doação de Órgãos e Tecidos.',
    publishedAt: '2026-10-13T13:12:35+00:00',
    isShort: true,
  },
];

const decodeEntities = (text: string) =>
  text
    .replace(/&lt;/g, '<')
    .replace(/&gt;/g, '>')
    .replace(/&quot;/g, '"')
    .replace(/&#39;|&apos;/g, "'")
    .replace(/&amp;/g, '&');

const parseFeed = (xml: string): Array<YouTubeVideo> =>
  Array.from(xml.matchAll(/<entry>([\s\S]*?)<\/entry>/g), ([, entry]) => ({
    id: entry.match(/<yt:videoId>([^<]+)</)?.[1] ?? '',
    title: decodeEntities(entry.match(/<title>([^<]*)</)?.[1] ?? ''),
    publishedAt: entry.match(/<published>([^<]+)</)?.[1] ?? '',
    isShort: /<link rel="alternate" href="[^"]*\/shorts\//.test(entry),
  })).filter((video) => video.id && video.publishedAt);

export async function getLatestVideos(limit = 4): Promise<Array<YouTubeVideo>> {
  try {
    const response = await fetch(FEED_URL, { next: { revalidate: 3600 } });

    if (!response.ok) {
      return FALLBACK_VIDEOS;
    }

    const videos = parseFeed(await response.text());

    return videos.length > 0 ? videos.slice(0, limit) : FALLBACK_VIDEOS;
  } catch {
    return FALLBACK_VIDEOS;
  }
}
