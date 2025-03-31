import PostListItem from './PostListItem'

const PostList = ({ posts }) => {
  return (
    <section className="min-h-screen py-16 px-6">
      <div className="max-w-7xl mx-auto space-y-12">
        <div className="space-y-4">
          <h1 className="text-4xl md:text-5xl font-bold text-primary">Blog</h1>
          <div className="w-20 h-1 bg-primary rounded-full"></div>
        </div>

        <ol className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {posts.map(post => (
            <PostListItem key={post.slug} post={post} />
          ))}
        </ol>
      </div>
    </section>
  )
}

export default PostList
