import React from 'react';
import {PageLayout} from "../PageLayout";
import {IHome} from "./_pages.interfaces";

const Home: React.FunctionComponent<IHome> = ({from}) => {
  return <PageLayout><div>Page Home</div></PageLayout>;
};

export default Home;
