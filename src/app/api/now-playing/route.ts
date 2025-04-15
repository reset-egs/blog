import { NextResponse } from "next/server";

const { SPOTIFY_CLIENT_ID, SPOTIFY_CLIENT_SECRET, SPOTIFY_REFRESH_TOKEN } =
  process.env;

interface Artist {
  name: string;
}

const basic = Buffer.from(
  `${SPOTIFY_CLIENT_ID}:${SPOTIFY_CLIENT_SECRET}`,
).toString("base64");

const getAccessToken = async () => {
  const res = await fetch("https://accounts.spotify.com/api/token", {
    method: "POST",
    headers: {
      Authorization: `Basic ${basic}`,
      "Content-Type": "application/x-www-form-urlencoded",
    },
    body: new URLSearchParams({
      grant_type: "refresh_token",
      refresh_token: SPOTIFY_REFRESH_TOKEN!,
    }),
  });

  return res.json();
};

const fetchNowPlaying = (accessToken: string) => {
  return fetch("https://api.spotify.com/v1/me/player/currently-playing", {
    headers: {
      Authorization: `Bearer ${accessToken}`,
    },
  });
};

const fetchRecentlyPlayed = (accessToken: string) => {
  return fetch("https://api.spotify.com/v1/me/player/recently-played?limit=1", {
    headers: {
      Authorization: `Bearer ${accessToken}`,
    },
  });
};

export async function GET() {
  try {
    const { access_token } = await getAccessToken();

    const response = await fetchNowPlaying(access_token);
    let songData = await response.json();

    const isPlaying = response.status === 200 && songData?.item;

    if (!isPlaying) {
      const recent = await fetchRecentlyPlayed(access_token).then((res) =>
        res.json(),
      );
      songData = recent.items?.[0]?.track;
    }

    const track = {
      isPlaying,
      title: songData.name,
      artist: songData.artists.map((artist: Artist) => artist.name).join(", "),
      album: songData.album.name,
      albumImageUrl: songData.album.images[0].url,
      songUrl: songData.external_urls.spotify,
    };

    return NextResponse.json(track);
  } catch (error) {
    console.error(error);
  }
}
