
import "./body.catalog.page.css";
import Header from "../Header/Header";
import TitlePage from "./TitlePage/TitlePage";
import FilterBlock from "./FilterBlock/FilterBlock"
import TableComponentBody  from "./TableComponent/TableComponent";
import { comp } from "../../Data/ItemComponent";
import { serverIP } from "../../Data/Connector";

export const regust = () => {
  fetch('http://localhost:5020/api/RequestDataIekItem', {
    method: 'GET',
    ContentType: 'text/json; charset=utf-8',
    // Тело запроса ,в данном случае объект формы (файл)
    body: 'text/json'

        }).then(function(response) {
            console.log(response);
            // Стоит проверить код ответа.
            if (!response.ok) {
                // Сервер вернул код ответа за границами диапазона [200, 299]
                console.log('Сервер вернул код ответа за границами диапазона [200, 299]');
            }

            // Далее будем использовать только JSON из тела ответа.
            return response.json();
        }).then(function(response) {

            // Данные с сервера пришли.
            let json = JSON.parse(response);
        

            // Объявляем переменную для формирвания списка артикулов через запятую
            let string;
            
            // Перебираем строку JSON
            json.forEach(element => {
                if (element != null) {  
                    // Если переменная строка пустая, заполняем ее
                    if (string == null) {
                        string = element;
                        
                    } else {
                        // Если строка уже заполнения, добавляем в нее значения через зяпятую
                        string = string + "," + element;
                    }
                }
            });
            

            // Заполнили данными форму поиска
            inputSearch.value = string;

            // Нажимаем на кнопку поиск
            buttonSearch.click();

        }).catch(function(error) {
            console.log('// ... Обрабатываем ошибки.');
            console.log(error);
            // ... Обрабатываем ошибки.
        });
}

function BodyCatalogPage (props) {

    return (
        <>
          <Header/>
          <div className="catalog-title-section">
            <TitlePage title={props.title} discr={props.discr} />
          </div>
          <FilterBlock />
          <TableComponentBody item={comp} />
        </>
    )

}

export default BodyCatalogPage;