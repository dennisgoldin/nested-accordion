"use strict";

var openState = "fa fa-arrow-down arrowIcon fa-1x";
var closedState = "fa fa-arrow-right arrowIcon fa-1x";
var arrowDown = "hoverDownArrow";
var arrowRight = "hoverRightArrow";

$("span").on("click", toggleView);

function toggleView() {

  var content = $(this).siblings().children();
  var arrow = $(this).children().children();
  var hover = $(this);
  var currentId = $(this).attr("id");

  if (arrow.attr("class") === closedState) {
    content.css("height", "auto");
    arrow.removeClass().addClass(openState);
    hover.removeClass().addClass(arrowDown);

    $("span").each( function(i , val) {

      var myId = "hoverBox" + (i + 1);

      if ( myId != currentId ) {
        $(this).siblings().children().css("height", "1px");
        $(this).children().children().removeClass().addClass(closedState);
        $(this).removeClass().addClass(arrowRight);
      }
    });

  } else {
    content.css("height", "1px");
    arrow.removeClass().addClass(closedState);
    hover.removeClass().addClass(arrowRight);
  }
}
