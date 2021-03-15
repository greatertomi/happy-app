import React from 'react';
import {Card, Col} from 'antd';

const CategoryCard = ({title, content}) => {
  return (
    <Col xs={24} md={12} lg={6}>
      <Card title={title} bordered={false}>
        {content}
      </Card>
    </Col>
  );
};

export default CategoryCard;
