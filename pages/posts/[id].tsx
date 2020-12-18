/**
 * @path /pages/posts/[id].tsx
 *
 * @project headless-wp
 * @file [id].tsx
 *
 * @author Josh Mu <hello@joshmu.dev>
 * @created Friday, 18th December 2020
 * @modified Friday, 18th December 2020 2:49:19 pm
 * @copyright © 2020 - 2020 MU
 */

import { GetStaticPaths, GetStaticProps, NextPage } from 'next'
import Link from 'next/link'
import { apiUrl } from 'src/config'

import { Layout } from '@/layout/Layout'

import { Post } from '../postIndex'

interface Props {
  post: Post
}

const PostPage: NextPage<Props> = ({ post }) => {
  return (
    <Layout>
      <div>
        <h1>{post.title.rendered}</h1>
        <p>{post.content.rendered}</p>
      </div>
      <Link href='/postIndex'>All Posts</Link>
    </Layout>
  )
}

export const getStaticPaths: GetStaticPaths = async context => {
  const postsRes = await fetch(`${apiUrl}/wp-json/wp/v2/posts`)
  const posts: Post[] = await postsRes.json()
  const paths = posts.map(post => {
    return {
      params: { id: post.id.toString() },
    }
  })

  return { paths, fallback: false }
}

export const getStaticProps: GetStaticProps = async ({ params }) => {
  const postRes = await fetch(`${apiUrl}/wp-json/wp/v2/posts/${params.id}`)
  const post: Post = await postRes.json()

  return { props: { post } }
}

export default PostPage
