
function getGifs(random) {
    
    var queryUrl = "https://api.giphy.com/v1/gifs/search?api_key=TYk5OuT12bMUq3VU1XCnAktRF5o9pTJI&q=surfing&limit=10&offset=0&rating=G&lang=en";

    $.ajax({
        url: queryUrl,
        method: "GET"
    }).then(function (response) {
        for (var i = 0; i < response.data.length; i++) {
            var p = $("<p>");
            p.text("Rated: " + response.data[i].rating);
            var img = $("<img>");
            img.attr("src", response.data[i].images.original.url);
            $("#gif-holder").append(p, img);
        }
    });
}

getGifs("surfing");

function makeButtons() {
    var random = ["surfing","travel","photography"];
    // loop through an array of strings
    // for each element in the array 
    for(var i = 0; i < random.length; i++) {
        // make a new button 
        var btn = $("<button>");
        // and a value of the title of the show 
        btn.text(random[i]);
        // with a data-attribute of data-title
        btn.attr("data-title", random[i]);
        // add the class of btn btn-success
        btn.addClass("btn btn-success show-btn");

        // append the new button the #buttons div
        $("#buttons").append(btn);

        // function renderButtons() {
      
 $("#topics-view").empty();
 for (var i = 0; i < topics.length; i++) {
     var a = $("<button>");
      a.addClass("topic");
       a.attr("data-name", topics[i]);
       a.text(topics[i]);
       $("#topics-view").append(a);
        }
      };
    }
// }
makeButtons();

// listen for the click .ran-btn
$(document).on("click", ".ran-btn", function(event){
    console.log("clicked on a btn");
    // clear gifs from the previous page 
    $("#gif-holder").empty();

    // get the buttons data-attribute value
     var ran = $(this).attr("data-title");
     console.log(ran);

    // call the function with that value
    // add new gifs
    getGifs(ran);
});

      


        // <!-- Try using a loop that appends a button for each string in the array.
        // When the user clicks on a button, the page should grab 10 static, 
        // non-animated gif images from the GIPHY API and place them on the page. -->

        
        
        // <!-- When the user clicks one of the still GIPHY images, the gif should animate. 
        // If the user clicks the gif again, it should stop playing. -->
        
        // <!-- Under every gif, display its rating (PG, G, so on). -->
        
        // <!-- This data is provided by the GIPHY API.
        // Only once you get images displaying with button presses should you move on to the next step.
        // Add a form to your page takes the value from a user input box and adds it into your topics array. 
        // Then make a function call that takes each topic in the array remakes the buttons on the page. -->
        
        // <!-- Deploy your assignment to Github Pages. -->
        
        // <!-- Rejoice! You just made something really cool.
        //  --> 
        