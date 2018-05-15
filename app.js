// declare variable inside form 
const form = document.getElementById('shop-form');
const inputItem = document.getElementById('item');
const btnAddItem = document.querySelector('.btn');


// declare variable inside 
const cardCollection = document.querySelector('.card-action');

main();

function main (){
    form.addEventListener('submit',addItem);

    cardCollection.addEventListener('click',deleteitem);

    
}
function deleteitem(){
    console.log('delete item');
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
        li.appendChild(document.createTextNode(inputItem.value));
        
        // define collection ul variable
        let ul = document.querySelector('.collection');

    
        // create a link on handling delete icond
        let link = document.createElement('a');
        
        // add a classname on a link
        link.className='delete-item secondary-content'

        // append delete icon to link
        link.innerHTML = '<i class="fa fa-times" aria-hidden="true"></i>'

        // append link to list
        li.appendChild(link);

        // append li to ul
        ul.appendChild(li)
        // console log elements
        console.log(li);

        // 
    }
    event.preventDefault();
}