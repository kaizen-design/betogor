import { Html, Head, Main, NextScript } from 'next/document';
import Script from 'next/script';

export default function Document() {
  return (
    <Html>
      <Head />
      <body>
        <Main />
        <NextScript />
        <Script
          src="//code.jquery.com/jquery-3.3.1.min.js"
          strategy="beforeInteractive"
        ></Script>
        <Script
          src="//cdnjs.cloudflare.com/ajax/libs/pushy/1.0.0/js/pushy.min.js"
          strategy="beforeInteractive"
        ></Script>
      </body>
    </Html>
  )
}