import MotionPhotosOffOutlinedIcon from '@mui/icons-material/MotionPhotosOffOutlined';
import LightModeIcon from '@mui/icons-material/LightMode';
import DarkModeIcon from '@mui/icons-material/DarkMode';
import AnimationOutlinedIcon from '@mui/icons-material/AnimationOutlined';
import { Box, IconButton } from '@mui/material';

function ToggleButton({
  mode,
  animation,
  setAnimation,
  setMode,
}: {
  mode: string;
  animation: boolean;
  setAnimation: (arg0: boolean) => void;
  setMode: (arg0: 'dark' | 'light') => void;
}) {
  return (
    <Box>
      <IconButton
        component="span"
        onClick={() => {
          setAnimation(!animation);
        }}
      >
        {animation ? <MotionPhotosOffOutlinedIcon /> : <AnimationOutlinedIcon />}
      </IconButton>
      <IconButton
        component="span"
        onClick={() => {
          setMode(mode === 'dark' ? 'light' : 'dark');
        }}
      >
        {mode === 'light' ? <DarkModeIcon /> : <LightModeIcon />}
      </IconButton>
    </Box>
  );
}

export default ToggleButton;
