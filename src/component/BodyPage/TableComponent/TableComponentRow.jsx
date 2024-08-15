import LocalStorageAddBasketItem from "./LocalStorage";
import ClickCheck from "./ClickCheck";
import CheckTheBox from "./CheckTheBox";
import { countItem } from "./TableComponent";
import AddBasketItemLocalStorage from "./AddBasketItemLocalStorage";


function TableComponentRow (props) {
    const array = props.row;

    const basketItem = JSON.parse(localStorage.getItem("basket_item"));
    console.log(basketItem);


    return (  
        array.map((row) =>   
            <div className="table-component-result">
                <div className="table-component-result__heading">
                    <div className="table-component-result__heading_left">
                        <input onClick={() => ClickCheck(row.id)} type="checkbox" className="tcrh__check" id={"tcrh__check_" + row.id} key={"check_" + row.id}></input>
                        <a href={row.images} target="blank">
                            <img src={row.images} alt="Картинка" className="tcrh__img"></img>
                        </a>
                        <div className="tcrh__vendor w-120px" id={"tcrh__vendor_" + row.id}>{row.vendor}</div>
                        <div className="tcrh__name" id={"tcrh__name_" + row.id}>{row.name}</div>
                    </div>
                    <div className="table-component-result__heading_right">
                        <div className="tcrh__availability w-70px">{row.availability} шт.</div>
                        <div className="tcrh__price w-70px" id={"tcrh__price_" + row.id}>{Intl.NumberFormat("ru", {style: "currency", currency: "RUB"}).format(parseFloat(row.price))}</div>
                        <input onClick={() => CheckTheBox(row.id)} type="number" min="0" className="tcrh__count tcrh-count__body" id={"tcrh__count_" + row.id} key={"count_" + row.id}></input>
                        <button onClick={()=>  ButtonOnClick(row.id)} className="tcrh__button" id={"tcrh__button_" + row.id} key={"button_" + row.id}>Добавить</button>     
                    </div>
                </div>
            </div>
        )
    )
}

export default TableComponentRow;

// При нажатии на кнопку добавить, меняется цвет кнопки и надпись "в корзине"
// Информация о данном товаре добавляется в localStorage
// Не перемещать в отдельный файл, используется глобальная переменная countItem
function ButtonOnClick (count) {
    if (document.getElementById("tcrh__count_" + count).value != 0) {
        const buttonItem = document.getElementById("tcrh__button_" + count);
        buttonItem.className = "tcrh__button tcrh__button_add-basket";
        buttonItem.innerHTML = "В корзине";
        // Передаваемая информация в функцию: 
        // - countItem - всего элементов в массиве
        //LocalStorageAddBasketItem(countItem);
        AddBasketItemLocalStorage(count);
    }
}