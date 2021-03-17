import React from 'react'
import {Row} from 'antd';

import {FcApproval} from 'react-icons/fc';
import CategoryCard from './CategoryCard';

function Landing() {
  return (
    <div className="app">
      <div className="header">
        <h1>Welcome to Happy App</h1>
        <div><FcApproval size={30}/></div>
      </div>
      <div className="mt-3">
        <h2 className="text-center">Categories</h2>
        <Row gutter={16}>
          <CategoryCard title="Any Jokes" content="Card Content" path="/jokes/any"/>
          <CategoryCard title="Programming Jokes" content="Card Content" path="/jokes/programming"/>
          <CategoryCard title="Misc Jokes" content="Card Content" path="/jokes/misc"/>
          <CategoryCard title="Dark Jokes" content="Card Content" path="/jokes/dark"/>
          <CategoryCard title="Pun Jokes" content="Card Content" path="/jokes/pun"/>
          <CategoryCard title="Spooky Jokes" content="Card Content" path="/jokes/spooky"/>
          <CategoryCard title="Christmas Jokes" content="Card Content" path="/jokes/christmas"/>
        </Row>
      </div>
      <div className="mt-3">
        <h2 className="text-center">Joke Type</h2>
        <Row gutter={16} className="ant-row-center">
          <CategoryCard title="Single" content="Card Content" path="/jokes/single"/>
          <CategoryCard title="Two Part" content="Card Content" path="/jokes/twopart"/>
        </Row>
      </div>
    </div>
  );
}

export default Landing;
