import React from 'react';
import { NavLink } from 'react-router-dom';
import Page from '../components/Page';

const Home = () => (
  <Page style={{ background: 'lightpink' }}>
    <h1>Home</h1>

    <NavLink
      to="/about"
      style={{ display: 'block', marginTop: '100vh', color: 'white' }}
    >
      Go to About
    </NavLink>
  </Page>
);

export default Home;
