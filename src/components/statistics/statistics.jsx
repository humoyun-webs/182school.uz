import React from 'react';
import './style.scss';
import { useSpring, animated } from 'react-spring';
import AOS from 'aos';
import 'aos/dist/aos.css';
import { useEffect } from 'react';

function Statistics() {
  function Number({ n }) {
    const { number } = useSpring({
      from: { number: 0 },
      number: n,
      delay: 200,
      config: { mass: 1, tension: 20, friction: 10 },
    });
    return (
      <animated.div className='animatedDiv'>{number.to(n => n.toFixed(0))}</animated.div>
    );
  }

  useEffect(() => {
    AOS.init();
  });

  return (
    <>
      <div className='StatisticsPart'>
        <div className='container'>
          <div className='StatCardsWrapper'>
            <div
              className='StatCard'
              data-aos='flip-down'
              data-aos-duration='1000'
              data-aos-delay='50'
            >
              <strong className='StatNumber'>
                <Number n={60} />+
              </strong>
              <p className='StatType'>высококволифицированных учителей</p>
            </div>
            <div
              className='StatCard'
              data-aos='flip-down'
              data-aos-duration='1000'
              data-aos-delay='50'
            >
              <strong className='StatNumber'>
                <Number n={700} />+
              </strong>
              <p className='StatType'>учеников</p>
            </div>
            <div
              className='StatCard'
              data-aos='flip-down'
              data-aos-duration='1000'
              data-aos-delay='50'
            >
              <strong className='StatNumber'>
                <Number n={25} />
              </strong>
              <p className='StatType'>призер олимпиад</p>
            </div>
            <div
              className='StatCard'
              data-aos='flip-down'
              data-aos-duration='1000'
              data-aos-delay='50'
            >
              <strong className='StatNumber'>
                <Number n={99} />%
              </strong>
              <p className='StatType'>Довольных родителей</p>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default Statistics;
