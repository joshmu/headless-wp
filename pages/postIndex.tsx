/**
 * @path /pages/postIndex.tsx
 *
 * @project headless-wp
 * @file postIndex.tsx
 *
 * @author Josh Mu <hello@joshmu.dev>
 * @created Friday, 18th December 2020
 * @modified Friday, 18th December 2020 3:03:37 pm
 * @copyright © 2020 - 2020 MU
 */

import { NextPage } from 'next'
import Link from 'next/link'
import { apiUrl } from 'src/config'

import { Layout } from '@/layout/Layout'

export interface Post {
  id: number
  slug: string
  date: string
  title: { rendered: string }
  content: { rendered: string }
}
interface Props {
  posts: Post[]
}

const postIndex: NextPage<Props> = ({ posts }) => {
  return (
    <Layout>
      <h1 className='text-3xl'>postIndex</h1>
      <ul className='mt-4'>
        {posts.map(post => (
          <Link key={post.id} href={`/posts/${post.slug}`}>
            <li className='cursor-pointer'>{post.title.rendered}</li>
          </Link>
        ))}
      </ul>
    </Layout>
  )
}

postIndex.getInitialProps = async context => {
  const postsRes = await fetch(`${apiUrl}/wp-json/wp/v2/posts`)
  const posts = await postsRes.json()

  return { posts }
}

export default postIndex
