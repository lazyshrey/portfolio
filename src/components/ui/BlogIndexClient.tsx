"use client";

import React, { useState } from 'react';
import Navigation from '@/components/ui/Navigation';
import { Footer } from '@/components/sections/Footer';
import { motion } from 'framer-motion';
import Link from 'next/link';
import { BlogPost } from '@/lib/blogs';

interface BlogIndexClientProps {
  posts: BlogPost[];
}

export default function BlogIndexClient({ posts }: BlogIndexClientProps) {
  const [selectedTag, setSelectedTag] = useState<string | null>(null);

  // Extract all unique tags
  const allTags = Array.from(
    new Set(posts.flatMap((post) => post.tags))
  ).sort();

  // Filter posts by selected tag
  const filteredPosts = selectedTag
    ? posts.filter((post) => post.tags.includes(selectedTag))
    : posts;

  return (
    <div className='min-h-screen bg-background relative selection:bg-foreground selection:text-background'>
      
      {/* Brutalist Base Background */}
      <div className='fixed inset-0 -z-40 pointer-events-none bg-background'>
        <div className="absolute inset-0 bg-[linear-gradient(to_right,#80808012_1px,transparent_1px),linear-gradient(to_bottom,#80808012_1px,transparent_1px)] bg-[size:40px_40px]" />
      </div>

      <Navigation />

      <main className="relative z-10 pt-24">
        {/* Page Header */}
        <div className="max-w-7xl mx-auto px-6 md:px-8 pt-12 pb-8 border-b-2 border-foreground">
          <h1 className="text-6xl md:text-8xl font-black uppercase tracking-tighter text-foreground">
            BLOGS & WRITINGS
          </h1>
          <p className="text-sm md:text-base text-[#a58261] uppercase font-bold tracking-wider mt-2">
            TECHNICAL WRITE-UPS / TUTORIALS / MUSINGS
          </p>
        </div>

        {/* Tag Filters */}
        {allTags.length > 0 && (
          <div className="max-w-7xl mx-auto px-6 md:px-8 pt-8 pb-2">
            <div className="flex flex-wrap gap-3 items-center">
              <span className="text-xs font-black uppercase tracking-widest text-foreground-secondary mr-2">
                FILTER BY TAG:
              </span>
              <button
                onClick={() => setSelectedTag(null)}
                className={`text-xs font-bold uppercase tracking-widest px-3 py-1.5 border-2 border-foreground transition-all ${
                  selectedTag === null
                    ? 'bg-foreground text-background shadow-[2px_2px_0px_0px_rgba(0,0,0,1)] dark:shadow-[2px_2px_0px_0px_rgba(255,255,255,1)]'
                    : 'bg-background text-foreground hover:bg-foreground hover:text-background'
                }`}
              >
                ALL POSTS
              </button>
              {allTags.map((tag) => (
                <button
                  key={tag}
                  onClick={() => setSelectedTag(tag === selectedTag ? null : tag)}
                  className={`text-xs font-bold uppercase tracking-widest px-3 py-1.5 border-2 border-foreground transition-all ${
                    selectedTag === tag
                      ? 'bg-foreground text-background shadow-[2px_2px_0px_0px_rgba(0,0,0,1)] dark:shadow-[2px_2px_0px_0px_rgba(255,255,255,1)]'
                      : 'bg-background text-foreground hover:bg-foreground hover:text-background'
                  }`}
                >
                  {tag.toUpperCase()}
                </button>
              ))}
            </div>
          </div>
        )}

        {/* Blog Post List Section */}
        <section className="max-w-7xl mx-auto px-4 md:px-8 py-12">
          {filteredPosts.length > 0 ? (
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              {filteredPosts.map((post, index) => (
                <motion.div
                  key={post.slug}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ type: "spring", stiffness: 80, damping: 15, mass: 0.8, delay: index * 0.05 }}
                  viewport={{ once: true }}
                  whileHover={{ y: -4, x: -4 }}
                  whileTap={{ scale: 0.98 }}
                  className="flex flex-col border-2 border-foreground bg-background p-6 md:p-8 shadow-[6px_6px_0px_0px_rgba(0,0,0,1)] dark:shadow-[6px_6px_0px_0px_rgba(255,255,255,1)] transition-all group"
                >

                  <div className="flex items-center justify-between gap-4 mb-4">
                    <span className="text-xs font-bold uppercase tracking-wider bg-foreground text-background px-2 py-1">
                      {post.readingTime}
                    </span>
                    <span className="text-sm font-bold text-foreground-secondary">
                      {post.publishedAt}
                    </span>
                  </div>

                  <Link href={`/blog/${post.slug}`}>
                    <h2 className="text-2xl md:text-3xl font-black uppercase tracking-tight text-foreground mb-4 leading-none hover:underline">
                      {post.title}
                    </h2>
                  </Link>

                  <p className="text-foreground-secondary font-medium leading-relaxed mb-6 flex-grow">
                    {post.description}
                  </p>

                  <div className="flex flex-wrap gap-2 mb-6">
                    {post.tags.map((tag) => (
                      <button
                        key={tag}
                        onClick={(e) => {
                          e.preventDefault();
                          setSelectedTag(tag === selectedTag ? null : tag);
                        }}
                        className={`text-xs font-bold uppercase tracking-widest border border-foreground/30 px-2 py-1 text-foreground-secondary hover:border-foreground hover:text-foreground transition-all`}
                      >
                        {tag}
                      </button>
                    ))}
                  </div>

                  <Link
                    href={`/blog/${post.slug}`}
                    className="inline-flex items-center text-sm font-bold uppercase tracking-wider text-foreground hover:underline gap-2 mt-auto"
                  >
                    Read Article ➔
                  </Link>
                </motion.div>
              ))}
            </div>
          ) : (
            <div className="border-2 border-dashed border-foreground/20 p-16 text-center bg-background">
              <p className="text-xl md:text-2xl font-black text-foreground/40 uppercase tracking-widest leading-none mb-3">
                No articles match this tag
              </p>
              <p className="text-foreground-secondary font-medium max-w-md mx-auto mb-6">
                Try selecting a different filter or clearing the selection to see all posts.
              </p>
              <button
                onClick={() => setSelectedTag(null)}
                className="text-xs font-bold uppercase tracking-widest px-4 py-2 border-2 border-foreground bg-foreground text-background hover:bg-background hover:text-foreground transition-all"
              >
                Clear Filter
              </button>
            </div>
          )}
        </section>

        <section id="footer">
          <Footer />
        </section>
      </main>
    </div>
  );
}
