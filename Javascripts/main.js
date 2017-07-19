//these variables point to the id tags in the html, but won't be called until the addEventListener.

var height = document.getElementById("treeHeight");
var char = document.getElementById("treeChar");

//This function takes the two id/variables and puts them into a nested for loop. The first for loop establishes the height, by outputing the amount of lines the tree is. The first nested for loop creates spacing on the left side. As i gets larger with each pass, the amount of spacing decreases, causing the tree shape. The second nested for loop creates how many times the character will show up next to the spacing. 

function growTree(height, char) {
    for(var i = 0; i <= height; i++) {
        var output = "";
        for(var j = 0; j < height - i; j++) {
            output += " ";
        }
        for(var k = 0; k < (i * 2) - 1; k++) {    
            output += char;
        }
        console.log(output);
    }  
}

//The addEventListener calls a function when an event is activated. Either a button is 'click'ed or a key on the keyboard is released. The .value next to each variable allows the code to pull whatever input the user put inside the element and use it inside the function. 

button.addEventListener('click', function(){
    validateData(height, char)
    growTree(height.value, char.value);
});

document.addEventListener("keyup", function(event) {
    if (event.which === 13) {
        validateData(height, char)
        growTree(height.value, char.value);
    }
});

//Since a blank element length is 0, {var}.value.length == 0 will check out to see if both elements have any input inside of them. If they don't, it will run an alert on the screen. 

function validateData(height, char){
    if(height.value.length == 0 && char.value.length == 0){
        alert("Please enter a value for height and char")
    }
}