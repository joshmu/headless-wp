/**
 * @path /pages/post-index.tsx
 *
 * @project headless-wp
 * @file post-index.tsx
 *
 * @author Josh Mu <hello@joshmu.dev>
 * @created Friday, 18th December 2020
 * @modified Friday, 18th December 2020 3:19:44 pm
 * @copyright © 2020 - 2020 MU
 */

import { NextPage } from 'next'

import { PostIndex } from '@/components/PostIndex/PostIndex'
import { Layout } from '@/layout/Layout'

interface Props {}

const postIndex: NextPage<Props> = () => {
  return (
    <Layout>
      <PostIndex />
    </Layout>
  )
}

export default postIndex
