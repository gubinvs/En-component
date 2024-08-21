import "./filter.block.css";
import SearchBlock from "../TitlePage/SearchBlock";
import { regust } from "../BodyCatalogPage";

function FilterBlock ()  {

    return (
        <>
            <div className="filter-block">
                <div className="filter-select-block">
                    <select className="filter-select-block__select">
                        <option className="filter-select-block__option">IEK</option>
                        <option className="filter-select-block__option">EKF</option>
                        <option className="filter-select-block__option">DKC</option>
                    </select>
                    <button onClick={()=>regust()}  className="filter-select-block__button">Применить фильтр</button>
                </div>
                <SearchBlock />
                {/* <div className="filter-block__button">Добавить выбранное</div> */}
            </div>
        </>
    )
}

export default FilterBlock;