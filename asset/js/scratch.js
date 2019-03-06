var topics = ["surfing","travel","photography"];

var queryURL = "https://api.giphy.com/v1/gifs/search?api_key=bucq4iEwnp7zWO9BisyORctGCl805o2M&q=topic&limit=10&offset=0&rating=PG&lang=en";

function renderButtons() {
        
 $("#topics-view").empty();
 for (var i = 0; i < topics.length; i++) {
     var a = $("<button>");
      a.addClass("topic");
       a.attr("data-name", topics[i]);
       a.text(topics[i]);
       $("#topics-view").append(a);
        }
      };
     
 $("#add-topic").on("click", function(event) {
          event.preventDefault();
          var topic = $("#topic-input").val().trim();
          topics.push(topic);
           renderButtons();

          //  var queryURL = "https://api.giphy.com/v1/gifs/search?api_key=bucq4iEwnp7zWO9BisyORctGCl805o2M&q=topic&limit=10&offset=0&rating=PG&lang=en";

      $.ajax({
          url: queryURL,
          method: "GET"
        }).then(function(response) {
            var topicsDiv = $("<div class='topic'>");
            console.log(response);

          
      });
      
      
      renderButtons();
      


    
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
        