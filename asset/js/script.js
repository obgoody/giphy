console.log("WORKS"); 
function getGifs(random) {
    
    var queryUrl = "https://api.giphy.com/v1/gifs/search?api_key=bucq4iEwnp7zWO9BisyORctGCl805o2M&q=topic&limit=10&offset=0&rating=PG&lang=en";

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
        btn.addClass("btn btn-success ran-btn");

        // append the new button the #buttons div
        $("#buttons").append(btn);
    }
}
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
















