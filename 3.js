/*Use the flex-direction Property to Make a Row
Adding display: flex to an element turns it into a flex container. This makes it possible to align any children of that element into rows or columns. You do this by adding the flex-direction property to the parent item and setting it to row or column. Creating a row will align the children horizontally, and creating a column will align the children vertically.

Other options for flex-direction are row-reverse and column-reverse.

Note: The default value for the flex-direction property is row.

Add the CSS property flex-direction to the #box-container element, and give it a value of row-reverse.

*/

<style>
  #box-container {
    display: flex;
    height: 500px;
    flex-direction:row-reverse;
  }
  #box-1 {
    background-color: dodgerblue;
    width: 50%;
    height: 50%;
  }

  #box-2 {
    background-color: orangered;
    width: 50%;
    height: 50%;
  }
</style>

<div id="box-container">
  <div id="box-1"></div>
  <div id="box-2"></div>
</div>