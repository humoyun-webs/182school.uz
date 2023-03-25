import React from 'react';
import AOS from 'aos';
import 'aos/dist/aos.css';
import Teachers from '../../database/Teachers.json';
import TeacherPhoto from '../../assets/images/teacherphoto.jpg';
import { useEffect } from 'react';
import './style.scss';
import { NavLink } from 'react-router-dom';

function Teachres() {
  const ShortData = Teachers.slice(0, 6);

  useEffect(() => {
    AOS.init();
  });
  return (
    <>
      <div className='TeachersPart'>
        <div className='container'>
          <h2 className='TeachersHeaidng'>Лучшие учителя школы</h2>
          <div className='Teacherscards'>
            {ShortData.map(e => {
              return (
                <div
                  className='TeachersData'
                  key={e.id}
                  data-aos='fade-left'
                  data-aos-duration='1000'
                  data-aos-delay='50'
                >
                  <img className='TeacherPhoto' src={TeacherPhoto} alt='' />
                  <div className='TeacherSub'>
                    <h3 className='TeacherName'>{e.TeacherName}</h3>
                    <p className='Job'>{e.Job}</p>
                  </div>
                </div>
              );
            })}
          </div>
          <NavLink className='more'>More</NavLink>
        </div>
      </div>
    </>
  );
}

export default Teachres;
