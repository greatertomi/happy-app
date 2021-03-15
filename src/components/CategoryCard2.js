import React from 'react';
import {Col, Card} from 'antd';

const { Meta } = Card;

const loading = true;

const CategoryCard2 = ({title, content}) => {
  return (
    <Col xs={24} md={12} lg={6}>
      <Card bordered={false} loading={loading}>
        <Meta
          title={title}
          description={content}
        />
      </Card>
    </Col>
  );
};

export default CategoryCard2;
