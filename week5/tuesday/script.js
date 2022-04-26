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

console.log(`"${book.title}" by ${book.author}`);
// we can change the value/variables of the keys in objects
book.title = "Harry Potter and the prisoner of Azkaban";
console.log(`"${book.title}" by ${book.author}`);
book.loadBookmarkedPage();



