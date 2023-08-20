function innerTextFunction(id1, id2) {
    const innerId = document.getElementById(id1);
    const innerText = innerId.innerText;
    const divId = document.getElementById(id2);
    const count = divId.childElementCount;
    const countElement = count + 1;
    const p = document.createElement('p');
    p.innerHTML = countElement + '. ' + innerText;
    divId.appendChild(p)
}
function countFunction(id1, id2) {
    const takaId = document.getElementById(id1);
    const takaText = takaId.innerText;
    const takaFloat = parseFloat(takaText);
    const totalId = document.getElementById(id2);
    const totalText = totalId.innerText;
    const totalFloat = parseFloat(totalText);
    const sum = totalFloat + takaFloat + '.00';
    totalId.innerText = sum;

    // apply button id get
    const btnId = document.getElementById('apply');
    btnId.addEventListener('click', function () {
        const inputField = document.getElementById('input-field');
        const value = inputField.value;
        if (value == 'SELL200') {
            const count = ((20 / 100) * sum);
            const discountID = document.getElementById('discount-id');
            discountID.innerText = count;
            // total munus cost
            const minustCoust = sum - count;
            const totalId = document.getElementById('total-produck-price');
            totalId.innerText = minustCoust;
            console.log(minustCoust);
        } else {
            alert("Promo Code is Not Valid")

        }


    })


    const inputField = document.getElementById('input-field');
    const purchaseBtn = document.getElementById('purchase');
    purchaseBtn.disabled = false;
    if (sum >= 200) {
        btnId.disabled = false;
        inputField.disabled = false;
    }

}
