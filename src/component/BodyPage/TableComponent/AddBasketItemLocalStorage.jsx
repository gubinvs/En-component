


function AddBasketItemLocalStorage(count) {
    const basket = [];
    if (localStorage.getItem("basket_item") != null) {
        const json = JSON.parse(localStorage.getItem("basket_item"));
        json.forEach((element) => {basket.push(element);});
    };
    
    const vendorCode = document.getElementById('tcrh__vendor_' + count);
    const itemValue = document.getElementById("tcrh__count_" + count);

    if (basket.length == 0) {
        basket.push(
            {
                vendor :  vendorCode.innerHTML , 
                value : itemValue.value
            });
    } 
    else if (basket.length == 1) {

        basket.forEach((element) => {
            if (element.vendor == vendorCode.innerHTML) { 
                {
                    element.value = itemValue.value
                }
            } else {
                basket.push({
                    vendor :  vendorCode.innerHTML , 
                    value : itemValue.value  
                })
            }
        });
    } else if (basket.length > 1) {
        let a = 0;
        basket.forEach(
            (element) => {
                if (element.vendor == vendorCode.innerHTML) { 
                    {
                        element.value = itemValue.value
                    }
                    a = 1;
                }
            })           
                
            if (a == 0) {
                basket.push({
                    vendor :  vendorCode.innerHTML , 
                    value : itemValue.value  
                })
            }
        
    };

    var item = 0;
    basket.forEach((elememt) => {
        if (elememt.value != 0) {
            item = item + elememt.value
        }
    });

    if (item == 0) {
        localStorage.removeItem("basket_item");
    } else {
        localStorage.setItem("basket_item", JSON.stringify(basket));
    }
  
}

export default AddBasketItemLocalStorage;