import Head from 'next/head';
import Navbar from '../../components/Navbar';
import PageHeading from '../../components/PageHeading';
import ProductionTable from '../../components/ProductionTable';
import products from './products.json';
import CTA from '../../components/CTA';

const Production = () => {
  return (
    <div>
      <Head>
        <title>О компании — СК «Бетогор»</title>
        <meta name="description" content="" />        
      </Head>
      <header className="hero-section bg-primary">
        <Navbar />   
        <PageHeading title="Продукция">
          <ProductionTable data={products} />
        </PageHeading>     
      </header>      
      <CTA />  
    </div>
  )
}

export default Production;