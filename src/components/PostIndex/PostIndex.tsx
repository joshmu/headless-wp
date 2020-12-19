/**
 * @path /src/components/PostIndex/PostIndex.tsx
 *
 * @project headless-wp
 * @file PostIndex.tsx
 *
 * @author Josh Mu <hello@joshmu.dev>
 * @created Friday, 18th December 2020
 * @modified Saturday, 19th December 2020 12:56:51 pm
 * @copyright © 2020 - 2020 MU
 */

import Link from 'next/link'
import { useEffect, useState } from 'react'
import { apiUrl } from 'src/config'
import { fetcher } from 'src/helpers'

interface Props {
  limit?: number
}

export const PostIndex = ({ limit = 3 }: Props) => {
  const [posts, setPosts] = useState<Post[]>([])

  useEffect(() => {
    fetcher(`${apiUrl}/wp-json/wp/v2/posts?per_page=${limit}`).then(data =>
      setPosts(data)
    )
  }, [])

  return (
    <section className='p-8'>
      <h3 className='text-2xl'>Archive</h3>
      <ol className='my-2 ml-8 list-decimal'>
        {posts.map(post => (
          <li className='cursor-pointer' key={post.id}>
            <Link href={`/posts/${post.slug}`}>{post.title.rendered}</Link>
          </li>
        ))}
      </ol>
    </section>
  )
}

export interface Post {
  id: number
  slug: string
  date: string
  title: { rendered: string }
  content: { rendered: string }
}
