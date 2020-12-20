import React from 'react'

import { Layout } from '../components/Layout/Layout'

const Post = ({ pageContext }) => {
  return (
    <Layout>
      <h1>{pageContext.title}</h1>
      <div dangerouslySetInnerHTML={{ __html: pageContext.content }} />
      <br />
      <pre>{JSON.stringify(pageContext, null, 2)}</pre>
    </Layout>
  )
}

export default Post
