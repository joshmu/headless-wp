import { graphql } from 'gatsby'
import React from 'react'

import { Layout } from '../components/Layout/Layout'

const Page = props => {
  const pageData = props.data.wpPage
  return (
    <Layout>
      <h1>{pageData.title}</h1>
      <div dangerouslySetInnerHTML={{ __html: pageData.content }} />
      <br />
      <pre>{JSON.stringify(pageData, null, 2)}</pre>
    </Layout>
  )
}

export default Page

export const query = graphql`
  query PageQuery($slug: String!) {
    wpPage(slug: { eq: $slug }) {
      content
      date
      id
      link
      title
      slug
    }
  }
`
