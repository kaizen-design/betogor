const Content = ({ data }) => {
  return (
    <section className="content-section col-xs-12 col-md-8" dangerouslySetInnerHTML={ {__html: data} }>              
    
    </section>
  )
}

export default Content;