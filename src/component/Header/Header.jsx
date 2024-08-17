
import { useEffect, useState } from 'react';
import './header.css'





function Header () {
  let [item, setItem] = useState(0); 

  if (localStorage.getItem("basket_item") != null) {
    const basket = JSON.parse(localStorage.getItem("basket_item"));
    item = basket.length;
  }
  
  var className = "";
  if (item == 0 || item == null) {
    className = "window-none";
  } 

  return (
    <>
      <div className='header-section'>
        <div id="user-avatar">
          <div id="user-avatar__title">Губин Владимир Сергеевич</div>
          <div id="user-avatar__company">ООО "Хэнди-Автомейшн"</div>
        </div>
        <ul className='header-icon-list'>
          <li className='header-icon-block__item'><img className='header-icon-block__icon' src="images/area-icon.svg" alt="Личный кабинет" /></li>
          <li className='header-icon-block__item'><img className='header-icon-block__icon' src="images/package-icon.svg" alt="Доставка" /></li>
          <li className='header-icon-block__item header-icon-block__item_basket'>
            <div className={className} id="icon-basket-count">{item}</div>
            <img onClick={()=>IncreaseValue()} className='header-icon-block__icon' src="images/basket-icon.svg" alt="Корзина"/>
          </li>
        </ul>
      </div>
    </>
  )
};


export default Header;