textarea = document.querySelector("#input-space");
textarea.addEventListener('input', autoResize, false);
      
function autoResize() {
    this.style.height = 'auto';
    this.style.height = this.scrollHeight + 'px';
}

const mainEl = document.querySelector(".main")
const icon = document.getElementById("icon")
const iconSrc = icon.src
icon.addEventListener('click', () => {
    mainEl.classList.toggle("dark-mode")
    // icon.toggle.src='images/icon-sun.svg' 
    icon.style.transition  = "all 3s"
    if(mainEl.classList.contains("dark-mode")){
        document.getElementById("icon").src = 'images/icon-sun.svg';
        // iconSrc.style.transition = "all 3s ease"
    } else {
        document.getElementById("icon").src = 'images/icon-moon.svg';
        // iconSrc.style.transition = "all 3s ease"
    }



    // if(iconSrc.indexOf('icon-sun.svg') != -1){
    //     document.getElementById('icon').src = 'images/icon-sun.svg';
    // } 
    // else {
    //     document.getElementById('icon').src = 'images/icon-moon.svg' 
    // }
})




















const counter = document.querySelector(".count span")

counter.innerText = document.querySelectorAll(".textarea").length


const inputSpace = document.getElementById("input-space")
const checkCircle = document.getElementById("enter")
const cancelBtn = document.querySelector(".cancel")
const todoItems = document.querySelector(".display")
const itemId = document.querySelector('.filter input[type="radio"]:checked')





checkCircle.addEventListener('click', () => {
    if (inputSpace.value.length > 0) {
        todoList(inputSpace.value)
    }

    if (inputSpace.value != ""){
        inputSpace.value = ""
    }
})



const todoList = (inputs) => {

    let newDiv = document.createElement('li')

    newDiv.innerHTML = `<label name="text" id="textarea" class="textarea">
        <input type="checkbox" class="checkbox"> <span class="text">${inputs}</span> 
        <span class="remove"></span>
    </label>`

    if(itemId.id === 'completed'){
        item.classList.add('hidden')
    }
    
    
    todoItems.append(newDiv)
    
    counterfunc(1)
}




const counterfunc = (num) => {
    counter.innerText = +counter.innerText +  num
}


const removeItem = (item) => {
    item.remove()
    counterfunc(-1)
}

todoItems.addEventListener('click', (e) => {
    if(e.target.classList.contains("remove")){
        removeItem(e.target.parentElement)
    }
})


// for (var i = 0; i < cancelBtn.length; i++) {
//     cancelBtn[i].addEventListener('click', () => {
//         console.log("textEls")
//     });
// }


const checker = document.querySelectorAll(".filter input")
// console.log(tags)


checker.forEach(item => item.addEventListener('change', (event)=> {
    filterTodos(event.target.id)
    // console.log(item)
}))


const filterTodos = (id) => {

    const allList = document.querySelectorAll('li');

    switch(id){
        case 'all':
            allList.forEach(item => {
                item.classList.remove('hidden')
            })
        break;
        case 'active':
            allList.forEach(item => {
                if(item.querySelector('input').checked){
                    item.classList.add('hidden')
                } else{
                    item.classList.remove('hidden')
                }
            })
        break;
        default:
            allList.forEach(item => {
                if(item.querySelector('input').checked){
                    item.classList.remove('hidden')
                }else {
                    item.classList.add('hidden')
                }
            })
        break;
    }

}

const clearCompleted = document.querySelector('.clear')

clearCompleted.addEventListener('click', () => {
    const itemChecked = document.querySelectorAll('.textarea input[type="checkbox"]:checked')
    itemChecked.forEach(item => {
        removeItem(item.closest('li'))
    })
})



