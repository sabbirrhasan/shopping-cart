function productPrice(product, plusBtn, price) {
    let productInput = document.getElementById(product + '-input');
    let productInputValue = productInput.value;
    const productNumber = parseInt(productInputValue);

    if (plusBtn == true) {
        productInput.value = productNumber + 1;
    }
    else if (productInput.value > 0) {
        productInput.value = productNumber - 1;
    }

    const perProductPriceText = document.getElementById(product + '-price');
    const perProductPriceNumber = parseFloat(perProductPriceText.innerText);
    // const perProductPrice = parseFloat(perProductPriceNumber);

    const totalProductPrice = productInput.value * price;
    perProductPriceText.innerText = totalProductPrice;

    calculateTotal();
};


function calculateTotal() {
    const subTotal = document.getElementById('sub-total');
    const subTotalText = subTotal.innerText;
    let subTotalAmount = parseFloat(subTotalText);

    const phonePriceText = document.getElementById('phone-price');
    const phonePrice = parseFloat(phonePriceText.innerText);


    const casePriceText = document.getElementById('case-price');
    const casePrice = parseFloat(casePriceText.innerText);

    subTotalAmount = phonePrice + casePrice;
    subTotal.innerText = subTotalAmount;

    const tax = document.getElementById('tax');
    const taxText = tax.innerText;
    let taxAmount = parseFloat(taxText);

    const taxTotal = subTotalAmount / 10;
    tax.innerText = taxTotal;

    const grandTotal = document.getElementById('grand-total');
    const grandTotalText = grandTotal.innerText;
    let grandTotalAmount = parseFloat(grandTotalText);

    grandTotalAmount = taxTotal + subTotalAmount;
    grandTotal.innerText = grandTotalAmount;
};