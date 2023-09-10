import PostList from '@/components/blog/posts/post-list';
import { getAllPosts } from '@/lib/posts/post-util';
import Head from 'next/head';

const PostListPage = ({ posts }) => {
  return (
    <>
      <Head>
        <title>Altan Kurt - Blog</title>
      </Head>
      <PostList posts={posts} />
    </>
  );
};

export async function getStaticProps() {
  const posts = getAllPosts();

  return {
    props: {
      posts,
    },
  };
}

export default PostListPage;
