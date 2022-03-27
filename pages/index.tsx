import * as React from 'react';
import type { NextPage } from 'next';
import Container from '@mui/material/Container';
import Box from '@mui/material/Box';
import { Avatar } from '@mui/material';
import AnimatedButton from '../components/molecules/AnimatedButton/AnimatedButton';
import { ColorModeContext } from '../context/MUIThemeProvider';
import data from '../data/data.json';
import NavBar from '../components/organisms/NavBar';
import VerticalLinearStepper from '../components/organisms/VerticalLinearStepper';
import TSParticles from '../components/organisms/TSParticles';
import ProfileDescription from '../components/organisms/ProfileDescription';
import { DataParser } from '../utils/DataParser';
import SocialLinks from '../components/organisms/SocialLinks';

const Home: NextPage = () => {
  const theme = React.useContext(ColorModeContext);
  const siteData = DataParser.getSiteData(JSON.stringify(data));

  return (
    <Container maxWidth="xl">
      <NavBar currentPage={0} />
      <Box
        sx={{
          my: 10,
          display: 'flex',
          flexDirection: 'column',
          justifyContent: 'center',
          alignItems: 'center',
        }}
      >
        <Avatar
          alt={siteData.name}
          src={siteData.profileImage}
          sx={{ width: 156, height: 156, display: { xs: 'none', md: 'flex' } }}
        />
        <SocialLinks
          facebook={siteData.facebook}
          instagram={siteData.instagram}
          twitter={siteData.twitter}
          github={siteData.github}
          linkedin={siteData.linkedin}
          stackoverflow={siteData.stackoverflow}
          devto={siteData.devto}
          medium={siteData.medium}
          dribble={siteData.dribble}
          youtube={siteData.youtube}
        />
        {siteData.description.map((item, i) => (
          <ProfileDescription
            key={i}
            header={item.title}
            description={item.description}
            tags={item.tags}
          />
        ))}
        <AnimatedButton text="Work Timeline" />
        <VerticalLinearStepper steps={siteData.steps.data} />
        {theme.animation && <TSParticles />}
      </Box>
    </Container>
  );
};

export default Home;
