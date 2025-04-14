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
    id: "hello-world",
    title: "Welcome to ctrl+alt+reset",
    description: "A brief introduction to me, my website, and what to expect.",
    imageUrl:
      "https://images.unsplash.com/photo-1650105312043-647cc3ac893e?q=80&w=2370&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    date: "2025-04-14T16:04:18Z",
    content: `
### *Hello, people of the internet!*

I’m super excited to welcome you to **ctrl-alt-reset**—my little corner of the web.

On the off chance you're not one of my friends I’ve sent this link to, head over to the [About](https://ctrlaltreset.vercel.app/about "Learn more about me") page to learn more about who I am.

So, what’s the purpose of this site? I have a vague idea—but before we get into that, let’s talk about **why** I wanted to create it in the first place.

The main reason is simple: I like making websites.  
Anticlimactic, I know—but that’s really all there is to it.

More specifically, I like making *pretty* websites. Unfortunately, that’s not something I get to do often at my full-time job. I do get to work on a lot of cool stuff (which I’ll share more about in future posts), but that design itch still needs to be scratched. So I made this site to host my online presence—at least the parts that are *suitable* for public sharing.

### Why include a blog?

Also simple: I like writing stuff.  
It’s something I’ve always enjoyed.

That said, I wanted to avoid making yet another blog *just* about software development. Medium has that covered. Instead, I’m leaning toward something more like an online diary.

You might be wondering: _Is this guy going to share what he had for breakfast?_  
Maybe—if it was really good. But more likely, you’ll see content on things I find interesting. And since my interests are pretty broad, that could mean anything from a coding tutorial to a sociological article.

Sure, it’s a strange mix. But honestly, that’s what excites me. Just imagine a dev stumbling onto a helpful tutorial here, loving it, then clicking around and finding wild, off-topic ramblings. *That’s* the vibe I’m going for.

### What’s next?

I’ve got big plans for this site—rolled out whenever I find the time.  
One of the first things I’ll do is move my (currently outdated) portfolio over here.

---

So, what can you expect from this site?  
Only time will tell.

Until then, tune in and *expect the unexpected*.
`,
  },
];
