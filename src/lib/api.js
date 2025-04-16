import fs from 'fs'
import path from 'path'
import matter from 'gray-matter'

// Blog postlarının bulunabileceği dizinler
const postsDirectories = [
  path.join(process.cwd(), 'src/content/posts'),
  path.join(process.cwd(), 'src/contents'),
]

export function getAllPosts(fields = []) {
  let allPosts = []

  postsDirectories.forEach(postsDirectory => {
    if (!fs.existsSync(postsDirectory)) return

    const fileNames = fs.readdirSync(postsDirectory)
    const posts = fileNames
      .filter(fileName => fileName.endsWith('.md') || fileName.endsWith('.mdx'))
      .map(fileName => {
        const slug = fileName.replace(/\.(md|mdx)$/, '')
        const fullPath = path.join(postsDirectory, fileName)
        const fileContents = fs.readFileSync(fullPath, 'utf8')
        const { data, content } = matter(fileContents)

        const items = {}

        // Ensure only the minimal needed data is exposed
        fields.forEach(field => {
          if (field === 'slug') {
            items[field] = slug
          }
          if (field === 'content') {
            items[field] = content
          }
          if (data[field]) {
            items[field] = data[field]
          }
        })

        return items
      })

    allPosts = [...allPosts, ...posts]
  })

  // Sort posts by date
  return allPosts.sort((post1, post2) => (post1.date > post2.date ? -1 : 1))
}

export function getPostBySlug(slug, fields = []) {
  // Tüm dizinlerde arama yap
  for (const postsDirectory of postsDirectories) {
    if (!fs.existsSync(postsDirectory)) continue

    const possibleExtensions = ['.md', '.mdx']
    for (const ext of possibleExtensions) {
      const fullPath = path.join(postsDirectory, `${slug}${ext}`)
      if (fs.existsSync(fullPath)) {
        const fileContents = fs.readFileSync(fullPath, 'utf8')
        const { data, content } = matter(fileContents)

        const items = {}

        fields.forEach(field => {
          if (field === 'slug') {
            items[field] = slug
          }
          if (field === 'content') {
            items[field] = content
          }
          if (data[field]) {
            items[field] = data[field]
          }
        })

        return items
      }
    }
  }

  return null
}
