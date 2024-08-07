import "./table.component.css"


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
                    <div className="tcrh__button"></div>     
                </div>
            </div>
        </div>
        </>
    )
}

export function TableComponentBody (props) {
    const comp = props.item;

 
    return (
        comp.map((item) =>
            <>            
                <div className="table-component-result">
                    <div className="table-component-result__heading">
                        <div className="table-component-result__heading_left">
                            <input type="checkbox" className="tcrh__check" id={"tcrh__check_" + item.id}></input>
                            <a href={item.images} target="blank">
                                <img src={item.images} alt="Картинка" className="tcrh__img"></img>
                            </a>
                            <div className="tcrh__vendor w-120px">{item.vendor}</div>
                            <div className="tcrh__name">{item.name}</div>
                        </div>
                        <div className="table-component-result__heading_right">
                            <div className="tcrh__availability w-70px">{item.availability} шт.</div>
                            <div className="tcrh__price w-70px">{Intl.NumberFormat("ru", {style: "currency", currency: "RUB"}).format(parseFloat(item.price))}</div>
                            <input onClick={CheckTheBox(item.id)} type="number" min="0" className="tcrh__count tcrh-count__body" id={"tcrh__count_" + item.id}></input>
                            <button className="tcrh__button">Добавить</button>     
                        </div>
                    </div>
                </div>
            </>
            )
        )
}

// Работа с checkbox выделяет все при нажатии в заголовке
function CheckAll () {
    const checkAll = document.getElementById('tcrh__check_all');
    const ckeckItem = document.querySelectorAll('.tcrh__check');    

    ckeckItem.forEach(element => {
        element.checked = checkAll.checked;
    })
}

function CheckTheBox (count) {
    let item = "tcrh__count_" + count;
    const checkItem = document.getElementById('tcrh__count_' + count);
    checkItem.checked = true;
    console.log(item);
}
