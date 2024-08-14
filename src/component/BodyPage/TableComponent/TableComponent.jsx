import "./table.component.css"
import CheckAll from "./CheckAll";
import TableComponentRow from "./TableComponentRow";
import { useState } from "react";



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
    // получение последнего элемента массива, что будет являться количеством элементов в массиве
    countItem = Number(comp.at(-1).id); // количество элементов во входящем массиве
    let count = 1; // счетчик этераций
    let maxItem = 5; // максимальное количество строк таблицы на странице
    let countPage = Math.ceil(countItem / maxItem); // получаем количество страниц, округлаяя до полного числа в большую сторону
    const [lastItem, setLastItem] = useState(maxItem) // до этого элемента массива отображаются данные на странице
    const [activePage, setActivePage] = useState(1); // активная страница с данными
    const [firstItem, setFirstItem] = useState(0); // Первый элемент массива для отображения на странице
    const [newCompArr, setNewCompArr] = useState(comp.slice(firstItem, maxItem)) ; // разделяем массив по установленных критериям
    const nativeClass = "nav-page-icon"; // класс li элемента по умолчанию
    const activeClass = "nav-page-icon nav-page-icon__active"; // класс элемента li при нахождении на текущей странице
    const e = [];
    for (let i = 1; i <= countPage; i++) {
        
        if (count == activePage) {
           e.push({num : i , class : activeClass}); 
        } else {
            e.push({num : i , class : nativeClass}); 
        }
        count++;
    }

    function OnClick (item) {
        setActivePage(item);
        setFirstItem(maxItem * item);
        setLastItem(lastItem + maxItem);  
    }

    console.log("Первый элемент = " + firstItem);
    console.log("Последний элемент = " + lastItem);
    return (
        <>
            <TableComponentRow row={newCompArr}/> 
            <ul className="nav-page-list">
                {
                     e.map((x) =>
                        <li className={x.class} onClick={() => OnClick(x.num)}>{x.num}</li>  
                    )
                }
            </ul>
            
        </>
    )
}


