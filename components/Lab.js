import Link from "next/link";
import { useEffect } from "react";

const Lab = ( props ) => {  
  useEffect(() => {
    const labSwiper = new Swiper ('#lab-slider .swiper-container', {          
      slidesPerView: 2,
      spaceBetween: 30,    
      loop: true,
      navigation: {
        nextEl: '#lab-slider .swiper-button-next',
        prevEl: '#lab-slider .swiper-button-prev',
      },
      pagination: {
        el: '#lab-slider .swiper-pagination',
        type: 'bullets',
        clickable: true
      },
      preloadImages: false,    
      lazy: true,    
      breakpoints: {            
        480: {
          slidesPerView: 1
        }
      }
    });  
  }, []);
  return (
    <section className="lab-section"> 
      <div className="container">
        <div className="row center-md">
          <div className="col-xs-12 col-md-10">
            <h2 className="section-title text-sm-center">{props.title}</h2>
            <ul className="check-list row between-sm">  
              {labFeatures.map(item => {
                return (
                  <li key={item.id} className="col-xs-12 col-sm">
                    <div className="check-icon" dangerouslySetInnerHTML={{ __html: item.text }}></div>
                  </li>
                )
              })}              
            </ul>
            <div id="lab-slider" className="image-slider"> 
              <div className="swiper-container">                
                <div className="swiper-wrapper">   
                  {labGallery.map(slide => {
                    return (
                      <div key={slide.id} className="swiper-slide">
                        <a className="fancybox hvr-float" href="#"> 
                          <img className="swiper-lazy" data-src={slide.imageUrl} alt={slide.altText} />
                          <span className="swiper-lazy-preloader"></span>
                        </a>
                      </div>
                    )
                  })}                  
                </div>                
                <div className="swiper-pagination"></div>
              </div>              
              <div className="swiper-button-prev">
                <img src="/images/arrows/arrow_small_left.svg" alt="Previous" />
              </div>
              <div className="swiper-button-next">
                <img src="/images/arrows/arrow_small_right.svg" alt="Next" />
              </div>
            </div>

            <div className="text-center">
              <Link href="lab/">
                <a className="readmore-link color-red">Подробнее о лаборатории</a>
              </Link>              
            </div>

          </div>
        </div>
      </div>
    </section>
  )
}

const labFeatures = [
  {
    id: 1,
    text: 'Определение прочности<br /> бетона'
  },
  {
    id: 2,
    text: 'Контроль материалов<br /> (цемент, щебень, песок)'
  },
  {
    id: 3,
    text: 'Контроль качества ЖБИ'
  }
]

const labGallery = [
  {
    id: 1,
    imageUrl: '/tmp/lab/lab01.jpg',
    altText: 'Собственная аккредитованная лаборатория'
  },
  {
    id: 2,
    imageUrl: '/tmp/lab/lab02.jpg',
    altText: 'Собственная аккредитованная лаборатория'
  },
  {
    id: 3,
    imageUrl: '/tmp/lab/lab03.jpg',
    altText: 'Собственная аккредитованная лаборатория'
  },
  {
    id: 4,
    imageUrl: '/tmp/lab/lab04.jpg',
    altText: 'Собственная аккредитованная лаборатория'
  },
  {
    id: 5,
    imageUrl: '/tmp/lab/lab05.jpg',
    altText: 'Собственная аккредитованная лаборатория'
  },
  {
    id: 6,
    imageUrl: '/tmp/lab/lab06.jpg',
    altText: 'Собственная аккредитованная лаборатория'
  }
]

export default Lab;