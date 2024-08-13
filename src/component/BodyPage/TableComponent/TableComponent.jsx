import "./table.component.css"
import CheckAll from "./CheckAll";
import TableComponentRow from "./TableComponentRow";



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
    return (comp.map((item) =><TableComponentRow row={item}/>))
}
