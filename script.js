// JavaScript code for emoji search functionality

// Selecting DOM elements
const input = document.querySelector("#search-bar");
const emojiContainer = document.querySelector("#emoji-container");


//If no search value is provided, it defaults to an empty string.
function renderEmojies(searchVal = ""){


    // Filtering the list of emojis based on search value
    let filteredList = emojiList.filter((emojiObj) =>{
        if(emojiObj.description.indexOf(searchVal) != -1){    //If the search value is not found, indexOf returns -1.
            return true;
        }

        if(emojiObj.tags.some((elem) => elem.startsWith(searchVal))){   //some method is used to iterate through each tag and check if any tag starts with the search value.
            return true;
        }

        if(emojiObj.aliases.some((elem) => elem.startsWith(searchVal))){
            return true;
        }
    })
     // If any of the conditions are met  the filter function returns true


    // Clearing the emoji container
    emojiContainer.innerHTML = "";
 // Rendering filtered emojis using a for loop
 for (let i = 0; i < filteredList.length; i++) {
    // Creating a new <div> element for each emoji card
    let div = document.createElement("div");
    // Creating HTML structure for each emoji card using template literals
    div.innerHTML = `
    <!-- Create a paragraph element with class "emoji" and insert the emoji from the filteredList array -->
    <p class="emoji">${filteredList[i].emoji}</p>

    <!-- Create a paragraph element with class "alias" and insert the first alias from  the filteredList array -->
    <p class="alias">${filteredList[i].aliases[0]}</p>

    <!-- Create a paragraph element with class "description" and insert the description from the filteredList array -->
    <p class="description">${filteredList[i].description}</p>
`;

    // Adding a class to each emoji card
    div.classList.add("emoji-card");
    // Appending the emoji card to the emoji container
    emojiContainer.appendChild(div);
}
}

// Function call to render emojis when the window loads
window.onload = () => renderEmojies();
     
                        

// Event listener for keyup event on search input
input.addEventListener("keyup", () => {
let searchVal = input.value;
// Calling renderEmojies function with the search value
renderEmojies(searchVal);
});