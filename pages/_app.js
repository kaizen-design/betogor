import '../styles/app.scss';
import Navbar from '../components/Navbar/Navbar';
import Footer from '../components/footer/Footer';

function MyApp({ Component, pageProps }) {
  return (
    <div id="main-container" className="page-wrap">
      <Navbar />
      <Component {...pageProps} />
      <Footer />
    </div>  
  )  
}

export default MyApp;
