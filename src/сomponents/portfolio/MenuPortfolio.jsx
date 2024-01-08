import React from 'react';
import { Link } from 'react-router-dom';

function MenuPortfolio() {
  const items = [
    {
      id: 1,
      img: './img/galery10.png',
      title: 'Galery',
      href: '/portfolio',
    },
    {
      id: 2,
      img: './img/galery22.png',
      title: 'nude' ,
      href: '/portfolio/nude' ,
    },
    {
      id: 3,
      img: './img/colored-light.png',
      title: 'colored light',
      href: '/portfolio/light'
    },
    {
      id: 4,
      img: './img/magazines.png',
      title: 'magazines' ,
      href: '/portfolio/magazines'
    },
    {
      id: 5,
      img: './img/interior.png',
      title: 'interior',
      href: '/portfolio/interior'
    }
  ];
  
  return(
    <div className="pt-[10px] border-t-[1px] border-[#D9D9D9] sm:hidden">
      {
        items.map(obj => (
          <div key={obj.id} className="py-[16px] cursor-pointer">
            <Link to={obj.href}>
              <img src={obj.img} alt="" className="pb-[16px]"/>
              <h3>{obj.title}</h3>
            </Link>
          </div>
        ))
      }
    </div>
  )
}

export default MenuPortfolio;