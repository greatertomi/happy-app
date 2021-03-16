import React from 'react';
import {Card, Col, Row, Tag} from 'antd';

const {Meta} = Card;

const Jokes = () => {
  const content = (
    <div>
      <Tag color="purple" className="mb-2">Programming</Tag>
      <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit.</p>
      <p>Lorem ipsum dolor sit amet, consectetur</p>
      <div>
        <Tag color="success">Safe</Tag>
        <Tag color="error">Not Safe</Tag>
        <Tag color="gold">Pun</Tag>
      </div>
    </div>
  )
  return (
    <div>
      <div>
        <h1 className="text-center">Programming Jokes</h1>
      </div>
      <Row>
        <Col xs={24} md={12}>
          <Card bordered={false} loading={false}>
            <Meta
              description={content}
            />
          </Card>
        </Col>
      </Row>
    </div>
  );
};

export default Jokes;
