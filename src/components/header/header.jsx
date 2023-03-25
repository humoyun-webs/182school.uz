import React, { useState, useEffect, useRef } from 'react';
import './header.scss';

import { NavLink } from 'react-router-dom';

import useLang from '../../Hooks/useLang';
import content from '../../Localization/content';

import logo from '../../assets/images/logo.svg';

import Hamburger from 'hamburger-react';

const Header = () => {
  const elNavbar = useRef(null);
  const elNavbarr = useRef(null);
  const [lang, setLang] = useLang('uz');
  const [isOpen, setOpen] = useState(false);

  const selectedValue = value => {
    setLang(value);
  };

  const handleChangeSwitcher = e => {
    selectedValue(e.target.value);
  };
  return (
    <div className='header'>
      <div className='container  header__wrapper'>
        <div className='header__logo'>
          <NavLink to='/' className='header__logo__link'>
            <p className='header__logo__text'>
              <img src={logo} alt='182 maktab logo maktab logo' width='115' height='53' />
            </p>
          </NavLink>
        </div>

        <nav className='header__navbar' ref={elNavbar}>
          <ul className='header__list'>
            <li className='header__list__item'>
              <NavLink to='/' className='header__list__item__link'>
                {content[lang].navbar.home}
              </NavLink>
            </li>
            <li className='header__list__item'>
              <NavLink to='/news' className='header__list__item__link'>
                {content[lang].navbar.news}
              </NavLink>
            </li>

            <li className='header__list__item'>
              <NavLink to='/contact' className='header__list__item__link'>
                {content[lang].navbar.contact}
              </NavLink>
            </li>
            <li className='header__list__item'>
              <NavLink to='/administration' className='header__list__item__link'>
                {content[lang].navbar.administration}
              </NavLink>
            </li>
          </ul>
        </nav>

        <div className='header__language'>
          <select
            name='language'
            id=''
            className='header__select'
            onChange={handleChangeSwitcher}
          >
            <option value='ru'>ru</option>
            <option value='uz'>uz</option>
          </select>
        </div>

        <div className='header__btn' ref={elNavbarr}>
          <button className='header__button'>
            {content[lang].navbar.contact_button}
          </button>
        </div>

        <div className='header__hamburger'>
          <Hamburger
            toggled={isOpen}
            toggle={setOpen}
            size={27}
            rounded
            hideOutline={false}
            onToggle={() => {
              elNavbar.current.classList.toggle('header__hamburger--active');
            }}
          />
        </div>
      </div>
    </div>
  );
};

export default Header;
