const btns = document.querySelectorAll('.counter_btn');
btns.forEach(btn=>{
    btn.addEventListener('click', function(){
        const direction = this.dataset.direction;
        const inp = document.querySelector('.counter_value');
        const currentValue = +inp.value;
        let newValue;  

        if (direction === 'plus'){
            newValue = currentValue + 1;
        }
        if (direction === 'minus'){
            if (currentValue - 1 > 0){
                newValue = currentValue - 1;
            }
            else{
                newValue = 0;
            }
        }
        inp.value = newValue;
    })
})
