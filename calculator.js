let display = document.getElementById("disp");
let button = document.querySelectorAll(".getbtn");
button.forEach((val) => {
   val.addEventListener("click", (e)=>{
    let btnInfo = e.target.innerText
    if(btnInfo == "x"){
        btnInfo = "*";
        display.value += btnInfo;
    }else if (btnInfo == "A/C") {
        display.value = " ";

    }
     else if (btnInfo == "="){
        display.value = eval(display.value);

    } else {
        display.value += btnInfo;
    }
   })
});

window.addEventListener("keypress", (eve) => {
     display.focus(); 
    })
function isNumberKey(evt){
    var charCode = (evt.which) ? evt.which : event.keyCode
            if (charCode < 36 || charCode > 62)
                return false;
            return true;
        }



































// // only number input 
// window.addEventListener("keypress", (eve) => {
//         display.focus(); 
// })
// function isNumberKey(evt){
//     var charCode = (evt.which) ? evt.which : event.keyCode
//     if (charCode > 31 && (charCode != 46 &&(charCode < 48 || charCode > 57)))
//         return false;
//     return true;
// }

// // linking btn 
// one.addEventListener("click", () => {
//     display.value += one.innerText;
// })

// two.addEventListener("click", () => {
//     display.value += two.innerText;
// })
// three.addEventListener("click", () => {
//     display.value += three.innerText;
// })
// four.addEventListener("click", () => {
//     display.value += four.innerText;
// })
// five.addEventListener("click", () => {
//     display.value += five.innerText;
// })
// six.addEventListener("click", () => {
//     display.value += six.innerText;
// })
// seven.addEventListener("click", () => {
//     display.value += seven.innerText;
// })
// eight.addEventListener("click", () => {
//     display.value += eight.innerText;
// })
// nine.addEventListener("click", () => {
//     display.value += nine.innerText;
// })
// add.addEventListener("click", () => {
//     display.value += add.innerText;
// })
// sub.addEventListener("click", () => {
//     display.value += sub.innerText;
// })






// let ans = equals.addEventListener("click", () => {
//     let doMaths = display.value;
    
// })