import { Html, Head, Main, NextScript } from 'next/document';
import Script from 'next/script';
import { useEffect } from 'react';

export default function Document() {
  useEffect(() => {
    const overlay = document.getElementsByClassName('loading-overlay')[0]; 
    overlay.remove();
    console.log(overlay)
    document.body.classList.remove('loading');
  }, []);

  return (
    <Html>
      <Head />
      <body /* className="loading" */>
        {/* <div className="loading-overlay">
          <span className="loader">
            <span className="loader-inner"></span>
          </span>
        </div> */}
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
        <Script 
          src="//cdnjs.cloudflare.com/ajax/libs/Swiper/4.2.6/js/swiper.min.js" 
          strategy="beforeInteractive" />
      </body>
    </Html>
  )
}