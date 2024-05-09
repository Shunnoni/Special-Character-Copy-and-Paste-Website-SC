document.addEventListener("DOMContentLoaded", function() {
    // Get references to the dropdown options
    var option1 = document.getElementById("option1");
    var option2 = document.getElementById("option2");
    var option3 = document.getElementById("option3");

    // Add click event listeners to the dropdown options
    option1.addEventListener("click", function() {
        alert("Option 1 clicked!");
        navigator.clipboard.writeText("Text you want to copy");


        
    });

    option2.addEventListener("click", function() {
        alert("Option 2 clicked!");
        // You can add your desired functionality here
    });

    option3.addEventListener("click", function() {
        alert("Option 3 clicked!");
        // You can add your desired functionality here
    });
    
        function copyToClipboard(text) {
        navigator.clipboard.writeText(text)
            .then(function() {
                console.log('Text copied to clipboard:', text);
                alert('Text copied to clipboard: ' + text);
            })
            .catch(function(error) {
                console.error('Unable to copy text to clipboard: ', error);
                alert('Unable to copy text to clipboard.');
            });
    }
});
