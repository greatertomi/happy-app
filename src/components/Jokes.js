import React, {useState, useEffect} from 'react';
import {Row} from 'antd';
import {BsArrowLeft} from 'react-icons/bs'
import axios from 'axios';

import JokeCard from './JokeCard';
import {Link, useParams} from 'react-router-dom';

const Jokes = () => {
  const [jokes, setJokes] = useState([]);
  const [loading, setLoading] = useState(true);
  const {type} = useParams()

  const toTitleCase = () => {
    return `${type.charAt(0).toUpperCase()}${type.substr(1)}`
  }

  useEffect(async () => {
    await getJokes();
  }, [])

  const getJokes = async () => {
    let url;
    if (type === 'single' || type === 'twopart') {
      url = `https://v2.jokeapi.dev/joke/any?blacklistFlags=political,explicit&amount=10&type=${type}`;
    } else {
      url = `https://v2.jokeapi.dev/joke/${type}?blacklistFlags=political,explicit&amount=10`;
    }
    const res = await axios.get(url);
    const {jokes} = res.data
    setJokes(jokes);
    setLoading(false);
  }

  return (
    <div className="app">
      <Link to="/">
        <BsArrowLeft size={40} className="backArrow"/>
      </Link>
      <div className="mb-3">
        <h1 className="text-center">{toTitleCase()} Jokes</h1>
      </div>
      <Row gutter={16}>
        {jokes.map(joke => <JokeCard key={joke.id} {...joke} loading={loading} />)}
      </Row>
    </div>
  );
};

export default Jokes;
