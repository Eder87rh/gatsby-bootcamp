import React from "react";
import { Link } from 'gatsby';

import Layout from '../components/layout';

const IndexPage = () => {
  return (
    <Layout>
      <h1>Hello</h1>
      <h2>I'm Eder, A fulll-stack javascript developer living in Mexico</h2>
      <p>Need a developer? <Link to="/contact">Contact me.</Link></p>
    </Layout>
  );
};

export default IndexPage;
