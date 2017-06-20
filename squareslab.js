// var x = document.getElementById("myBtn");
// function myFunction () {
//     var x = document.createElement('Button');
//     var t = document.createTextNode('Click me');
//     x.appendChild(t);
//     document.body.appendChild(x);
// }

var x = document.getElementById("myBtn");
function myFunction () {
    var x = document.createElement('Button');
    var myDiv = document.createElement('div');
    x.appendChild(myDiv);
    document.body.appendChild(x);
}
