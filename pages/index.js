import Head from 'next/head';
import MainBanner from '../components/MainBanner/MainBanner';
import Production from '../components/Production/Production';

export default function Home() {
  return (
    <div>
      <Head>
        <title>Производство товарного бетона и ЖБИ в Твери — СК «Бетогор»</title>
        <meta name="description" content="" />
        {/* <link rel="icon" href="/favicon.ico" /> */}
      </Head>
      <header className="hero-section bg-primary">
        <MainBanner title='Производство товарного бетона и ЖБИ' />
        <Production title='Наша продукция' />
      </header>
    </div>
  )
}
