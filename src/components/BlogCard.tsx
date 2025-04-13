// src/components/BlogCard.tsx
import Link from "next/link";
import Image from "next/image";
import {format} from "date-fns";

interface BlogCardProps {
    id: string;
    title: string;
    description: string;
    imageUrl: string;
    date: string;
}

export default function BlogCard({id, title, description, imageUrl, date}: BlogCardProps) {
    return (
        <div
            className="border-2 border-black bg-white shadow-[4px_4px_0px_rgba(0,0,0,1)] hover:shadow-[6px_6px_0px_rgba(0,0,0,1)] transition-shadow overflow-hidden flex flex-col h-full">
            <div className="relative w-full pt-[60%]">
                <Image
                    src={imageUrl}
                    alt={title}
                    fill
                    className="object-cover border-b-2 border-black"
                    sizes="(max-width: 640px) 100vw, (max-width: 768px) 50vw, 25vw"
                />
            </div>
            <div className="p-4 flex flex-col flex-grow">
                <h3 className="text-lg font-bold mb-2 line-clamp-1">{title}</h3>
                <p className="text-gray-700 text-sm mb-3 line-clamp-2 flex-grow">{description}</p>
                <div className="flex justify-between items-center mt-auto">
                    <span className="text-xs text-gray-500">{format(date, "MMM d, yyyy 'at' h:mm a")}</span>
                    <Link
                        href={`/blog/${id}`}
                        className="text-sm px-3 py-1 border-black border-2 bg-cyan-300 hover:shadow-[2px_2px_0px_rgba(0,0,0,1)] hover:translate-x-[-1px] hover:translate-y-[-1px] active:translate-x-[0px] active:translate-y-[0px] active:shadow-none transition-all"
                    >
                        Read
                    </Link>
                </div>
            </div>
        </div>
    );
}