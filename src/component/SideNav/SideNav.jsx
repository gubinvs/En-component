import "./side.navigation.bar.css"
import { NavigationArray } from "../../Data/NavigationArray";

const item = NavigationArray;
const link = window.location.pathname;

function SideNav() {

    if (link == "/catalog.html") {item.map((item) => {if (item.id == "catalog") {item.clsName = "fw-600";}})}; 
    if (link == "/progects.html") {item.map((item) => {if (item.id == "progects") {item.clsName = "fw-600";}})};
    if (link == "/docs.html") {item.map((item) => {if (item.id == "docs") {item.clsName = "fw-600";}})}; 
    if (link == "/users.html") {item.map((item) => {if (item.id == "users") {item.clsName = "fw-600";}})}; 
    if (link == "/company.html") {item.map((item) => {if (item.id == "company") {item.clsName = "fw-600";}})}; 
    if (link == "/setting.html") {item.map((item) => {if (item.id == "setting") {item.clsName = "fw-600";}})}; 
    
    return (
        <>
        <div className="side-bar-title">Component</div>
        <ul className="ul-icon-bar_big">
            {
                item.map(
                    (item) => <li className={item.clsName} id={item.id}><a href={item.link}>{item.name}</a></li>
                )
            }
        </ul>
        </>
    )
};

export default SideNav;