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
                            <input onClick={() => ClickCheck(item.id)} type="checkbox" className="tcrh__check" id={"tcrh__check_" + item.id}></input>
                            <a href={item.images} target="blank">
                                <img src={item.images} alt="Картинка" className="tcrh__img"></img>
                            </a>
                            <div className="tcrh__vendor w-120px" id={"tcrh__vendor" + item.id}>{item.vendor}</div>
                            <div className="tcrh__name">{item.name}</div>
                        </div>
                        <div className="table-component-result__heading_right">
                            <div className="tcrh__availability w-70px">{item.availability} шт.</div>
                            <div className="tcrh__price w-70px">{Intl.NumberFormat("ru", {style: "currency", currency: "RUB"}).format(parseFloat(item.price))}</div>
                            <input onClick={() => CheckTheBox(item.id)} type="number" min="0" className="tcrh__count tcrh-count__body" id={"tcrh__count_" + item.id}></input>
                            <button onClick={()=>  ButtonOnClick(item.id)} className="tcrh__button" id={"tcrh__button_" + item.id}>Добавить</button>     
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
    let count = 1;
    if (checkAll.checked == true) {
        ckeckItem.forEach(element => {
                element.checked = checkAll.checked;
                document.getElementById("tcrh__button_" + count).className = "tcrh__button tcrh__button_add-value";
                document.getElementById("tcrh__count_" + count).value = 1;
                count++;
        })
    } else {
        ckeckItem.forEach(element => {
            element.checked = checkAll.checked;
            document.getElementById("tcrh__button_" + count).className = "tcrh__button";
            document.getElementById("tcrh__count_" + count).value = 0;
            count++;
        })
    }
 
}

// Функция обнуляет input с количеством товара в строке таблицы при изменении статуса checkbox в строке товара и изменяет кнопку добавить
function ClickCheck(count) {
    const checkItem = document.getElementById('tcrh__check_' + count);
    const buttonItem = document.getElementById("tcrh__button_" + count);
    const input = document.getElementById("tcrh__count_" + count);
    if (checkItem.checked == false) {
        input.value = 0;
        buttonItem.className = "tcrh__button"
        buttonItem.innerHTML = "Добавить";
    } else if (checkItem.checked == true) {
        input.value = 1;
        buttonItem.className = "tcrh__button tcrh__button_add-value"
        buttonItem.innerHTML = "Добавить";
    }

};

// Меняет состояние checkbox в строке товара при увеличении позиции в input
function CheckTheBox (count) {
    const buttonItem = document.getElementById("tcrh__button_" + count);
    const checkItem = document.getElementById('tcrh__check_' + count);
    const input = document.getElementById("tcrh__count_" + count);
    checkItem.checked = true;
    buttonItem.className = "tcrh__button tcrh__button_add-value"

    if (input.value == 0) {
        checkItem.checked = false;
        buttonItem.className = "tcrh__button"
        buttonItem.innerHTML = "Добавить";
        // Нужно добавить удаление данных из корзины!!!!!!!!!!
    } 

}

// При нажатии на кнопку добавить, меняется цвет кнопки и надпись "в корзине"
// Информация о данном товаре добавляется в localStorage
function ButtonOnClick (count) {
    const buttonItem = document.getElementById("tcrh__button_" + count);
    buttonItem.className = "tcrh__button tcrh__button_add-basket";
    buttonItem.innerHTML = "В корзине";
    LocalStoreAddBasketItem(count);
}


// Функция сохранения данных в localStorage
function LocalStoreAddBasketItem (count) {
    const newBascketItem = [];
    const basketItem = [];
    const vendorItem = document.getElementById("tcrh__vendor" + count).innerHTML;
    const valueItem = document.getElementById("tcrh__count_" + count).value;
    
    if (localStorage.getItem('basket_item') != null) {
        basketItem.push(JSON.parse(localStorage.getItem('basket_item'))); 
        console.log("Добавил");

    }
    
    basketItem.forEach((i) => {
        if (document.getElementById('tcrh__check_' + count).checked == true || i.vendorItem == vendorItem) {
            newBascketItem.push({vendor : vendorItem, volume : valueItem});
        } else {
          newBascketItem.push({vendor : i.vendorItem, volume : i.volume});  
        }

    })
    
    // Если checkbox выделен, заполняем данные 
    // if (document.getElementById('tcrh__check_' + count).checked == true) {
    //     basketItem.push({vendor : vendorItem, volume : valueItem});     
    // }

    localStorage.setItem("basket_item", JSON.stringify(newBascketItem));
    console.log(localStorage.getItem('basket_item'));
    //localStorage.removeItem('basket_item')

}


function LocalStoreDeleteBasketItem () {

}