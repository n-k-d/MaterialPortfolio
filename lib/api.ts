import fs from 'fs';
import { join } from 'path';
import matter from 'gray-matter';

const postsDirectory = join(process.cwd(), 'blog');

export function getPostSlugs() {
  return fs.readdirSync(postsDirectory);
}

export type PostType = {
  title: string;
  excerpt: string;
  slug: string;
  tags: string[];
  date: string;
  content: string;
};

export function getPostBySlug(slug: string, fields: string[] = []) {
  const realSlug = slug.replace(/\.md$/, '');
  const fullPath = join(postsDirectory, `${realSlug}.md`);
  const fileContents = fs.readFileSync(fullPath, 'utf8');
  const { data, content } = matter(fileContents);

  const items: PostType = {
    title: '',
    excerpt: '',
    slug: '',
    tags: [],
    date: '',
    content: '',
  };

  items.title = data['title'];
  items.excerpt = data['excerpt'];
  items.slug = realSlug;
  items.tags = data['tags'];
  items.date = data['date'];
  items.content = content;

  return items;
}

export function getAllPosts(fields: string[] = []) {
  const slugs = getPostSlugs();
  const posts = slugs
    .map((slug) => getPostBySlug(slug, fields))
    // sort posts by date in descending order
    .sort((post1, post2) => (post1.date > post2.date ? -1 : 1));
  return posts;
}
