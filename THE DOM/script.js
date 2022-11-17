const container = document.querySelector('#container');

const content = document.createElement('div');
content.classList.add('content');
content.textContent = 'This is the glorious text-content!';

const para = document.createElement('p')
para.textContent = "Hey I'm red!";
para.style.color = 'red';

const h3 = document.createElement('h3');
h3.textContent = "I'm a blue h3";
h3.setAttribute('style', 'color:blue');

const div2 = document.createElement('div');
const div2_h1 = document.createElement('h1');
const div2_p = document.createElement('p');
div2.setAttribute('style', 'background-color:pink; border-style:solid; border-color:black; ');

div2_h1.textContent = "I'm a div too";
div2_p.textContent = "ME TOO!"

div2.appendChild(div2_h1);
div2.appendChild(div2_p);


container.appendChild(content);
container.appendChild(para);
container.appendChild(h3);
container.appendChild(div2);