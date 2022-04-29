// const element =document.getElementById('hello');
// console.log(element);
// let parag = document.getElementsByTagName('p');
// let newPara = Array.from(parag);  
// console.log(parag);
// console.log(newPara);

// let img = element.childNodes[1].src = 'https://browsecat.net/sites/default/files/cute-desktop-wallpapers-wallpapers-95145-537390-7623694.png';
// element.childNodes[1].width = 500;


// const newP = document.createElement('p');
// element.appendChild(newP);
// newP.innerText = 'Power Coders is fun';
// const textNode = document.createTextNode('Hello world');
// element.appendChild(textNode);
// console.log(newP);

// ___________Events with inputs_______________

const input = document.getElementById('input');
const output = document.getElementById('output');
const button = document.getElementById('button');

// input.onkeyup = (event)=>{
//     let text = event.target.value;
//     output.innerText = text;
// };

// button.addEventListener('click', () => {
//     output.innerText = input.value;
// })
function onclick(){
    output.innerText = input.value;
    button.removeEventListener('click', onclick)
}

button.addEventListener('click', onclick)






