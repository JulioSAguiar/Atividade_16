var btn = document.getElementById ('clicker')
var lamp = document.getElementById ('lamp')

btn.onclick = function(){
if(btn.value === 'Acender'){
    lamp.src = './img/lampadaon.png';
    btn.value = 'Apagar';
    btn.innerHTML = 'Apagar';


}else{
lamp.src = 'img/lampadaoff.png';
btn.value = 'Acender';
btn.innerHTML = 'Acender';

}
}