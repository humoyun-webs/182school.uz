import React from 'react';
import './news.scss';

//components
import Header from '../../components/header/header';
import Teachers from '../../components/teachers/teachers';
import Footer from '../../components/footer/footer';

function News() {
  return (
    <div className='news__page'>
      <header>
        <Header />
      </header>

      <main className='news__main'>
        <section>
          <div className='contact__main__heading'>
            <h2>Новости школы</h2>
          </div>
        </section>

        <section>
          <Teachers />
        </section>
      </main>

      <footer>
        <Footer />
      </footer>
    </div>
  );
}

export default News;
