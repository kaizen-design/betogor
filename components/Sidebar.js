const Sidebar = (props) => {
  return (
    <aside className="sidebar col-md-4 visible-md">
      <div className="affix">
        <div className="affix-inner">
          <ul className="side-nav">
            <li className="active">
              <a href="#section-01" className="slide-effect">
                <span data-hover="О нас">О нас</span>
              </a>
            </li>            
          </ul>
        </div>
      </div>
    </aside>
  )
}

export default Sidebar;