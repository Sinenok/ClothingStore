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
        inp.value = newValue;
    })
})
