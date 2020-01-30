var ham = document.getElementById("ham");
var main = document.getElementById("menu");

// * Ma solution
ham.addEventListener("click", function() {
    menu.classList.toggle("is-active");
    ham.classList.toggle("is-active");
});

// * Solution prof
/*
if (ham != null && main != null) {
    ham.addEventListener("click", function() {
        if(main.className == 'l-main-nav is-active') {
            main.className = 'l-main-nav';
        }
        else {
            main.className = 'l-main-nav is-active';
        }
    });
}
*/
