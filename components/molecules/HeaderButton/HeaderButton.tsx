import { Box, Button } from '@mui/material';
import Link from 'next/link';
import { animated, Spring } from 'react-spring';
import { Colors } from '../../../utils/Colors';

interface HeaderButtonInterface {
  text: string;
  enable: boolean;
  href: string;
}

function HeaderButton(buttonProps: HeaderButtonInterface) {
  const { href, text, enable } = buttonProps;

  return (
    <Spring
      from={{
        width: '0%',
        height: '2px',
        backgroundColor: Colors.HIGHLIGHT,
      }}
      to={{
        width: '100%',
        height: '2px',
        backgroundColor: Colors.ACCENT,
      }}
      config={{ duration: 400 }}
    >
      {(props) => (
        <Box>
          <Link href={href} key={text} passHref>
            <Button sx={{ color: 'text.primary' }}>{text}</Button>
          </Link>
          {enable && <animated.div style={props} id="underline" />}
        </Box>
      )}
    </Spring>
  );
}

export default HeaderButton;
