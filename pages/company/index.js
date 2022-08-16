import Head from 'next/head';
import Navbar from '../../components/Navbar';
import PageHeading from '../../components/PageHeading';
import Sidebar from '../../components/Sidebar';
import Content from '../../components/Content';
import CTA from '../../components/CTA';

export default function Company () {
  return (
    <div>
      <Head>
        <title>Продукция / Цены на бетон — СК «Бетогор»</title>
        <meta name="description" content="" />
        {/* <link rel="icon" href="/favicon.ico" /> */}
      </Head>
      <header className="hero-section bg-primary">
        <Navbar />   
        <PageHeading title="О компании" />         
      </header>      
      <main className="affix-content position-relative">
        <div className="container">
          <div className="row">
            <Sidebar />
            <Content />
          </div>
        </div>
      </main>  
      <CTA />  
    </div>
  )
}