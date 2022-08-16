const PageHeading = (props) => {
  return (
    <div className="page-heading">
      <div className="container">
        <div className="row">
          <div className="col-xs-12 text-block">
            <h1 className="page-title">{props.title}</h1>    
          </div>
        </div>            
      </div>
    </div> 
  )
}

export default PageHeading;