import { posts } from "@/data/posts";
import { notFound } from "next/navigation";

interface BlogPostPageProps {
    params: {
        slug: string;
    };
}

export default async function BlogPostPage({ params }: BlogPostPageProps) {
    const { slug } = await params;

    if (!slug) {
        notFound();
    }

    const post = posts.find((p) => p.id === slug);

    if (!post) {
        notFound();
    }

    return (
        <div className="container mx-auto py-10 px-4 max-w-3xl">
            <h1 className="text-4xl font-bold mb-4">{post.title}</h1>
            <p className="text-gray-600 mb-8">{post.date}</p>
            <img
                src={post.imageUrl}
                alt={post.title}
                className="w-full h-64 object-cover mb-8 rounded-lg"
            />
            <div className="prose">{post.content}</div>
        </div>
    );
}

// Generate static paths for known blog posts
export async function generateStaticParams() {
    return posts.map((post) => ({
        slug: post.id,
    }));
}

// ISR: Revalidate pages every hour
export const revalidate = 3600;