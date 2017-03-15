// Background image selector

var images = new Array ('img/backg1.jpg', 'img/backg2.jpg', 'img/backg3.jpg', 'img/backg4.jpg', 'img/backg5.jpg', 'img/backg6.jpg')
var index = 1;

$(".background-btn").click(function rotateImage() {
  $(".background-img").attr('src', images[index]);
    if (index == images.length-1) {
      index=0;
    } else {
      index++;
    }
});




  //strikethrough on li click


    $("ol").on("click", "li", function() {
      if($(this).css('color') === "rgb(52, 73, 94)") {
        $(this).css({
          "color": "black",
          "textDecoration" : "none",
        })
      } else {
        $(this).css({
          "textDecoration": "line-through",
          "color": "rgb(52, 73, 94)",
      })
      };
    });


// Fadeout on click on trash icon

$("ol").on("click", "span", function(event){
    $(this).parent().fadeOut(500, function(){
      $(this).remove();
    });
    event.stopPropagation();
});


// Adding List elements from input

// list item on submit button click

// clear input on user click
$("input[type='text']").on("click", function(){
$(this).val("");
});

$("input[type='text']").keypress(function(event){
  if(event.which == 13){
    alert("You clicked enter! Please click submit instead... :-)");
  }
});


$(".submit-btn").on("click", function(){
var todoText = $("#toDo").val();

    //create a new li and add to ul
    $("ol").append("<li><span><i class='fa fa-trash' aria-hidden='true'></i></span> " + todoText + "</li>").attr("class", "list-item");
});
