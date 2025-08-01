import { Html, Head, Main, NextScript } from "next/document";

export default function Document() {
  return (
    <Html lang="pl">
      <Head>
        {/* Favicony */}
        <link rel="apple-touch-startup-image" media="(device-width: 320px)" href="/apple-splash-640x1136.png" />
<link rel="apple-touch-startup-image" media="(device-width: 375px) and (device-height: 667px)" href="/apple-splash-750x1334.png" />
<link rel="apple-touch-startup-image" media="(device-width: 414px) and (device-height: 896px) and (-webkit-device-pixel-ratio: 2)" href="/apple-splash-828x1792.png" />
<link rel="apple-touch-startup-image" media="(device-width: 375px) and (device-height: 812px)" href="/apple-splash-1125x2436.png" />
<link rel="apple-touch-startup-image" media="(device-width: 390px) and (device-height: 844px)" href="/apple-splash-1170x2532.png" />
<link rel="apple-touch-startup-image" media="(device-width: 414px) and (device-height: 736px)" href="/apple-splash-1242x2208.png" />
<link rel="apple-touch-startup-image" media="(device-width: 414px) and (device-height: 896px) and (-webkit-device-pixel-ratio: 3)" href="/apple-splash-1242x2688.png" />
<link rel="apple-touch-startup-image" media="(device-width: 428px) and (device-height: 926px)" href="/apple-splash-1284x2778.png" />
<link rel="apple-touch-startup-image" media="(device-width: 360px) and (device-height: 780px)" href="/apple-splash-1080x2340.png" />
        <link rel="icon" href="/favicon.ico" />
        <link rel="apple-touch-icon" sizes="180x180" href="/apple-touch-icon.png" />
        <link rel="icon" type="image/png" sizes="32x32" href="/favicon-32x32.png" />
        <link rel="icon" type="image/png" sizes="16x16" href="/favicon-16x16.png" />
        <link rel="manifest" href="/site.webmanifest" />
        <meta name="theme-color" content="#ff0000" />
      </Head>
      <body>
        <Main />
        <NextScript />
      </body>
    </Html>
  );
}
