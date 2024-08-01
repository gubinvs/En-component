import './header.css'

const Header = () => {
  return (
    <>
      <div className='header-section'>
        <div id="user-avatar">
          <div id="user-avatar__title">Губин Владимир Сергеевич</div>
          <div id="user-avatar__company">ООО "Хэнди-Автомейшн"</div>
        </div>
        <div className='header-icon-block'>
          <img className='header-icon-block__icon' src="images/area-icon.svg" alt="Личный кабинет" />
          <img className='header-icon-block__icon' src="images/package-icon.svg" alt="Доставка" />
          <img className='header-icon-block__icon' src="images/basket-icon.svg" alt="Корзина" />
        </div>
      </div>
    </>
  )
};

export default Header
