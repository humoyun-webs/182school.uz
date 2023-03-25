import React from 'react';
import './admins.scss';

import Header from '../../components/header/header';
import Footer from '../../components/footer/footer';
import Adminstrations from '../../components/administration/administration';

function Admins() {
  return (
    <div className='admins__page'>
      <header>
        <Header />
      </header>

      <main className='admins__main'>
        <section>
          <div className='contact__main__heading'>
            <h2>Администрация школы</h2>
          </div>
        </section>

        <section>
          <Adminstrations />
        </section>
      </main>

      <footer>
        <Footer />
      </footer>
    </div>
  );
}

export default Admins;
