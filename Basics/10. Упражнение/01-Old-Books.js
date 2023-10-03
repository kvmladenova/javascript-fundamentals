function oldBook(input){
   let favoriteBook = input[0];
   let book = input[1];
   let index = 2;
   let bookCount = 0;
   
   while (favoriteBook !== book){
    if (book === 'No More Books'){
        console.log('The book you search is not here!');
        console.log(`You checked ${bookCount} books.`);
        break;
    }   
        bookCount += 1;
        book = input[index];
        index++;       
   }
   if (favoriteBook === book){
    console.log(`You checked ${bookCount} books and found it.`);
   }
   

   
}
oldBook (["The Spot",
"Hunger Games",
"Harry Potter",
"Torronto",
"Spotify",
"No More Books"])

