import React from 'react';
import './style.scss';

const Map = () => {
  return (
    <>
      <div className='iframe'>
        <iframe
          src='https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2997.932978980963!2d69.21101131526083!3d41.28856307927345!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x38ae8a368a87cc75%3A0xc2e1801138fccf5c!2z0KjQutC-0LvQsCDihJYxODI!5e0!3m2!1sru!2s!4v1677691967467!5m2!1sru!2s'
          height='450'
          style={{ border: 0 }}
          allowFullScreen=''
          loading='lazy'
          referrerPolicy='no-referrer-when-downgrade'
        ></iframe>
      </div>
    </>
  );
};

export default Map;
