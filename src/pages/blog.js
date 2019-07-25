import React from 'react';
import Layout from '../components/layout';
import blogStyles from './blog.module.scss';

import { Link, graphql, useStaticQuery } from 'gatsby';

const BlogPage = () => {

  const data = useStaticQuery(graphql`
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

  const { allMarkdownRemark: { edges: posts } } = data;

  return (
    <div>
      <Layout>
        <h1>Blog</h1>
        <ol className={ blogStyles.posts }>
          {
            posts.map((post, index) => 
            <li key={ index } className={ blogStyles.post }> 
              <Link to={`/blog/${post.node.fields.slug}`}>
                <h2>
                  { post.node.frontmatter.title } 
                </h2>
                <p>
                  { post.node.frontmatter.date }
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