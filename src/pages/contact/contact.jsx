import React from 'react';
import './contact.scss';

//components
import Header from '../../components/header/header';
import ContactForm from '../../components/form/form';

function Contact() {
  return (
    <div className='contact__page'>
      <header>
        <Header />
      </header>

      <main className='contact__main'>
        <section>
          <div className='contact__main__heading'>
            <h2>182 -школа осуществляет свою трудовую деятельность:</h2>
          </div>
          <div className='container'>
            <div className='contact__info'>
              <div className='contact__info__map'>
                <h2>Карта проезда</h2>
                <iframe
                  src='https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2997.932978980963!2d69.21101131526083!3d41.28856307927345!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x38ae8a368a87cc75%3A0xc2e1801138fccf5c!2z0KjQutC-0LvQsCDihJYxODI!5e0!3m2!1sru!2s!4v1677691967467!5m2!1sru!2s'
                  height='400'
                  width='600'
                  style={{ border: 0 }}
                  allowFullScreen=''
                  loading='lazy'
                  referrerPolicy='no-referrer-when-downgrade'
                ></iframe>
              </div>
              <div className='contact__info__map'>
                <h2>Контактная информация</h2>
                <ul className='contact__info__list'>
                  <li className='contact__info__list__item'>
                    Manzil: г. Ташкент, Мирабадский район, проспект Амира темура 33
                  </li>
                  <li className='contact__info__list__item'>Tel: + 998 99 999 99 99</li>
                  <li className='contact__info__list__item'>Telegram: @school_182</li>
                  <li className='contact__info__list__item'>Instagram: @school_182</li>
                </ul>
              </div>
            </div>
          </div>
        </section>

        <section>
          <ContactForm />
        </section>
      </main>
    </div>
  );
}

export default Contact;
