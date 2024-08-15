// Функция сохранения данных в localStorage
// countItem Всего элементов в отображаемом массиве 
function LocalStorageAddBasketItem (countItem) {
    const basketItem = [];
    const ckItem = [];
    const tcrhVendor = [];
    const inputItem = [];
    const buttonItem = [];
    

    for (let i = 1; i <= countItem; i++) {
        if (document.getElementById('tcrh__check_' + i) != null) {
            ckItem.push(document.getElementById('tcrh__check_' + i).checked);
        }
        if (document.getElementById("tcrh__vendor_" + i) != null) {
            tcrhVendor.push(document.getElementById("tcrh__vendor_" + i).innerHTML);
        }

        if (document.getElementById("tcrh__count_" + i) != null) {
            inputItem.push(document.getElementById("tcrh__count_" + i).value);
        }

        if (document.getElementById("tcrh__button_" + i) != null) {
          buttonItem.push(document.getElementById("tcrh__button_" + i));  
        }
        
    }

    console.log(JSON.stringify(buttonItem));

    for (let i = 0; i < countItem; i++) {
        if (ckItem[i] == true) {
           basketItem.push({vendor : tcrhVendor[i], volume :  inputItem[i]}); 
        } else if (inputItem[i] != 0) {
            buttonItem[i].className = "tcrh__button tcrh__button_add-basket"; 
        }
       
    }

    var json = JSON.stringify(basketItem);
    localStorage.setItem("basket_item", json);
    console.log(localStorage.getItem("basket_item"));
    
}

export default LocalStorageAddBasketItem;