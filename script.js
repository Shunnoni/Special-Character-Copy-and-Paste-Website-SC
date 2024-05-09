document.addEventListener("DOMContentLoaded", function() {
    // Get references to the dropdown options
    var option1 = document.getElementById("option1");
    var option2 = document.getElementById("option2");
    var option3 = document.getElementById("option3");

    // Add click event listeners to the dropdown options
    option1.addEventListener("click", function() {
        alert("Selected bullet point!");
        var blob = new Blob(["\u2022"], {type: "text/plain"});
var url = window.URL.createObjectURL(blob);
var a = document.createElement('a');
a.href = url;
a.download = 'bullet_point.txt';
a.click();
window.URL.revokeObjectURL(url);



        
    });

    option2.addEventListener("click", function() {
        alert("Selected flower!")
var blob = new Blob(["\u273f"], {type: "text/plain"});
var url = window.URL.createObjectURL(blob);
var a = document.createElement('a');
a.href = url;
a.download = 'flower.txt';
a.click();
window.URL.revokeObjectURL(url);
    });

    option3.addEventListener("click", function() {
        alert("Selected paragraph symbol!"); 
        var blob = new Blob(["\u00B6"
], {type: "text/plain"});
var url = window.URL.createObjectURL(blob);
var a = document.createElement('a');
a.href = url;
a.download = 'paragraph.txt';
a.click();
window.URL.revokeObjectURL(url);
    });       
