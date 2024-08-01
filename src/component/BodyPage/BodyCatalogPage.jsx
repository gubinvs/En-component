
import "./body.catalog.page.css";
import TitlePage from "./TitlePage/TitlePage";
import SearchBlock from "./TitlePage/SearchBlock";

function BodyCatalogPage (props) {

    return (
        <>
          <div className="catalog-title-section">
            <TitlePage title={props.title} discr={props.discr} />
            <SearchBlock />
          </div>
        </>
    )

}

export default BodyCatalogPage;