import { Box, Grid, Chip, Typography } from '@mui/material';
import Link from 'next/link';
import { animated, Spring } from 'react-spring';

interface BlogPostCardType {
  title: string;
  slug: string;
  description: string;
  tags: string[];
}

function BlogPostCard(blogPostProps: BlogPostCardType) {
  const { title, description, tags, slug } = blogPostProps;

  return (
    <Spring
      from={{
        width: '0%',
        height: '2px',
        backgroundColor: 'red',
        marginTop: '0px',
      }}
      to={{
        width: '80%',
        height: '2px',
        backgroundColor: 'orange',
        marginTop: '5px',
      }}
      config={{ duration: 400 }}
    >
      {(props) => (
        <Link passHref href={`blog/${encodeURIComponent(slug)}`}>
          <Box sx={{ marginTop: '20px' }}>
            <Typography variant="h3" fontSize={25}>
              {title}
            </Typography>
            <animated.div style={props} id="underline" />
            <Typography variant="h5" fontSize={20} mt={2}>
              {description}
            </Typography>
            <Grid container spacing={1} sx={{ marginTop: '10px' }}>
              {tags.map((item, i) => (
                <Grid item key={i}>
                  <Chip label={item} />
                </Grid>
              ))}
            </Grid>
          </Box>
        </Link>
      )}
    </Spring>
  );
}

export default BlogPostCard;
