import React from 'react';
import { Heading } from '../components/Heading';
import { Logo } from '../components/Logo';
// import styles from '../styles/containers/Header.module.scss';

const Header = () => {
  return (
    <nav className=''>
        <div className=''>
          <Logo className=''/>
          <div>

          </div>

        </div>
        <Heading/>
    </nav>
  )
}

export { Header };