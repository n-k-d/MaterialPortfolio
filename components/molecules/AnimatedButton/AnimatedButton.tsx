import { Box, Typography } from '@mui/material';
import { animated, Spring } from 'react-spring';
import { Colors } from '../../../utils/Colors';

type AnimatedButtonType = {
  text: string;
};

function AnimatedButton({ text }: AnimatedButtonType) {
  return (
    <Spring
      from={{
        width: '0%',
        height: '2px',
        backgroundColor: Colors.HIGHLIGHT,
        marginTop: '0px',
      }}
      to={{
        width: '100%',
        height: '2px',
        backgroundColor: Colors.ACCENT,
        marginTop: '5px',
      }}
      config={{ duration: 400 }}
    >
      {(props) => (
        <Box sx={{ marginTop: '20px' }}>
          <Typography variant="h5">{text}</Typography>
          <animated.div style={props} id="underline" />
        </Box>
      )}
    </Spring>
  );
}

export default AnimatedButton;
