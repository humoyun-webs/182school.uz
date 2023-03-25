import React from 'react';
import SchoolNews from '../../database/News.json';
import './style.scss';
import AOS from 'aos';
import 'aos/dist/aos.css';
import { useEffect } from 'react';
import { NavLink } from 'react-router-dom';

function News() {
  const ShortNews = SchoolNews.reverse().slice(0, 4);
  useEffect(() => {
    AOS.init();
  });

  return (
    <>
      <div className='newsPart'>
        <div className='container'>
          <h2 className='NewsHeading'>Новости школы</h2>
          <div className='newsGridContainer'>
            {ShortNews.map(e => {
              return (
                <NavLink
                  to='/news'
                  className='newsCard'
                  key={e.id}
                  data-aos='fade-down'
                  data-aos-duration='1000'
                  data-aos-delay='50'
                >
                  <img src={e.img} className='newsImage' alt='' />
                  <strong className='Eventname'>{e.event}</strong>
                </NavLink>
              );
            })}
          </div>
          <NavLink className='more' to='/news'>
            More
          </NavLink>
        </div>
      </div>
    </>
  );
}

export default News;
