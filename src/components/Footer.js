import React from 'react';
import { Row, Col } from 'react-bootstrap';

function Footer() {
  return (
    <div className='text-center p-3 text-orange' style={{ backgroundColor: 'rgba(1 , 1, 1, 1)', position: 'fixed', left: 0, bottom: 0, width: '100%' }}>
      <a className='text-white'>
        No Copyright Claims.
        </a>{" "}
      <a className='text-white'>
        No Rights Reserved.
        </a>
    </div>
  )
}

export default Footer;
