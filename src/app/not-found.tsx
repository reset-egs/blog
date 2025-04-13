import Link from 'next/link';

export default function NotFound() {
    return (
        <div className="container mx-auto py-20 px-4 text-center">
            <div className="max-w-lg mx-auto bg-white border-black border-2 p-10 shadow-[8px_8px_0px_rgba(0,0,0,1)]">
                <h1 className="text-6xl font-bold mb-4">404</h1>
                <h2 className="text-2xl mb-6">Page Not Found</h2>
                <p className="mb-8">The page you're looking for doesn't exist or has been moved.</p>

                <Link
                    href="/"
                    className="inline-block px-6 py-3 border-black border-2 bg-yellow-300 hover:shadow-[4px_4px_0px_rgba(0,0,0,1)] hover:translate-x-[-2px] hover:translate-y-[-2px] transition-all font-medium"
                >
                    Back to Homepage
                </Link>
            </div>
        </div>
    );
}