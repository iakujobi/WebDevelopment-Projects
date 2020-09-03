// Example of an array with objects inside it
var movies = [
   {
      title: "In Bruges",
      hasWatched: true,
      rating: 5
   },

   {
      title: "Frozen",
      hasWatched: false,
      rating: 4.5
   },

   {
      title: "Les Miserable",
      hasWatched: false,
      rating: 3.5
   }

]

movies.forEach(function (movie) {
   console.log(buildString(movie));
})

function buildString(movie) {
   var result = "You have ";
   if (movie.hasWatched) {
      result += "watched ";
   }
   else {
      result += "not seen ";
   }
   result += "\"" + movie.title + "\" - ";
   result += movie.rating + " stars";
   return result;
}