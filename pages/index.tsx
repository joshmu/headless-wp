/**
 * @path /pages/index.tsx
 *
 * @project headless-wp
 * @file index.tsx
 *
 * @author Josh Mu <hello@joshmu.dev>
 * @created Wednesday, 16th December 2020
 * @modified Saturday, 19th December 2020 12:19:04 pm
 * @copyright © 2020 - 2020 MU
 */

import { Layout } from '@/layout/Layout'

export default function Home() {
  return (
    <Layout>
      <h1 className='p-8 text-6xl font-bold cursor-pointer'>
        Headless Wordpress
      </h1>
    </Layout>
  )
}
