import React from 'react';
import Layout from '../components/layout';
import blogStyles from './blog.module.scss';

import { Link, graphql, useStaticQuery } from 'gatsby';

const BlogPage = () => {

  /**
   * Markdown data
  */
  /* const data = useStaticQuery(graphql`
    query {
      allMarkdownRemark {
        edges {
          node {
            frontmatter {
              title
              date
            },
            fields {
              slug
            }
          }
        }
      }
    }
  `);

  const { allMarkdownRemark: { edges: posts } } = data; */

  /**
   * Contentful data
   */

  const data = useStaticQuery(graphql`
    query {
      allContentfulBlogPost (
        sort: {
          fields: publishedData,
          order: DESC
        }
      ) {
        edges {
          node {
            title
            slug
            publishedData(formatString: "MMM Do, YYYY")
          }
        }
      }
    }
  `);

  return (
    <div>
      <Layout>
        <h1>Blog</h1>
        <ol className={ blogStyles.posts }>
          {
            data.allContentfulBlogPost.edges.map((post, index) => 
            <li key={ index } className={ blogStyles.post }> 
              <Link to={`/blog/${post.node.slug}`}>
                <h2>
                  { post.node.title } 
                </h2>
                <p>
                  { post.node.publishedData }
                </p>
              </Link>
            </li>
            ) 
          }
        </ol>
      </Layout>
    </div>
  )
};

export default BlogPage;