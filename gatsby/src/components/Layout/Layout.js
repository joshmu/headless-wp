import { StaticQuery, graphql } from 'gatsby'
import React from 'react'
import Helmet from 'react-helmet'

import { Footer } from './Footer'
import { Header } from './Header'

export const Layout = ({ children }) => (
  <StaticQuery
    query={graphql`
      query MenuQuery {
        menuPrimary: wpMenu(slug: { eq: "main-menu" }) {
          menuItems {
            nodes {
              id
              label
              url
              path
            }
          }
        }
        menuSecondary: wpMenu(slug: { eq: "footer-menu" }) {
          menuItems {
            nodes {
              id
              label
              url
              path
            }
          }
        }
      }
    `}
    render={data => (
      <React.Fragment>
        <Helmet
          title={'title'}
          meta={[
            { name: 'description', content: 'Sample' },
            { name: 'keywords', content: 'sample, something' },
          ]}
        ></Helmet>
        <Header menu={data.menuPrimary} />
        <main>{children}</main>
        <Footer menu={data.menuSecondary} />
      </React.Fragment>
    )}
  />
)
