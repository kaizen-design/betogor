const ProductionTable = ({ data }) => {  
  return (
    <div className="table-section">
      <table className="table price-table">
        <thead>
          <tr>
            <td>Марка</td>
            <td colSpan="2">Цена, П2-П4</td>
          </tr>
        </thead>
        <tbody>
          {data.map(({ category }) => {            
            return (
              <>
                <HeadingRow key={category.id} title={category.title} />                
                {category.products.map(product => 
                  <ProductRow key={product.id} product={product} />                    
                )}
              </>  
            )
          })}
        </tbody>
      </table>
    </div> 
  )
}

const HeadingRow = ({ title }) => {
  return (
    <tr className="sub-heading text-center">
      <td colSpan="3">
        <span className="table-anchor" id="table-section-01"></span>
        <h4>{title}</h4>
      </td>
    </tr>
  )
}

const ProductRow = ({ product }) => {
  return (
    <tr>
      <td>{product.title}</td>
      <td>{product.price} <small>&#8381;</small> / м<sup>3</sup></td>
      <td><a className="btn-ens-action btn-ens-style" data-rel={product.id}>Купить</a></td>
    </tr>
  )
}

export default ProductionTable;