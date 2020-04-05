import React from 'react';
import { BrowserRouter as Router } from 'react-router-dom';
import { Layout } from './components/Layout';
import Banner from './components/organisms/Banner';
import { GlobalStyles } from './theme/global';
import Routes from './routes/Routes';
import {ThemeProvider} from "styled-components";
import {theme} from "./theme/theme";

function App() {
  return (
    <div className="App">
      <GlobalStyles />
      <ThemeProvider theme={theme}>
      <Layout>
        <Router>
          <Banner />
          <Routes />
        </Router>
      </Layout>
      </ThemeProvider>
    </div>
  );
}

export default App;
