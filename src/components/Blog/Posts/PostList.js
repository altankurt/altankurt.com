import PostListItem from './PostListItem';

const PostList = ({ posts }) => {
  return (
    <section className="max-w-[85rem] px-4 py-10 sm:px-6 lg:px-8 lg:py-14 mx-auto">
      <ol className="grid lg:grid-cols-2 lg:gap-y-16 gap-10">
        {posts.map((post) => (
          <PostListItem key={post.slug} post={post} />
        ))}
      </ol>
    </section>
  );
};

export default PostList;
