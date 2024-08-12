// Меняет состояние checkbox в строке товара при увеличении позиции в input
function CheckTheBox (count) {
    const buttonItem = document.getElementById("tcrh__button_" + count);
    const checkItem = document.getElementById('tcrh__check_' + count);
    const input = document.getElementById("tcrh__count_" + count);
    checkItem.checked = true;
    buttonItem.className = "tcrh__button tcrh__button_add-value"

    if (input.value == 0) {
        checkItem.checked = false;
        buttonItem.className = "tcrh__button"
        buttonItem.innerHTML = "Добавить";
        // Нужно добавить удаление данных из корзины!!!!!!!!!!
    } 

}

export default CheckTheBox;