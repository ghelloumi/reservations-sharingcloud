import React from 'react';
import { BrowserRouter as Router } from 'react-router-dom';
import { Layout } from './components/Layout';
import Banner from './components/organisms/Banner';
import { GlobalStyles } from './theme/global';
import Routes from './routes/Routes';

function App() {
  return (
    <div className="App">
      <GlobalStyles />
      <Layout>
        <Router>
          <Banner />
          <Routes />
        </Router>
      </Layout>
    </div>
  );
}

export default App;
