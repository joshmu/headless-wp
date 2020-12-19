/**
 * @path /pages/post-index.tsx
 *
 * @project headless-wp
 * @file post-index.tsx
 *
 * @author Josh Mu <hello@joshmu.dev>
 * @created Friday, 18th December 2020
 * @modified Saturday, 19th December 2020 2:12:41 pm
 * @copyright © 2020 - 2020 MU
 */

import { NextPage } from 'next'

import { PostIndex } from '@/components/PostIndex/PostIndex'
import { LinkType } from '@/layout/Header/Header'
import { Layout } from '@/layout/Layout'

interface Props {
  menu: {
    primaryLinks: LinkType[]
    secondaryLinks: LinkType[]
  }
}

const postIndex: NextPage<Props> = ({ menu }) => {
  return (
    <Layout showPosts={false} menu={menu}>
      <PostIndex limit={99} />
    </Layout>
  )
}

export default postIndex
