export interface BlogPost {
  slug: string;
  title: string;
  description: string;
  publishedAt: string;
  readingTime: string;
  tags: string[];
  content: string; // Markdown-like text contents
  image?: string;
}

export const blogPosts: BlogPost[] = [];
