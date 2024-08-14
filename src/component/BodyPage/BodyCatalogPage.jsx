
import "./body.catalog.page.css";
import TitlePage from "./TitlePage/TitlePage";
import SearchBlock from "./TitlePage/SearchBlock";
import FilterBlock from "./FilterBlock/FilterBlock"
import TableComponentBody  from "./TableComponent/TableComponent";
import { comp  } from "../../Data/ItemComponent";

function BodyCatalogPage (props) {

    return (
        <>
          <div className="catalog-title-section">
            <TitlePage title={props.title} discr={props.discr} />
          </div>
          <FilterBlock />
          <TableComponentBody item={comp} />
        </>
    )

}

export default BodyCatalogPage;