const book = {
    title: "The prisoner of Azkaban",
    author: "J. K. Rowling",
    published: 1999,
    numberOfPages: 440,
    rating: 5,
    bestseller: true,
    series: "Harry Potter",
    volume: 3,
    ISBN: "0439136350",
    publisher: 'Scholastic',
    bookmarkedPage: 325,
    loadBookmarkedPage: function(){
        console.log(this.bookmarkedPage);
        return this.bookmarkedPage;
    }
}

// the dot notation to access the property value
// console.log(`"${book.title}" by ${book.author}`);
// we can change the value/variables of the keys in objects
// book.title = "Harry Potter and the prisoner of Azkaban";
// console.log(`"${book.title}" by ${book.author}`);
// the square braket notation to access the property value
// console.log(`"${book["title"]}" by ${book["author"]}`);

// book.loadBookmarkedPage();



// object constructure based on sigle objeckBook
function Book(title,author, published,numberOfPages, rating, bestseller, series, volume, ISBN, publisher, bookmarkedPage){
    this.title= title;
    this.author= author;
    this.published= published;
    this.numberOfPages= numberOfPages;
    this.rating= rating;
    this.bestseller= bestseller;
    this.series= series;
    this.volume= volume;
    this.ISBN= ISBN;
    this.publisher= publisher;
    this.bookmarkedPage= bookmarkedPage;
    this.loadBookmarkedPage = function(){
        return this.bookmarkedPage;
    }

    this.staticArrowFunction = () => "I am a static function";

}

let potter1 = new Book("Harry Potter and philospher's stone","J. K. Rowling", 1997, 350,5, true, 'Harry Potter', 1, "0900909090", "Scholastic", 325 );  
let potter2 = new Book("Harry Potter and the chamber of secret","J. K. Rowling", 1997, 350,5, true, 'Harry Potter', 1, "0090909090", "Scholastic", 325 ); 
let potter3 = new Book("Harry Potter and the prisoner of Azkaban","J. K. Rowling", 1997, 350,5, true, 'Harry Potter', 1, "0900909090", "Scholastic", 325 ); 


console.log(potter1.author)
console.log(Object.keys(potter1));

