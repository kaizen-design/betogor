import Link from "next/link";
import Image from "next/image";

const Production = ( props ) => {
  return (
    <section className="production-section">  
      <div className="container">
        <div className="row">
          <div className="col-xs-12 col-lg-3">
            <h2>{props.title}</h2>
            <Link href="production/">
              <a className="readmore slide-effect">
                <span data-hover="Узнать подробнее">Узнать подробнее</span> 
              </a>
            </Link>            
          </div>
          <div className="col-xs-12 col-lg-9">
            <div className="row lg-shifted-top">
              {productionItems.map(item => {
                return (
                  <div key={item.id} className="col-xs-6 col-sm-3">
                    <div className="product-card">
                      <div className="card-image hvr-float">  
                        <Link href={item.url}>
                          <a>
                            <img src={item.imageUrl} alt={item.title} /> 
                          </a>
                        </Link>                        
                      </div>
                      <h5 className="product-title">
                        <Link href={item.url}>
                          <a className="slide-effect">
                            <span data-hover={item.title}>{item.title}</span>
                          </a>  
                        </Link>  
                      </h5>
                      <span className="product-price" dangerouslySetInnerHTML={{ __html: item.price }}></span>
                    </div>
                  </div>
                )
              })}              
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

const productionItems = [
  {
    id: 1,
    title: 'Бетон (прайс)',
    imageUrl: '/tmp/production/card01.jpg',
    url: 'production/#table-section-01',
    price: 'от <b>4 500</b> <small>&#8381;</small>/м<sup>3</sup>'
  },
  {
    id: 2,
    title: 'Пескобетон (прайс)',
    imageUrl: '/tmp/production/card06.jpg',
    url: 'production/#table-section-03',
    price: 'от <b>3 950</b> <small>&#8381;</small>/м<sup>3</sup>'
  },
  {
    id: 3,
    title: 'Цементный раствор',
    imageUrl: '/tmp/production/card03.jpg',
    url: 'production/#table-section-02',
    price: 'от <b>4 050</b> <small>&#8381;</small>/м<sup>3</sup>'
  },
  {
    id: 4,
    title: 'ФБС (прайс)',
    imageUrl: '/tmp/production/card04.jpg',
    url: 'production/#table-section-04',
    price: ''
  },
  {
    id: 5,
    title: 'Автобетононасос',
    imageUrl: '/tmp/production/card09.jpg',
    url: 'concrete-pumps/',
    price: ''
  },
  {
    id: 6,
    title: 'Доставка (прайс)',
    imageUrl: '/tmp/production/card08.jpg',
    url: 'delivery/',
    price: ''
  },
  {
    id: 7,
    title: 'Лаборатория (прайс)',
    imageUrl: '/tmp/production/card05.jpg',
    url: 'lab/',
    price: ''
  }
]

export default Production;