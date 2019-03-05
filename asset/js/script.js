




















// //magical cat button event listener
//     $("#cat-button").on("click", function() {

//       //api link for the giphy 
//       var queryURL = "https://api.giphy.com/v1/gifs/random?api_key=dc6zaTOxFJmzC&tag=cats";

//       //ajax acces to the api
//       $.ajax({
//         url: queryURL,
//         method: "GET"
//       })

//       //function that retireves 
//         .then(function(response) {

//         //the gif url
//           var imageUrl = response.data.image_original_url;

//           //make an image tag
//           var catImage = $("<img>");

//           //set the source of the image
//           catImage.attr("src", imageUrl);
//           catImage.attr("alt", "cat image");

//           //stackes the image on the page
//           $("#images").prepend(catImage);
//         });
//     });