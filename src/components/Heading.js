import React from 'react';
import './Heading.scss';
import Logo from '../images/icon.png';
import Bell from '../images/bell.png';
import User from '../images/user.png';

const Heading = (props) => {
  return (
    <div>
      <ul className="navigation">
        <li style={{paddingRight: '60rem'}} ><img src={Logo} /></li>
        <li><a href="#">Home</a></li>
        <li><a>Collections</a></li>
        <li><a>Explore</a></li>
        <li>...</li>
        <li><button>Submit a photo</button></li>
        <li><img src={Bell} /></li>
        <li><img src={User}/></li>
      </ul>
      
     
    </div>
  );
}

export default Heading;