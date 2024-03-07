// function myFunction() {
//     let text;
//     let person = prompt("Please enter your name:", "Harry Potter");
//     if (person == null || person == "") {
//       text = "User cancelled the prompt.";
//     } else {
//       text = "Hello " + person + "! How are you today?";
//     }
//     document.getElementById("demo").innerHTML = text;
//   }

function myFunction(){
    let text ;
    let a = prompt("Please Enter anything whatever you want!")
    text = `helo, ${a}`
    //alert(a)
    document.getElementById("demo").innerHTML = text;
}