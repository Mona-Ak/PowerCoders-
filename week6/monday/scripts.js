/** declare list of authors based on img names 
 * 
 * to do. 
 * check special characters in name, 
 * check what happens with several first names or several last names
*/
// let authors = [
//     {
//         firstName: 'Andreas',
//         lastName: 'Neeser'
//     },
//     {
//         firstName: 'Anna',
//         lastName: 'Ruchat'
//     },
//     {
//         firstName: 'Arno',
//         lastName: 'Camenisch'
//     },
//     {
//         firstName: 'Barbara',
//         lastName: 'Schibli'
//     },
//     {
//         firstName: 'Demian',
//         lastName: 'Leinhard'
//     },
//     {
//         firstName: 'Flurina',
//         lastName: 'Bader'
//     },
//     {
//         firstName: 'Franco',
//         lastName: 'Supino'
//     },
//     {
//         firstName: 'Lukas',
//         lastName: 'Hartmann'
//     },
//     {
//         firstName: 'Marius',
//         lastName: 'Popescu'
//     },
//     {
//         firstName: 'Reto',
//         lastName: 'Haenny'
//     },
//     {
//         firstName: 'Sandra',
//         lastName: 'Kuenzi'
//     },
//     {
//         firstName: 'Simon',
//         lastName: 'Libsig'
//     }
// ];
// /** create object per author */
// let Author = function(firstName, lastName){
//     this.firstName = firstName;
//     this.lastName = lastName;
//     this.imgUrl = `img/tile_${firstName.toLowerCase()}_${lastName.toLowerCase()}.jpg`;
//     this.altText = `Portrait of ${firstName} ${lastName}`;
//     this.link = `authors/${firstName.toLowerCase()}-${lastName.toLowerCase()}.html`;
// }


// /** create function createTiles to create list items
//  * 
// <li>
//     <a href="authors/andreas-neeser.html">
//         <img src="img/tile_andreas_neeser.jpg" alt="Portrait of Andreas Neeser">
//         <h2>Andreas Neeser</h2>
//     </a>
// </li>
// */
// function createTiles(authors){
//     let tileList = [];
//     authors.forEach(author => {
//         const currentAuthor = new Author(author.firstName, author.lastName);
//         const liTag = document.createElement('li');
//         const aTag = document.createElement('a');
//         const imgTag = document.createElement('img');
//         const h2Tag = document.createElement('h2');
//         const spanTag = document.createElement('span')

//         aTag.href = currentAuthor.link;
//         imgTag.src = currentAuthor.imgUrl;
//         imgTag.alt = currentAuthor.altText;
//         spanTag.textContent = currentAuthor.firstName + ' ' + currentAuthor.lastName; 

//         liTag.appendChild(aTag);
//         aTag.appendChild(imgTag);
//         aTag.appendChild(h2Tag);
//         h2Tag.appendChild(spanTag);

//         tileList.push(liTag);
//     });
//     return tileList;
// }

/** create function addTiles to add all tiles to the DOM randomly */
// function addTiles(list){
//     const ulTag = document.querySelector('main ul');
//     /** randomize list first */
//     list = randomize(list);
//     list.forEach(li => ulTag.appendChild(li));
// }

// // tempList
// function randomize(list){
//     let randomNumber = 0;
//     let tempList = [];
//     list.forEach(item => {
//         do {
//             randomNumber = Math.floor(Math.random() * (list.length));
//         } while(tempList[randomNumber] !== undefined)

//         tempList[randomNumber]= item;
//     });
//     return tempList;
// }

// addTiles(createTiles(authors));

/** add an eventListener on the logo to rebuild the list on click */

class Author{
    constructor(firstName,lastName){
        this.firstName = firstName;
        this.lastName = lastName;
        this.imgUrl = `img/tile_${this.firstName.toLowerCase()}_${this.lastName.toLowerCase()}.jpg`;
        this.link = `authors/${this.firstName.toLowerCase()}-${this.lastName.toLowerCase()}.html`;
    }

    createTiles(){
        const liTag = document.createElement('li');
        const aTag = document.createElement('a');
        const imgTag = document.createElement('img');
        const h2Tag = document.createElement('h2');
        const spanTag = document.createElement('span');
        
        aTag.href = this.link;
        imgTag.src = this.imgUrl;
        imgTag.alt = this.altText;
        spanTag.textContent = this.firstName + ' ' + this.lastName; 
        
        liTag.appendChild(aTag);
        aTag.appendChild(imgTag);
        aTag.appendChild(h2Tag);
        h2Tag.appendChild(spanTag);
        return this;
        
    }

    addTiles(){
        
        const ulTag = document.querySelector('main ul');
        ulTag.appendChild(liTag);
        return this
    }
    
    randomize(){
        let randomNumber = 0;
        let tempList = [];
        list.forEach(item => {
        do {
            randomNumber = Math.floor(Math.random() * (list.length));
        } while(tempList[randomNumber] !== undefined)

        tempList[randomNumber]= item;
        });
    return tempList;
    }

}

let andreas = new Author('Andreas','Neeser');
let anna = new Author('Anna','Ruchat');
let arno = new Author('Arno','Camenisch');
let barbara = new Author('Barbara','Schibli');  
let demian = new Author('Demian','Leinhard');
let flurina = new Author('Flurina','Bader');
let franco = new Author('Franco','supino');
let lukas = new Author('Lukas','Hartmann');
let marius = new Author('Marius','Popescu');
let reto = new Author('Reto','Haenny');
let sandra = new Author('Sandra','Kuenzi');
let simon = new Author('Simon','Libsig');

let tileList = [andreas, anna, arno,barbara,demian,flurina,franco,lukas,marius,reto,sandra,simon];

tileList.forEach(item => {
    // item.createTiles();
    console.log(item.createTiles().addTiles())
    // console.log(Math.floor(Math.random(item.createTiles()) * tileList.length))
})



