import PostList from '../../../components/Blog/Posts/PostList';
import { getAllPosts } from '../../../lib/Posts/post-util';
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
