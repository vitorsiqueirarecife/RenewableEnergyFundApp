import React from 'react';
import {Props} from './types';
import Box from '../../../../../shared/components/Box';
import Typography from '../../../../../shared/components/Typography';
import News from './News';
import ScrollView from '../../../../../shared/components/ScrollView';

const Breakdown = ({asset}: Props) => {
  return (
    <Box width="100%" padding={20}>
      <Box marginBottom={20}>
        <Typography fontSize={17} fontWeight={600} color="#000">
          Fund Breakdown
        </Typography>
      </Box>

      <ScrollView marginBottom={20} horizontal>
        {asset.news?.map(news => (
          <Box marginRight={3}>
            <News
              key={news.id}
              image={news.image}
              logo={news.logo}
              text={news.text}
            />
          </Box>
        ))}
      </ScrollView>
    </Box>
  );
};

export default Breakdown;
