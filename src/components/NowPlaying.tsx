"use client";
import useSWR from "swr";
import { useState } from "react";

type Track = {
  isPlaying: boolean;
  title: string;
  artist: string;
  album: string;
  albumImageUrl: string;
  songUrl: string;
};

const fetcher = (url: string) => fetch(url).then((res) => res.json());

export default function NowPlaying() {
  const { data, error } = useSWR<Track>("/api/now-playing", fetcher, {
    refreshInterval: 30000,
  });
  const [hovered, setHovered] = useState(false);

  if (error)
    return (
      <div className="border-2 border-black bg-white p-4 shadow-[4px_4px_0px_rgba(0,0,0,1)]">
        <p className="font-medium text-sm">Could not load music info.</p>
      </div>
    );

  if (!data)
    return (
      <div className="border-2 border-black bg-white p-4 shadow-[4px_4px_0px_rgba(0,0,0,1)]">
        <p className="font-medium text-sm">Loading Spotify data...</p>
      </div>
    );

  const bgColor = data.isPlaying ? "bg-green-200" : "bg-gray-200";

  return (
    <a
      href={data.songUrl}
      target="_blank"
      rel="noopener noreferrer"
      className={`block border-2 border-black ${bgColor} p-4 
        ${
          hovered
            ? "shadow-[6px_6px_0px_rgba(0,0,0,1)] translate-x-[-2px] translate-y-[-2px]"
            : "shadow-[4px_4px_0px_rgba(0,0,0,1)]"
        } transition-all duration-200`}
      onMouseEnter={() => setHovered(true)}
      onMouseLeave={() => setHovered(false)}
    >
      <div className="flex items-center gap-4">
        <div className="border-2 border-black overflow-hidden">
          <img
            src={data.albumImageUrl}
            alt={`${data.album} album art`}
            width={64}
            height={64}
            className="block"
          />
        </div>
        <div>
          <p className="font-bold text-sm">{data.title}</p>
          <p className="text-sm">{data.artist}</p>
          <div className="flex items-center gap-1 mt-1">
            {data.isPlaying ? (
              <div className="flex items-center gap-1">
                <span className="inline-block w-2 h-2 rounded-full bg-green-500 animate-pulse"></span>
                <p className="text-xs font-medium">Now Playing</p>

                {/* Equalizer Animation */}
                <div className="flex items-end gap-[1px] ml-2 h-3">
                  <span className="w-[2px] h-full bg-green-600 animate-[bounce_0.6s_infinite_0.1s]"></span>
                  <span className="w-[2px] h-2 bg-green-600 animate-[bounce_0.6s_infinite_0.2s]"></span>
                  <span className="w-[2px] h-3 bg-green-600 animate-[bounce_0.6s_infinite_0.3s]"></span>
                </div>
              </div>
            ) : (
              <div className="flex items-center gap-1">
                <span className="inline-block w-2 h-2 rounded-full bg-gray-500"></span>
                <p className="text-xs">Recently Played</p>
              </div>
            )}
          </div>
        </div>
      </div>
    </a>
  );
}
