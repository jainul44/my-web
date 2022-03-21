let screen = document.getElementById('screen')


function display(val){
    screen.value +=val;
}
function clean(){
    screen.value ="";
}
function equal(){
    let x = screen.value;
    let y = eval(x);
    screen.value = y;
}
function back(){
    let x = screen.value
    screen.value = x.slice(0, -1)
}