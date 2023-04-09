import React from 'react';
import Box from '../../../../../shared/components/Box';
import BlogItem from './BlogItem';
import {mockBlogItems} from './mock';

const Blog = () => {
  return (
    <Box
      display="flex"
      flexDirection="row"
      justifyContent="space-between"
      height={215}
      paddingY={10}
      paddingX={20}
      flexWrap="wrap">
      {mockBlogItems.map(
        (item, i) => (
          <Box
            display="flex"
            alignItems={i % 2 === 0 ? 'flex-start' : 'flex-end'}
            width="50%"
            key={item.id}
            marginBottom={10}>
            <BlogItem title={item.title} />
          </Box>
        ),
        [],
      )}
    </Box>
  );
};

export default Blog;
