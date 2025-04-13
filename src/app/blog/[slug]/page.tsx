import {posts} from "@/data/posts";
import {notFound} from "next/navigation";
import {format} from "date-fns";
import Image from "next/image";
import ReactMarkdown from "react-markdown";

// Generate metadata based on the post
export async function generateMetadata({params}: {
    params: Promise<{ slug: string }>;
}) {
    const resolvedParams = await params;
    const post = posts.find((p) => p.id === resolvedParams.slug);

    if (!post) {
        return {
            title: 'Post Not Found | ctrl+alt+reset',
            description: 'The requested blog post could not be found',
        };
    }

    return {
        title: `${post.title} | ctrl+alt+reset`,
        description: post.description,
    };
}

export default async function BlogPostPage({params}: {
    params: Promise<{ slug: string }>;
}) {
    const resolvedParams = await params;
    const slug = resolvedParams.slug;

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
            <p className="text-gray-600 mb-8">{format(post.date, "MMM d, yyyy 'at' h:mm a")}</p>
            <Image
                src={post.imageUrl}
                alt={post.title}
                width={500}
                height={400}
                className="w-full h-64 object-cover mb-8 rounded-lg"
            />
            <article className="prose prose-lg max-w-none">
                <ReactMarkdown>{post.content}</ReactMarkdown>
            </article>

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