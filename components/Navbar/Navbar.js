

//import Logo from './images/logo.png';

const Navbar = () => {
  return (
    <nav className="topbar">
      <div className="container-fluid">
        <div className="logo">
          <img src="/images/logo.png" alt="Строительный комбинат «Бетогор»" />              
        </div>
        <ul className="nav">
          <li><a href="company/">О компании</a></li>
          <li className="has-dropdown">
            <a href="production/">Продукция</a>
            <ul className="dropdown">
              <li>
                <a href="#" className="slide-effect">
                  <span data-hover="Бетон">Бетон</span>
                </a>
              </li>
              <li>
                <a href="#" className="slide-effect">
                  <span data-hover="Песок / Щебень">Песок / Щебень</span>
                </a>
              </li>
              <li>
                <a href="#" className="slide-effect">
                  <span data-hover="Раствор">Раствор</span>
                </a>
              </li>
              <li>
                <a href="#" className="slide-effect">
                  <span data-hover="ЖБИ">ЖБИ</span>
                </a>
              </li>
            </ul> 
          </li>
          <li><a href="lab/">Лаборатория</a></li>
          <li><a href="delivery/">Доставка</a></li>
          <li><a href="contacts/">Контакты</a></li>
        </ul>
        <span className="contact-phone">+7 (4822) 302—888</span>
        <a href="https://vk.com/skbetogor" target="_blank" rel="noreferrer" style={{ margin: '0 10px', color: '#fff' }}><i className="fab fa-vk"></i></a>
        <a href="https://www.instagram.com/skbetogor69/" target="_blank" rel="noreferrer" style={{ color: '#fff' }}><i className="fab fa-instagram"></i></a>
        <a className="navicon hamburger-icon pushy-link" href="#">Меню</a>        
      </div>      
    </nav>
  )
}

const MessageBar = () => {
  return (
    <div className="message-bar">
      Доставка продукции осуществляется <strong>только</strong> на территории Тверской области.
    </div>
  )
}

export default Navbar;