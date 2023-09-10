import fs from 'fs';
import path from 'path';
import matter from 'gray-matter';
import readingTime from 'reading-time';

const postsDirectory = path.join(process.cwd(), 'src', 'posts');

const getPostFiles = () => {
  const postFiles = fs.readdirSync(postsDirectory, 'utf-8');
  return postFiles;
};

const getPostData = (postIdentifier) => {
  const slug = postIdentifier.replace(/\.md$/, '');
  const filePath = path.join(postsDirectory, `${slug}.md`);
  const fileContent = fs.readFileSync(filePath, { encoding: 'utf8' });

  const { data: meta, content } = matter(fileContent);
  const readTime = readingTime(content).text;

  const postData = {
    slug,
    ...meta,
    content,
    readTime,
  };
  return postData;
};

const getAllPosts = () => {
  const postFiles = getPostFiles();
  const posts = postFiles.map((fileName) => getPostData(fileName));
  return posts.sort((postA, postB) => (postA.date > postB.date ? -1 : 1));
};

export { getAllPosts, getPostData, getPostFiles };
