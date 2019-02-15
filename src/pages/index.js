import React from 'react'
import { Link, graphql } from 'gatsby'
import './homepage.css';
import Layout from '../components/layout'
import Skills from '../components/skills'

const IndexPage = (props) => {
  const postList = props.data.allMarkdownRemark;
  return (
    <Layout>
      <Skills />
      <div style={{textAlign: 'center', padding: '13px 0'}}>
        <h1 style={{
          textDecoration: 'underline',
          textDecorationStyle: 'wavy',
          color: '#9e59ff'
        }}>Read this coolness 😎</h1>
      </div>
      <div className="posts" style={{
        margin: '0 auto'
      }}>
        {postList.edges.map(({ node }, i) => (
          <Link to={node.fields.slug} className="link" >
            <div className="post-list">
              <h1>{node.frontmatter.title}</h1>
              <span>{node.frontmatter.date}</span>
              <p>{node.excerpt}</p>
            </div>
          </Link>
        ))}
      </div>
      <Link to={'/blog'} className="button">
        Read more coolness 😎
      </Link>
    </Layout>
  )
}

export default IndexPage;

export const listQuery = graphql`
  query ListQuery {
    allMarkdownRemark(
      sort: { order: DESC, fields: [frontmatter___date] }
      limit: 4) {
      edges {
        node {
          fields{
            slug
          }
          excerpt(pruneLength: 250)
          frontmatter {
            date(formatString: "MMMM Do YYYY")
            title
          }
        }
      }
    }
  }
`