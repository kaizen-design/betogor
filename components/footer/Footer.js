const Footer = () => {
  return (
    <footer className="site-footer">  
      <div className="container">
        <div className="row">         
          <div className="col-xs-6 col-sm-4 col-md-3">
            <ul className="menu">
              <li>
                <a className="slide-effect" href="company/">
                  <span data-hover="О компании">О компании</span>
                </a>
              </li>
              <li>
                <a className="slide-effect" href="lab/">
                  <span data-hover="Лаборатория">Лаборатория</span>
                </a>
              </li>
              <li>
                <a className="slide-effect" href="delivery/">
                  <span data-hover="Доставка">Доставка</span>
                </a>
              </li>
              <li>
                <a className="slide-effect" href="contacts/">
                  <span data-hover="Контакты">Контакты</span>
                </a>
              </li>
            </ul>
          </div>
          <div className="col-xs-6 col-sm-4 col-md-3">
            <ul className="menu">
              <li>
                <a href="production/#table-section-01" className="slide-effect">
                  <span data-hover="Бетон">Бетон</span>
                </a>
              </li>
              {/* <li>
                <a href="production/" className="slide-effect">
                  <span data-hover="Песок / Щебень">Песок / Щебень</span>
                </a>
              </li> */}
              <li>
                <a href="production/#table-section-02" className="slide-effect">
                  <span data-hover="Раствор">Раствор</span>
                </a>
              </li>
              <li>
                <a href="production/#table-section-04" className="slide-effect">
                  <span data-hover="ЖБИ">ЖБИ</span>
                </a>
              </li>
            </ul>
          </div>
          <div className="col-xs-12 col-sm-4 col-md-3">
            <ul className="address-list">
              <li>
                <small className="address-label">Телефон</small>
                <b>+7&nbsp;(4822)&nbsp;302—888</b>
              </li>
              <li>
                <small className="address-label">Адрес <a className="address-icon tooltip" href="contacts/" title="Показать на карте"><img src="/images/address.svg" alt="Показать на карте" /></a></small>
                г.&nbsp;Тверь, д.&nbsp;Боровлево, зд.&nbsp;16             
              </li>
              <li>
                <small className="address-label">Email</small>
                <a className="slide-effect" href="mailto:info@betogor.ru">
                  <span data-hover="info@betogor.ru">info@betogor.ru</span>
                </a>
              </li>
              <li>
                  <a href="https://vk.com/skbetogor" target="_blank" rel="noreferrer" style={{ marginRight: '10px' }}><i className="fab fa-2x fa-vk"></i></a>
                  <a href="https://www.instagram.com/skbetogor69/" target="_blank" rel="noreferrer"><i className="fab fa-2x fa-instagram"></i></a>
              </li>
            </ul>
          </div>
          <div className="col-xs-12 col-md-3 first-md hidden-sm-only">
            <div className="copyright">
              <p>Строительный комбинат «Бетогор»</p>
              <small>Все права защищены</small>
            </div>
            <small className="dev-credits">Разработка сайта<span className="hidden-xs"> — </span><br /><a className="slide-effect" href="//kaizen-design.ru" target="_blank" rel="noreferrer"><span data-hover="kaizen-design.ru">kaizen-design.ru</span></a></small>
          </div>
        </div>
      </div>
    </footer>
  )
}

export default Footer;