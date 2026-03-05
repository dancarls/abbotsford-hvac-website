"use client";

import { useState } from 'react';
import Link from 'next/link';

interface BlogPost {
    id: string;
    title: string;
    excerpt: string;
    content: string;
    author: string;
    date: string;
    category: string;
    readTime: string;
    image: string;
    slug: string;
}

export default function BlogList({ initialPosts }: { initialPosts: BlogPost[] }) {
    const [selectedCategory, setSelectedCategory] = useState('All');
    const categories = ['All', 'Maintenance', 'Heating', 'Cooling', 'Air Quality', 'Energy Efficiency', 'Commercial'];

    const filteredPosts = selectedCategory === 'All'
        ? initialPosts
        : initialPosts.filter(post => post.category === selectedCategory);

    return (
        <>
            <section className="py-8 bg-white border-b">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                    <div className="flex flex-wrap justify-center gap-4">
                        {categories.map((category) => (
                            <button
                                key={category}
                                onClick={() => setSelectedCategory(category)}
                                className={`px-6 py-2 rounded-full font-medium transition-colors whitespace-nowrap cursor-pointer ${selectedCategory === category
                                    ? 'bg-blue-600 text-white'
                                    : 'bg-gray-100 text-gray-700 hover:bg-gray-200'
                                    }`}
                            >
                                {category}
                            </button>
                        ))}
                    </div>
                </div>
            </section>

            <section className="py-16">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                    <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
                        {filteredPosts.map((post) => (
                            <article key={post.id} className="bg-white rounded-xl shadow-lg overflow-hidden hover:shadow-xl transition-shadow">
                                <div className="relative">
                                    <img
                                        src={post.image}
                                        alt={post.title}
                                        className="w-full h-48 object-cover object-top"
                                    />
                                    <div className="absolute top-4 left-4">
                                        <span className="bg-blue-600 text-white px-3 py-1 rounded-full text-sm font-medium">
                                            {post.category}
                                        </span>
                                    </div>
                                </div>
                                <div className="p-6">
                                    <div className="flex items-center text-sm text-gray-500 mb-3">
                                        <span>{post.author}</span>
                                        <span className="mx-2">•</span>
                                        <span>{new Date(post.date).toLocaleDateString('en-US', { month: 'long', day: 'numeric', year: 'numeric' })}</span>
                                        <span className="mx-2">•</span>
                                        <span>{post.readTime}</span>
                                    </div>
                                    <h3 className="text-xl font-semibold text-gray-900 mb-3 line-clamp-2">
                                        {post.title}
                                    </h3>
                                    <p className="text-gray-600 mb-4 line-clamp-3">
                                        {post.excerpt}
                                    </p>
                                    <Link
                                        href={`/blog/${post.slug}`}
                                        className="text-blue-600 font-semibold hover:text-blue-700 transition-colors cursor-pointer whitespace-nowrap"
                                    >
                                        Read More →
                                    </Link>
                                </div>
                            </article>
                        ))}
                    </div>
                </div>
            </section>
        </>
    );
}
