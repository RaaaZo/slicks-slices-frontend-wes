import React from 'react';
import styled from 'styled-components';
import Nav from './Nav';
import Footer from './Footer';
import GlobalStyles from '../styles/GlobalStyles';
import Typography from '../styles/Typography';

import stripes from '../assets/images/stripes.svg';

import 'normalize.css';

const Layout = ({ children }) => (
  <>
    <GlobalStyles />
    <Typography />
    <SiteBorderStyles>
      <ContentStyles>
        <Nav />
        {children}
        <Footer />
      </ContentStyles>
    </SiteBorderStyles>
  </>
);

const ContentStyles = styled.div`
  background: #fff;
  padding: 2rem;
`;

const SiteBorderStyles = styled.div`
  max-width: 1000px;
  margin: 12rem auto 4rem auto;
  margin-top: clamp(2rem, 10vw, 12rem);
  background: white url(${stripes});
  background-size: 1500px;
  padding: 5px;
  padding: clamp(5px, 1vw, 20px);
  box-shadow: 0 0 5px 3px rgb(0, 0, 0, 0.44);
  border: 5px solid #fff;
  @media (max-width: 1100px) {
    margin-left: 1.5rem;
    margin-right: 1.5rem;
  }
`;

export default Layout;
