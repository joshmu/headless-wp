/**
 * @path /pages/index.tsx
 *
 * @project headless-wp
 * @file index.tsx
 *
 * @author Josh Mu <hello@joshmu.dev>
 * @created Wednesday, 16th December 2020
 * @modified Friday, 18th December 2020 2:49:36 pm
 * @copyright © 2020 - 2020 MU
 */

import Link from 'next/link'

import { useThemeContext } from '@/context/themeContext'
import { Layout } from '@/layout/Layout'

export default function Home() {
  const { toggleTheme } = useThemeContext()

  const handleClick = () => {
    toggleTheme()
  }

  return (
    <Layout>
      <h1
        onClick={handleClick}
        className='p-8 text-6xl font-bold cursor-pointer'
      >
        Headless Wordpress
      </h1>
      <Link href='/postIndex'>All Posts</Link>
    </Layout>
  )
}
