import React from 'react';
import {Card, Col} from 'antd';
import PropTypes from 'prop-types';

const CategoryCard = ({title, content}) => {
  return (
    <Col xs={24} md={12} lg={6} className="mt-2">
      <Card title={title} bordered={false}>
        {content}
      </Card>
    </Col>
  );
};

CategoryCard.propTypes = {
  title: PropTypes.string.isRequired,
  content: PropTypes.string.isRequired
}

export default CategoryCard;
