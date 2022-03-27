import { Typography } from '@mui/material';
import { useTrail, a } from 'react-spring';

type HeaderType = {
  open: boolean;
  children: any[];
};

function Header({ open, children, ...props }: HeaderType) {
  const items = children;
  const trail = useTrail(items.length, {
    config: { mass: 5, tension: 2000, friction: 200 },
    opacity: open ? 1 : 0,
    x: open ? 0 : 20,
    height: open ? 50 : 0,
    from: { opacity: 0, x: 20, height: 0 },
  });
  return (
    // eslint-disable-next-line react/jsx-props-no-spreading
    <div style={{ marginRight: '10%', marginLeft: '10%' }} className="trails-main" {...props}>
      <div>
        {trail.map(({ x, height, ...rest }, index) => (
          <a.div
            key={items[index]}
            style={{
              ...rest,
              transform: x.interpolate((x1) => `translate3d(0,${x1}px,0)`),
            }}
          >
            <a.div style={{ marginTop: 20 }}>
              <Typography variant="body1">{items[index]}</Typography>
            </a.div>
          </a.div>
        ))}
      </div>
    </div>
  );
}

export default Header;
