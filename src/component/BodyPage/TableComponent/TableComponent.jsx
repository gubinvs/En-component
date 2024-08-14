import "./table.component.css"
import TableComponentRow from "./TableComponentRow";
import { useState } from "react";
import TableComponentTitle from "./TableComponentTitle"



let countItem; // Количество строк в формируемой таблице (глобальная переменная)


export function TableComponentBody (props) {
    const comp = props.item; 
    // получение последнего элемента массива, что будет являться количеством элементов в массиве
    countItem = Number(comp.at(-1).id); // количество элементов во входящем массиве
    let count = 1; // счетчик этераций
    let maxItem = 20; // максимальное количество строк таблицы на странице
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
        if (item > 1) {
            setFirstItem((maxItem * item) - maxItem);
            setLastItem(maxItem * item);
            setNewCompArr(comp.slice((maxItem * item) - maxItem, maxItem * item));
        } else if (item == 1) {
            setFirstItem(0);
            setLastItem(maxItem);
            setNewCompArr(comp.slice(0, maxItem)); 
        }
    }    
    function NavPageList () {
        return (
            <ul className="nav-page-list">
                <div className="nav-page-list__title">Страницы:</div>
                {
                    e.map((x) =>
                        <li className={x.class} onClick={() => OnClick(x.num)}>{x.num}</li>  
                    )
                }
            </ul>   
        )
    }

    return (
        <>
            <div className="table-component-section">
                <NavPageList /> 
                <TableComponentTitle />
                <TableComponentRow row={newCompArr}/> 
                <NavPageList />
            </div>
        </>
    )
}


export default TableComponentBody;