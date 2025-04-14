import PostListItem from './PostListItem'
import Container from '@/components/Container'

const PostList = ({ posts }) => {
  return (
    <Container>
      <div className="space-y-12">
        <div className="space-y-4">
          <h1 className="text-3xl md:text-4xl font-bold text-primary">Blog</h1>
          <div className="w-20 h-1 bg-primary rounded-full"></div>
        </div>

        <ol className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {posts.map(post => (
            <PostListItem key={post.slug} post={post} />
          ))}
        </ol>
      </div>
    </Container>
  )
}

export default PostList
