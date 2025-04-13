// src/data/posts.ts
export interface BlogPost {
    id: string;
    title: string;
    description: string;
    imageUrl: string;
    date: string;
    content: string;
}

export const posts: BlogPost[] = [
    {
        id: "first-post",
        title: "Getting Started with Next.js",
        description: "Learn how to build static websites with Next.js and ISR",
        imageUrl: "https://images.unsplash.com/photo-1493612276216-ee3925520721?q=80&w=1528&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
        date: "2023-08-15",
        content: "This is the full content of the blog post..."
    },
    // Add more posts
];