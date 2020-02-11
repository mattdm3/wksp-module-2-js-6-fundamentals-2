// Exercise 1.1
// ----------
// Take a look at the HTML file
// There are 4 buttons that are supposed to do different
// things when clicked.

// button one disappears
// button two turns 'crimson'
// button three turns 'lightblue'
// button four starts shaking... (animation provided in styles.css as a class called 'jitters')

// NO MODIFICATIONS OUTSIDE OF THE EXERCISE FOLDER (i.e. the css is read-only)

// Guidelines
// - write only one event listener
// - use a switch statement

let btnList = document.querySelector("#btn-list");

for (i = 0; i < btnList.children.length; i++) {
    btnList.children[i].addEventListener("click", function (e) {
        switch (e.target.id) {
            case "btn-1":
                e.target.style.visibility = "hidden";
                break;
            case "btn-2":
                e.target.style.background = "red";
                break;
            case "btn-3": e.target.style.backgroundColor = "blue";
                break;
            case "btn-4": e.target.classList.add("jitters");
                break;
            default:
                break;
        }

    })
}


