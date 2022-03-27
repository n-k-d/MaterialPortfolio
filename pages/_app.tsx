import Head from 'next/head';
import { AppProps } from 'next/app';
import CssBaseline from '@mui/material/CssBaseline';
import { CacheProvider, EmotionCache } from '@emotion/react';
import createEmotionCache from '../createEmotionCache';
import { PaletteMode } from '@mui/material';
import { MUIThemeProvider } from '../context/MUIThemeProvider';

// Client-side cache, shared for the whole session of the user in the browser.
const clientSideEmotionCache = createEmotionCache();

interface MyAppProps extends AppProps {
  emotionCache?: EmotionCache;
}

export default function MyApp(props: MyAppProps) {
  const { Component, emotionCache = clientSideEmotionCache, pageProps } = props;

  return (
    <CacheProvider value={emotionCache}>
      <Head>
        <meta name="viewport" content="initial-scale=1, width=device-width" />
      </Head>
      <MUIThemeProvider>
        <CssBaseline />
        <Component {...pageProps} />
      </MUIThemeProvider>
    </CacheProvider>
  );
}
function getDesignTokens(
  mode: PaletteMode
): import('@mui/material/styles').ThemeOptions | undefined {
  throw new Error('Function not implemented.');
}
