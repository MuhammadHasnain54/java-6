document.write("<center> <h2> Assignmnent Of Array </center></h2><br>")

let education = ['SSC', 'HSC', 'BCS', 'BS', 'BCOM', 'MS', 'M. Phil.', 'PhD <br><br>'];
for (let i = 0; i < education.length ; i++) {
   document.write(i," ) "  ,education[i] , "<br>");

}
let studentsName = ["Ahmed" , "Hammad" , "Hamza"];
let score = [250 , 400 , 390 ,];
let totalMarks = [500];
for (let i = 0; i < score.length; i++) {
   document.write("Score of " , studentsName[i] , " is " , score[i] , " <br><b>Percentage = </b>" , score[i]/totalMarks*100 , " % ", "<br><br>");

}


// var colorName = ["red" , "green" , "blue" , "yellow"];
// document.write("These are color names <br>" , colorName , "<br>");

// var addColor1 = prompt("Enter a color you want to add");
// colorName.unshift(addColor1);
// document.write("This is updated color serial: " + colorName , "<br>");
// var addColor2 = prompt("Enter a color you want to add in the last of array");
// colorName.push(addColor2);
// document.write("This is updated color serial: " , colorName , "<br>");
// colorName.unshift("Silver" , "Golden");
// document.write("These are newly updated color names: " , colorName , "<br>");
// colorName.shift();
// document.write("These are newly updated color names: " , colorName , "<br>");
// colorName.pop();
// document.write("These are newly updated color names: " , colorName , "<br>");
// var userPermission = prompt("tell me the color.");
// var userPermission1 = prompt("Tell me the desired position index");
// colorName.splice(userPermission1 , 0 , userPermission);
// document.write("These are newly updated color names: " + colorName , "<br>");
// var userPermission2 = prompt("Enter a index number at ehich you want to delete the color: ");
// var userPermission3 = prompt("Enter how many color do you want to delete");
// colorName.splice(userPermission2 , userPermission3);
// document.write("These are newly updated color names: " + colorName , "<br>");
