const Benefits = ( props ) => {
  return (
    <section className="benefits-section position-relative">  
      <div className="container">
        <div className="row bottom-xs">
          <div className="col-right col-xs-12 col-sm-3 col-md-6 last-sm">
            <div className="betogor-info position-relative">
              <span className="section-label">Преимущества</span>
              <img className="logo" src="/images/mark.svg" alt="Строительный комбинат «Бетогор»" />
              <h2 className="hidden-sm-only">{props.title}</h2>
            </div>
          </div>
          <div className="col-left col-xs-12 col-sm-9 col-md-6 bg-white">           
            <ul className="benefits-list">  
              {benefitsList.map(item => {
                return (
                  <li key={item.id}>  
                    <img className="icon" src={item.imageUrl} alt={item.title} />
                    {item.title}
                  </li>
                )
              })}              
            </ul>
          </div>
        </div>
      </div>
    </section>
  )
}

const benefitsList = [
  {
    id: 1,
    title: 'Собственная лаборатория, контролируем качество продукции',
    imageUrl: '/images/benefits/1.svg'
  },
  {
    id: 2,
    title: 'Имеется собственный парк специальной техники. Возможны беспрерывные поставки (в том числе в ночное время)',
    imageUrl: '/images/benefits/2.svg'
  },
  {
    id: 3,
    title: 'Внимательное отношение к заказчику, выезд специалиста на объект',
    imageUrl: '/images/benefits/3.svg'
  },
  {
    id: 4,
    title: 'Удобное расположение производства',
    imageUrl: '/images/benefits/4.svg'
  },
  {
    id: 5,
    title: 'Различные варианты оплаты',
    imageUrl: '/images/benefits/5.svg'
  },
  {
    id: 6,
    title: 'Гибкая система скидок для постоянных клиентов, специальные условия для строительных организаций',
    imageUrl: '/images/benefits/6.svg'
  }
]

export default Benefits;