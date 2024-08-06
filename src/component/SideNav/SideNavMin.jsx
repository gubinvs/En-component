import "./side.navigation.bar.css"
import { NavigationArray } from "../../Data/NavigationArray";

const item = NavigationArray;    

function activateBar(){
        if (document.getElementById('nav-icon')) {
            document.getElementById('side-navigation').className = "side-navigation-bar";
            document.getElementById('side-navigation-min').className = "side-navigation-bar_min";
            document.getElementById('nav-icon').id = "new-icon";
            document.getElementById('ul-icon-bar').className = "window-none"; 
            } else if (document.getElementById('new-icon')) {
                document.getElementById('side-navigation').className = "side-navigation-bar window-none";
                document.getElementById('side-navigation-min').className = "side-navigation-bar_min mr-20";
                document.getElementById('new-icon').id = "nav-icon";
                document.getElementById('ul-icon-bar').className = "ul-icon-bar"; 
            } 
        }


function SideNavMin() {
    return (
        <>
            <div className="logo-servise"></div>
            <div onClick={activateBar} id="nav-icon"></div>
            <ul id="ul-icon-bar"> 
                {
                   item.map((item) => <li id={item.idIcon}><a href={item.link} title={item.name}><img src={item.linkIcon} alt={item.name} /></a></li>) 
                }
            </ul>
        </>
    )
};

export default SideNavMin;