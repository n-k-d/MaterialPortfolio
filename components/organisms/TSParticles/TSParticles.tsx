import React from 'react';
import Particles from 'react-tsparticles';
import { ColorModeContext } from '../../../context/MUIThemeProvider';
import { Colors } from '../../../utils/Colors';

function TSParticles() {
  const theme = React.useContext(ColorModeContext);

  const color = theme.mode === 'dark' ? Colors.PARTICLES_DARK : Colors.PARTICLES_LIGHT;

  return (
    <Particles
      id="tsparticles"
      options={{
        fullScreen: {
          zIndex: -1,
        },
        interactivity: {
          events: {
            onClick: {
              enable: true,
              mode: 'repulse',
            },
            onHover: {
              enable: true,
              mode: 'bubble',
            },
          },
          modes: {
            bubble: {
              distance: 250,
              duration: 2,
              opacity: 0,
              size: 0,
            },
            grab: {
              distance: 400,
            },
            repulse: {
              distance: 400,
            },
          },
        },
        particles: {
          color: {
            value: color,
          },
          links: {
            color: {
              value: color,
            },
            distance: 150,
            opacity: 0.4,
          },
          move: {
            attract: {
              rotate: {
                x: 600,
                y: 600,
              },
            },
            enable: true,
            outModes: 'out',
            random: true,
            speed: 1,
          },
          number: {
            density: {
              enable: true,
            },
            value: 40,
          },
          opacity: {
            random: true,
            value: {
              min: 0,
              max: 1,
            },
            animation: {
              enable: true,
              speed: 1,
              minimumValue: 0,
            },
          },
          size: {
            random: true,
            value: {
              min: 1,
              max: 3,
            },
            animation: {
              speed: 4,
              minimumValue: 0.3,
            },
          },
        },
      }}
    />
  );
}

export default TSParticles;
