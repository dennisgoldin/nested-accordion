**What does it do?**
Its a nested list of recipes that can display or hide the body of the recipe leaving only the recipe title visible.
**What interactive elements exist?**
Recipe title, arrow icon, recipe body
**How do you interact with them?**
Mouse-over, clicking
**What visual effects are produced by interacting?**
  * Mouse-over – When the user places the mouse pointer over arrow icon or recipe title, the color of arrow changes from gray to blue.  Also the arrow rotates a quarter turn clockwise from straight right.
  * Clicking – When the user clicks the arrow icon or the recipe title, the recipe body appears out of thin air below the recipe title.
**How does it do it?**
The blueprint example is using JavaScript to manipulate class names in the `<li>` tag containing the arrow and its corresponding recipe title and recipe body using CSS class `cbp-ntopen`.  I have to admit it wasn’t until I finished the coding and typed in these answers that I realized my original answer to this question was incorrect.  It caused me to start over and miss the following when coding for the assignemnt:  It appears the CSS is setting the height of the element `<li>` to zero height to hide the recipe body.  
`:hover` is used for the icon.
**What existing HTML elements are changed?**
height, overflow
**What new HTML elements are created?**
`className=”cbt-ntopen”` is created in the `<li>` tag containing the recipe body.
**What CSS styles are used to produce the effect?**
`height=”auto”` is show, `height=0` and `overflow=”hidden”` is hide ; `color` and `transform` are used for the arrow icon
