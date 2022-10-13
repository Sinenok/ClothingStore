const productBtns = document.querySelectorAll('.counter_btn');
productBtns.forEach(productBtn => {
    productBtn.addEventListener('click', () => {
        const direction = productBtn.dataset.direction;
        const busket = this.document.querySelector('.counter_value');
        const currentBusketValue = +busket.value;
        let newtBusketValue;  

        if (direction === 'plus')
            newtBusketValue = currentBusketValue + 1;

        if (direction === 'minus')
            newtBusketValue = currentBusketValue - 1 > 0 ? currentBusketValue - 1 : 0;
        
        busket.value = newtBusketValue;
    });
});
 