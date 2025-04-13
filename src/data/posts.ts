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
        id: "welcome-to-my-blog",
        title: "Welcome to ctrl+alt+reset",
        description: "A brief introduction to my blog and what to expect.",
        imageUrl: "https://images.unsplash.com/photo-1650105312043-647cc3ac893e?q=80&w=2370&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
        date: "2025-04-13T17:46:20Z",
        content: `
## 👋 Welcome to ctrl+alt+reset

Hey there! I'm super excited to welcome you to my little corner of the internet — **ctrl+alt+reset**.

This blog is a space where I plan to share:

- ✍️ Personal insights and reflections  
- 💻 Coding tips, dev experiments, and tech tutorials  
- 🧠 Thoughts on topics that interest me, from productivity to philosophy
- ⚙️ Deep dives into productivity, systems, and tools I love

---

## 🧭 What to Expect

This isn't just a blog; it's a journey. A place where I can share my thoughts, ideas, and experiences as I navigate the ever-evolving world of technology and life.

---

## 🙌 Thanks for Dropping In

Whether you’re a friend, fellow dev, or a curious stranger — thanks for reading. I’d love to hear from you if something here resonates.

Stay tuned for more!

— _Szymon "Reset" Zwara_
`

    },
];