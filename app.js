// let $button = document.getElementById("button");
// let $number = document.getElementById("number");
// let $circle = document.getElementById("circle");
// let $square = document.getElementById("square");
// let $rectangle = document.getElementById("rectangle");
// let $box=document.getElementById("box");
// let numberInShape = 1;
// let oldValue = 0;

// $button.onclick=()=>{
// let noOfShapes = Number(number.value);
// noOfShapes += oldValue;
// for(let i=numberInShape; i<=noOfShapes; i++){
//     if($circle.checked==true){
//         let circle = document.createElement("div");
//         circle.innerText=i;
//         circle.setAttribute("class", "circle");
//         $box.append(circle);
//     }
//     else if($square.checked){
//         let square = document.createElement("div");
//         square.innerText=i;
//         square.setAttribute("class", "square");
//         $box.append(square);
//     }
//     else{
//         let rectangle = document.createElement("div");
//         rectangle.innerText=i;
//         rectangle.setAttribute("class", "rectangle");
//         $box.append(rectangle);
//     }
//     numberInShape++;
// }
// oldValue=noOfShapes;
// }
let $button = document.getElementById("button")
let $number = document.getElementById("number")
let $circle = document.getElementById("circle")
let $square = document.getElementById("square")
let $rectangle = document.getElementById("rectangle")
let $box = document.getElementById("box")
let noInShape = 1;
let oldValue = 0;

$button.onclick=()=>{
    let noOfShapes = Number(number.value);
    noOfShapes += oldValue;
    for(let i=noInShape; i<=noOfShapes; i++){
        if($circle.checked==true){
            let circle = document.createElement("div");
            circle.innerText = i;
            circle.setAttribute("class", "circle");
            $box.append(circle);
        }
        else if($square.checked){
            let square = document.createElement("div");
            square.innerText=i;
            square.setAttribute("class", "square");
            $box.append(square);
        }
        else{
            let rectangle = document.createElement("div");
            rectangle.innerText=i;
            rectangle.setAttribute("class", "rectangle");
            $box.append(rectangle)
        }
        noInShape++;
    }
    oldValue = noOfShapes;
}