/**
 * @path /pages/index.tsx
 *
 * @project headless-wp
 * @file index.tsx
 *
 * @author Josh Mu <hello@joshmu.dev>
 * @created Wednesday, 16th December 2020
 * @modified Saturday, 19th December 2020 3:04:18 pm
 * @copyright © 2020 - 2020 MU
 */

import { NextPage } from 'next'

import { Slider } from '@/components/Slider/Slider'
import { LinkType } from '@/layout/Header/Header'
import { Layout } from '@/layout/Layout'

interface Props {
  menu: {
    primaryLinks: LinkType[]
    secondaryLinks: LinkType[]
  }
}

const Home: NextPage<Props> = ({ menu }) => {
  return (
    <Layout menu={menu}>
      <div className='mb-12'>
        <h1 className='p-8 text-6xl font-bold cursor-pointer'>
          Headless Wordpress
        </h1>
        <Slider />
      </div>
    </Layout>
  )
}

export default Home
