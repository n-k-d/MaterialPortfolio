import * as React from 'react';
import Box from '@mui/material/Box';
import { ColorModeContext } from '../context/MUIThemeProvider';
import { getAllPosts, PostType } from '../lib/api';
import NavBar from '../components/organisms/NavBar';
import BlogPostCard from '../components/molecules/BlogPostCard';
import TSParticles from '../components/organisms/TSParticles';

interface Props {
  window?: () => Window;
  allPosts: PostType[];
}

export default function Blog(props: Props) {
  const theme = React.useContext(ColorModeContext);

  return (
    <Box sx={{ display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
      <NavBar currentPage={1} />
      <Box mt={{ xs: 1, md: 10 }} mr={{ xs: 6, md: 10 }} ml={{ xs: 6, md: 10 }} mb={10}>
        {props?.allPosts?.map((blog, i) => (
          <BlogPostCard
            key={i}
            title={blog.title}
            description={blog.excerpt}
            tags={blog.tags}
            slug={blog.slug}
          />
        ))}
      </Box>
      {theme.animation && <TSParticles />}
    </Box>
  );
}

export async function getStaticProps() {
  const allPosts = getAllPosts(['title', 'date', 'slug', 'tags', 'excerpt']);

  return {
    props: { allPosts },
  };
}
