import React from 'react';
import { NavLink } from 'react-router-dom';
import Page from '../components/Page';

const About = () => (
  <Page style={{ background: 'lightblue' }} id='page'>
    <h1>About</h1>

    <NavLink
      to="/"
      style={{ display: 'block', marginTop: '100vh', color: 'white' }}
    >
      Go to Home
    </NavLink>
  </Page>
);

export default About;
