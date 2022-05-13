const storeButton = document.getElementById('storeButton');
const dataParagraph = document.getElementById('dataParagraph');
const textInput = document.getElementById('textInput');
const removeButton = document.getElementById('removeButton');

// const obj = {
//     firstName: 'Mona',
//     lastName: 'Akbarpour',
//     age: 20,  
// };

const obj = JSON.parse(localStorage.getItem('heyThatIsMe'));
console.log(obj)

storeButton.onclick = () => {
    localStorage.setItem('userInput', textInput.value);
    localStorage.setItem('test123','Some other value');
    putDataInToDom()
}

removeButton.onclick = ()=>{
    // localStorage.removeItem('userInput');
    localStorage.clear();
    textInput.value = '';
    putDataInToDom()
}

// dataParagraph.innerText = `Your data was ${localStorage.getItem('userInput')}`; 

function putDataInToDom(){
    dataParagraph.innerText = `Your data was: ${localStorage.getItem('userInput')}`
}

putDataInToDom();
