/**
 * @path /pages/posts/[id].tsx
 *
 * @project headless-wp
 * @file [id].tsx
 *
 * @author Josh Mu <hello@joshmu.dev>
 * @created Friday, 18th December 2020
 * @modified Saturday, 19th December 2020 12:20:01 pm
 * @copyright © 2020 - 2020 MU
 */

import { GetStaticPaths, GetStaticProps, NextPage } from 'next'
import { apiUrl } from 'src/config'

import { Post, PostIndex } from '@/components/PostIndex/PostIndex'
import { Layout } from '@/layout/Layout'

interface Props {
  post: Post
}

const PostPage: NextPage<Props> = ({ post }) => {
  return (
    <Layout>
      <div className='m-4 text-xl'>
        <h1 className='text-3xl'>{post.title.rendered}</h1>
        <div dangerouslySetInnerHTML={{ __html: post.content.rendered }} />
      </div>
    </Layout>
  )
}

export const getStaticPaths: GetStaticPaths = async context => {
  const postsRes = await fetch(`${apiUrl}/wp-json/wp/v2/posts`)
  const posts: Post[] = await postsRes.json()
  const paths = posts.map(post => {
    return {
      params: { id: post.slug },
    }
  })

  return { paths, fallback: false }
}

export const getStaticProps: GetStaticProps = async ({ params }) => {
  const postRes = await fetch(`${apiUrl}/wp-json/wp/v2/posts?slug=${params.id}`)
  const posts: Post[] = await postRes.json()

  return { props: { post: posts[0] } }
}

export default PostPage
