import React from 'react'
import {Row, Col, Card} from 'antd';
import './styles/app.scss';
import {FcApproval} from 'react-icons/fc';


function App() {
  return (
    <div className="app">
      <div className="header">
        <h1>Welcome to Happy App</h1>
        <div><FcApproval size={30}/></div>
      </div>
      <div className="mt-5">
        <Row gutter={16}>
          <Col xs={24} md={12} lg={6}>
            <Card title="Any Jokes" bordered={false}>
              Card content
            </Card>
          </Col>
          <Col xs={24} md={12} lg={6}>
            <Card title="Programming Jokes" bordered={false}>
              Card content
            </Card>
          </Col>
          <Col xs={24} md={12} lg={6}>
            <Card title="Misc Jokes" bordered={false}>
              Card content
            </Card>
          </Col>
          <Col xs={24} md={12} lg={6}>
            <Card title="Pun Jokes" bordered={false}>
              Card content
            </Card>
          </Col>
        </Row>
      </div>
    </div>
  );
}

export default App;
