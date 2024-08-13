import {TableComponentBody} from "./TableComponent";

function NavPageList (props) {
    return (
        <>
            <ul className="nav-page-list">
                <CreteLiElement itemPage={props.itemPage} activePage={props.activePage}/>
            </ul>
        </>
    )
}


function CreteLiElement (props) {
    const item = props.itemPage;
    const e = [];
    let count = 1;
    let countProps = Number(props.activePage);
    const cl = "nav-page-icon";
    const clA = "nav-page-icon nav-page-icon__active";
    
    for (let i = 1; i <= item; i++) {
        
        if (count == countProps) {
           e.push({num : i , cls : clA}); 
        } else {
            e.push({num : i , cls : cl}); 
        }
        count++;
    }
    return (
        e.map((x) =>
            <li className={x.cls}>{x.num}</li>  
        )
    )
}


export default NavPageList;