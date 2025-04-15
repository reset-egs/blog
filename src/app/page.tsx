import { posts } from "@/data/posts";
import Link from "next/link";
import BlogCard from "../components/BlogCard";
import Image from "next/image";
import NowPlaying from "../components/NowPlaying";

export default function Home() {
  const latestPosts = [...posts]
    .sort((a, b) => new Date(b.date).getTime() - new Date(a.date).getTime())
    .slice(0, 4);

  const featuredPost = latestPosts[0];

  return (
    <main className="container mx-auto py-6 sm:py-10 px-4">
      {/* Hero Section */}
      <section className="mb-10 sm:mb-16 border-2 border-black bg-white p-5 sm:p-8 shadow-[5px_5px_0px_rgba(0,0,0,1)] sm:shadow-[8px_8px_0px_rgba(0,0,0,1)]">
        <h1 className="text-4xl sm:text-5xl md:text-6xl font-bold mb-3 sm:mb-4">
          ctrl+alt+<span className="bg-pink-300 px-1">reset</span>
        </h1>
        <p className="text-lg sm:text-xl mb-4 sm:mb-6">
          Thoughts and opinions on software development, technology, politics,
          and everything in between.
        </p>
        <Link
          href="/about"
          className="inline-block px-4 sm:px-6 py-2 sm:py-3 border-black border-2 bg-yellow-300 hover:shadow-[4px_4px_0px_rgba(0,0,0,1)] hover:translate-x-[-2px] hover:translate-y-[-2px] active:translate-x-[0px] active:translate-y-[0px] active:shadow-none transition-all font-medium"
        >
          Learn More
        </Link>
      </section>
      {/* Now Playing section */}
      <section className="mb-10 sm:mb-16">
        <h2 className="text-2xl sm:text-3xl font-bold mb-4 sm:mb-6 inline-block border-b-4 border-yellow-300 pb-1">
          What I'm Listening To
        </h2>
        <NowPlaying />
      </section>
      {/* Featured Post */}
      {featuredPost && (
        <section className="mb-10 sm:mb-16">
          <h2 className="text-2xl sm:text-3xl font-bold mb-4 sm:mb-6 inline-block border-b-4 border-pink-300 pb-1">
            Featured Post
          </h2>
          <div className="grid grid-cols-1 gap-6">
            <div className="border-2 border-black bg-white p-4 sm:p-6 shadow-[4px_4px_0px_rgba(0,0,0,1)] sm:shadow-[6px_6px_0px_rgba(0,0,0,1)]">
              <div className="relative w-full h-48 sm:h-64 md:h-80 mb-4 border-2 border-black overflow-hidden">
                <Image
                  src={featuredPost.imageUrl}
                  alt={featuredPost.title}
                  fill
                  className="object-cover"
                  sizes="(max-width: 640px) 100vw, (max-width: 768px) 100vw, 50vw"
                />
              </div>
              <h3 className="text-xl sm:text-2xl font-bold mb-2">
                {featuredPost.title}
              </h3>
              <p className="text-gray-700 mb-4 line-clamp-2 sm:line-clamp-none">
                {featuredPost.description}
              </p>
              <Link
                href={`/blog/${featuredPost.id}`}
                className="inline-block px-4 sm:px-5 py-2 border-black border-2 bg-cyan-300 hover:shadow-[4px_4px_0px_rgba(0,0,0,1)] hover:translate-x-[-2px] hover:translate-y-[-2px] active:translate-x-[0px] active:translate-y-[0px] active:shadow-none transition-all font-medium"
              >
                Read More
              </Link>
            </div>
          </div>
        </section>
      )}
      {/* Latest Posts - Showing latest 4 posts (including the featured one) */}
      <section className="mb-10 sm:mb-16">
        <h2 className="text-2xl sm:text-3xl font-bold mb-4 sm:mb-6 inline-block border-b-4 border-yellow-300 pb-1">
          Latest Posts
        </h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-4 sm:gap-6">
          {latestPosts.map((post) => (
            <BlogCard
              key={post.id}
              id={post.id}
              title={post.title}
              description={post.description}
              imageUrl={post.imageUrl}
              date={post.date}
            />
          ))}
        </div>
        {posts.length > 4 && (
          <div className="mt-8 text-center">
            <Link
              href="/blog"
              className="inline-block px-4 sm:px-6 py-2 sm:py-3 border-black border-2 bg-yellow-300 hover:shadow-[4px_4px_0px_rgba(0,0,0,1)] hover:translate-x-[-2px] hover:translate-y-[-2px] active:translate-x-[0px] active:translate-y-[0px] active:shadow-none transition-all font-medium"
            >
              View All Posts
            </Link>
          </div>
        )}
      </section>

      {/* Newsletter */}
      <section className="border-2 border-black bg-yellow-100 p-5 sm:p-8 shadow-[5px_5px_0px_rgba(0,0,0,1)] sm:shadow-[8px_8px_0px_rgba(0,0,0,1)] relative">
        {/* Coming Soon Overlay */}
        <div className="absolute inset-0 flex items-center justify-center">
          <div className="bg-pink-300 border-2 border-black py-2 px-4 rotate-[-5deg] shadow-[4px_4px_0px_rgba(0,0,0,1)]">
            <span className="font-bold text-lg sm:text-xl">Coming Soon</span>
          </div>
        </div>

        <h2 className="text-xl sm:text-2xl font-bold mb-3 sm:mb-4">
          Stay Updated
        </h2>
        <p className="mb-4 sm:mb-6">
          Subscribe to get notified about new posts and updates.
        </p>
        <div className="flex flex-col sm:flex-row gap-3 sm:gap-4">
          <input
            className="w-full sm:w-auto sm:max-w-xs md:w-96 border-black border-2 p-2 sm:p-2.5 focus:outline-none focus:shadow-[2px_2px_0px_rgba(0,0,0,1)] focus:bg-[#FFA6F6] active:shadow-[2px_2px_0px_rgba(0,0,0,1)]"
            placeholder="you@example.com"
            type="email"
            disabled
          />
          <button
            className="px-6 py-2 border-black border-2 bg-pink-300 hover:shadow-[4px_4px_0px_rgba(0,0,0,1)] hover:translate-x-[-2px] hover:translate-y-[-2px] active:translate-x-[0px] active:translate-y-[0px] active:shadow-none transition-all font-medium opacity-70"
            disabled
          >
            Subscribe
          </button>
        </div>
      </section>
    </main>
  );
}

export const metadata = {
  title: "Home | ctrl+alt+reset",
  description: "Welcome to my site! Explore my latest posts and insights.",
};

// This enables ISR with revalidation every hour
export const revalidate = 3600;
