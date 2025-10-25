import React from 'react';
import { CardList } from '../components/product/CardList';

const Home = ({ producto }) => {
  return <CardList producto={producto} />;
};

export default Home;