// Работа с checkbox выделяет все при нажатии в заголовке
function CheckAll () {
    const checkAll = document.getElementById('tcrh__check_all');
    const ckeckItem = document.querySelectorAll('.tcrh__check');    
    let count = 1;
    if (checkAll.checked == true) {
        ckeckItem.forEach(element => {
                element.checked = checkAll.checked;
                document.getElementById("tcrh__button_" + count).className = "tcrh__button tcrh__button_add-value";
                document.getElementById("tcrh__count_" + count).value = 1;
                count++;
        })
    } else {
        ckeckItem.forEach(element => {
            element.checked = checkAll.checked;
            document.getElementById("tcrh__button_" + count).className = "tcrh__button";
            document.getElementById("tcrh__count_" + count).value = 0;
            count++;
        })
    }
 
}

export default CheckAll;