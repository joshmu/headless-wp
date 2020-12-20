/**
 * @path /pages/[id].tsx
 *
 * @project headless-wp
 * @file [id].tsx
 *
 * @author Josh Mu <hello@joshmu.dev>
 * @created Friday, 18th December 2020
 * @modified Saturday, 19th December 2020 3:25:43 pm
 * @copyright © 2020 - 2020 MU
 */

import { GetStaticPaths, GetStaticProps, NextPage } from 'next'
import { apiUrl } from 'src/config'
import { fetcher } from 'src/helpers'

import { Post } from '@/components/PostIndex/PostIndex'
import { LinkType } from '@/layout/Header/Header'
import { Layout } from '@/layout/Layout'

interface Props {
  page: Post
  menu: {
    primaryLinks: LinkType[]
    secondaryLinks: LinkType[]
  }
}

const Page: NextPage<Props> = ({ page, menu }) => {
  return (
    <Layout menu={menu}>
      <div className='m-4 text-xl'>
        <h1 className='text-3xl'>{page.title.rendered}</h1>
        <div dangerouslySetInnerHTML={{ __html: page.content.rendered }} />
      </div>
    </Layout>
  )
}

export const getStaticPaths: GetStaticPaths = async context => {
  const pages: Post[] = await fetcher(`${apiUrl}/wp-json/wp/v2/pages`)

  const paths = pages.map(page => {
    return {
      params: { id: page.slug },
    }
  })

  return { paths, fallback: false }
}

export const getStaticProps: GetStaticProps = async ({ params }) => {
  const pages: Post[] = await fetcher(
    `${apiUrl}/wp-json/wp/v2/pages?slug=${params.id}`
  )

  return { props: { page: pages[0] } }
}

export default Page
