/**
 * @path /src/components/PostIndex/PostIndex.tsx
 *
 * @project headless-wp
 * @file PostIndex.tsx
 *
 * @author Josh Mu <hello@joshmu.dev>
 * @created Friday, 18th December 2020
 * @modified Friday, 18th December 2020 3:25:04 pm
 * @copyright © 2020 - 2020 MU
 */

import Link from 'next/link'
import { useEffect, useState } from 'react'
import { apiUrl } from 'src/config'

const fetcher = async url => fetch(url).then(res => res.json())

export const PostIndex = () => {
  const [posts, setPosts] = useState<Post[]>([])

  useEffect(() => {
    fetcher(`${apiUrl}/wp-json/wp/v2/posts`).then(data => setPosts(data))
  }, [])

  return (
    <section>
      <h3 className='text-3xl'>Archive</h3>
      <ul className='mt-4'>
        {posts.map(post => (
          <Link key={post.id} href={`/posts/${post.slug}`}>
            <li className='cursor-pointer'>{post.title.rendered}</li>
          </Link>
        ))}
      </ul>
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
