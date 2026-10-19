import React from 'react';
import { Metadata } from 'next';
import { notFound } from 'next/navigation';
import { getBlogPosts, getBlogPostBySlug } from '@/lib/blogs-server';
import BlogPostClient from '@/components/ui/BlogPostClient';

interface BlogPostPageProps {
  params: Promise<{ slug: string }>;
}

export async function generateMetadata({ params }: BlogPostPageProps): Promise<Metadata> {
  const { slug } = await params;
  const post = getBlogPostBySlug(slug);
  
  if (!post) {
    return {
      title: 'Article Not Found | Shrey Jaiswal',
      description: 'The requested blog article could not be found.',
    };
  }
  
  return {
    title: `${post.title} | Shrey Jaiswal`,
    description: post.description,
    openGraph: {
      title: post.title,
      description: post.description,
      type: 'article',
      publishedTime: post.publishedAt,
      images: post.image ? [{ url: post.image }] : [],
    },
    twitter: {
      card: 'summary_large_image',
      title: post.title,
      description: post.description,
      images: post.image ? [post.image] : [],
    }
  };
}

export default async function BlogPostPage({ params }: BlogPostPageProps) {
  const { slug } = await params;
  const post = getBlogPostBySlug(slug);
  
  if (!post) {
    notFound();
  }
  
  const allPosts = getBlogPosts();
  
  return <BlogPostClient post={post} allPosts={allPosts} />;
}

// Enable static site generation (SSG) for all blog pages by pre-generating paths
export async function generateStaticParams() {
  const posts = getBlogPosts();
  return posts.map((post) => ({
    slug: post.slug,
  }));
}
