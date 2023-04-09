import React, {useMemo} from 'react';
import Box from '../../../../shared/components/Box';
import {RouteProp, useNavigation, useRoute} from '@react-navigation/native';
import {
  RootNavigationProps,
  RootStackParamList,
} from '../../../../routes/types';

import Header from '../../../../shared/components/Header';
import Typography from '../../../../shared/components/Typography';
import ScrollView from '../../../../shared/components/ScrollView';
import Display from './Display';
import Info from './Info';
import {mockFunds} from '../../../../shared/mocks';
import Breakdown from './Breakdown';

const AssetDetails = () => {
  const {goBack} = useNavigation<RootNavigationProps<'Init'>>();
  const {params} = useRoute<RouteProp<RootStackParamList, 'AssetDetails'>>();

  const data = useMemo(() => {
    // this code can be change unsing React Query (https://github.com/tanstack/query)
    return mockFunds.find(fund => {
      return fund.id === params.id;
    });
  }, [params.id]);

  return (
    <ScrollView flex={1} backgroundColor="#FFF">
      <Header handleBack={goBack}>
        <Box
          flex={1}
          display="flex"
          justifyContent="center"
          alignItems="center">
          <Typography color="#000000" fontSize={17} fontWeight="600">
            {data?.name}
          </Typography>
          <Typography color="#808080" fontSize={14} fontWeight="400">
            {data?.code}
          </Typography>
        </Box>
      </Header>

      {data && <Display asset={data} />}
      {data && <Info asset={data} />}
      {data && <Breakdown asset={data} />}
    </ScrollView>
  );
};

export default AssetDetails;
