/**
 * @path /pages/_app.tsx
 *
 * @project headless-wp
 * @file _app.tsx
 *
 * @author Josh Mu <hello@joshmu.dev>
 * @created Wednesday, 16th December 2020
 * @modified Saturday, 19th December 2020 1:57:24 pm
 * @copyright © 2020 - 2020 MU
 */

import '@/styles/globals.scss'

import { AnimatePresence } from 'framer-motion'
import App from 'next/app'
import { AppProps } from 'next/app'
import { apiUrl } from 'src/config'
import { fetcher } from 'src/helpers'

import { GlobalProvider } from '@/context/globalContext'
import { ThemeProvider } from '@/context/themeContext'

const MyApp = ({ Component, pageProps, router }: AppProps) => {
  return (
    <GlobalProvider>
      <ThemeProvider>
        <AnimatePresence exitBeforeEnter>
          <Component {...pageProps} key={router.route} />
        </AnimatePresence>
      </ThemeProvider>
    </GlobalProvider>
  )
}

// Only uncomment this method if you have blocking data requirements for
// every single page in your application. This disables the ability to
// perform automatic static optimization, causing every page in your app to
// be server-side rendered.
//
MyApp.getInitialProps = async appContext => {
  // calls page's `getInitialProps` and fills `appProps.pageProps`
  const appProps = await App.getInitialProps(appContext)

  // * using wp plugin to get menu data
  // _Api V2 Menus_ By Claudio La Barbera
  const primaryLinksData = await fetcher(
    `${apiUrl}/wp-json/menus/v1/menus/main-menu`
  )
  const secondaryLinksData = await fetcher(
    `${apiUrl}/wp-json/menus/v1/menus/footer-menu`
  )
  const primaryLinks = primaryLinksData.items
  const secondaryLinks = secondaryLinksData.items

  return { ...appProps, pageProps: { menu: { primaryLinks, secondaryLinks } } }
}

export default MyApp
