import fs from 'fs';
import path from 'path';
import { BlogPost } from './blogs';

function parseFrontmatter(fileContent: string) {
  const frontmatterRegex = /^---\r?\n([\s\S]*?)\r?\n---/;
  const match = fileContent.match(frontmatterRegex);
  
  if (!match) {
    return {
      metadata: {} as Record<string, any>,
      content: fileContent
    };
  }
  
  const frontmatterText = match[1];
  const content = fileContent.replace(frontmatterRegex, '').trim();
  
  const metadata: Record<string, any> = {};
  const lines = frontmatterText.split('\n');
  
  for (let i = 0; i < lines.length; i++) {
    const line = lines[i].trim();
    if (!line) continue;
    
    const colonIndex = line.indexOf(':');
    if (colonIndex === -1) continue;
    
    const key = line.slice(0, colonIndex).trim();
    let value: any = line.slice(colonIndex + 1).trim();
    
    // Clean up quotes if present
    if ((value.startsWith('"') && value.endsWith('"')) || (value.startsWith("'") && value.endsWith("'"))) {
      value = value.slice(1, -1);
    }
    
    // Parse arrays like [tag1, tag2]
    if (value.startsWith('[') && value.endsWith(']')) {
      value = value.slice(1, -1).split(',').map((item: string) => item.trim());
    }
    
    metadata[key] = value;
  }
  
  return {
    metadata,
    content
  };
}

export function getBlogPosts(): BlogPost[] {
  const blogsDirectory = path.join(process.cwd(), 'blogs');
  
  // Ensure the directory exists
  if (!fs.existsSync(blogsDirectory)) {
    fs.mkdirSync(blogsDirectory, { recursive: true });
    return [];
  }
  
  const fileNames = fs.readdirSync(blogsDirectory);
  const allPostsData = fileNames
    .filter((fileName) => fileName.endsWith('.md'))
    .map((fileName) => {
      const fullPath = path.join(blogsDirectory, fileName);
      const fileContents = fs.readFileSync(fullPath, 'utf8');
      
      const { metadata, content } = parseFrontmatter(fileContents);
      
      const wordCount = content.split(/\s+/).length;
      const autoReadingTime = `${Math.ceil(wordCount / 200)} min read`;
      
      return {
        slug: metadata.slug || fileName.replace(/\.md$/, ''),
        title: metadata.title || 'Untitled Post',
        description: metadata.description || '',
        publishedAt: metadata.publishedAt || '',
        readingTime: metadata.readingTime || autoReadingTime,
        image: metadata.image || '',
        tags: Array.isArray(metadata.tags) ? metadata.tags : [],
        content: content
      } as BlogPost;
    });
    
  // Sort posts by date (descending)
  return allPostsData.sort((a, b) => {
    if (a.publishedAt < b.publishedAt) {
      return 1;
    } else {
      return -1;
    }
  });
}

export function getBlogPostBySlug(slug: string): BlogPost | undefined {
  const posts = getBlogPosts();
  return posts.find(post => post.slug === slug);
}
