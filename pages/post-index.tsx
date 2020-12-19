/**
 * @path /pages/post-index.tsx
 *
 * @project headless-wp
 * @file post-index.tsx
 *
 * @author Josh Mu <hello@joshmu.dev>
 * @created Friday, 18th December 2020
 * @modified Saturday, 19th December 2020 11:51:45 am
 * @copyright © 2020 - 2020 MU
 */

import { NextPage } from 'next'

import { PostIndex } from '@/components/PostIndex/PostIndex'
import { Layout } from '@/layout/Layout'

interface Props {}

const postIndex: NextPage<Props> = () => {
  return (
    <Layout>
      <PostIndex limit={99} />
    </Layout>
  )
}

export default postIndex
