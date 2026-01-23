"use client";

import { useState } from "react";

export default function Contact() {
    const [state, setState] = useState({
        submitting: false,
        succeeded: false,
        error: null
    });

    const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault();
        setState({ ...state, submitting: true });

        const form = e.currentTarget;
        const formData = new FormData(form);

        try {
            const response = await fetch("https://formspree.io/f/maqeopqq", {
                method: "POST",
                body: formData,
                headers: {
                    'Accept': 'application/json'
                }
            });

            if (response.ok) {
                setState({ submitting: false, succeeded: true, error: null });
                form.reset();
            } else {
                const data = await response.json();
                setState({ submitting: false, succeeded: false, error: data.errors });
            }
        } catch {
            setState({ submitting: false, succeeded: false, error: "Something went wrong. Please try again." as any });
        }
    };

    return (
        <main className="min-h-screen bg-white">
            <section className="max-w-7xl mx-auto px-6 pt-40 pb-24">
                <div className="text-center mb-16">
                    <h1 className="text-5xl md:text-6xl font-serif font-bold mb-6">Let's Connect</h1>
                    <p className="text-lg text-gray-500 max-w-2xl mx-auto">
                        Have a project in mind? I'd love to hear about it. Send me a message and let's
                        create something amazing together.
                    </p>
                </div>

                <div className="grid grid-cols-1 lg:grid-cols-3 gap-12">
                    {/* Contact Form */}
                    <div className="lg:col-span-2">
                        {state.succeeded ? (
                            <div className="bg-green-50 border border-green-100 p-8 rounded-3xl text-center">
                                <h3 className="text-2xl font-serif font-bold text-green-900 mb-2">Message Sent!</h3>
                                <p className="text-green-700">Thank you for Reaching out. I'll get back to you as soon as possible.</p>
                                <button
                                    onClick={() => setState({ ...state, succeeded: false })}
                                    className="mt-6 text-sm font-semibold text-green-900 underline underline-offset-4"
                                >
                                    Send another message
                                </button>
                            </div>
                        ) : (
                            <form onSubmit={handleSubmit} className="space-y-6">
                                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                                    <div className="space-y-2">
                                        <label className="text-sm font-semibold">Name</label>
                                        <input
                                            type="text"
                                            name="name"
                                            required
                                            className="w-full px-4 py-3 rounded-lg border border-gray-200 focus:border-primary focus:outline-none bg-gray-50/50 transition-colors"
                                            placeholder="Your name"
                                        />
                                    </div>
                                    <div className="space-y-2">
                                        <label className="text-sm font-semibold">Email</label>
                                        <input
                                            type="email"
                                            name="email"
                                            required
                                            className="w-full px-4 py-3 rounded-lg border border-gray-200 focus:border-primary focus:outline-none bg-gray-50/50 transition-colors"
                                            placeholder="Your email address"
                                        />
                                    </div>
                                </div>
                                <div className="space-y-2">
                                    <label className="text-sm font-semibold">Subject</label>
                                    <input
                                        type="text"
                                        name="subject"
                                        required
                                        className="w-full px-4 py-3 rounded-lg border border-gray-200 focus:border-primary focus:outline-none bg-gray-50/50 transition-colors"
                                        placeholder="What's this about?"
                                    />
                                </div>
                                <div className="space-y-2">
                                    <label className="text-sm font-semibold">Message</label>
                                    <textarea
                                        name="message"
                                        required
                                        rows={6}
                                        className="w-full px-4 py-3 rounded-lg border border-gray-200 focus:border-primary focus:outline-none bg-gray-50/50 transition-colors resize-none"
                                        placeholder="Tell me about your project..."
                                    />
                                </div>
                                {state.error && (
                                    <p className="text-red-500 text-sm font-medium">Something went wrong. Please try again.</p>
                                )}
                                <button
                                    disabled={state.submitting}
                                    className="w-full py-4 bg-[#0f172a] text-white rounded-full font-medium hover:opacity-90 transition-opacity disabled:opacity-50"
                                >
                                    {state.submitting ? "Sending..." : "Send Message"}
                                </button>
                            </form>
                        )}
                    </div>

                    {/* Contact Info Sidebar */}
                    <div className="bg-gray-50/50 p-8 md:p-10 rounded-3xl border border-gray-100 flex flex-col h-fit">
                        <h2 className="text-2xl font-serif font-bold mb-8">Contact Information</h2>

                        <div className="space-y-8">
                            <div>
                                <p className="text-xs font-semibold text-gray-400 uppercase tracking-wider mb-2">Email</p>
                                <p className="text-lg font-medium text-gray-900">jiteshdav3931@gmail.com</p>
                            </div>

                            <div>
                                <p className="text-xs font-semibold text-gray-400 uppercase tracking-wider mb-2">Phone</p>
                                <p className="text-lg font-medium text-gray-900">+91 987654321</p>
                            </div>

                            <div>
                                <p className="text-xs font-semibold text-gray-400 uppercase tracking-wider mb-2">Based in</p>
                                <p className="text-lg font-medium text-gray-900 font-semibold">Vadodara</p>
                            </div>

                            <div>
                                <p className="text-xs font-semibold text-gray-400 uppercase tracking-wider mb-2">Connect</p>
                                <div className="flex flex-wrap gap-4 mt-2">
                                    <a href="#" className="text-gray-600 hover:text-primary transition-colors font-medium">Twitter</a>
                                    <a href="#" className="text-gray-600 hover:text-primary transition-colors font-medium">Instagram</a>
                                    <a href="https://www.linkedin.com/in/jitesh-kumar266/" className="text-gray-600 hover:text-primary transition-colors font-medium">LinkedIn</a>
                                </div>
                            </div>

                            <div className="pt-4 border-t border-gray-200/60">
                                <p className="text-xs font-semibold text-gray-400 uppercase tracking-wider mb-3">Availability</p>
                                <div className="flex items-center gap-2">
                                    <span className="w-2.5 h-2.5 rounded-full bg-green-500 animate-pulse"></span>
                                    <span className="font-semibold text-gray-900">Available for new projects</span>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </main>
    );
}
