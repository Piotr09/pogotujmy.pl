import type { AppProps } from 'next/app'
import Head from 'next/head'
import React, { FC } from 'react'
import GlobalStyle from '@styles/GlobalStyle'
import ThemeProvider from '@styles/ThemeProvider'
import Layout from '@organisms/Layout/Layout'
import Script from 'next/script'


const App: FC<AppProps> = ({ Component, pageProps }: AppProps) => (
  <>
    {/*<html lang="pl" />*/}
    <Head>
      <meta name="viewport" content="width=device-width, initial-scale=1" />
    </Head>
    <Script
      src={`https://www.googletagmanager.com/gtag/js?id=G-7Y5VLJLD8V`}
      strategy="afterInteractive"
    />
    <Script id="google-analytics" strategy="afterInteractive">
      {`
        window.dataLayer = window.dataLayer || [];
        function gtag(){window.dataLayer.push(arguments);}
        gtag('js', new Date());
        gtag('config', 'G-7Y5VLJLD8V');
      `}
    </Script>
    <ThemeProvider>
      <Layout>
        <GlobalStyle />
        <Component {...pageProps} />
      </Layout>
    </ThemeProvider>
  </>
)

export default App
