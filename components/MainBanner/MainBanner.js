import Image from "next/image";

const MainBanner = ({ title }) => {
  return (
    <section className="main-banner">
      <div className="container">
        <div className="row middle-xs"> 
          <div className="col-xs-12 col-sm-6">
            <h1>{title}</h1>
          </div>
          <div className="col-xs-12 col-sm-6 visible-sm">
            <ul className="check-list white size-lg"> 
              {featuresList.map(item => {
                return (
                  <li key={item.id} className="check-icon">{item.title}</li>                  
                )
              })}
            </ul>
          </div>
        </div>
        <ul className="icon-list row">
          {featuresList.map(item => {
            return (
              <li key={item.id} className="col-xs-12 col-sm-4">
                <i className="icon">
                  {/* <Image
                    src={item.imageUrl} 
                    height={70}
                    width={70}
                    alt={item.text.replace(/<[^>]*>?/gm, '')}
                  /> */}
                  <img src={item.imageUrl} alt={item.text.replace(/<[^>]*>?/gm, '')} />
                </i>
                <span dangerouslySetInnerHTML={{ __html: item.text }}></span>
              </li>
            )
          })}
        </ul>
      </div>
    </section> 
  )
}

const featuresList = [
  {
    id: 1,
    title: 'Гарантия',
    imageUrl: '/images/benefits_first-display/1.svg',
    text: 'На 1 месте качество продукции'
  },
  {
    id: 2,
    title: 'Надежность',
    imageUrl: '/images/benefits_first-display/2.svg',
    text: 'Производительность завода:<br /> 120 м<sup>3</sup> товарного бетона в час,<br /> до 1000 м<sup>3</sup> за смену'
  },
  {
    id: 3,
    title: '100% качество',
    imageUrl: '/images/benefits_first-display/3.svg',
    text: 'Продукция всегда в наличии'
  }
]

export default MainBanner;