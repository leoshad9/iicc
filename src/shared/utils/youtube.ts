// Single source of truth for YouTube URLs used by the Multimedia Hub.
// `youtubeId` values must be verified public 11-character YouTube video IDs
// (https://www.youtube.com/oembed?url=... returns the title for a live video).
// Never store placeholder or invented IDs: a bad ID renders an unplayable embed.

const YOUTUBE_ID_PATTERN = /^[A-Za-z0-9_-]{11}$/;

/** Type guard so components only get an embed/watch URL when a real ID exists. */
export function isYoutubeId(value: string | undefined): value is string {
  return typeof value === 'string' && YOUTUBE_ID_PATTERN.test(value);
}

export function youtubeThumbnailUrl(youtubeId: string): string {
  return `https://i.ytimg.com/vi/${youtubeId}/hqdefault.jpg`;
}

export function youtubeWatchUrl(youtubeId: string): string {
  return `https://www.youtube.com/watch?v=${youtubeId}`;
}

/** Privacy-enhanced embed (youtube-nocookie) used by the in-page modal player. */
export function youtubeEmbedUrl(youtubeId: string): string {
  return `https://www.youtube-nocookie.com/embed/${youtubeId}?rel=0`;
}
