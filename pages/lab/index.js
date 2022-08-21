import Head from 'next/head';
import Navbar from '../../components/Navbar';
import PageHeading from '../../components/PageHeading';
import Sidebar from '../../components/Sidebar';
import Content from '../../components/Content';
import CTA from '../../components/CTA';

const LabPage = () => {
  return (
    <div>
      <Head>
        <title>Строительная лаборатория — СК «Бетогор»</title>
        <meta name="description" content="" />
        {/* <link rel="icon" href="/favicon.ico" /> */}
      </Head>
      <header className="hero-section bg-primary">
        <Navbar />   
        <PageHeading title="Строительная лаборатория" />         
      </header>      
      <main className="affix-content position-relative">
        <div className="container">
          <div className="row">
            <Sidebar data={[
              {
                id: 1,
                title: 'Услуги',
                href: '#section-01'
              },
              {
                id: 2,
                title: 'Прайс лист',
                href: '#section-02'
              }
            ]} />
            <Content data={`
              <h2>Услуги лаборатории<span id="section-01" class="scroll-anchor"></span></h2>          
              <p>Всю продукцию строительного комбината «Бетогор» отличает высокое качество и большая заслуга в этом — собственная лаборатория.</p>
              <p>Лаборатория существует с момента основания завода. В ней проводится контроль качества бетонных смесей и строительных изделий. Проводится проверка на теплопроводность, морозостойкость, истираемость, дробимость, водонепроницаемость. Главной задачей лаборатории является повышение технологических характеристик бетона, его прочности, W, F, однородности, удобоукладываемости, долговечности. Здесь проводится огромная работа по выбору оптимальных и эффективных химических добавок.</p>
              <p>Лаборатория оснащена современными приборами по определению прочности, водонепроницаемости бетона и активности цемента. Продукция испытывается на соответствие качества Госстандартам и технической документации. Благодаря этому выпускаеая заводом продукция является качественной, экологически чистой и востребованной строительными организациями.</p>
              <!--<h3>Определение прочности бетона<span id="section-02" class="scroll-anchor"></span></h3>
              <h3>Контроль материалов (цемент, щебень, песок)<span id="section-03" class="scroll-anchor"></span></h3>             
              <h3>Контроль качества ЖБИ<span id="section-04" class="scroll-anchor"></span></h3>-->
              <h3>Прайс на выполнение лабораторных услуг<span id="section-02" class="scroll-anchor"></span></h3>
              <ul class="check-list">
                <li class="check-icon" style="margin-bottom: 20px">Определение удобоукладываемости, плотности, пористости, расслаиваемости бетонной смеси - <strong>1 проба - 5000 руб.</strong></li>
            	<li class="check-icon" style="margin-bottom: 20px">Определение эффективности добавок для растворов и бетонов - <strong>1 состав - 10000 руб.</strong></li>
            	<li class="check-icon" style="margin-bottom: 20px">Определение подвижности, плотности, расслаиваемости, водоудерживабщей способности растворной смеси, прочности на сжатие, влажности, водопоглощения - <strong>1 состав - 14000 руб.</strong></li>
            	<li class="check-icon" style="margin-bottom: 20px">Определения тонкости помола цемента - <strong>500 руб.</strong></li>
            	<li class="check-icon" style="margin-bottom: 20px">Определение нормальной густоты, сроков схватывания - <strong>2000 руб.</strong></li>
            	<li class="check-icon" style="margin-bottom: 20px">Определение предела прочности при  изгибе и сжатии - <strong>1 серия (2 образца) - 1000 руб.</strong></li>
            	<li class="check-icon" style="margin-bottom: 20px">Определение тепловыделения бетона/раствора - <strong>3000 руб.</strong></li>
            	<li class="check-icon" style="margin-bottom: 20px">Определение водоотделения бетона/раствора - <strong>3000 руб.</strong></li>
            	<li class="check-icon" style="margin-bottom: 20px">Определение растекаемости, плотности цементного теста, консистентности, времени загустевания, водоотделения - <strong>6000 руб.</strong></li>
            	<li class="check-icon" style="margin-bottom: 20px">Определение зернового состава песка, содержания пылевидных и глинистых частиц, содержания глины в комках - <strong>1 проба - 2000 руб.</strong></li>
            	<li class="check-icon" style="margin-bottom: 20px">Определение зернового состава щебня, содержания пылевидных и глинистых частиц, содержания глины в комках, дробимости, содержания зерен слабых пород, пористости, водопоглащения, влажности - <strong>1 проба - 5000 руб.</strong></li>
            	<li class="check-icon" style="margin-bottom: 20px">Определение марки по дробимости щебня - <strong>1500 руб.</strong></li>
            	<li class="check-icon" style="margin-bottom: 20px">Определение пористости, водопоглащения, влажности щебня - <strong>1 проба - 1600 руб.</strong></li>
            	<li class="check-icon" style="margin-bottom: 20px">Определение деформаций усадки и ползучести щебня - <strong>5000 руб.</strong></li>
            	<li class="check-icon" style="margin-bottom: 20px">Определение морозостойкости бетона (базовый способ, либо ускоренный) - <strong>1 цикл - 2000 руб.</strong></li>
            	<li class="check-icon" style="margin-bottom: 20px">Определение прочности бетона по образцам, отобранным из конструкции - <strong>1 серия - 1000 руб. + отбор: 3-х керн  - 6000 руб. 4-ая и посл. - 1000 руб.</strong></li>
            	<li class="check-icon" style="margin-bottom: 20px">Определение прочности бетона неразрушающим методом - <strong>до 10 точек - 3000 руб., 11-ая и посл. - 500 руб.</strong></li>
            	<li class="check-icon" style="margin-bottom: 20px">Определение толщины защитного слоя бетона и расположение арматуры в железобетонных конструкциях магнитным методом - <strong>8000 руб.</strong></li>
            	<li class="check-icon" style="margin-bottom: 20px">Определение водопоглащения, плотности, морозостойкости кирпича - <strong>1 цикл - 2000 руб.</strong></li>
            	<li class="check-icon" style="margin-bottom: 20px">Определение предела прочности при сжатии керамического, силикатного кирпича и камней, кладки каменной, стеновых камней бетонных и из горных пород и предела прочности при изгибе керамического и силикатного кирпича - <strong>1 серия - 1000 руб.</strong></li>
	            </ul>
            `} />
          </div>
        </div>
      </main>  
      <CTA />  
    </div>
  )
}

export default LabPage;