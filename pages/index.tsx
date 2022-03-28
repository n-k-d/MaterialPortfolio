import * as React from 'react';
import type { NextPage } from 'next';
import Container from '@mui/material/Container';
import Box from '@mui/material/Box';
import { Avatar, Fab, Typography } from '@mui/material';
import AnimatedButton from '../components/molecules/AnimatedButton/AnimatedButton';
import { ColorModeContext } from '../context/MUIThemeProvider';
import data from '../data/data.json';
import NavBar from '../components/organisms/NavBar';
import VerticalLinearStepper from '../components/organisms/VerticalLinearStepper';
import TSParticles from '../components/organisms/TSParticles';
import ProfileDescription from '../components/organisms/ProfileDescription';
import { DataParser } from '../utils/DataParser';
import SocialLinks from '../components/organisms/SocialLinks';
import EmailIcon from '@mui/icons-material/Email';
import { Colors } from '../utils/Colors';

const Home: NextPage = () => {
  const theme = React.useContext(ColorModeContext);
  const siteData = DataParser.getSiteData(JSON.stringify(data));

  return (
    <Container maxWidth="xl">
      <NavBar currentPage={0} />
      <Box
        sx={{
          mt: 10,
          display: 'flex',
          flexDirection: 'column',
          justifyContent: 'center',
          alignItems: 'center',
        }}
      >
        <Avatar
          alt={siteData.name}
          src={siteData.profileImage}
          sx={{ width: 156, height: 156, display: { xs: 'flex' } }}
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
        {siteData.steps.map((item, i) => (
          <Box
            key={i}
            mt={2}
            sx={{
              display: 'flex',
              flexDirection: 'column',
              justifyContent: 'center',
              alignItems: 'center',
            }}
          >
            <AnimatedButton text={item.title} />
            <Typography mt={1} variant="body1">
              {item.description}
            </Typography>
            <VerticalLinearStepper key={i} steps={item.data} />
          </Box>
        ))}
        <Typography mt={5} mb={1} variant="body1">
          {siteData.footer}
        </Typography>
        {siteData.contact && (
          <Fab
            onClick={() => (window.location = `mailto:${siteData.contact}`)}
            sx={{ position: 'fixed', bottom: 20, right: 20 }}
          >
            <EmailIcon />
          </Fab>
        )}
        {theme.animation && <TSParticles />}
      </Box>
    </Container>
  );
};

export default Home;
