const display = document.getElementById('display');
const button = Array.from(document.getElementsByTagName('button'));

button.map(button =>{
    button.addEventListener('click',(e) =>{
        const value = e.target.innerText;
        if(value ==='AC'){
            display.value = '';
        }else if (value === '='){
            display.value = eval(display.value);
        }else{
            display.value += value;
        }
    });
});