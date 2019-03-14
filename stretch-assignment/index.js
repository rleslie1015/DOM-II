//step 3: build a Block base class
class Block {
    //constructor
    constructor(block) {
        this.block = block;
        console.log(block);
        //this.blocks.addEventListener("clicked", this.bincd);
        this.block.addEventListener('click', () => this.blockClick());
    }
    //methods:
    blockClick(block) {
        TweenMax.to(".block", 0.5, {x:600});
       
      }
}

//step 1: queryselect the block class and assigned it to a variable
const block = document.querySelectorAll(".block");
//always console.log to test what you created a reference to 
console.log(block);

//step 2: the for each
block.forEach(function (block) {
    return new Block(block);
});