import '../styles/app.scss';

import "@fortawesome/fontawesome-svg-core/styles.css";
import { config } from "@fortawesome/fontawesome-svg-core";
config.autoAddCss = false;

import Navbar from '../components/Nav/Navbar';
import PushyMenu from '../components/Nav/PushyMenu';
import Footer from '../components/Footer/Footer';

function MyApp({ Component, pageProps }) {  
  return (
    <>
      <PushyMenu />
      <div id="main-container" className="page-wrap">
        <Navbar />
        <Component {...pageProps} />
        <Footer />
      </div>  
    </>    
  )  
}

export default MyApp;
