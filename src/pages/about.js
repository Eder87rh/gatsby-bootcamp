import React from 'react';
import { Link } from 'gatsby';
import Layout from '../components/layout';
import Head from '../components/head';

const AboutPage = () => {
  return (
    <div>
      <Layout>
        <Head title="About"/>
        <h1>About</h1>
        <p>I am a full stack javascript developer with more than 8 years of experience</p>
        <p>
        <Link href="/contact">Want to work me? reach out.</Link>
        </p>
      </Layout>
    </div>
  )
};

export default AboutPage;