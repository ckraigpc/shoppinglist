// declare variable inside form 
const form = document.getElementById('shop-form');
const inputItem = document.getElementById('item');
const btnAddItem = document.querySelector('.btn');

main();

function main (){
    form.addEventListener('submit',addItem);
}
function addItem(event){
    if(inputItem.value === ""){
        alert('Enter items in your Cart');
    }else{
        // create an element list items for class collection
        let li = document.createElement('li');

        // add a classname for li
        li.className = "collection-item";
        
        // insert the input value in the li
        li.innerHTML = inputItem.value;
        
        // define collection ul variable
        let ul = document.querySelector('.collection');

        // append li to ul
        ul.appendChild(li)

        // console log elements
        console.log(ul);
    }
    event.preventDefault();
}