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
        date: "2023-08-15T10:00:00Z",
        content: "This is the full content of the blog post..."
    },
    {
        id: "second-post",
        title: "Understanding React Hooks",
        description: "A deep dive into React Hooks and how to use them effectively.",
        imageUrl: "https://images.unsplash.com/photo-1506748686214-e9df14d4d9d0?q=80&w=1528&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
        date: "2025-04-11T10:00:00Z",
        content: "This is the full content of the blog post..."
    },
    {
        id: "third-post",
        title: "CSS Grid vs Flexbox",
        description: "Comparing CSS Grid and Flexbox for layout design.",
        imageUrl: "https://images.unsplash.com/photo-1517841905240-472988babdf9?q=80&w=1528&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
        date: "2025-03-11T10:00:00Z",
        content: "This is the full content of the blog post..."
    },
    {
        id: "fourth-post",
        title: "Building APIs with Node.js",
        description: "Learn how to create RESTful APIs using Node.js and Express.",
        imageUrl: "https://images.unsplash.com/photo-1506748686214-e9df14d4d9d0?q=80&w=1528&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
        date: "2025-01-11T10:00:00Z",
        content: "This is the full content of the blog post..."
    },
    {
        id: "fifth-post",
        title: "JavaScript ES6 Features",
        description: "Explore the new features introduced in ES6.",
        imageUrl: "https://images.unsplash.com/photo-1506748686214-e9df14d4d9d0?q=80&w=1528&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
        date: "2025-02-11T10:00:00Z",
        content: "This is the full content of the blog post..."
    }
];