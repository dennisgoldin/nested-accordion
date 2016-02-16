var text1 = "Jelly sweet roll drage gummies. Jelly-o cotton candy gingerbread. Dessert tart bear claw gummi bears I love oat cake cotton candy sesame snaps carrot cake. Croissant marshmallow tiramisu icing chocolate cake. I love pie icing. Sweet I love sweet roll cheesecake dessert. Tiramisu gingerbread I love. Muffin chocolate cake powder cheesecake oat cake tootsie roll candy. Brownie toffee powder tiramisu. Wafer I love jujubes croissant. Chocolate cake candy jujubes tootsie roll bonbon toffee I love.";
var text2 = "Cotton candy chocolate cake macaroon applicake I love. Tart I love powder. I love tiramisu lollipop pie. Pudding gummi bears sweet. Candy chocolate I love jujubes pie donut. Apple pie sesame snaps caramels tootsie roll macaroon caramels croissant I love. Sweet roll chocolate lemon drops. I love I love muffin gummi bears I love cotton candy.";
var text3 = "Lemon drops ice cream I love danish cake jelly cupcake. Bear claw I love I love tart I love liquorice bear claw. Halvah chocolate gummi bears jelly-o jelly-o lollipop lemon drops liquorice. Candy canes tiramisu candy faworki apple pie. Chocolate jujubes sesame snaps ice cream cupcake. Halvah topping chupa chups biscuit. I love I love chupa chups tootsie roll marshmallow tart gummi bears chocolate.";


event1.addEventListener('click', toggle1);

function toggle1() {
  if (state1 === "closed") {
    content1.textContent = text1;
    arrow1.className = "fa fa-arrow-down arrowIcon fa-1x";
    hoverBox1.className = "hoverDownArrow";
    state1 = "open";
    // close #2
    content2.textContent = "";
    state2 = "closed";
    hoverBox2.className = "hoverRightArrow";
    arrow2.className = "fa fa-arrow-right arrowIcon fa-1x";
    // close #3
    content3.textContent = "";
    state3 = "closed";
    hoverBox3.className = "hoverRightArrow";
    arrow3.className = "fa fa-arrow-right arrowIcon fa-1x";
  } else {
    content1.textContent = "";
    state1 = "closed";
    hoverBox1.className = "hoverRightArrow";
    arrow1.className = "fa fa-arrow-right arrowIcon fa-1x";
  }
}
