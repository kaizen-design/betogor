const Contact = () => {
  return (
    <section className="contact-section position-relative"> 
      <div className="container">
        <div className="row">
          <div className="col-left bg-white col-xs-12 col-sm-6 col-md-5 col-lg-4 bg-white align-self-center">
            <div className="contact-widget">
              <h2 className="widget-title">Хотите задать вопрос?</h2>
              <p>Воспользуйтесь формой или свяжитесь с нами по&nbsp;контактным данным:</p>
              <ul className="contact-list">
                <li className="phone-icon">+7 (4822) 302—888</li>
                <li className="email-icon">
                  <a className="slide-effect" href="mailto:info@betogor.ru">
                    <span data-hover="info@betogor.ru">info@betogor.ru</span>
                  </a>
                </li>
              </ul>
            </div>
          </div>
          <div className="col-right col-xs-12 col-sm-6 col-md-7 col-lg-offset-1 bg-red md-shifted-top">
            <form id="send-message-form" className="contact-form" data-url="assets/php/mail.php">
              <fieldset className="entry-fieldset">
                <div className="form-group">
                  <input className="form-control" type="text" name="form_name" placeholder="Представтесь" required />
                  <span className="validation error hide">Заполните это поле</span>
                </div>
                <div className="form-group">
                  <input className="form-control" type="email" name="form_email" placeholder="Email или телефон" required />
                  <span className="validation error hide">Заполните это поле</span>
                </div>
                <div className="form-group">
                  <textarea className="form-control" name="form_text" placeholder="Сообщение" rows="3" required></textarea>
                </div>
                <div className="form-group text-center">
                  <button className="readmore-link" type="submit">Отправить</button>
                </div>
              </fieldset>
              <fieldset className="message-fieldset text-center hide">
                <h2>Спасибо!</h2>
                <p>Ваше сообщение отправлено, в ближайшее время мы&nbsp;свяжемся с вами.</p>
                <img src="/images/success-icon.png" alt="" />
              </fieldset>
            </form>
          </div>
        </div>
      </div>
    </section>
  )
}

export default Contact;