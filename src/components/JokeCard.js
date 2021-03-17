import React from 'react';
import {Card, Col, Tag} from 'antd';
import PropTypes from 'prop-types';

const {Meta} = Card;

const JokeCard = (props) => {
  let tagColor;
  if (props.category === 'Programming') {
    tagColor = 'purple';
  } else if (props.category === 'Misc') {
    tagColor = 'blue';
  } else if (props.category === 'Dark') {
    tagColor = '#181818';
  } else if (props.category === 'Pun') {
    tagColor = 'green';
  } else if (props.category === 'Spooky') {
    tagColor = 'cyan';
  } else if (props.category === 'Christmas') {
    tagColor = 'red';
  } else {
    tagColor = 'orange';
  }
  const safeColor = props.safe ? 'success' : 'error';

  const content = (
    <div>
      <Tag color={tagColor} className="mb-2">{props.category}</Tag>
      <p>{props.type === 'twopart' ? props.setup : props.joke }</p>
      {props.type === 'twopart' && <p>{props.delivery}</p>}
      <div>
        <Tag color={safeColor}>{props.safe ? 'safe' : 'not safe'}</Tag>
        {props.flags.explicit && <Tag color="gold">explicit</Tag>}
        {props.flags.political && <Tag color="geekblue">political</Tag>}
      </div>
    </div>
  )

  return (
    <Col xs={24} md={12}>
      <Card bordered={false} loading={false} className="pb-3">
        <Meta
          description={content}
        />
      </Card>
    </Col>
  );
};

JokeCard.propTypes = {
  category: PropTypes.string,
  safe: PropTypes.bool,
  type: PropTypes.string,
  setup: PropTypes.string,
  delivery: PropTypes.string,
  joke: PropTypes.string,
  flags: PropTypes.object
}

export default JokeCard;
