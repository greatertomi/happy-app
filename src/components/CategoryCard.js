import React from 'react';
import {Card, Col} from 'antd';
import PropTypes from 'prop-types';
import {useHistory} from 'react-router-dom';

import {FaRandom} from 'react-icons/fa';
import {VscSymbolMisc} from 'react-icons/vsc';
import {GiHairStrands, GiSpookyHouse} from 'react-icons/gi';
import {GoUnfold} from 'react-icons/go';
import {MdGrade, MdComputer} from 'react-icons/md';
import {BsLayoutSplit, BsLayoutTextSidebar} from 'react-icons/bs';

const CategoryCard = ({title, content, path}) => {
  const history = useHistory();

  const handleNavigation = () => {
    history.push(path)
  }

  return (
    <Col xs={24} md={12} lg={6} className="mt-2 catCol">
      <Card title={title} bordered={false} onClick={handleNavigation}>
        <div className="catCard">
          <div>
            {content}
          </div>
          <div>
            {title === 'Any Jokes' && <FaRandom className="categoryIcon"/>}
            {title === 'Programming Jokes' && <MdComputer className="categoryIcon"/>}
            {title === 'Misc Jokes' && <VscSymbolMisc className="categoryIcon"/>}
            {title === 'Dark Jokes' && <GiHairStrands className="categoryIcon"/>}
            {title === 'Pun Jokes' && <GoUnfold className="categoryIcon"/>}
            {title === 'Spooky Jokes' && <GiSpookyHouse className="categoryIcon"/>}
            {title === 'Christmas Jokes' && <MdGrade className="categoryIcon"/>}
            {title === 'Single' && <BsLayoutTextSidebar className="categoryIcon"/>}
            {title === 'Two Part' && <BsLayoutSplit className="categoryIcon"/>}
          </div>
        </div>
      </Card>
    </Col>
  );
};

CategoryCard.propTypes = {
  title: PropTypes.string.isRequired,
  content: PropTypes.string.isRequired,
  path: PropTypes.string
}

export default CategoryCard;
