var text1 = "Jelly sweet roll drage gummies. Jelly-o cotton candy gingerbread. Dessert tart bear claw gummi bears I love oat cake cotton candy sesame snaps carrot cake. Croissant marshmallow tiramisu icing chocolate cake. I love pie icing. Sweet I love sweet roll cheesecake dessert. Tiramisu gingerbread I love. Muffin chocolate cake powder cheesecake oat cake tootsie roll candy. Brownie toffee powder tiramisu. Wafer I love jujubes croissant. Chocolate cake candy jujubes tootsie roll bonbon toffee I love.";
var text2 = "Cotton candy chocolate cake macaroon applicake I love. Tart soufflé I love powder. I love tiramisu lollipop pie. Pudding gummi bears sweet. Candy chocolate I love jujubes pie donut. Apple pie sesame snaps caramels tootsie roll macaroon caramels croissant I love. Sweet roll chocolate lemon drops. I love I love muffin gummi bears I love cotton candy.";
var text3 = "Lemon drops ice cream I love danish soufflé cake jelly cupcake. Bear claw I love I love tart I love liquorice bear claw. Halvah chocolate gummi bears jelly-o jelly-o lollipop lemon drops liquorice. Candy canes tiramisu candy faworki apple pie. Chocolate jujubes sesame snaps ice cream cupcake. Halvah topping chupa chups biscuit. I love I love chupa chups tootsie roll marshmallow tart gummi bears chocolate.";

var storageState1 = "closed";

var content1 = document.querySelector("#content1");
var event1 = document.querySelector("#hoverBox1");
var arrow1 = document.querySelector("#arrow1");
var hoverBox1 = document.querySelector("#hoverBox1");

event1.addEventListener('click', toggle1);

function toggle1() {
  if (storageState1 === "closed") {
      content1.textContent = text1;
      arrow1.className = "fa fa-arrow-down arrowIcon";
      hoverBox1.className = "hoverDownArrow";
      storageState1 = "open";
  } else {
    content1.textContent = "";
    storageState1 = "closed";
    hoverBox1.className = "hoverRightArrow";
    arrow1.className = "fa fa-arrow-right arrowIcon";
  }
}

var storageState2 = "closed";

var content2 = document.querySelector("#content2");
var event2 = document.querySelector("#title2");

event2.addEventListener('click', toggle2);

function toggle2() {
  if (storageState2 === "closed") {
      content2.textContent = text2;
      storageState2 = "open";
  } else {
    content2.textContent = "";
    storageState2 = "closed";
  }
}

var storageState3 = "closed";

var content3 = document.querySelector("#content3");
var event3 = document.querySelector("#title3");

event3.addEventListener('click', toggle3);

function toggle3() {
  if (storageState3 === "closed") {
      content3.textContent = text3;
      storageState3 = "open";
  } else {
    content3.textContent = "";
    storageState3 = "closed";
  }
}

// var title = document.querySelector(".entryTitle");
// var content = document.querySelector(".entryContent");
// console.log("myEntryTitle: " + myEntryTitle);
// console.log("myEntryContent: " + myEntryContent);
// var storageState = "closed";
// var contentStorage = myEntryContent.textContent;
//
// document.querySelector(".entryTitle").addEventListener('click', toggle);
//
//
//   console.log("myEntryContent: " + myEntryContent.textContent);
//   console.log("contentStorage: " + contentStorage);
//   if (storageState === "open") {
//     myEntryContent.textContent = "";
//     storageState = "closed";
//     console.log("myEntryContent: " + myEntryContent.textContent);
//     console.log("contentStorage: " + contentStorage);
//   } else {
//     myEntryContent.textContent = contentStorage;
//     storageState = "open";
//   }
// };
