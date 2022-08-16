import Head from 'next/head';
import Navbar from '../components/Navbar';
import MainBanner from '../components/MainBanner';
import Production from '../components/Production';
import Benefits from '../components/Benefits';
import AboutUs from '../components/AboutUs';
import Lab from '../components/Lab';
import Contact from '../components/Contact';

export default function Home() {
  return (
    <div>
      <Head>
        <title>Производство товарного бетона и ЖБИ в Твери — СК «Бетогор»</title>
        <meta name="description" content="" />
        {/* <link rel="icon" href="/favicon.ico" /> */}
      </Head>
      <header className="hero-section bg-primary">
        <Navbar isHome={true} />
        <MainBanner title='Производство товарного бетона и ЖБИ' />
        <Production title='Наша продукция' />        
      </header>
      <Benefits title='Строительный комбинат «Бетогор» — надежный поставщик бетона Тверского региона' />
      <AboutUs />
      <Lab title="Собственная аккредитованная лаборатория" />
      <Contact />
    </div>
  )
}
