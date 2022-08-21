const Sidebar = ({ data }) => {
  return (
    <aside className="sidebar col-md-4 visible-md">
      <div className="affix">
        <div className="affix-inner">
          <ul className="side-nav">
            {data.map(item => {
              return (
                <li key={item.id}>
                  <a href={item.href} className="slide-effect">
                    <span data-hover={item.title}>{item.title}</span>
                  </a>
                </li>            
              )
            })}            
          </ul>
        </div>
      </div>
    </aside>
  )
}

export default Sidebar;