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
            <Sidebar data={[
              {
                id: 1,
                title: 'О нас',
                href: '#section-01'
              }
            ]} />
            <Content data={`
              <h2>О нас<span id="section-01" class="scroll-anchor"></span></h2>
              <p class="lead">Основными направлениями деятельности компании «Бетогор» являются: производство, продажа товарного бетона, пескобетона, ЖБИ, доставка бетона до потребителя собственными автобетоносмесителями.</p>
              <p>Для производства бетона используются только сертифицированные компоненты. Компьютерное управление производством минимизирует человеческий фактор. Качество готовой продукции контролируется в лаборатории.</p>
              <p>Учитывая, что бетон — универсальный материал, который используется во всех отраслях строительства, производство работает без перерывов и выходных. Купить бетон, цена которого вас приятно удивит, можно в любое удобное время. Сегодня «Бетогор» готов обеспечить заказчику до 120 м<sup>3</sup> бетона в час и до 1000 м<sup>3</sup> за смену. Сделав заказ сейчас, уже через 2-3 часа вы принимаете бетон у себя на объекте. Скорости доставки также способствует удобное расположение производства в Твери.</p>
              <!--<hr>
              <h2>Галерея<span id="section-02" class="scroll-anchor"></span></h2>
              <h2>Сертификаты<span id="section-03" class="scroll-anchor"></span></h2>-->
            `} />
          </div>
        </div>
      </main>  
      <CTA />  
    </div>
  )
}