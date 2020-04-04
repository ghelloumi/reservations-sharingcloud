import React from 'react';
import { Layout } from './components/Layout';
import Banner from './components/Banner';
import {GlobalStyles} from "./theme/global";

function App() {
  return (
      <div className="App">
        <GlobalStyles />
        <Layout>
          <Banner />
        </Layout>
      </div>
  );
}

export default App;
