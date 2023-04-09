import React from 'react';
import Blog from './Blog';
import Funds from './Funds';
import Tips from './Tips';
import Header from './Header';
import Summary from './Summary';
import ScrollView from '../../../../shared/components/ScrollView';
import Box from '../../../../shared/components/Box';

const Explore = () => {
  return (
    <ScrollView flex={1}>
      <Header />
      <Summary />
      <Funds />
      <Tips />
      <Box marginBottom={50}>
        <Blog />
      </Box>
    </ScrollView>
  );
};

export default Explore;
