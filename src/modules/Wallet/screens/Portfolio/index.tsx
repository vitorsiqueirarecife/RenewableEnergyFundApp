import React from 'react';
import Box from '../../../../shared/components/Box';
import Title from '../../components/Title';
import Typography from '../../../../shared/components/Typography';
import ScrollView from '../../../../shared/components/ScrollView';

const Portfolio = () => {
  return (
    <ScrollView flex={1} backgroundColor="#FFF" paddingY={10} paddingX={20}>
      <Title>Portfolio</Title>

      <Box marginY={10}>
        <Typography textAlign="justify">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vivamus
          vestibulum id velit at ullamcorper. Vivamus et fringilla lorem. Nulla
          leo lorem, pulvinar vel malesuada ut, pulvinar in eros. Nunc at enim
          scelerisque, ullamcorper magna quis, scelerisque eros. In ac semper
          dolor.
        </Typography>
      </Box>
      <Box marginY={10}>
        <Typography textAlign="justify">
          Quisque a gravida quam. Nunc sollicitudin, neque et venenatis varius,
          ligula dolor ornare nibh, nec malesuada massa nibh in dui. Suspendisse
          nec maximus tortor. Suspendisse potenti. Aenean aliquet elit velit, at
          suscipit mauris consequat in. Nulla sollicitudin enim sed mi sagittis,
          eleifend congue eros dignissim. Phasellus vitae lacus convallis,
          placerat nisl a, ultricies justo. Suspendisse potenti. Proin finibus
          consectetur elit, nec maximus ex lobortis ut.
        </Typography>
      </Box>

      <Box marginY={10}>
        <Typography textAlign="justify">
          Donec eleifend felis massa, in venenatis lorem vestibulum id. Donec
          accumsan efficitur vestibulum. Morbi eu scelerisque dui. Vestibulum ut
          rutrum ligula. Proin blandit ultrices nisl, ac fermentum felis euismod
          non. Proin gravida vestibulum nibh, non mattis sem posuere non.
          Curabitur vehicula vehicula risus. Curabitur commodo ac odio id
          eleifend. Nulla interdum purus vel eros venenatis venenatis. Duis a
          rutrum est, eget finibus ipsum. Morbi pellentesque lectus eros, vel
          mattis felis semper eu. Cras at purus sed nunc sagittis pulvinar ac ut
          velit.
        </Typography>
      </Box>
    </ScrollView>
  );
};

export default Portfolio;
