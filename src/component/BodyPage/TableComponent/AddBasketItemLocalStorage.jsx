const basketItem = [];

function AddBasketItemLocalStorage(count) {
    

    const vendorCode = document.getElementById('tcrh__vendor_' + count);
    const itemValue = document.getElementById("tcrh__count_" + count)

    basketItem.push({vendor : vendorCode.innerHTML , value : itemValue.value});
    localStorage.setItem("basket_item", JSON.stringify(basketItem))

    //console.log(JSON.stringify(basketItem));
    //console.log("localSto: " + localStorage.getItem("basket_item"));

}

export default AddBasketItemLocalStorage;