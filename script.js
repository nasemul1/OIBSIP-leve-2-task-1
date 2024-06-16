const display = document.getElementById('monitor');

function handleClick(input){
    display.value += input;
}

function clearAll(){
    display.value = '';
}

function clearOne(){
    display.value = display.value.toString().slice(0, -1);
}

function calculateFn(){
    try{
        display.value = eval(display.value);
    }
    catch(err){
        display.value = 'error';
    }
}