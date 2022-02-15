
// THIS IS THE LONG VERSION

// let toggle = document.getElementById("aside");

// let noShow = true;

// function showAside () {
//     if (noShow) {
//         toggle.style.display = "block";
//         noShow = false;
//     } else {
//         toggle.style.display = "none";
//         noShow = true;
//     }
// }

// Defining the element "toggle" by getting the aside element from the DOM

let toggle = document.getElementById("aside");

// Naming the function "showAside" and toggling the aside menu by adding and removing the ".show" class defined in the CSS to the aside element in the HTML

function showAside() {
    toggle.classList.toggle("show");
}
