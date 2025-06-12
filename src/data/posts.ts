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
  {
    id: "neo-brutalism-in-web-design",
    title: "Neo-Brutalism in Web Design: The Beauty of Being Bold",
    description:
      "Exploring the aesthetics and principles of Neo-Brutalism in web design.",
    imageUrl:
      "https://neo-brutalism-ui-library.vercel.app/assets/neo-brutalism-image3-fe096ca6.jpg",
    date: "2025-04-16T11:05:18",
    content: `
You know those websites that look like they were made in 1999 — but intentionally so? The ones with oversized type, jarring colors, no gradients, no smooth shadows, and *definitely* no soft corners?
Welcome to the world of **neo-brutalism**!
### Table of Contents
1. [What is Neo-Brutalism?](#what-is-neo-brutalism)
2. [A Brief History](#a-brief-history)
3. [Core Principles](#core-principles)
4. [Why It's Trending](#why-its-trending)
5. [Use Cases & When to Use It](#use-cases-and-when-to-use-it)
6. [Notable Examples](#notable-examples)
7. [My Take on Neo-Brutalism](#my-take-on-neo-brutalism)
8. [Further Reading](#further-reading)
### What is Neo-Brutalism?
Neo-brutalism is a web-design trend that deliberately rejects sleek, overly polished aesthetics in favor of something raw and bold. It’s characterized by harsh contrast, unstyled HTML elements, mono or system fonts, visible borders, and layouts that feel like they weren’t designed — even though they very much were. 

It's not about being ugly—it's actually quite the opposite. Most importantly, it's about being honest, functional and attention-grabbing. Think of it as the digital equivalent of brutalist architecture, but with \`<div>\`s instead of concrete slabs.
### A Brief History
Brutalism started in architecture in the mid-20th century. It was raw, functional, and stripped of decorative fluff. In web design, brutalism first popped up in the early 2010s as a kind of countercultural reaction to overly polished, corporate websites.

Neo-brutalism is a more refined, digital-native version of that idea. It's still anti-fluff, but it often combines the raw aesthetic with intentional structure, UX considerations, and even some subtle elegance.
### Core Principles
Here are a few pillars of neo-brutalist web design:
-   **No gradients. No gloss.** Everything is flat and honest.
    
-   **Visible structure.** Borders, grids, and containers are on full display. Rounded corners are a definite *no-go*.
    
-   **Harsh contrast.** This is often achieved by pure black on white, or clashing neon palettes without any blend or gradient.
    
-   **System fonts.** No Google Fonts bloat — just good old \`Arial\`, \`Courier\`, or \`Times\`, although this is not a strong requirement.
    
-   **Minimal interactivity.** Links look like links. Buttons look like buttons. No mystery meat UI with tons of animations.
    
-   **Bold typography.** Big text, raw headings, sometimes with no kerning mercy.
### Why It's Trending
Because design fatigue is real.

After a decade of gradients, neumorphism, smooth animations, and "everything looks the same" websites, neo-brutalism feels refreshing. It's bold. It's weird. It says "a real human made this." 

It also resonates with younger audiences — especially designers, devs, and creatives — who want to stand out, challenge norms, or just have fun building something that doesn't look like a startup landing page template. And frankly, it's hard not to recognize the appeal of a design trend that *flips the bird* to what is commonly considered appropriate.
### Use Cases & When to Use It
Neo-brutalism isn’t for every project. You probably don’t want your banking app to look like this website.

But it's great for:

-   Personal portfolios
    
-   Art or design blogs
    
-   Fashion showcases
    
-   Landing pages that want to make a strong first impression
    
-   Brands that want to show a bit of edge, attitude, or nostalgia
    
Use it when you want to provoke a reaction — not blend in.
### Notable Examples
Some standout examples of neo-brutalism on the web:

-   [WORKWITHUS](https://workwithus.io/) — a neo-brutalist take on a job board with a lot of creative positions
    
-   [Demo2023](https://www.demo2023.org/) — a promotional website for a design event held in NYC
    
-   [BRUTAL WEB](https://brutalweb.xyz/) — a full archive of brutalist and neo-brutalist websites
    
-   [ctrl+alt+reset](https://ctrlaltreset.dev) — obviously 😉

![Example of a neo-brutalist website design](https://cdn.dribbble.com/userupload/10346415/file/original-ec03167bcd84fde8272925c7f92abc00.png?resize=1024x768&vertical=center)
*Image Credit: [Yuliya Shlyk](https://dribbble.com/Julia_Shlyk)    on Dribbble*

These sites often break the rules, yet feel cohesive. They’re not broken — just brutally intentional.
### My Take on Neo-Brutalism
And now for the part that *surely* everyone has been waiting for — my opinion about neo-brutalism.

Personally, I find it very liberating. There's something refreshing about ignoring conventional design "best practices" and leaning into the *rawness* of the web. It reminds me of the early internet — the weird, scrappy, personal one.

It also forces you to think differently about design. When you're not relying on animations or gloss, you're left with layout, content, and personality. And sometimes that's more than enough.
### Further Reading
If you’re interested in diving deeper into neo-brutalism, check out these great reads:

- [A deep dive into brutalism – Webflow Blog](https://webflow.com/blog/brutalism)
- [What is the difference between Brutalism and Neubrutalism in UI Design? – CC Creative](https://www.cccreative.design/blogs/brutalism-vs-neubrutalism-in-ui-design)
- [Brutalist Websites – Showcase Gallery](https://brutalistwebsites.com/)

---
Want to see how to implement a neo-brutalist UI in your own website? In one of my next posts I will go in-depth on how to achieve that utilizing powerful utility classes from Tailwind CSS. 

Stay tuned!`,
  },
  {
    id: "jwst-new-era-in-astronomy",
    title: "A New Era in Astronomy: How JWST is Changing Space Science",
    description:
      "Discover how the James Webb Space Telescope is revolutionizing our understanding of the universe.",
    imageUrl: "https://stsci-opo.org/STScI-01EVVB9M8ZF9X37KSX89HAR8AW.png",
    date: "2025-06-12T11:34:32",
    content: `# A New Era in Astronomy: How JWST is Changing Space Science

It's been over 4 years since the launch of the James Webb Space Telescope on December 25th, 2021, and although this might seem like a very short time on an astronomical scale, the joint effort of multiple space agencies has without a doubt made *astronomically* big discoveries.

Positioned at the second Lagrange point (L2), approximately 1.5 million kilometers from Earth, JWST offers an unprecedented view into the cosmos, capturing light from the earliest galaxies to the atmospheres of distant exoplanets.

## Table of Contents

1. [What is the James Webb Space Telescope?](#what-is-the-james-webb-space-telescope)
2. [A Brief History of the Mission](#a-brief-history-of-the-mission)
3. [Unveiling the Early Universe](#unveiling-the-early-universe)
4. [Exploring Exoplanets and Alien Atmospheres](#exploring-exoplanets-and-alien-atmospheres)
5. [Star Birth and Stellar Death](#star-birth-and-stellar-death)
6. [Looking Forward](#looking-forward)

## What is the James Webb Space Telescope?

JWST is a collaborative project between NASA, the European Space Agency (ESA), and the Canadian Space Agency (CSA). Equipped with a 6.5-meter primary mirror and advanced instruments like the Near Infrared Camera (NIRCam) and Mid-Infrared Instrument (MIRI), JWST observes the universe in infrared wavelengths, allowing it to peer through cosmic dust and uncover phenomena previously hidden from view.

![JWST Full Deployment Illustration](https://stsci-opo.org/STScI-01EVSZZ70PZWSBHHPA5PBYT2HK.png)
*Image: JWST Full Deployment Illustration 
Credit: [NASA, ESA, CSA, Joyce Kang (STScI)](https://webbtelescope.org/contents/media/images/4202-Image)*

## A Brief History of the Mission

Although it launched in 2021, the story of the James Webb Space Telescope began decades earlier. Initial planning started as far back as 1996, with a vision to build a successor to the Hubble Space Telescope.

Over the years, JWST faced technical challenges, redesigns, and delays, but the scientific goals remained ambitious: to explore the universe’s first galaxies, understand star formation, and analyze the atmospheres of exoplanets. After 25 years of development and contributions from scientists and engineers around the globe, JWST finally reached its destination—ready to deliver on its cosmic promise.

## Unveiling the Early Universe

One of JWST’s most groundbreaking contributions is its ability to observe galaxies formed just a few hundred million years after the Big Bang. Using its sensitive infrared capabilities, JWST has pushed the boundaries of observational cosmology, capturing detailed images of ancient galaxies that reveal surprising levels of structure and maturity.

![Deep Field - SMACS 0723](https://stsci-opo.org/STScI-01G8H1NK4W8CJYHF2DDFD1W0DQ.png)
*Image: SMACS 0723 - JWST’s First Deep Field  
Credit: [NASA, ESA, CSA, STScI](https://webbtelescope.org/contents/media/images/2022/035/01G7DCWB7137MYJ05CSH1Q5Z1Z)*

These observations challenge existing theories about how quickly galaxies formed and evolved in the early universe.

## Exploring Exoplanets and Alien Atmospheres

Beyond distant galaxies, JWST is also transforming our understanding of exoplanets—planets orbiting stars outside our solar system. Its instruments can detect the faint signatures of molecules like water vapor, carbon dioxide, and methane in exoplanet atmospheres.

In 2023, JWST detected the first definitive evidence of carbon-based molecules in the atmosphere of K2-18 b, a super-Earth exoplanet located about 120 light-years away.

![Exoplanet Transmission Spectrum](https://stsci-opo.org/STScI-01H9RF3TQE6XA9X01KXXJ351Z6.png)
*Image: JWST captures atmospheric composition of K2-18 b  
Credit: [NASA, ESA, CSA, Joseph Olmsted (STScI)](https://webbtelescope.org/contents/media/images/2023/139/01H9RF0CCN4MZYDG56Q7K33WQV)*

These findings mark a crucial step toward answering the age-old question: **Are we alone in the universe?**

## Star Birth and Stellar Death

JWST's high-resolution imaging allows scientists to witness the full lifecycle of stars—from their birth in dense stellar nurseries to their dramatic deaths as supernovae.

![Pillars of Creation (JWST)](https://stsci-opo.org/STScI-01GFNN3PWJMY4RQXKZ585BC4QH.png)
*Image: Pillars of Creation in the Eagle Nebula, as seen by JWST  
Credit: [NASA, ESA, CSA, STScI](https://webbtelescope.org/contents/media/images/2022/052/01GF423GBQSK6ANC89NTFJW8VM)*

Its observations of the iconic *Pillars of Creation*, which is my favorite image taken by the telescope, have unveiled previously unseen young stars forming within dense clouds of gas and dust. Meanwhile, JWST’s look into supernova remnants provides crucial information on how the elements necessary for life—like carbon and oxygen—are dispersed throughout the galaxy.

## Looking Forward

In just a few short years, the James Webb Space Telescope has revolutionized astronomy and opened new windows into the cosmos. It has not only confirmed long-standing theories but also raised profound new questions.

More than just a telescope, JWST is a **time machine**, a **chemical lab**, and a **cosmic storyteller**. It reminds us that exploration is not only about looking outward—but also about understanding who we are and where we come from in the grand scheme of the universe.`,
  },
];
