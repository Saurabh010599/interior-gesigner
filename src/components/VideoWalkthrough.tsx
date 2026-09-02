import React, { useState, useRef } from 'react';
import { 
  Play, 
  Pause, 
  Volume2, 
  VolumeX, 
  Maximize2, 
  Sparkles, 
  MapPin, 
  Clock, 
  Video,
  Layers,
  ArrowRight,
  Compass
} from 'lucide-react';
import { motion } from 'motion/react';
import { VIDEO_SHOWCASES } from '../data/mockData';

export const VideoWalkthrough: React.FC<{ onBookConsultation: (projectTitle: string) => void }> = ({ onBookConsultation }) => {
  const [selectedVideo, setSelectedVideo] = useState(VIDEO_SHOWCASES[0]);
  const [isPlaying, setIsPlaying] = useState<boolean>(true);
  const [isMuted, setIsMuted] = useState<boolean>(true);
  const videoRef = useRef<HTMLVideoElement>(null);

  const togglePlay = () => {
    if (!videoRef.current) return;
    if (isPlaying) {
      videoRef.current.pause();
      setIsPlaying(false);
    } else {
      videoRef.current.play();
      setIsPlaying(true);
    }
  };

  const toggleMute = () => {
    if (!videoRef.current) return;
    videoRef.current.muted = !isMuted;
    setIsMuted(!isMuted);
  };

  const handleSelectVideo = (vid: typeof VIDEO_SHOWCASES[0]) => {
    setSelectedVideo(vid);
    setIsPlaying(true);
  };

  return (
    <section className="relative py-24 bg-[#fafafc] border-t border-zinc-100 overflow-hidden select-none">
      
      {/* Background Ambience */}
      <div className="absolute top-1/2 right-10 w-96 h-96 bg-[#c5a059]/6 rounded-full blur-[160px] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-14">
          <motion.div 
            initial={{ opacity: 0, y: 10 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-[#c5a059]/15 border border-[#c5a059]/30 text-[#8d6928] text-xs font-bold tracking-widest uppercase mb-3"
          >
            <Video className="w-3.5 h-3.5" /> Cinematic Virtual Tours
          </motion.div>
          <motion.h2 
            initial={{ opacity: 0, y: 15 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="font-cinzel text-3xl sm:text-4xl md:text-5xl font-bold text-zinc-900 tracking-wide"
          >
            PROJECT <span className="text-gold-gradient">WALKTHROUGHS</span>
          </motion.h2>
          <motion.p 
            initial={{ opacity: 0, y: 15 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-zinc-600 text-sm sm:text-base mt-2 font-normal max-w-xl mx-auto"
          >
            Experience executed luxury spaces in Chandrapur through cinematic walkthrough tours.
          </motion.p>
        </div>

        {/* Video Stage & Project Switcher Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
          
          {/* Main Video Cinema Screen (8 cols on desktop) */}
          <div className="lg:col-span-8 relative aspect-[16/9] w-full rounded-3xl overflow-hidden border border-zinc-200 bg-black shadow-[0_20px_50px_rgba(0,0,0,0.15)] group">
            
            <video
              ref={videoRef}
              key={selectedVideo.id}
              src={selectedVideo.videoUrl}
              poster={selectedVideo.thumbnail}
              autoPlay
              loop
              muted={isMuted}
              playsInline
              className="w-full h-full object-cover"
            />

            {/* Video Gradient Overlay */}
            <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-black/20 pointer-events-none" />

            {/* Top Video Metadata */}
            <div className="absolute top-4 left-4 right-4 flex items-center justify-between z-20">
              <span className="px-3 py-1 rounded-full bg-white/90 text-zinc-900 text-xs font-bold uppercase tracking-wider backdrop-blur-md shadow-sm">
                {selectedVideo.category} • {selectedVideo.duration}
              </span>

              <button
                onClick={toggleMute}
                className="w-9 h-9 rounded-full bg-black/60 border border-white/20 flex items-center justify-center text-white hover:text-[#dfbe76] transition-all cursor-pointer backdrop-blur-md"
              >
                {isMuted ? <VolumeX className="w-4 h-4" /> : <Volume2 className="w-4 h-4" />}
              </button>
            </div>

            {/* Center Play/Pause Trigger */}
            <div 
              onClick={togglePlay}
              className="absolute inset-0 flex items-center justify-center cursor-pointer z-10"
            >
              {!isPlaying && (
                <div className="w-16 h-16 rounded-full bg-[#c5a059] flex items-center justify-center text-black shadow-lg scale-110 hover:scale-125 transition-transform">
                  <Play className="w-7 h-7 fill-black ml-1" />
                </div>
              )}
            </div>

            {/* Bottom Video Info & CTA */}
            <div className="absolute bottom-4 left-4 right-4 flex flex-col sm:flex-row sm:items-end justify-between gap-3 z-20">
              <div>
                <div className="flex items-center gap-1.5 text-xs text-amber-200 mb-1">
                  <MapPin className="w-3.5 h-3.5 text-[#dfbe76]" /> {selectedVideo.location}
                </div>
                <h3 className="font-cinzel text-lg sm:text-xl font-bold text-white">
                  {selectedVideo.title}
                </h3>
              </div>

              <button
                onClick={() => onBookConsultation(selectedVideo.title)}
                className="px-4 py-2 rounded-full bg-gradient-to-r from-[#c5a059] via-[#dfbe76] to-[#b38738] text-black font-bold text-xs uppercase tracking-wider hover:opacity-95 transition-opacity flex items-center gap-1.5 cursor-pointer shrink-0"
              >
                <span>Request Similar Design</span>
                <ArrowRight className="w-3.5 h-3.5" />
              </button>
            </div>

          </div>

          {/* Project Selection Playlist (4 cols on desktop) */}
          <div className="lg:col-span-4 space-y-3">
            <h3 className="font-cinzel text-xs uppercase font-bold tracking-wider text-zinc-500 mb-2">
              Featured Walkthrough Tours
            </h3>

            {VIDEO_SHOWCASES.map((vid) => (
              <div
                key={vid.id}
                onClick={() => handleSelectVideo(vid)}
                className={`p-3.5 rounded-2xl border transition-all cursor-pointer flex items-center gap-3.5 ${
                  selectedVideo.id === vid.id
                    ? 'bg-white border-[#b38738] shadow-sm'
                    : 'bg-white/60 border-zinc-200 hover:bg-white hover:border-zinc-300'
                }`}
              >
                <div className="relative w-20 h-14 rounded-xl overflow-hidden shrink-0 bg-zinc-900">
                  <img src={vid.thumbnail} alt={vid.title} className="w-full h-full object-cover" referrerPolicy="no-referrer" />
                  <div className="absolute inset-0 bg-black/40 flex items-center justify-center">
                    <Play className="w-4 h-4 text-white fill-white" />
                  </div>
                </div>

                <div className="flex-1 min-w-0">
                  <span className="text-[10px] uppercase font-bold tracking-wider text-[#8d6928] block truncate">
                    {vid.category}
                  </span>
                  <h4 className="font-cinzel text-xs font-bold text-zinc-900 truncate">
                    {vid.title}
                  </h4>
                  <div className="text-[11px] text-zinc-500 truncate mt-0.5">
                    {vid.location}
                  </div>
                </div>
              </div>
            ))}
          </div>

        </div>

      </div>
    </section>
  );
};
