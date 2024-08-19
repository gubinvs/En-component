
import "./body.catalog.page.css";
import Header from "../Header/Header";
import TitlePage from "./TitlePage/TitlePage";
import FilterBlock from "./FilterBlock/FilterBlock"
import TableComponentBody  from "./TableComponent/TableComponent";
import { comp } from "../../Data/ItemComponent";
import { useEffect, useState } from "react";



let a = 0;

function BodyCatalogPage (props) {
    
    let [count, setCount] = useState(0);
    useEffect(()=>{
      setCount(count +1)
      },[a]
    );

    return (
        <>
          <Header count={count}/>
          <div className="catalog-title-section">
            <TitlePage title={props.title} discr={props.discr} />
          </div>
          <FilterBlock />
          <TableComponentBody item={comp} />
        </>
    )

}

export default BodyCatalogPage;