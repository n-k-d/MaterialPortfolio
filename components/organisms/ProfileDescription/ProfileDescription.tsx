import * as React from 'react';
import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import { Chip, Grid } from '@mui/material';
import { useTrail, a } from 'react-spring';
import AnimatedButton from '../../molecules/AnimatedButton';

type ProfileDescriptionType = {
  header: string;
  description: string[];
  tags?: string[];
};

function ProfileDescription({ description, header, tags = [] }: ProfileDescriptionType) {
  const [open] = React.useState(true);

  const trail = useTrail(description.length, {
    config: { mass: 5, tension: 2000, friction: 200 },
    opacity: open ? 1 : 0,
    x: open ? 0 : 20,
    height: open ? 50 : 0,
    from: { opacity: 0, x: 20, height: 0 },
  });

  return (
    <Box
      mt={2}
      sx={{
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'center',
        alignItems: 'center',
      }}
    >
      <AnimatedButton text={header} />
      <div style={{ marginRight: '10%', marginLeft: '10%' }}>
        {trail.map(({ x, height, ...rest }, index) => (
          <a.div
            key={description[index]}
            style={{
              ...rest,
              transform: x.to((x1) => `translate3d(0,${x1}px,0)`),
            }}
          >
            <a.div style={{ marginTop: 20 }}>
              <Typography variant="body1">{description[index]}</Typography>
            </a.div>
          </a.div>
        ))}
        {tags && (
          <Grid
            container
            spacing={1}
            sx={{
              marginTop: '20px',
              display: 'flex',
              justifyContent: 'center',
            }}
          >
            {tags?.map((item, i) => (
              <Grid item key={i}>
                <Chip label={item} />
              </Grid>
            ))}
          </Grid>
        )}
      </div>
    </Box>
  );
}

export default ProfileDescription;
