/**
 * @path /src/components/Layout/Layout.tsx
 *
 * @project headless-wp
 * @file Layout.tsx
 *
 * @author Josh Mu <hello@joshmu.dev>
 * @created Wednesday, 16th December 2020
 * @modified Thursday, 17th December 2020 10:11:23 am
 * @copyright © 2020 - 2020 MU
 */

import { motion } from 'framer-motion'
import Head from 'next/head'
import { useEffect, useRef } from 'react'

type LayoutProps = {
  children: React.ReactNode
}

type MetaRefType = {
  title: string
  description: string
  keywords: string
  origin: string | null
  imgUrl: string
}

export const Layout = ({ children }: LayoutProps) => {
  // todo: update in production
  const metaRef = useRef<MetaRefType>({
    title: 'headless-wp',
    description: 'This is the meta description for the website',
    keywords: 'josh mu, web dev, nextjs, tailwindcss, headless, wordpress',
    origin: null,
    imgUrl: '/assets/avatar.jpg',
  })
  useEffect(() => {
    const origin = window.location.origin
    metaRef.current.origin = origin
    metaRef.current.imgUrl = origin + metaRef.current.imgUrl
  }, [])

  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
    >
      <Head>
        <title>{metaRef.current.title}</title>

        {/* // * meta needs to be direct child of <Head> otherwise nextjs breaks... */}
        {/* HTML Meta Tags */}
        {/* Meta Tags Generated via http://heymeta.com</meta> */}
        <meta name='description' content={metaRef.current.description} />
        <meta name='keywords' content={metaRef.current.keywords} />

        {/* Google / Search Engine Tags */}
        <meta itemProp='name' content={metaRef.current.title} />
        <meta itemProp='description' content={metaRef.current.description} />
        <meta itemProp='image' content={metaRef.current.imgUrl} />

        {/* Facebook Meta Tags */}
        <meta property='og:url' content={metaRef.current.origin} />
        <meta property='og:type' content='website' />
        <meta property='og:title' content={metaRef.current.title} />
        <meta property='og:description' content={metaRef.current.description} />
        <meta property='og:image' content={metaRef.current.imgUrl} />

        {/* Twitter Meta Tags */}
        <meta name='twitter:card' content='summary_large_image' />
        <meta name='twitter:title' content={metaRef.current.title} />
        <meta
          name='twitter:description'
          content={metaRef.current.description}
        />
        <meta name='twitter:image' content={metaRef.current.imgUrl} />
      </Head>
      <div className='min-h-screen overflow-hidden font-sans antialiased transition-colors duration-200 ease-in-out'>
        <main>{children}</main>
      </div>
    </motion.div>
  )
}
