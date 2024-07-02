console.log('***** Music Collection *****')
// Safe Zone -- Write code below this line

let myCollection = [];



function addToCollection(collection, title, artist, yearPublished) {

  let album = {
    title: title,
    artist: artist,
    yearPublished: yearPublished
  }
collection.push(album);

return album;


}



let myobj = {

  title: "My Song Name",
  artist: "Munir Abshir",
  yearPublished: 2024
}

console.log(addToCollection(myCollection, "My Song Name", "Munir Abshir", 2030));
console.log(addToCollection(myCollection, "Thriller", "Michael Jackson", 1982));
console.log(addToCollection(myCollection, "Shape of You", "Ed sheeran", 2017));
console.log(addToCollection(myCollection, "Uptown Funk", "Bruno Mars and Mark Ronson", 2014));
console.log(addToCollection(myCollection, "Rolling in the Deep", "Adele", 2010));
console.log(addToCollection(myCollection, "Happy", "Pharrell williams", 2013));
console.log(addToCollection(myCollection, "Blinding Lights", "The Weekend", 2019));



console.log(myCollection);






// PLEASE DO NOT MODIFY THIS. Just leave it down here at the bottom. Think of it
// as a lil' chunk of friendly code that you don't need to understand right now.
// (It's used for automated testing.)
try {
  module.exports = {
    myCollection: typeof myCollection !== 'undefined' ? myCollection : undefined,
    addToCollection: typeof addToCollection !== 'undefined' ? addToCollection : undefined,
    showCollection: typeof showCollection !== 'undefined' ? showCollection : undefined,
    findByArtist: typeof findByArtist !== 'undefined' ? findByArtist : undefined,
    search: typeof search !== 'undefined' ? search : undefined,
  }
} catch (e) {
  // Do nothing
}
