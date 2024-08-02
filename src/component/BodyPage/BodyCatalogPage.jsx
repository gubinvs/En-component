
import "./body.catalog.page.css";
import TitlePage from "./TitlePage/TitlePage";
import SearchBlock from "./TitlePage/SearchBlock";
import FilterBlock from "./FilterBlock/FilterBlock"
import { TableComponentBody, TableComponentTitle } from "./TableComponent/TableComponent";


function BodyCatalogPage (props) {

    return (
        <>
          <div className="catalog-title-section">
            <TitlePage title={props.title} discr={props.discr} />
            <SearchBlock />
          </div>
          <FilterBlock />
          <TableComponentTitle />
          <TableComponentBody />
        </>
    )

}

export default BodyCatalogPage;