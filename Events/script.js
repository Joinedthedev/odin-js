/*const aller = () => alert('hello world');


const btn = document.querySelector('#btn');
btn.setAttribute('style', 'display:block; color:red;')
btn.onclick = aller;


const btn2 = document.querySelector('#btn2');
btn2.addEventListener('click', (e) => 
e.target.style.background = 'blue');
*/

const buttons = document.querySelectorAll('button')

buttons.forEach((button)=>{

    button.addEventListener('click', ()=> alert(button.id))
})
