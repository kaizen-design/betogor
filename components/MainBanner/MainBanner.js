const MainBanner = () => {
  return (
    <section className="main-banner">
      <div className="container">
        <div className="row middle-xs"> 
          <div className="col-xs-12 col-sm-6">
            <h1>Производство товарного бетона и ЖБИ</h1>
          </div>
          <div className="col-xs-12 col-sm-6 visible-sm">
            <ul className="check-list white size-lg"> 
              <li className="check-icon">Гарантия</li>
              <li className="check-icon">Надежность</li>
              <li className="check-icon">100% качество</li>
            </ul>
          </div>
        </div>
        <ul className="icon-list row">  
          <li className="col-xs-12 col-sm-4">
            <i className="icon"><img src="/images/benefits_first-display/1.svg" alt="" /></i>
            На 1 месте качество продукции
          </li>
          <li className="col-xs-12 col-sm-4">
            <i className="icon"><img src="/images/benefits_first-display/2.svg" alt="" /></i>
            Производительность завода:<br /> 120 м<sup>3</sup> товарного бетона в час,<br /> до 1000 м<sup>3</sup> за смену
          </li>
          <li className="col-xs-12 col-sm-4">
            <i className="icon"><img src="/images/benefits_first-display/3.svg" alt="" /></i>
            Продукция всегда в наличии
          </li>
        </ul>
      </div>
    </section> 
  )
}

export default MainBanner;