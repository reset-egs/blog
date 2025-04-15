import { NextResponse } from "next/server";

interface Artist {
  name: string;
}

const { SPOTIFY_CLIENT_ID, SPOTIFY_CLIENT_SECRET, SPOTIFY_REFRESH_TOKEN } =
  process.env;

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

  const json = await res.json();
  if (!res.ok) {
    console.error("Token error:", json);
    throw new Error("Failed to get access token");
  }

  return json;
};

export async function GET() {
  try {
    const { access_token } = await getAccessToken();

    const nowPlayingRes = await fetch(
      "https://api.spotify.com/v1/me/player/currently-playing",
      {
        headers: {
          Authorization: `Bearer ${access_token}`,
        },
      },
    );

    let isPlaying = false;
    let songData;

    // Only parse JSON if there's content
    if (
      nowPlayingRes.status === 200 &&
      nowPlayingRes.headers.get("content-length") !== "0"
    ) {
      const json = await nowPlayingRes.json();
      if (json?.item) {
        songData = json.item;
        isPlaying = true;
      }
    }

    // Fallback to recently played
    if (!songData) {
      const recentRes = await fetch(
        "https://api.spotify.com/v1/me/player/recently-played?limit=1",
        {
          headers: {
            Authorization: `Bearer ${access_token}`,
          },
        },
      );

      const recent = await recentRes.json();
      songData = recent?.items?.[0]?.track;
    }

    if (!songData) {
      return NextResponse.json(
        { error: "No song data available" },
        { status: 404 },
      );
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
  } catch (err) {
    console.error("API error:", err);
    return NextResponse.json(
      { error: "Internal Server Error" },
      { status: 500 },
    );
  }
}
