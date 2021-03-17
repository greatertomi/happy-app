import React from 'react';
import {Row} from 'antd';
import {BsArrowLeft} from 'react-icons/bs'
import JokeCard from './JokeCard';
import {Link} from 'react-router-dom';

const joke = {
  error: false,
  category: "Programming",
  type: "twopart",
  setup: "So what's a set of predefined steps the government might take to preserve the environment?",
  delivery: "An Al-Gore-ithm.",
  flags: {
    nsfw: false,
    religious: false,
    political: false,
    racist: false,
    sexist: false,
    explicit: false
  },
  id: 52,
  safe: true,
  lang: "en"
}

const Jokes = () => {
  return (
    <div className="app">
      <Link to="/">
        <BsArrowLeft size={40} className="backArrow"/>
      </Link>
      <div className="mb-3">
        <h1 className="text-center">Programming Jokes</h1>
      </div>
      <Row>
        <JokeCard {...joke} />
      </Row>
    </div>
  );
};

export default Jokes;
