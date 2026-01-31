import Link from "next/link";

export default function Footer() {
    return (
        <footer className="border-t border-gray-100 pt-20 pb-12">
            <div className="max-w-7xl mx-auto px-6 sm:px-12">
                <div className="grid grid-cols-1 md:grid-cols-4 lg:grid-cols-5 gap-12 mb-10">
                    {/* Brand Section */}
                    <div className="md:col-span-2">
                        <Link href="/" className="text-2xl font-serif font-black tracking-tight mb-4 block text-[#0f172a]">
                            Jitesh<span className="text-primary"></span>
                        </Link>
                        <p className="text-black-500 max-w-xs leading-relaxed font-medium">
                            Delivering robust, user-focused digital solutions through modern software development practices.
                        </p>
                    </div>

                    {/* Links Section */}
                    <div>
                        <div className="relative mb-6">
                            <h4 className="text-sm font-semibold uppercase tracking-wider text-gray-900 mb-2">Quick Links</h4>
                        </div>
                        <ul className="space-y-1">
                            <li><Link href="/" className="text-gray-500 hover:text-primary transition-colors">Home</Link></li>
                            <li><Link href="/work" className="text-gray-500 hover:text-primary transition-colors">Work</Link></li>
                            <li><Link href="/about" className="text-gray-500 hover:text-primary transition-colors">About</Link></li>
                            <li><Link href="/contact" className="text-gray-500 hover:text-primary transition-colors">Contact</Link></li>
                        </ul>
                    </div>

                    {/* Connect Section */}
                    <div className="md:col-span-1 lg:col-span-2 pl-25">
                        <div className="relative mb-6 pl-5" >
                            <h4 className="text-sm font-semibold uppercase tracking-wider text-gray-900 mb-2">Connect</h4>
                        </div>
                        <div className="flex space-x-4 pl-5" >
                            <a href="#" className="w-10 h-10 rounded-full border border-gray-200 flex items-center justify-center text-xs font-bold text-gray-600 hover:bg-gray-50 transition-colors">X</a>
                            <a href="#" className="w-10 h-10 rounded-full border border-gray-200 flex items-center justify-center text-xs font-bold text-gray-600 hover:bg-gray-50 transition-colors">IG</a>
                            <a href="https://www.linkedin.com/in/jitesh-kumar266/" className="w-10 h-10 rounded-full border border-gray-200 flex items-center justify-center text-xs font-bold text-gray-600 hover:bg-gray-50 transition-colors">IN</a>
                        </div>
                    </div>
                </div>

                {/* Bottom Bar */}
                <div className="text-center pt-4 border-t border-gray-50 py-1">
                    <p className="text-black-500   text-sm">
                        © 2026 All rights reserved.
                    </p>
                </div>
            </div>
        </footer>
    );
}
