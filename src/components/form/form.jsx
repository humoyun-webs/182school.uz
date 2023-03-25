import React from 'react';
import './style.scss';
import { useState } from 'react';

const Form = () => {
  const [value, setValue] = useState('');
  return (
    <div className='forms'>
      <div className='container'>
        <h1 className='blue sarlavha2' style={{ padding: '50px' }}>
          Есть какие-то вопросы ?
        </h1>
        <form action='Post'>
          <div className='inputs'>
            <div className='input'>
              <p>и.ф.о</p>
              <input
                type='text'
                placeholder='full name'
                onChange={e => {
                  setValue(e.target.value);
                }}
              />
            </div>
            <div className='input'>
              <p>номер телефона</p>
              <input type='number' placeholder='number' />
            </div>
            <div className='input'>
              <p>электронная почта</p>
              <input type='email' placeholder='email' />
            </div>
          </div>
          <div className='textarea'>
            <p>оставить коментарий</p>
            <textarea name='' id='input' cols='30' rows='10'></textarea>

            <button type='submit'>Submit</button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default Form;
