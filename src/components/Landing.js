import React from 'react'
import {Row} from 'antd';

import {FcApproval} from 'react-icons/fc';
import CategoryCard from './CategoryCard';

function Landing() {
  return (
    <div className="app">
      <div className="header">
        <h1>Welcome to Happy App</h1>
        <div className="hideSm"><FcApproval size={30}/></div>
      </div>
      <div className="mt-3">
        <h2 className="text-center">Categories</h2>
        <Row gutter={16}>
          <CategoryCard title="Any Jokes" content="A collection of random jokes" path="/jokes/any"/>
          <CategoryCard title="Programming Jokes" content="A collection of programming jokes" path="/jokes/programming"/>
          <CategoryCard title="Misc Jokes" content="A collection of misc jokes" path="/jokes/misc"/>
          <CategoryCard title="Dark Jokes" content="A collection of dark jokes" path="/jokes/dark"/>
          <CategoryCard title="Pun Jokes" content="A collection of pun jokes" path="/jokes/pun"/>
          <CategoryCard title="Spooky Jokes" content="A collection of spooky jokes" path="/jokes/spooky"/>
          <CategoryCard title="Christmas Jokes" content="A collection of christmas jokes" path="/jokes/christmas"/>
        </Row>
      </div>
      <div className="mt-3">
        <h2 className="text-center">Joke Type</h2>
        <Row gutter={16} className="ant-row-center">
          <CategoryCard title="Single" content="A collection of single jokes" path="/jokes/single"/>
          <CategoryCard title="Two Part" content="A collection of two part jokes" path="/jokes/twopart"/>
        </Row>
      </div>
    </div>
  );
}

export default Landing;
