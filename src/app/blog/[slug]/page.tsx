"use client";

import React, { use } from 'react';
import Navigation from '@/components/ui/Navigation';
import { Footer } from '@/components/sections/Footer';
import { motion, useScroll, useSpring } from 'framer-motion';
import Link from 'next/link';
import { blogPosts } from '@/lib/blogs';
import { notFound } from 'next/navigation';

interface BlogPostPageProps {
  params: Promise<{ slug: string }>;
}

export default function BlogPostPage({ params }: BlogPostPageProps) {
  const { slug } = use(params);
  const post = blogPosts.find((p) => p.slug === slug);

  if (!post) {
    notFound();
  }

  const { scrollYProgress } = useScroll();
  const scaleX = useSpring(scrollYProgress, {
    stiffness: 100,
    damping: 30,
    restDelta: 0.001
  });

  // Simple custom Markdown to JSX parser for formatting mock blog contents
  const parseMarkdown = (markdownText: string) => {
    const lines = markdownText.split('\n');
    let inCodeBlock = false;
    let codeLines: string[] = [];
    let codeLanguage = '';
    const elements: React.ReactNode[] = [];

    for (let i = 0; i < lines.length; i++) {
      const line = lines[i];

      // Code block toggles
      if (line.startsWith('```')) {
        if (inCodeBlock) {
          inCodeBlock = false;
          elements.push(
            <pre
              key={`code-${i}`}
              className="bg-zinc-900 text-zinc-100 p-5 my-6 overflow-x-auto text-sm font-mono border-2 border-foreground shadow-[4px_4px_0px_0px_rgba(255,255,255,1)] dark:shadow-[4px_4px_0px_0px_rgba(0,0,0,1)]"
            >
              <code className={`language-${codeLanguage}`}>{codeLines.join('\n')}</code>
            </pre>
          );
          codeLines = [];
        } else {
          inCodeBlock = true;
          codeLanguage = line.slice(3).trim();
        }
        continue;
      }

      if (inCodeBlock) {
        codeLines.push(line);
        continue;
      }

      // H2 Headings
      if (line.startsWith('## ')) {
        elements.push(
          <h2
            key={`h2-${i}`}
            className="text-3xl md:text-4xl font-black uppercase tracking-tight text-foreground mt-10 mb-4 border-b-2 border-foreground pb-2"
          >
            {line.slice(3)}
          </h2>
        );
        continue;
      }

      // H3 Headings
      if (line.startsWith('### ')) {
        elements.push(
          <h3 key={`h3-${i}`} className="text-2xl font-black uppercase tracking-tight text-foreground mt-8 mb-3">
            {line.slice(4)}
          </h3>
        );
        continue;
      }

      // Bullet lists
      if (line.startsWith('* ') || line.startsWith('- ')) {
        elements.push(
          <ul key={`ul-${i}`} className="list-disc pl-6 my-2 text-foreground-secondary">
            <li className="font-medium leading-relaxed text-lg">{line.slice(2)}</li>
          </ul>
        );
        continue;
      }

      // Numbered lists
      if (/^\d+\.\s/.test(line)) {
        elements.push(
          <ol key={`ol-${i}`} className="list-decimal pl-6 my-2 text-foreground-secondary">
            <li className="font-medium leading-relaxed text-lg">{line.replace(/^\d+\.\s/, '')}</li>
          </ol>
        );
        continue;
      }

      // Standard paragraphs
      if (line.trim() !== '') {
        const parts = line.split('**');
        const formattedLine = parts.map((part, index) => {
          if (index % 2 === 1) {
            return (
              <strong key={index} className="font-black text-foreground">
                {part}
              </strong>
            );
          }
          // Inline code formatting (`code`)
          const subParts = part.split('`');
          return subParts.map((subPart, subIndex) => {
            if (subIndex % 2 === 1) {
              return (
                <code
                  key={subIndex}
                  className="bg-foreground/10 dark:bg-foreground/20 px-2 py-0.5 rounded text-sm font-mono text-foreground font-semibold"
                >
                  {subPart}
                </code>
              );
            }
            return subPart;
          });
        });

        elements.push(
          <p key={`p-${i}`} className="text-foreground-secondary text-lg font-medium leading-relaxed my-5">
            {formattedLine}
          </p>
        );
      }
    }

    return elements;
  };

  return (
    <div className='min-h-screen bg-background relative selection:bg-foreground selection:text-background'>
      
      {/* Scroll Progress Bar */}
      <motion.div
        className="fixed top-0 left-0 right-0 h-2 bg-foreground origin-left z-[100]"
        style={{ scaleX }}
      />
      
      {/* Brutalist Base Background */}
      <div className='fixed inset-0 -z-40 pointer-events-none bg-background'>
        <div className="absolute inset-0 bg-[linear-gradient(to_right,#80808012_1px,transparent_1px),linear-gradient(to_bottom,#80808012_1px,transparent_1px)] bg-[size:40px_40px]" />
      </div>

      <Navigation />

      <main className="relative z-10 pt-24">
        {/* Back Link & Header */}
        <div className="max-w-4xl mx-auto px-6 md:px-8 pt-8 pb-12">
          <Link
            href="/blog"
            className="inline-flex items-center text-sm font-bold uppercase tracking-wider text-foreground-secondary hover:text-foreground mb-8"
          >
            ← Back to all blogs
          </Link>

          <div className="flex flex-wrap gap-4 items-center mb-6">
            <span className="text-xs font-bold uppercase tracking-wider bg-foreground text-background px-2.5 py-1">
              {post.readingTime}
            </span>
            <span className="text-sm font-bold text-foreground-secondary">
              {post.publishedAt}
            </span>
          </div>

          <h1 className="text-4xl sm:text-5xl md:text-6xl font-black uppercase tracking-tight text-foreground mb-8 leading-none">
            {post.title}
          </h1>

          <div className="flex flex-wrap gap-2 mb-8 border-b-2 border-foreground/20 pb-8">
            {post.tags.map((tag) => (
              <span
                key={tag}
                className="text-xs font-bold uppercase tracking-widest border border-foreground/30 px-2.5 py-1 text-foreground-secondary"
              >
                {tag}
              </span>
            ))}
          </div>

          {/* Render parsed contents */}
          <article className="prose max-w-none prose-neutral dark:prose-invert">
            {parseMarkdown(post.content)}
          </article>
        </div>

        <section id="footer">
          <Footer />
        </section>
      </main>
    </div>
  );
}
