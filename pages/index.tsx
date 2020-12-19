/**
 * @path /pages/index.tsx
 *
 * @project headless-wp
 * @file index.tsx
 *
 * @author Josh Mu <hello@joshmu.dev>
 * @created Wednesday, 16th December 2020
 * @modified Saturday, 19th December 2020 1:58:31 pm
 * @copyright © 2020 - 2020 MU
 */

import { NextPage } from 'next'

import { LinkType } from '@/layout/Header/Header'
import { Layout } from '@/layout/Layout'

interface Props {
  menu: {
    primaryLinks?: LinkType[]
    secondaryLinks?: LinkType[]
  }
}

const Home: NextPage<Props> = ({ menu }) => {
  return (
    <Layout menu={menu}>
      <h1 className='p-8 text-6xl font-bold cursor-pointer'>
        Headless Wordpress
      </h1>
    </Layout>
  )
}

export default Home
