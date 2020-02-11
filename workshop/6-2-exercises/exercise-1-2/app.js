// Exercise 1.2
// ----------

// STEP 1
// Reimplement the functionality of 1.1 (Try to NOT look at your previous solution)
// button one disappears
// button two turns 'crimson'
// button three turns 'lightblue'
// button four starts shaking... (animation provided in styles.css)

// STEP 2
// This time the buttons should toggle.
// Meaning if the user clicks on them a second time, it should go back to initial state.
// initial button color is 'gold'

// NO MODIFICATIONS OUTSIDE OF THE EXERCISE FOLDER (i.e. the css is read-only)

// Hint:
// create a toggleColor function
// Because we are now going to work with the opacity and background of the buttons,
// they need to be set here. So that they are referencable via the the style attribute.
// initialize the background color for all of the buttons in here. (for loop)

let btnList = document.querySelector("#btn-list");


for (let i = 1; i < 5; i++) {
    let btnId = document.getElementById(`btn-${i}`);
    btnId.style.opacity = '100'
    btnId.style.backgroundColor = 'gold'
}

function toggleColor(id, color) {
    let currentColor = document.getElementById(id).style.backgroundColor;
    document.getElementById(id).style.backgroundColor = currentColor === "gold" ? color : "gold";
}

function handleClick(e) {
    let btnId = e.target.id;
    let btnElement = document.getElementById(btnId);
    console.log(btnId);
    switch (btnId) {
        case "btn-1":
            btnElement.style.opacity = btnElement.style.opacity === '100' ? '0' : '100';
            break;
        case "btn-2":
            toggleColor(btnId, "crimson");
            break;
        case "btn-3":
            toggleColor(btnId, "lightblue");
            break;
        case "btn-4":
            btnElement.classList.toggle("jitters");
            break;
        default:
            break;


    }


}



btnList.addEventListener("click", handleClick)