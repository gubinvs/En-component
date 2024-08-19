
import { useEffect, useState } from 'react';
import './header.css'


function Header () {

  if (localStorage.getItem("basket_item") != null) {
      const [basket, setBasket] = useState(JSON.parse(localStorage.getItem("basket_item")));
      const [item, setItem] = useState(basket.length); 

      return (
        <HeaderSection item={item} className=""/>
      )
  } else {
    return (
        <HeaderSection item="0" className="window-none"/>
      )
  }
};

export default Header;

function HeaderSection (props) {
  let item = props.item;
  var cl = props.className;
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
            <div className={cl} id="icon-basket-count">{item}</div>
            <img className='header-icon-block__icon' src="images/basket-icon.svg" alt="Корзина"/>
          </li>
        </ul>
      </div>
    </>
  )

}


