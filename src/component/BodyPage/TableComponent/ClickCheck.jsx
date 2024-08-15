// Функция обнуляет input с количеством товара в строке таблицы при изменении статуса checkbox в строке товара и изменяет кнопку добавить
function ClickCheck(count) {
    const checkItem = document.getElementById('tcrh__check_' + count);
    const buttonItem = document.getElementById("tcrh__button_" + count);
    const input = document.getElementById("tcrh__count_" + count);
    
    if (checkItem.checked == false) {
        input.value = 0;
        buttonItem.className = "tcrh__button"
        buttonItem.innerHTML = "Добавить";
    } else if (checkItem.checked == true) {
        input.value = 1;
        buttonItem.className = "tcrh__button tcrh__button_add-value"
        buttonItem.innerHTML = "Добавить";
    }

};

export default ClickCheck;