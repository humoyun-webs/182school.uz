import React from 'react';
import './style.scss';
import admins from '../../database/Administration.json';
import AOS from 'aos';
import 'aos/dist/aos.css';
import { useEffect } from 'react';

function Administration() {
  const shortAmdins = admins.slice(0, 6);
  useEffect(() => {
    AOS.init();
  });

  return (
    <>
      <div className='admins'>
        <div className='container'>
          <h2 className='section_heading'>Администрация школы</h2>
          <div className='adminsWrapper'>
            {shortAmdins.map(e => {
              return (
                <div
                  className='admin'
                  key={e.id}
                  data-aos='fade-right'
                  data-aos-duration='1000'
                  data-aos-delay='50'
                >
                  <img src={e.img} className='AdminPhoto' alt='' />
                  <div className='AdminSubs'>
                    <strong className='AdminName'>{e.name}</strong>
                    <p className='AdminPosition'>{e.position}</p>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </>
  );
}

export default Administration;
