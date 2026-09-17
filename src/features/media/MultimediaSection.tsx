import React, { useState } from 'react';
import { 
  Play, 
  Video, 
  Image as ImageIcon, 
  Clock, 
  User, 
  ExternalLink, 
  ZoomIn, 
  X, 
  ChevronLeft, 
  ChevronRight,
  Tv
} from 'lucide-react';
import { Language, VideoItem, GalleryPhoto } from '../../shared/types';
import { videosData, galleryPhotos } from '../../data/mockData';
import { translations } from '../../data/translations';
import { useTranslation } from 'react-i18next';
import { isYoutubeId, youtubeEmbedUrl, youtubeWatchUrl } from '../../shared/utils/youtube';

interface MultimediaSectionProps {
}

export const MultimediaSection: React.FC<MultimediaSectionProps> = () => {
  const { i18n } = useTranslation();
  const currentLang = i18n.language as 'en' | 'ur';
  const [activeTab, setActiveTab] = useState<'videos' | 'gallery'>('videos');
  const [selectedVideo, setSelectedVideo] = useState<VideoItem | null>(null);
  const [selectedPhotoIndex, setSelectedPhotoIndex] = useState<number | null>(null);
  const [videoCategory, setVideoCategory] = useState<string>('All');
  const [photoCategory, setPhotoCategory] = useState<string>('All');

  const t = translations[currentLang];

  const videoCategories = [
    'All',
    'Lecture Series',
    'Poetry & Music',
    'Open House & News',
    'Cultural',
    'Patriotic'
  ];

  const photoCategories = [
    'All',
    'Dastan-e-Dastangoi',
    'Cultural',
    'Book Releases',
    'Seminars',
    'Campus'
  ];

  const filteredVideos = videosData.filter(v => 
    videoCategory === 'All' || v.category === videoCategory
  );

  const filteredPhotos = galleryPhotos.filter(p => 
    photoCategory === 'All' || p.category === photoCategory
  );

  const handleNextPhoto = () => {
    if (selectedPhotoIndex !== null) {
      setSelectedPhotoIndex((selectedPhotoIndex + 1) % filteredPhotos.length);
    }
  };

  const handlePrevPhoto = () => {
    if (selectedPhotoIndex !== null) {
      setSelectedPhotoIndex((selectedPhotoIndex - 1 + filteredPhotos.length) % filteredPhotos.length);
    }
  };

  return (
    <section className="py-16 bg-stone-50 border-b border-stone-200" id="gallery">
      <div id="archive" className="-mt-20 pt-20" />
      <div className="max-w-7xl mx-auto px-4">
        {/* Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-4 mb-8">
          <div>
            <div className="flex items-center gap-2 text-xs font-bold text-[#1e3a8a] uppercase tracking-wider">
              <Tv className="w-4 h-4 text-amber-600" />
              <span>{currentLang === 'ur' ? 'ملٹی میڈیا اور تصویری نگارخانہ' : 'Multimedia Hub & Visual Gallery'}</span>
            </div>
            <h2 className="text-2xl sm:text-3xl font-serif-title font-bold text-stone-900 mt-1">
              {currentLang === 'ur' ? 'یوٹیوب نشریات، خطبات اور تقاریب کی تصاویر' : 'Broadcast Recordings, Lectures & Event Photographs'}
            </h2>
          </div>

          <div className="flex bg-stone-200/70 p-1 rounded-lg self-start md:self-auto">
            <button
              id="tab-multimedia-videos-btn"
              onClick={() => setActiveTab('videos')}
              className={`px-4 py-2 text-xs font-bold rounded-md transition flex items-center gap-1.5 ${
                activeTab === 'videos' ? 'bg-white text-[#1e3a8a] shadow-xs' : 'text-stone-600 hover:text-stone-900'
              }`}
            >
              <Video className="w-3.5 h-3.5" />
              <span>Embedded Video Hub</span>
            </button>
            <button
              id="tab-multimedia-photos-btn"
              onClick={() => setActiveTab('gallery')}
              className={`px-4 py-2 text-xs font-bold rounded-md transition flex items-center gap-1.5 ${
                activeTab === 'gallery' ? 'bg-white text-[#1e3a8a] shadow-xs' : 'text-stone-600 hover:text-stone-900'
              }`}
            >
              <ImageIcon className="w-3.5 h-3.5" />
              <span>Events Photo Gallery</span>
            </button>
          </div>
        </div>

        {/* 1. YOUTUBE VIDEO HUB */}
        {activeTab === 'videos' && (
          <div className="space-y-6">
            {/* Category Filter Pills */}
            <div className="flex items-center gap-2 overflow-x-auto pb-2 scrollbar-none">
              {videoCategories.map((cat) => (
                <button
                  key={cat}
                  onClick={() => setVideoCategory(cat)}
                  className={`px-3 py-1.5 rounded-full text-xs font-semibold whitespace-nowrap transition ${
                    videoCategory === cat
                      ? 'bg-[#1e3a8a] text-amber-200 shadow-xs'
                      : 'bg-white text-stone-600 border border-stone-200 hover:bg-stone-100'
                  }`}
                >
                  {cat}
                </button>
              ))}
            </div>

            {/* Video Cards Grid */}
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
              {filteredVideos.map((video) => (
                <div 
                  key={video.id}
                  onClick={() => {
                    if (isYoutubeId(video.youtubeId)) setSelectedVideo(video);
                  }}
                  className={`bg-white rounded-xl border border-stone-200 overflow-hidden shadow-xs hover:shadow-md transition group flex flex-col justify-between ${
                    isYoutubeId(video.youtubeId) ? 'cursor-pointer' : 'cursor-default'
                  }`}
                >
                  <div>
                    <div className="relative h-48 bg-stone-900 overflow-hidden">
                      <img 
                        src={video.thumbnail} 
                        alt={video.title} 
                        className="w-full h-full object-cover opacity-85 group-hover:opacity-100 group-hover:scale-105 transition duration-500" 
                      />
                      <div className="absolute inset-0 bg-black/30 flex items-center justify-center">
                        {isYoutubeId(video.youtubeId) ? (
                          <div className="w-12 h-12 rounded-full bg-amber-400 text-blue-950 flex items-center justify-center shadow-lg group-hover:scale-110 transition">
                            <Play className="w-5 h-5 fill-current ml-0.5" />
                          </div>
                        ) : (
                          <span className="flex items-center gap-1.5 bg-black/70 backdrop-blur-md text-stone-200 text-[10px] font-semibold uppercase tracking-wider px-2.5 py-1 rounded-full">
                            <Clock className="w-3 h-3" />
                            {t.multimedia.recordingPending}
                          </span>
                        )}
                      </div>
                      {isYoutubeId(video.youtubeId) && (
                        <div className="absolute bottom-2.5 right-2.5 bg-black/80 backdrop-blur-md text-white font-mono text-[10px] px-2 py-0.5 rounded">
                          {video.duration}
                        </div>
                      )}
                      <div className="absolute top-2.5 left-2.5 bg-[#1e3a8a]/90 text-amber-300 text-[10px] font-bold px-2 py-0.5 rounded-full uppercase">
                        {video.category}
                      </div>
                    </div>

                    <div className="p-4">
                      <h3 className="text-sm font-bold font-serif-title text-stone-900 group-hover:text-[#1e3a8a] transition line-clamp-2">
                        {currentLang === 'ur' && video.titleUrdu ? video.titleUrdu : video.title}
                      </h3>
                      {video.speaker && (
                        <p className="text-[11px] text-stone-500 mt-1 flex items-center gap-1">
                          <User className="w-3 h-3 text-stone-400" />
                          <span>{video.speaker}</span>
                        </p>
                      )}
                      <p className="text-xs text-stone-600 mt-2 line-clamp-2 leading-relaxed">
                        {video.description}
                      </p>
                    </div>
                  </div>

                  <div className="p-4 pt-0">
                    {isYoutubeId(video.youtubeId) ? (
                      <a
                        href={youtubeWatchUrl(video.youtubeId)}
                        target="_blank"
                        rel="noopener noreferrer"
                        onClick={(event) => event.stopPropagation()}
                        aria-label={`${t.multimedia.watchRecording} — ${video.title}`}
                        className="pt-2 border-t border-stone-100 flex items-center justify-between text-xs text-blue-800 font-semibold hover:text-blue-950 hover:underline"
                      >
                        <span>{t.multimedia.watchRecording}</span>
                        <ExternalLink className="w-3 h-3" />
                      </a>
                    ) : (
                      <div className="pt-2 border-t border-stone-100 flex items-center justify-between text-xs text-stone-400 font-semibold">
                        <span>{t.multimedia.recordingPending}</span>
                      </div>
                    )}
                  </div>
                </div>
              ))}
            </div>
          </div>
        )}

        {/* 2. PHOTO GALLERY */}
        {activeTab === 'gallery' && (
          <div className="space-y-6">
            {/* Category Filter Pills */}
            <div className="flex items-center gap-2 overflow-x-auto pb-2 scrollbar-none">
              {photoCategories.map((cat) => (
                <button
                  key={cat}
                  onClick={() => setPhotoCategory(cat)}
                  className={`px-3 py-1.5 rounded-full text-xs font-semibold whitespace-nowrap transition ${
                    photoCategory === cat
                      ? 'bg-[#1e3a8a] text-amber-200 shadow-xs'
                      : 'bg-white text-stone-600 border border-stone-200 hover:bg-stone-100'
                  }`}
                >
                  {cat}
                </button>
              ))}
            </div>

            {/* Photos Grid */}
            <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
              {filteredPhotos.map((photo, idx) => (
                <div 
                  key={photo.id}
                  onClick={() => setSelectedPhotoIndex(idx)}
                  className="bg-white rounded-xl border border-stone-200 overflow-hidden shadow-xs hover:shadow-md transition cursor-pointer group"
                >
                  <div className="relative h-56 overflow-hidden bg-stone-100">
                    <img 
                      src={photo.image} 
                      alt={photo.title} 
                      className="w-full h-full object-cover group-hover:scale-105 transition duration-500" 
                    />
                    <div className="absolute inset-0 bg-black/40 opacity-0 group-hover:opacity-100 transition flex items-center justify-center">
                      <span className="p-2.5 rounded-full bg-white/90 text-stone-900 shadow">
                        <ZoomIn className="w-5 h-5" />
                      </span>
                    </div>
                    <div className="absolute top-2.5 left-2.5 bg-black/60 backdrop-blur-md text-stone-100 text-[10px] px-2 py-0.5 rounded font-medium">
                      {photo.category}
                    </div>
                  </div>

                  <div className="p-4">
                    <h3 className="text-xs font-bold text-stone-900 group-hover:text-[#1e3a8a] transition">
                      {photo.title}
                    </h3>
                    <p className="text-[11px] text-stone-500 mt-1">
                      {photo.caption} · {photo.date}
                    </p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        )}

        {/* VIDEO MODAL PLAYER — embeds the verified YouTube recording only */}
        {selectedVideo && isYoutubeId(selectedVideo.youtubeId) && (
          <div className="fixed inset-0 bg-black/80 backdrop-blur-xs flex items-center justify-center p-4 z-50">
            <div className="bg-stone-900 text-white rounded-2xl max-w-3xl w-full overflow-hidden shadow-2xl relative">
              <button
                onClick={() => setSelectedVideo(null)}
                aria-label={t.multimedia.close}
                className="absolute top-3 right-3 p-2 text-stone-300 hover:text-white rounded-full bg-black/50 hover:bg-black z-10"
              >
                <X className="w-5 h-5" />
              </button>

              <div className="relative aspect-video bg-black">
                <iframe
                  src={youtubeEmbedUrl(selectedVideo.youtubeId)}
                  title={selectedVideo.title}
                  className="absolute inset-0 w-full h-full"
                  allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                  referrerPolicy="strict-origin-when-cross-origin"
                  allowFullScreen
                />
              </div>

              <div className="p-6 bg-stone-900 border-t border-stone-800">
                <div className="flex items-center justify-between text-xs text-amber-400 mb-1">
                  <span>{selectedVideo.category}</span>
                  <span className="font-mono">{selectedVideo.duration}</span>
                </div>
                <h3 className="text-base font-bold font-serif-title text-stone-100">
                  {selectedVideo.title}
                </h3>
                {selectedVideo.speaker && (
                  <p className="text-xs text-stone-400 mt-1">Speaker/Host: {selectedVideo.speaker}</p>
                )}
                <p className="text-xs text-stone-300 mt-2 leading-relaxed">
                  {selectedVideo.description}
                </p>
                <a
                  href={youtubeWatchUrl(selectedVideo.youtubeId)}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="mt-3 inline-flex items-center gap-1.5 text-xs font-semibold text-amber-300 hover:text-amber-200 hover:underline"
                >
                  <ExternalLink className="w-3.5 h-3.5" />
                  <span>{t.multimedia.watchOnYouTube}</span>
                </a>
              </div>
            </div>
          </div>
        )}

        {/* PHOTO LIGHTBOX MODAL */}
        {selectedPhotoIndex !== null && (
          <div className="fixed inset-0 bg-black/90 backdrop-blur-md flex items-center justify-center p-4 z-50">
            <button
              onClick={() => setSelectedPhotoIndex(null)}
              className="absolute top-4 right-4 p-2 text-stone-300 hover:text-white rounded-full bg-white/10 hover:bg-white/20 z-10"
            >
              <X className="w-6 h-6" />
            </button>

            <button
              onClick={handlePrevPhoto}
              className="absolute left-4 p-3 text-white rounded-full bg-white/10 hover:bg-white/20 z-10"
            >
              <ChevronLeft className="w-6 h-6" />
            </button>

            <button
              onClick={handleNextPhoto}
              className="absolute right-4 p-3 text-white rounded-full bg-white/10 hover:bg-white/20 z-10"
            >
              <ChevronRight className="w-6 h-6" />
            </button>

            <div className="max-w-4xl max-h-[85vh] flex flex-col items-center">
              <img 
                src={filteredPhotos[selectedPhotoIndex].image} 
                alt={filteredPhotos[selectedPhotoIndex].title} 
                className="max-h-[70vh] max-w-full object-contain rounded-lg shadow-2xl" 
              />
              <div className="text-center text-white mt-4 max-w-xl">
                <span className="text-[11px] uppercase tracking-wider text-amber-300 font-bold">
                  {filteredPhotos[selectedPhotoIndex].category} · {filteredPhotos[selectedPhotoIndex].date}
                </span>
                <h4 className="text-lg font-bold mt-1">
                  {filteredPhotos[selectedPhotoIndex].title}
                </h4>
                <p className="text-xs text-stone-300 mt-1">
                  {filteredPhotos[selectedPhotoIndex].caption}
                </p>
              </div>
            </div>
          </div>
        )}
      </div>
    </section>
  );
};
