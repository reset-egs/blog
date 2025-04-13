// src/app/page.tsx
import { posts } from "@/data/posts";
import BlogCard from "../components/BlogCard";

export default function Home() {
    return (
        <main className="container mx-auto py-10 px-4">
            <h1 className="text-4xl font-bold mb-8">My Blog</h1>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                {posts.map((post) => (
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
        </main>
    );
}

// This enables ISR with revalidation every hour
export const revalidate = 3600;