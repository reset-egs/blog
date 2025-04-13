import BlogCard from "@/components/BlogCard";
import {posts} from "@/data/posts";

export default function BlogsPage() {
    const sortedPosts = [...posts].sort((a, b) =>
        new Date(b.date).getTime() - new Date(a.date).getTime()
    );

    return (
        <div className="container mx-auto py-10 px-4">
            <h1 className="text-3xl font-bold mb-8 text-center">Blog Posts</h1>

            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
                {sortedPosts.map((post) => (
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
        </div>
    );
}

export const metadata = {
    title: 'Blog | ctrl+alt+reset',
    description: 'Read my latest blog posts',
};