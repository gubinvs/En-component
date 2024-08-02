import "./table.component.css"


export function TableComponentTitle () {
    return (
        <>
        <div className="table-component-result table-component-result_title">
            <div className="table-component-result__heading">
                <div className="table-component-result__heading_left">
                    <input type="checkbox" className="tcrh__check"></input>
                    <img src="images/img-icon.svg" alt="Картинка" className="tcrh__img"></img>
                    <div className="tcrh__vendor">Артикул</div>
                    <div className="tcrh__name">Наименование комплектующих</div>
                </div>
                <div className="table-component-result__heading_right">
                    <div className="tcrh__availability">Наличие</div>
                    <div className="tcrh__price">Цена, ед</div>
                    <div className="tcrh__count"></div> 
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
                            <input type="checkbox" className="tcrh__check"></input>
                            <img src={item.images} alt="Картинка" className="tcrh__img"></img>
                            <div className="tcrh__vendor w-120px">{item.vendor}</div>
                            <div className="tcrh__name">{item.name}</div>
                        </div>
                        <div className="table-component-result__heading_right">
                            <div className="tcrh__availability w-70px">{item.availability} шт.</div>
                            <div className="tcrh__price w-70px">{item.price} р.</div>
                            <div className="tcrh__count">
                                <div className="tcrh-count__decrement">-</div>
                                <div className="tcrh-count__body">0</div>
                                <div className="tcrh-count__increment">+</div>
                            </div> 
                            <button className="tcrh__button" id="tcrh__button">Добавить</button>     
                        </div>
                    </div>
                </div>
            </>
            )
        )
}