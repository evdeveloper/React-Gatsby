import React from 'react';
import 'normalize.css';
import styled, { ThemeProvider } from 'styled-components';
import Header from './Header';
import GlobalStyles from '../styles/GlobalStyles';
import Footer from './Footer';

const themeVariable = {
  black: '#262626',
  white: '#fff',
  yellow: '#ffc600',
  light: '#efefef',
  gray: '#3a3a3a',
};

const Layout = ({ children }) => (
  <ThemeProvider theme={themeVariable}>
    <StylePage>
      <GlobalStyles />
      <Header />
      <Content>{children}</Content>
      <Footer />
    </StylePage>
  </ThemeProvider>
);

export default Layout;

const StylePage = styled.div`
  background-color: ${props => props.theme.white};
  color: ${props => props.theme.black};
`;

const Content = styled.div`
  max-width: 900px;
  min-height: 40vw;
  padding: 6rem 1rem;
  margin: 0 auto;
`;

