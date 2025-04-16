// src/app/contact/page.tsx
import ContactForm from "@/components/ContactForm";
import { FaEnvelope, FaGithub, FaLinkedin } from "react-icons/fa";
import Link from "next/link";

export default function ContactPage() {
  return (
    <main className="container mx-auto py-8 px-4">
      <section className="mb-10 border-2 border-black bg-white p-6 shadow-[5px_5px_0px_rgba(0,0,0,1)] sm:shadow-[8px_8px_0px_rgba(0,0,0,1)]">
        <h1 className="text-3xl sm:text-4xl font-bold mb-4">
          Let's <span className="bg-pink-300 px-1">Connect</span>
        </h1>
        <p className="text-lg mb-6">
          Have a question, feedback, or just want to chat? I'd love to hear from
          you! Use the form below or reach out through any of my social
          channels.
        </p>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          <div>
            <h2 className="text-xl font-bold mb-4 inline-block border-b-4 border-yellow-300 pb-1">
              Send a Message
            </h2>
            <ContactForm />
          </div>

          <div>
            <h2 className="text-xl font-bold mb-4 inline-block border-b-4 border-cyan-300 pb-1">
              Other Ways to Connect
            </h2>

            <ul className="space-y-4 mb-8">
              <li className="flex items-center gap-2">
                <FaEnvelope className="text-xl" />
                <a
                  href="mailto:szymon.zwara@icloud.com"
                  className="hover:underline"
                >
                  szymon.zwara@icloud.com
                </a>
              </li>
              <li className="flex items-center gap-2">
                <FaGithub className="text-xl" />
                <a
                  href="https://github.com/reset-egs"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="hover:underline"
                >
                  github.com/reset-egs
                </a>
              </li>
              <li className="flex items-center gap-2">
                <FaLinkedin className="text-xl" />
                <a
                  href="https://www.linkedin.com/in/szymon-zwara-6b4349224/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="hover:underline"
                >
                  linkedin.com/in/szymon-zwara-6b4349224
                </a>
              </li>
            </ul>

            <div className="bg-yellow-100 border-2 border-black p-4 rounded-none shadow-[3px_3px_0px_rgba(0,0,0,1)]">
              <h3 className="font-bold mb-2">Quick Tip</h3>
              <p>
                For newsletter subscriptions, you can use the form on the
                <Link href="/" className="text-blue-600 hover:underline mx-1">
                  homepage
                </Link>
                to stay updated with my latest posts.
              </p>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}

export const metadata = {
  title: "Contact | ctrl+alt+reset",
  description: "Get in touch with me through the contact form or social media.",
};
