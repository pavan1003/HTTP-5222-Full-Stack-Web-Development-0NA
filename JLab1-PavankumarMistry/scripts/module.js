// MODULE LAB 1
// Private Property array for list of items
let privateListItems = [];

// function to add items
function addItem(item) {
    privateListItems.push(item);
}

//function to get the total items
function getItemCount() {
    return privateListItems.length;
}

// Export the functions only
export { addItem, getItemCount };
