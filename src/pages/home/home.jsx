import React from 'react';

//components
import Header from '../../components/header/header';
import Intro from '../../components/intro/intro';
import Administration from '../../components/administration/administration';
import News from '../../components/news/news';
import Statistics from '../../components/statistics/statistics';
import Teachres from '../../components/teachers/teachers';
import Students from '../../components/students/students';
import Form from '../../components/form/form';
import Map from '../../components/googlemap/map';
import Footer from '../../components/footer/footer';

function Home() {
  return (
    <div>
      <header>
        <Header />
      </header>

      <main>
        <Intro />
        <News />
        {/* <Administration /> */}
        <Statistics />
        {/* <Teachres /> */}
        {/* <Students /> */}
        <Form />
        <Map />
      </main>

      <footer>
        <Footer />
      </footer>
    </div>
  );
}

export default Home;
