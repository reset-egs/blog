import { posts } from "@/data/posts";
import { notFound } from "next/navigation";
import { format } from "date-fns";
import Image from "next/image";
import ReactMarkdown from "react-markdown";

// Generate metadata based on the post
export async function generateMetadata({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const resolvedParams = await params;
  const post = posts.find((p) => p.id === resolvedParams.slug);

  if (!post) {
    return {
      title: "Post Not Found | ctrl+alt+reset",
      description: "The requested blog post could not be found",
    };
  }

  return {
    title: post?.title,
    description: post?.description,
    openGraph: {
      images: [
        {
          url: post?.imageUrl || "/og-image.jpg",
          width: 1200,
          height: 630,
          alt: post?.title,
        },
      ],
    },
  };
}

export default async function BlogPostPage({
  params,
}: {
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
    <div className="container mx-auto py-10 px-4">
      <div className="max-w-3xl mx-auto bg-white border-4 border-black shadow-[8px_8px_0px_0px_rgba(0,0,0,1)] overflow-hidden">
        <Image
          src={post.imageUrl}
          alt={post.title}
          width={1000}
          height={500}
          className="w-full h-64 object-cover border-b-4 border-black"
        />
        <div className="p-6 md:p-8">
          <h1 className="text-4xl font-bold mb-2">{post.title}</h1>
          <p className="text-gray-600 mb-6">
            {format(new Date(post.date), "MMM d, yyyy 'at' h:mm a")}
          </p>
          <article className="prose prose-lg max-w-none">
            <ReactMarkdown>{post.content}</ReactMarkdown>
          </article>
        </div>
      </div>
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
