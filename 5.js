/*Use the flex-direction Property to Make a Column
The last two challenges used the flex-direction property set to row. This property can also create a column by vertically stacking the children of a flex container.

Add the CSS property flex-direction to the #box-container element, and give it a value of column.*/

<style>
  #box-container {
    display: flex;
    height: 500px;
    flex-direction: column;
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