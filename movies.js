const removeButton = `<button id="remove">Remove</button>`;

//Create list item using input for title and rating, add remove button, clear inputs 
$("#submit").click(function(e) {
    e.preventDefault();
      let title = $("#title").val();
      let rating = $("#rating").val();
      $("ul").append(`<li id="movie">`+`<b>Title: </b>`+title+` <b>Rating: </b>`+rating+`  `+removeButton+`</li>`)
      $("#title").val("");
      $("#rating").val("5");
    });

//Show rating number according to where sliding scale is
$("#rating").mousemove(function(){
    $("#rating-number").empty();
    $("#rating-number").prepend("<label>"+"Rating ("+$("#rating").val()+")"+"</label>")});

//Remove list item
$(".movie-list").on("click", "#movie", function(){$(this).remove()});
