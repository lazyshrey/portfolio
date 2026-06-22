"use client";

import React, { useState } from 'react';
import Navigation from '@/components/ui/Navigation';
import { Footer } from '@/components/sections/Footer';
import { motion } from 'framer-motion';
import Link from 'next/link';
import { BlogPost } from '@/lib/blogs';
import { toast } from 'sonner';
import { Calendar, Clock, Share2, ArrowLeft, ArrowRight } from 'lucide-react';

import Prism from 'prismjs';
import 'prismjs/components/prism-bash';
import 'prismjs/components/prism-json';
import 'prismjs/components/prism-python';
import 'prismjs/components/prism-typescript';
import 'prismjs/components/prism-rust';
import 'prismjs/components/prism-go';
import 'prismjs/components/prism-c';
import 'prismjs/components/prism-cpp';
import 'prismjs/components/prism-sql';
import 'prismjs/components/prism-yaml';
import 'prismjs/components/prism-docker';
import 'prismjs/components/prism-java';
import 'prismjs/themes/prism-tomorrow.css';

interface BlogPostClientProps {
  post: BlogPost;
  allPosts: BlogPost[];
}

const CopyButton: React.FC<{ code: string }> = ({ code }) => {
  const [copied, setCopied] = useState(false);
  
  const handleCopy = async () => {
    try {
      await navigator.clipboard.writeText(code);
      setCopied(true);
      toast.success('Code copied to clipboard!');
      setTimeout(() => setCopied(false), 2000);
    } catch (err) {
      console.error('Failed to copy code: ', err);
    }
  };

  return (
    <button
      onClick={handleCopy}
      className="absolute top-3 right-3 text-[10px] font-bold uppercase tracking-widest px-2 py-1 border-2 border-foreground bg-background text-foreground hover:bg-foreground hover:text-background transition-all shadow-[2px_2px_0px_0px_rgba(0,0,0,1)] dark:shadow-[2px_2px_0px_0px_rgba(255,255,255,1)]"
    >
      {copied ? 'COPIED!' : 'COPY'}
    </button>
  );
};

const Mermaid: React.FC<{ chart: string }> = ({ chart }) => {
  const ref = React.useRef<HTMLDivElement>(null);
  const [svg, setSvg] = useState<string>('');

  React.useEffect(() => {
    let isMounted = true;
    const renderChart = async () => {
      try {
        const { default: mermaid } = await import('mermaid');
        mermaid.initialize({
          startOnLoad: false,
          theme: 'dark',
          securityLevel: 'loose',
        });
        const id = `mermaid-${Math.floor(Math.random() * 100000)}`;
        const { svg: renderedSvg } = await mermaid.render(id, chart);
        if (isMounted) {
          setSvg(renderedSvg);
        }
      } catch (err) {
        console.error('Mermaid rendering failed', err);
      }
    };

    renderChart();
    return () => {
      isMounted = false;
    };
  }, [chart]);

  if (!svg) {
    return (
      <div className="flex items-center justify-center p-8 bg-zinc-900 border-2 border-foreground text-zinc-400 font-mono text-sm animate-pulse my-6">
        Rendering Diagram...
      </div>
    );
  }

  return (
    <div 
      ref={ref} 
      className="my-8 p-6 bg-zinc-900 border-2 border-foreground overflow-x-auto shadow-[6px_6px_0px_0px_rgba(0,0,0,1)] dark:shadow-[6px_6px_0px_0px_rgba(255,255,255,1)] flex justify-center w-full"
      dangerouslySetInnerHTML={{ __html: svg }} 
    />
  );
};

const renderHighlightedCode = (code: string, language: string) => {
  const lang = language.toLowerCase().trim();
  let grammar = Prism.languages[lang];
  
  if (!grammar) {
    if (lang === 'js') grammar = Prism.languages.javascript;
    else if (lang === 'ts') grammar = Prism.languages.typescript;
    else if (lang === 'sh' || lang === 'shell') grammar = Prism.languages.bash;
    else grammar = Prism.languages.markup; // Fallback
  }
  
  const resolvedLang = grammar === Prism.languages.javascript ? 'javascript' :
                       grammar === Prism.languages.typescript ? 'typescript' :
                       grammar === Prism.languages.bash ? 'bash' :
                       grammar === Prism.languages.json ? 'json' :
                       grammar === Prism.languages.python ? 'python' :
                       grammar === Prism.languages.rust ? 'rust' :
                       grammar === Prism.languages.go ? 'go' :
                       grammar === Prism.languages.c ? 'c' :
                       grammar === Prism.languages.cpp ? 'cpp' :
                       grammar === Prism.languages.sql ? 'sql' :
                       grammar === Prism.languages.yaml ? 'yaml' :
                       grammar === Prism.languages.docker ? 'docker' :
                       grammar === Prism.languages.java ? 'java' : lang;

  try {
    const html = Prism.highlight(code, grammar || Prism.languages.javascript, resolvedLang || 'javascript');
    return <span dangerouslySetInnerHTML={{ __html: html }} />;
  } catch (err) {
    console.error("Prism highlight failed", err);
    return code;
  }
};

export default function BlogPostClient({ post, allPosts }: BlogPostClientProps) {
  const [mounted, setMounted] = useState(false);
  
  React.useEffect(() => {
    setMounted(true);
  }, []);

  // Share link handler
  const handleShare = async () => {
    try {
      await navigator.clipboard.writeText(window.location.href);
      toast.success('Article link copied to clipboard!');
    } catch (err) {
      console.error('Failed to copy link: ', err);
    }
  };

  // Find next and previous posts
  const currentIndex = allPosts.findIndex((p) => p.slug === post.slug);
  const nextPost = currentIndex > 0 ? allPosts[currentIndex - 1] : null;
  const prevPost = currentIndex < allPosts.length - 1 ? allPosts[currentIndex + 1] : null;

  // Custom inline elements parser
  const parseInlineElements = (text: string): React.ReactNode[] => {
    const result: React.ReactNode[] = [];
    let keyIdx = 0;
    
    // Match Markdown Links [text](url), Bold **text**, or Inline Code `text`
    const regex = /\[([^\]]+)\]\(([^)]+)\)|\*\*([^*]+)\*\*|`([^`]+)`/g;
    
    let match;
    let lastIndex = 0;
    
    while ((match = regex.exec(text)) !== null) {
      const matchIndex = match.index;
      
      // Add preceding plain text
      if (matchIndex > lastIndex) {
        result.push(text.slice(lastIndex, matchIndex));
      }
      
      if (match[1] !== undefined) {
        // Link match [text](url)
        const linkText = match[1];
        const linkUrl = match[2];
        const isExternal = linkUrl.startsWith('http') || linkUrl.startsWith('//');
        
        if (isExternal) {
          result.push(
            <a
              key={keyIdx++}
              href={linkUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="text-foreground underline decoration-2 underline-offset-4 font-black hover:bg-foreground hover:text-background px-1 transition-all"
            >
              {linkText}
            </a>
          );
        } else {
          result.push(
            <Link
              key={keyIdx++}
              href={linkUrl}
              className="text-foreground underline decoration-2 underline-offset-4 font-black hover:bg-foreground hover:text-background px-1 transition-all"
            >
              {linkText}
            </Link>
          );
        }
      } else if (match[3] !== undefined) {
        // Bold match **text**
        result.push(
          <strong key={keyIdx++} className="font-black text-foreground">
            {match[3]}
          </strong>
        );
      } else if (match[4] !== undefined) {
        // Inline code match `text`
        result.push(
          <code
            key={keyIdx++}
            className="bg-foreground/10 dark:bg-foreground/20 px-2 py-0.5 rounded text-sm font-mono text-foreground font-semibold"
          >
            {match[4]}
          </code>
        );
      }
      
      lastIndex = regex.lastIndex;
    }
    
    if (lastIndex < text.length) {
      result.push(text.slice(lastIndex));
    }
    
    return result.length > 0 ? result : [text];
  };

  // Custom Markdown block-level parser
  const parseMarkdown = (markdownText: string) => {
    const lines = markdownText.split('\n');
    let inCodeBlock = false;
    let codeLines: string[] = [];
    let codeLanguage = '';
    const elements: React.ReactNode[] = [];

    for (let i = 0; i < lines.length; i++) {
      const line = lines[i];

      // Code blocks toggle
      if (line.startsWith('```')) {
        if (inCodeBlock) {
          inCodeBlock = false;
          const codeString = codeLines.join('\n');
          if (codeLanguage.toLowerCase().trim() === 'mermaid') {
            elements.push(
              <Mermaid key={`mermaid-${i}`} chart={codeString} />
            );
          } else {
            elements.push(
              <div key={`code-container-${i}`} className="relative group/code my-6">
                <pre className="bg-zinc-900 text-zinc-100 p-5 overflow-x-auto text-sm font-mono border-2 border-foreground shadow-[4px_4px_0px_0px_rgba(0,0,0,1)] dark:shadow-[4px_4px_0px_0px_rgba(255,255,255,1)]">
                  <code className={`language-${codeLanguage}`}>{mounted ? renderHighlightedCode(codeString, codeLanguage) : codeString}</code>
                </pre>
                <CopyButton code={codeString} />
              </div>
            );
          }
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

      // Image Block: ![alt](url)
      const imgRegex = /^!\[([^\]]*)\]\(([^)]+)\)$/;
      const imgMatch = line.trim().match(imgRegex);
      if (imgMatch) {
        const alt = imgMatch[1];
        const url = imgMatch[2];
        elements.push(
          <div key={`img-${i}`} className="my-8 border-2 border-foreground bg-muted overflow-hidden shadow-[6px_6px_0px_0px_rgba(0,0,0,1)] dark:shadow-[6px_6px_0px_0px_rgba(255,255,255,1)] animate-fade-in">
            <img
              src={url}
              alt={alt}
              className="w-full h-auto object-cover transition-all duration-300"
              loading="lazy"
            />
          </div>
        );
        continue;
      }

      // YouTube Video Block: @[youtube](id-or-url)
      const ytRegex = /^@\[youtube\]\(([^)]+)\)$/;
      const ytMatch = line.trim().match(ytRegex);
      if (ytMatch) {
        let videoId = ytMatch[1].trim();
        if (videoId.includes('youtube.com') || videoId.includes('youtu.be')) {
          try {
            const urlObj = new URL(videoId.startsWith('http') ? videoId : `https://${videoId}`);
            if (urlObj.hostname === 'youtu.be') {
              videoId = urlObj.pathname.slice(1);
            } else {
              videoId = urlObj.searchParams.get('v') || '';
            }
          } catch (e) {
            console.error("Failed to parse YouTube URL", e);
          }
        }
        elements.push(
          <div key={`yt-${i}`} className="my-8 border-2 border-foreground aspect-video shadow-[6px_6px_0px_0px_rgba(0,0,0,1)] dark:shadow-[6px_6px_0px_0px_rgba(255,255,255,1)] animate-fade-in">
            <iframe
              width="100%"
              height="100%"
              src={`https://www.youtube.com/embed/${videoId}`}
              title="YouTube video player"
              frameBorder="0"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
              allowFullScreen
            ></iframe>
          </div>
        );
        continue;
      }

      // H1 Headings
      if (line.startsWith('# ')) {
        elements.push(
          <h1
            key={`h1-${i}`}
            className="text-4xl md:text-5xl font-black uppercase tracking-tight text-foreground mt-12 mb-6 border-b-4 border-foreground pb-3"
          >
            {parseInlineElements(line.slice(2))}
          </h1>
        );
        continue;
      }

      // H2 Headings
      if (line.startsWith('## ')) {
        elements.push(
          <h2
            key={`h2-${i}`}
            className="text-3xl md:text-4xl font-black uppercase tracking-tight text-foreground mt-10 mb-4 border-b-2 border-foreground pb-2"
          >
            {parseInlineElements(line.slice(3))}
          </h2>
        );
        continue;
      }

      // H3 Headings
      if (line.startsWith('### ')) {
        elements.push(
          <h3 key={`h3-${i}`} className="text-2xl font-black uppercase tracking-tight text-foreground mt-8 mb-3">
            {parseInlineElements(line.slice(4))}
          </h3>
        );
        continue;
      }

      // H4 Headings
      if (line.startsWith('#### ')) {
        elements.push(
          <h4 key={`h4-${i}`} className="text-xl font-black uppercase tracking-tight text-foreground mt-6 mb-2">
            {parseInlineElements(line.slice(5))}
          </h4>
        );
        continue;
      }

      // Blockquotes
      if (line.startsWith('> ')) {
        elements.push(
          <blockquote
            key={`quote-${i}`}
            className="border-l-4 border-foreground pl-4 py-1 my-6 italic text-foreground-secondary font-medium text-lg"
          >
            {parseInlineElements(line.slice(2))}
          </blockquote>
        );
        continue;
      }

      // Horizontal Rules
      if (line.trim() === '---') {
        elements.push(
          <hr key={`hr-${i}`} className="border-t-2 border-foreground/20 my-8" />
        );
        continue;
      }

      // Bullet lists
      if (line.startsWith('* ') || line.startsWith('- ')) {
        elements.push(
          <ul key={`ul-${i}`} className="list-disc pl-6 my-2 text-foreground-secondary">
            <li className="font-medium leading-relaxed text-lg">
              {parseInlineElements(line.slice(2))}
            </li>
          </ul>
        );
        continue;
      }

      // Numbered lists
      if (/^\d+\.\s/.test(line)) {
        elements.push(
          <ol key={`ol-${i}`} className="list-decimal pl-6 my-2 text-foreground-secondary">
            <li className="font-medium leading-relaxed text-lg">
              {parseInlineElements(line.replace(/^\d+\.\s/, ''))}
            </li>
          </ol>
        );
        continue;
      }

      // Standard paragraphs
      if (line.trim() !== '') {
        elements.push(
          <p key={`p-${i}`} className="text-foreground-secondary text-lg font-medium leading-relaxed my-5">
            {parseInlineElements(line)}
          </p>
        );
      }
    }

    return elements;
  };

  return (
    <div className='min-h-screen bg-background relative selection:bg-foreground selection:text-background'>
      
      {/* Brutalist Base Background */}
      <div className='fixed inset-0 -z-40 pointer-events-none bg-background'>
        <div className="absolute inset-0 bg-[linear-gradient(to_right,#80808012_1px,transparent_1px),linear-gradient(to_bottom,#80808012_1px,transparent_1px)] bg-[size:40px_40px]" />
      </div>

      <Navigation />

      <main className="relative z-10 pt-24">
        <div className="max-w-4xl mx-auto px-6 md:px-8 pt-8 pb-16">
          {/* Back button & share button bar */}
          <div className="flex items-center justify-between mb-8 border-b border-foreground/10 pb-4">
            <Link
              href="/blog"
              className="inline-flex items-center text-sm font-bold uppercase tracking-wider text-foreground-secondary hover:text-foreground gap-2 transition-colors"
            >
              <ArrowLeft size={16} /> Back to all blogs
            </Link>

            <button
              onClick={handleShare}
              className="inline-flex items-center text-xs font-bold uppercase tracking-widest px-2.5 py-1.5 border-2 border-foreground bg-background text-foreground hover:bg-foreground hover:text-background transition-all shadow-[2px_2px_0px_0px_rgba(0,0,0,1)] dark:shadow-[2px_2px_0px_0px_rgba(255,255,255,1)] gap-2"
              title="Share article"
            >
              <Share2 size={12} /> Share
            </button>
          </div>

          {/* Cover Image */}
          {post.image && (
            <div className="relative aspect-video w-full mb-8 border-2 border-foreground overflow-hidden shadow-[6px_6px_0px_0px_rgba(0,0,0,1)] dark:shadow-[6px_6px_0px_0px_rgba(255,255,255,1)] animate-fade-in">
              <img
                src={post.image}
                alt={post.title}
                className="w-full h-full object-cover"
                loading="eager"
              />
            </div>
          )}

          {/* Post Meta */}
          <div className="flex flex-wrap gap-4 items-center mb-6">
            <div className="flex items-center gap-1.5 text-xs font-bold uppercase tracking-wider bg-foreground text-background px-2.5 py-1">
              <Clock size={12} />
              <span>{post.readingTime}</span>
            </div>
            <div className="flex items-center gap-1.5 text-sm font-bold text-foreground-secondary">
              <Calendar size={14} />
              <span>{post.publishedAt}</span>
            </div>
          </div>

          {/* Post Title */}
          <h1 className="text-4xl sm:text-5xl md:text-6xl font-black uppercase tracking-tight text-foreground mb-8 leading-none">
            {post.title}
          </h1>

          {/* Post Tags */}
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

          {/* Article Body */}
          <article className="prose max-w-none prose-neutral dark:prose-invert">
            {parseMarkdown(post.content)}
          </article>

          {/* Next / Prev Post Navigation */}
          {(nextPost || prevPost) && (
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 mt-16 pt-8 border-t-2 border-foreground">
              {prevPost ? (
                <Link
                  href={`/blog/${prevPost.slug}`}
                  className="flex flex-col p-6 border-2 border-foreground hover:bg-foreground hover:text-background transition-all shadow-[4px_4px_0px_0px_rgba(0,0,0,1)] dark:shadow-[4px_4px_0px_0px_rgba(255,255,255,1)] group text-left"
                >
                  <span className="text-xs font-bold uppercase tracking-widest text-foreground-secondary group-hover:text-background/80 mb-2 inline-flex items-center gap-1">
                    <ArrowLeft size={12} /> Older Article
                  </span>
                  <span className="text-lg font-black uppercase tracking-tight line-clamp-2">
                    {prevPost.title}
                  </span>
                </Link>
              ) : (
                <div className="hidden sm:block border-2 border-dashed border-foreground/10 p-6" />
              )}

              {nextPost ? (
                <Link
                  href={`/blog/${nextPost.slug}`}
                  className="flex flex-col p-6 border-2 border-foreground hover:bg-foreground hover:text-background transition-all shadow-[4px_4px_0px_0px_rgba(0,0,0,1)] dark:shadow-[4px_4px_0px_0px_rgba(255,255,255,1)] group text-right"
                >
                  <span className="text-xs font-bold uppercase tracking-widest text-foreground-secondary group-hover:text-background/80 mb-2 inline-flex items-center gap-1 justify-end ml-auto">
                    Newer Article <ArrowRight size={12} />
                  </span>
                  <span className="text-lg font-black uppercase tracking-tight line-clamp-2">
                    {nextPost.title}
                  </span>
                </Link>
              ) : (
                <div className="hidden sm:block border-2 border-dashed border-foreground/10 p-6" />
              )}
            </div>
          )}
        </div>

        <section id="footer">
          <Footer />
        </section>
      </main>
    </div>
  );
}
