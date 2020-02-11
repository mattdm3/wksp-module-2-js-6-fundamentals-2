// Exercise 1.3
// ----------

// STEP 1
// Reimplement the functionality of 1.1 and 1.2
// - button one disappears
// - button two turns 'crimson'
// - button three turns 'lightblue'
// - button four starts shaking... (animation provided in styles.css)
// - This time the buttons should toggle.
// - Meaning if the user clicks on them a second time, it should go back to initial state.
// - initial button color is 'gold'
// - initial opacity is '100'

const btnList = document.querySelector("#btn-list");

for (id = 1; id < 5; id++) {
    let btnId = document.getElementById(`btn-${id}`);
    btnId.style.opacity = "100";
    btnId.style.backgroundColor = "gold";
}

function toggleColor(id, color) {
    let element = document.getElementById(id);
    let currentColor = element.style.backgroundColor;

    element.style.backgroundColor = currentColor === "gold" ? color : "gold";

}

function handleReset() {
    for (id = 1; id < 5; id++) {
        let btnId = document.getElementById(`btn-${id}`);
        btnId.style.opacity = "100";
        btnId.style.backgroundColor = "gold";

        if (id === 4) {
            btnId.classList.remove('jitters');
        }
    }
}

function handleClick(e) {
    btnId = e.target.id;
    let element = document.getElementById(btnId);

    switch (btnId) {
        case "btn-1":
            element.style.opacity = element.style.opacity === "100" ? "0" : "100";
            break;
        case "btn-2":
            toggleColor(btnId, "crimson");
            break;
        case "btn-3":
            toggleColor(btnId, "lightblue");
            break;
        case "btn-4":
            element.classList.toggle("jitters");
            break;
        case "reset":
            handleReset();
        default:
            break;

    }
}

btnList.addEventListener("click", handleClick)





// NO MODIFICATIONS OUTSIDE OF THE EXERCISE FOLDER (i.e. the css is read-only)

// STEP 2
// The new RESET button should reset all of the buttons to their original state.

// HINT:
// to remove the 'jitters' class, check the length of the classList.
