//amount or quantity
let amountButtons = document.querySelectorAll('.amount__button');
if (amountButtons.length > 0) {
    for (let i = 0; i < amountButtons.length; i++) {
        const amountButton = amountButtons[i];
        amountButton.addEventListener('click', function(e) {
            let value = parseInt(amountButton.closest('.amount').querySelector('input').value)
            if (amountButton.classList.contains('amount__button--plus')) {
                value ++;
            } else {
                value = value - 1;
                if (value < 1) {
                    value = 1
                }
            }
            amountButton.closest('.amount').querySelector('input').value = value;
        });
    }
}
//