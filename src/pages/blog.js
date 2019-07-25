import React from 'react';
import Layout from '../components/layout';

import { graphql, useStaticQuery } from 'gatsby';

const BlogPage = () => {

  const data = useStaticQuery(graphql`
    query {
      allMarkdownRemark {
        edges {
          node {
            frontmatter {
              title
              date
            }
          }
        }
      }
    }
  `);

  const { allMarkdownRemark: { edges: posts } } = data;

  return (
    <div>
      <Layout>
        <h1>Blog</h1>
        <ol>
          {
            posts.map((post, index) => 
              <li key={ index }> 
                <h2>
                  { post.node.frontmatter.title } 
                </h2>
                <p>
                  { post.node.frontmatter.date }
                </p>
              </li>
            )
          }
        </ol>
      </Layout>
    </div>
  )
};

export default BlogPage;