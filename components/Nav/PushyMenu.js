import Link from "next/link";
import sitemap from '../../sitemap.json';
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faVk,
  faInstagram
} from "@fortawesome/free-brands-svg-icons";

const PushyMenu = () => {
  return (
    <>      
      <nav className="pushy pushy-right"> 
        <ul className="pushy-menu list-unstyled mb-0">
          {sitemap.map(item => {
            return (
              <li key={item.id} className={item.submenu.length ? 'pushy-submenu' : 'pushy-link'}>
                <Link href={item.url}>
                  <a>{item.text}</a>
                </Link>
                <ul className="submenu">
                  {item.submenu.map(subitem => {
                    return (
                      <li key={subitem.id}>
                        <Link href={subitem.url}>
                          <a className="slide-effect">
                            <span data-hover={subitem.text}>{subitem.text}</span>
                          </a>
                        </Link>                        
                      </li>
                    )
                  })}                  
                </ul>
              </li>
            )
          })}          
          <li className="phone-number">+7 (4822) 302—888</li>
          <li style={{ margin: '20px 0', textAlign: 'center' }}>
            <a href="https://vk.com/skbetogor" target="_blank" rel="noreferrer" style={{ marginRight: '10px' }}>
              <FontAwesomeIcon icon={faVk} /> 
            </a>
            <a href="https://www.instagram.com/skbetogor69/" target="_blank" rel="noreferrer">
              <FontAwesomeIcon icon={faInstagram} />
            </a>
          </li>
        </ul>     
        <a className="close-btn pushy-link" href="#">
          <span className="close-icon">X</span>
        </a>
      </nav>
      <div className="site-overlay"></div>
    </>    
  )
}

export default PushyMenu;