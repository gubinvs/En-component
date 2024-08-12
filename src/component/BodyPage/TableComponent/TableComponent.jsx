import "./table.component.css"
import LocalStorageAddBasketItem from "./LocalStorage";
import CheckAll from "./CheckAll";
import ClickCheck from "./ClickCheck";
import CheckTheBox from "./CheckTheBox";



let countItem; // Количество строк в формируемой таблице (глобальная переменная)

export function TableComponentTitle () {
    return (
        <>
        <div className="table-component-result table-component-result_title">
            <div className="table-component-result__heading">
                <div className="table-component-result__heading_left">
                    <input onClick={CheckAll} type="checkbox" className="tcrh__check" id="tcrh__check_all"></input>
                    <img src="images/img-icon.svg" alt="Картинка" className="tcrh__img"></img>
                    <div className="tcrh__vendor w-120px">Артикул</div>
                    <div className="tcrh__name">Наименование</div>
                </div>
                <div className="table-component-result__heading_right">
                    <div className="tcrh__availability w-70px">Наличие</div>
                    <div className="tcrh__price w-70px">Цена, ед</div>
                    <div className="tcrh__count">Кол-во</div>    
                </div>
            </div>
        </div>
        </>
    )
}

export function TableComponentBody (props) {
    const comp = props.item; 
    countItem = Number(comp.at(-1).id);// получение последнего элемента массива
    return (
        comp.map((item) =>
            <>            
                <div className="table-component-result">
                    <div className="table-component-result__heading">
                        <div className="table-component-result__heading_left">
                            <input onClick={() => ClickCheck(item.id)} type="checkbox" className="tcrh__check" id={"tcrh__check_" + item.id}></input>
                            <a href={item.images} target="blank">
                                <img src={item.images} alt="Картинка" className="tcrh__img"></img>
                            </a>
                            <div className="tcrh__vendor w-120px" id={"tcrh__vendor_" + item.id}>{item.vendor}</div>
                            <div className="tcrh__name" id={"tcrh__name_" + item.id}>{item.name}</div>
                        </div>
                        <div className="table-component-result__heading_right">
                            <div className="tcrh__availability w-70px">{item.availability} шт.</div>
                            <div className="tcrh__price w-70px" id={"tcrh__price_" + item.id}>{Intl.NumberFormat("ru", {style: "currency", currency: "RUB"}).format(parseFloat(item.price))}</div>
                            <input onClick={() => CheckTheBox(item.id)} type="number" min="0" className="tcrh__count tcrh-count__body" id={"tcrh__count_" + item.id}></input>
                            <button onClick={()=>  ButtonOnClick(item.id)} className="tcrh__button" id={"tcrh__button_" + item.id}>Добавить</button>     
                        </div>
                    </div>
                </div>
            </>
            )
        )
}


// При нажатии на кнопку добавить, меняется цвет кнопки и надпись "в корзине"
// Информация о данном товаре добавляется в localStorage
// Не перемещать в отдельный файл, используется глобальная переменная countItem
function ButtonOnClick (count) {
    const buttonItem = document.getElementById("tcrh__button_" + count);
    buttonItem.className = "tcrh__button tcrh__button_add-basket";
    buttonItem.innerHTML = "В корзине";
    LocalStorageAddBasketItem(countItem);
}