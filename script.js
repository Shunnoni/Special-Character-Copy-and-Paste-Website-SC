document.addEventListener("DOMContentLoaded", function() {
    // Get references to the dropdown options
    var option1 = document.getElementById("option1");
    var option2 = document.getElementById("option2");
    var option3 = document.getElementById("option3");

    // Add click event listeners to the dropdown options
    option1.addEventListener("click", function() {
        alert("Option 1 clicked!");
        // You can add your desired functionality here
    });

    option2.addEventListener("click", function() {
        alert("Option 2 clicked!");
        // You can add your desired functionality here
    });

    option3.addEventListener("click", function() {
        alert("Option 3 clicked!");
        // You can add your desired functionality here
    });
});
