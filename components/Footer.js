import Link from "next/link";
import sitemap from '../sitemap.json';
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faVk,
  faInstagram
} from "@fortawesome/free-brands-svg-icons";

const Footer = () => {
  return (
    <footer className="site-footer">  
      <div className="container">
        <div className="row">         
          <div className="col-xs-6 col-sm-4 col-md-3">
            <ul className="menu">
              {sitemap.map(
                item => <MenuItem key={item.id} item={item} />
              )}              
            </ul>
          </div>
          <div className="col-xs-6 col-sm-4 col-md-3">
            <ul className="menu">
              {sitemap.filter(item => item.text === 'Продукция').map(({ submenu }) => {                
                return submenu.map(
                  item => <MenuItem key={item.id} item={item} />
                )                
              })}              
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
                  <a href="https://vk.com/skbetogor" target="_blank" rel="noreferrer" style={{ marginRight: '10px' }}>
                    <FontAwesomeIcon icon={faVk} size="lg" />
                  </a>
                  <a href="https://www.instagram.com/skbetogor69/" target="_blank" rel="noreferrer">
                    <FontAwesomeIcon icon={faInstagram} size="lg" />
                  </a>
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

const MenuItem = ({ item }) => {
  return (
    <li>
      <Link href={item.url}>
        <a className="slide-effect">
          <span data-hover={item.text}>{item.text}</span>
        </a>  
      </Link>                    
    </li>
  )
}

export default Footer;