import "./filter.block.css";

function FilterBlock ()  {
    return (
        <>
            <div className="filter-block">
                <div className="filter-select-block">
                    <select className="filter-select-block__select">
                        <option className="filter-select-block__option">Iek Group</option>
                        <option className="filter-select-block__option">Ekf Group</option>
                    </select>
                    <button className="filter-select-block__button">Применить фильтр</button>
                </div>
                {/* <div className="filter-block__button">Добавить выбранное</div> */}
            </div>
        </>
    )
}

export default FilterBlock;