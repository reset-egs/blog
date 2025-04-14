// src/app/about/page.tsx
import {Metadata} from "next";
import Image from "next/image";
import Reset from "../../../public/Reset.jpg"

export const metadata: Metadata = {
    title: "About | ctrl+alt+reset",
    description: "About reset and the ctrl+alt+reset blog"
};

export default function About() {
    return (
        <main className="container mx-auto py-10 px-4 max-w-4xl">
            {/* Hero Section */}
            <section className="mb-12 border-2 border-black bg-white p-8 shadow-[8px_8px_0px_rgba(0,0,0,1)]">
                <h1 className="text-4xl font-bold mb-6 inline-block border-b-4 border-pink-300 pb-1">
                    About Me
                </h1>
                <div className="flex flex-col md:flex-row gap-8 items-center">
                    <div className="w-full md:w-1/3">
                        <div
                            className="border-2 border-black p-2 bg-yellow-300 shadow-[4px_4px_0px_rgba(0,0,0,1)] rotate-2">
                            <Image
                                src={Reset}
                                width={500}
                                height={500}
                                alt="Reset"
                                className="w-full aspect-square object-cover border-2 border-black"

                            />
                        </div>
                    </div>
                    <div className="w-full md:w-2/3">
                        <p className="text-lg mb-4">
                            Hey there! I'm Reset, a full-stack developer, tech enthusiast and shameless opinionator.
                        </p>
                        <p className="mb-4">
                            I started <span className="font-bold">ctrl+alt+reset</span> as a place to document my
                            developer journey, share insights about software development, and share opinions about
                            anything
                            that interests me.
                        </p>
                        <p>
                            When I'm not coding, you can find me gaming with friends, watching a good movie,
                            or diving into classical novels.
                        </p>
                    </div>
                </div>
            </section>

            {/* My Skills */}
            <section className="mb-12 border-2 border-black bg-cyan-100 p-8 shadow-[8px_8px_0px_rgba(0,0,0,1)]">
                <h2 className="text-3xl font-bold mb-6 inline-block border-b-4 border-cyan-300 pb-1">
                    Skills & Expertise
                </h2>
                <div className="grid grid-cols-2 md:grid-cols-3 gap-4">
                    {["TypeScript", "C#", "React", "Next.js", "Tailwind CSS", "Node.js", ".NET", "PHP", "Vue.js"].map((skill) => (
                        <div key={skill}
                             className="border-2 border-black bg-white p-3 text-center font-medium hover:translate-y-[-2px] transition-transform">
                            {skill}
                        </div>
                    ))}
                </div>
            </section>

            {/* My Story */}
            <section className="mb-12 border-2 border-black bg-white p-8 shadow-[8px_8px_0px_rgba(0,0,0,1)]">
                <h2 className="text-3xl font-bold mb-6 inline-block border-b-4 border-yellow-300 pb-1">
                    My Story
                </h2>
                <div className="space-y-4">
                    <p>
                        My journey into software development began with a simple curiosity about how websites work. That
                        curiosity quickly turned into a passion as I discovered how coding allows me to bring creative
                        ideas to life and solve real-world problems.
                    </p>
                    <p>
                        I've worked on projects ranging from interactive web applications to advanced backend systems.
                        I'm
                        always eager to learn new technologies and improve my skills. My goal is to create software that
                        not only works well but also provides a great user experience.
                    </p>
                    <p>
                        This blog is built with Next.js and styled with Tailwind CSS using a neo-brutalist design
                        approach. It's a playground for me to experiment with new techniques while sharing what I learn
                        along the way.
                    </p>
                </div>
            </section>

            {/* Contact CTA */}
            <section className="border-2 border-black bg-pink-100 p-8 shadow-[8px_8px_0px_rgba(0,0,0,1)] relative">
                {/* Coming Soon Overlay */}
                <div className="absolute inset-0 flex items-center justify-center">
                    <div
                        className="bg-pink-300 border-2 border-black py-2 px-4 rotate-[-5deg] shadow-[4px_4px_0px_rgba(0,0,0,1)]">
                        <span className="font-bold text-lg sm:text-xl">Coming Soon</span>
                    </div>
                </div>

                <h2 className="text-3xl font-bold mb-6 inline-block border-b-4 border-pink-300 pb-1">
                    Let's Connect
                </h2>
                <p className="mb-6">
                    Have a question or just want to say hi? I'd love to hear from you!
                </p>
                <span
                    className="inline-block px-6 py-3 border-black border-2 bg-pink-300 hover:shadow-[4px_4px_0px_rgba(0,0,0,1)] hover:translate-x-[-2px] hover:translate-y-[-2px] transition-all font-medium opacity-70"
                >
                    Get In Touch
                </span>
            </section>
        </main>
    );
}