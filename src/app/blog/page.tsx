import React from 'react';
import { Metadata } from 'next';
import { getBlogPosts } from '@/lib/blogs-server';
import BlogIndexClient from '@/components/ui/BlogIndexClient';

export const metadata: Metadata = {
  title: "Blog | Shrey Jaiswal",
  description: "Technical write-ups, engineering tutorials, and thoughts on AI development, systems design, and full-stack engineering.",
};

export default function BlogIndexPage() {
  const posts = getBlogPosts();
  return <BlogIndexClient posts={posts} />;
}
