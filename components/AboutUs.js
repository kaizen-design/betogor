import Link from "next/link";

const AboutUs = ( props ) => {
  const newsSwiper = new Swiper ('#news-slider .swiper-container', {    
    slidesPerView: 1,
    spaceBetween: 30,    
    loop: true,
    autoHeight: true,
    navigation: {
      nextEl: '#news-slider .swiper-button-next',
      prevEl: '#news-slider .swiper-button-prev',
    },
    pagination: {
      el: '#news-slider .swiper-pagination',
      type: 'bullets',
      clickable: true
    }
  });
  return (
    <section className="about-section position-relative"> 
      <div className="container">
        <div className="row">
          <div className="col-left col-xs-12 col-sm-6 bg-primary">
            <div id="news-slider" className="blog-widget">
              <h2 className="widget-title">Новости компании / Наши клиенты</h2>
              
              <div className="swiper-button-prev">
                <svg xmlns="http://www.w3.org/2000/svg" width="10.438" height="18.44" viewBox="0 0 10.438 18.44">                   
                  <path id="arrow_small_left" className="cls-1" d="M400.707,3485.29l-1.414,1.42-9-9,0.207-.21-0.207-.21,9-9,1.414,1.42-7.793,7.79Z" transform="translate(-390.281 -3468.28)"/>
                </svg>
              </div>
              <div className="swiper-button-next">
                <svg xmlns="http://www.w3.org/2000/svg" width="10.44" height="18.44" viewBox="0 0 10.44 18.44">                   
                  <path id="arrow_small_right" className="cls-1" d="M1526.71,3477.71l-9,9-1.42-1.42,7.8-7.79-7.8-7.79,1.42-1.42,9,9-0.21.21Z" transform="translate(-1516.28 -3468.28)"/>
                </svg>
              </div>
              
              <div className="swiper-container">                
                <div className="swiper-wrapper">   
                  {posts.map(post => {
                    return (
                      <div key={post.id} className="swiper-slide">
                        <PostCard post={post} />
                      </div>
                    )
                  })}
                </div>                
                <div className="swiper-pagination light"></div>
              </div>
              
            </div>
          </div>
          <div className="col-right col-xs-12 col-sm-6 bg-white">
            <article className="about-post">
              <h2>Несколько слов о нашем комбинате</h2>
              <p>Мы предлагаем разные марки бетона в Твери по наиболее выгодным ценам. Вся производимая продукция проходит контроль качества в лаборатории завода и соответствует государственным стандартам. Вся продукция проходит испытания и получает сертификат качества.</p>
              <p>Работая с любым клиентом, мы стараемся учитывать все условия поставки продукции, необходимые заказчику. При этом мы продаем по демократичным ценам качественный бетон, необходимый строительным организациям и частным лицам.</p>
              <div className="text-xs-center">
                <Link href="company/">
                  <a className="readmore-link color-red shifted-left">Подробнее о компании</a>
                </Link>                
              </div>
            </article>
          </div>
        </div>
      </div>
    </section>
  )
}

const PostCard = ({ post }) => {
  return (
    <article className="post-card">
      <h6 className="post-title">{post.title}</h6>
      <span className="post-date">{post.date}</span>
      <div className="post-img hvr-float">
        <img src={post.imageUrl} alt={post.title} />
      </div>
    </article>
  )
}

const posts = [
  {
    id: 1,
    title: 'Скидка 100₽ на любые марки юридическим лицам (от 100 кубов), и 200₽ физическим лицам (от 30 кубов).',
    date: 'Акция действует до 30.06.2020',
    imageUrl: '/tmp/blog-thumbnail.jpg'
  },
  {
    id: 2,
    title: 'ООО "ОлимпСитиСтрой"',
    date: 'Строительство суворовского военного училища',
    imageUrl: '/tmp/clients/client01.jpg'
  },
  {
    id: 3,
    title: 'ООО "Агропромстрой"',
    date: 'Строительство свинокомплекса, Ржев',
    imageUrl: '/tmp/clients/client02.jpg'
  },
  {
    id: 4,
    title: 'ООО "Микро ДСК"',
    date: 'Плита жилого дома, микрорайон Южный',
    imageUrl: '/tmp/clients/client03.jpg'
  },
  {
    id: 5,
    title: 'ООО "Развитие"',
    date: 'Фундаментная плита здания',
    imageUrl: '/tmp/clients/client04.jpg'
  },
  {
    id: 6,
    title: 'ООО "СтройКомплексМ"',
    date: 'Областной военкомат',
    imageUrl: '/tmp/clients/client05.jpg'
  }
]

export default AboutUs;