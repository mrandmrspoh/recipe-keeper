window.onload = () => {
    //Find the add ingredient button
    let addIngredientButton = document.body.querySelector('#add-ingredients');
    //Add a click listener to add ingredients
    addIngredientButton.addEventListener('click', addIngredient)
}

function addIngredient(){
    //Ingredients is a node list of the ingredients (by default 6)
    let ingredients = this.parentNode.childNodes[2].childNodes;
    //Clone the last ingredient
    let clonedNode = ingredients[ingredients.length - 1].cloneNode(true);
    //Change the numbering of this clonedNode, and empty the fields
    clonedNode.childNodes[0].innerText = ingredients.length + ":"
    for (let i=2; i<8; i+=2){
        clonedNode.childNodes[i].name = clonedNode.childNodes[i].name.slice(0,-1) + ingredients.length;
        clonedNode.childNodes[i].innerText = "";
    }
    //Append the clonedNode to the ingredients list
    ingredients[ingredients.length - 1].parentNode.insertBefore(clonedNode, ingredients[ingredients.length - 1].nextSibling);
}