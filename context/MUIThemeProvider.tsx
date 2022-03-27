import { createTheme, ThemeProvider } from '@mui/material';
import React from 'react';

export const ColorModeContext = React.createContext({
  mode: 'dark',
  setMode: (arg0: 'light' | 'dark') => {},
  animation: false,
  setAnimation: (arg0: boolean) => {},
});

export function MUIThemeProvider({ children }: { children: any }) {
  const [mode, setMode] = React.useState<'light' | 'dark'>('dark');
  const [animation, setAnimation] = React.useState<boolean>(true);

  const theme = React.useMemo(() => createTheme({ palette: { mode } }), [mode]);

  return (
    // eslint-disable-next-line react/jsx-no-constructed-context-values
    <ColorModeContext.Provider value={{ mode, setMode, animation, setAnimation }}>
      <ThemeProvider theme={theme}>{children}</ThemeProvider>
    </ColorModeContext.Provider>
  );
}
