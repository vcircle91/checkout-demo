const invoiceCheckbox = document.querySelector('#invoiceCheckbox');
const invoiceBody = document.querySelector('#invoiceBody');
const cardCheckbox = document.querySelector('#cardCheckbox');
const cardBody = document.querySelector('#cardBody');
const idealCheckbox = document.querySelector('#idealCheckbox');
const idealBody = document.querySelector('#idealBody');
const payButton = document.querySelector('#pay');

// Initial setup
idealBody.style.display = "none";
cardBody.style.display = "none";
invoiceBody.style.display = "none";
payButton.style.display = "none";

invoiceCheckbox.addEventListener('change', function () {
    if (this.checked) {
        invoiceBody.style.display = "block";
        payButton.textContent = "Pay by Invoice";
        payButton.style.display = "block";
        // Hide card
        cardCheckbox.checked = false;
        cardBody.style.display = "none";
        // Hide iDEAL
        idealCheckbox.checked = false;
        idealBody.style.display = "none";

    } else {
        invoiceBody.style.display = "none";
    }
});

cardCheckbox.addEventListener('change', function () {
    if (this.checked) {
        cardBody.style.display = "block";
        // Hide button
        payButton.style.display = "none";
        // Hide invoice
        invoiceCheckbox.checked = false;
        invoiceBody.style.display = "none";
        // Hide iDEAL
        idealCheckbox.checked = false;
        idealBody.style.display = "none";
    } else {
        cardBody.style.display = "none";
    }
});

idealCheckbox.addEventListener('change', function () {
    if (this.checked) {
        idealBody.style.display = "block";
        payButton.textContent = "Pay with iDEAL";
        payButton.style.display = "block";
        // Hide invoice
        invoiceCheckbox.checked = false;
        invoiceBody.style.display = "none";
        // Hide card
        cardCheckbox.checked = false;
        cardBody.style.display = "none";
    } else {
        idealBody.style.display = "none";
    }
});