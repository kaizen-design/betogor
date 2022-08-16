
import { useEffect } from "react";
import Link from "next/link";
import sitemap from '../sitemap.json';
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faVk,
  faInstagram
} from "@fortawesome/free-brands-svg-icons";
import { useRouter } from 'next/router';

const Navbar = () => {
  useEffect(() => {
    const navbarToggle = () => {
      const topbar = document.getElementsByClassName('topbar')[0];
      topbar
        .classList[window.pageYOffset > 0 ? 'add' : 'remove']
        ('scrolled',  'bg-primary')      
    }    
    navbarToggle();
    window.addEventListener('scroll', navbarToggle, true);
  }, []);

  const router = useRouter();
  //console.log(router);

  return (
    <nav className="topbar">
      <div className="container-fluid">
        {
          router.pathname === '/' ? (            
            <div className="logo">
              <img src="/images/logo.png" alt="Строительный комбинат «Бетогор»" />              
            </div>            
          ) : (
            <Link href="/">
              <a className="logo">
                <img src="/images/logo.png" alt="Строительный комбинат «Бетогор»" />              
              </a>
            </Link> 
          )
        }
         
        <ul className="nav">
          {sitemap.map(item => {
            let itemClassNames = [];
            if (router.pathname === item.url) {
              itemClassNames.push('active');
            }
            if (item.submenu.length) {
              itemClassNames.push('has-dropdown');              
            }            
            return (
              <li key={item.id} className={itemClassNames.join(' ')}>
                <Link href={item.url}>
                  <a>{item.text}</a>
                </Link>                
                <ul className="dropdown">
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
        </ul>
        <span className="contact-phone">+7 (4822) 302—888</span>
        <a href="https://vk.com/skbetogor" target="_blank" rel="noreferrer" style={{ margin: '0 10px', color: '#fff' }}>
          <FontAwesomeIcon icon={faVk} size="lg" />
        </a>
        <a href="https://www.instagram.com/skbetogor69/" target="_blank" rel="noreferrer" style={{ color: '#fff' }}>
          <FontAwesomeIcon icon={faInstagram} size="lg" />
        </a>
        <a className="navicon hamburger-icon pushy-link" href="#">Меню</a>        
      </div>      
    </nav>
  )
}

const MessageBar = ( props ) => {
  return (
    <div className="message-bar" dangerouslySetInnerHTML={{ __html: props.text }}>      
      {/* Доставка продукции осуществляется <strong>только</strong> на территории Тверской области. */}
    </div>
  )
}

export default Navbar;