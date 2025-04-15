"use client";
import useSWR from "swr";

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

  if (error) return <p>Could not load music info.</p>;
  if (!data) return <p>Loading...</p>;

  return (
    <a
      href={data.songUrl}
      target="_blank"
      rel="noopener noreferrer"
      className="flex items-center gap-4 p-4 rounded-md shadow-sm border bg-white dark:bg-zinc-900"
    >
      <img
        src={data.albumImageUrl}
        alt="Album Art"
        width={64}
        height={64}
        className="rounded-md"
      />
      <div className="text-sm">
        <p className="font-medium">{data.title}</p>
        <p className="text-gray-600 dark:text-gray-400">{data.artist}</p>
        <p className="text-xs text-gray-400">
          {data.isPlaying ? "Now Playing" : "Recently Played"}
        </p>
      </div>
    </a>
  );
}
