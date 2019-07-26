import React from 'react';
import Layout from '../components/layout';
import Head from '../components/head';

const ContactPage = () => {
  return (
    <div>
      <Layout>
        <Head title="Contact"/>
        <h1>Contact</h1>
        <p>The best way to contact me is via <a href="https://twitter.com" target="_blank">twiter</a></p>
      </Layout>
    </div>
  )
};

export default ContactPage;