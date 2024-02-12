// alert(90)
var addFile = document.getElementById('add-file');
var addItems = document.getElementById('items');

function showItems(){
    addItems.innerHTML = `<div id="add-items">
            <button>Add File</button>
            <button>Add Text / Mail</button>
            <button>Add Password</button>
        </div>`;
        addFile.style.background = `#cecece`;
}
showItems()
function removeItem(){
    addItems.innerHTML = '';
    addFile.style.background = `white`;
}
removeItem()
function add_file(){
    if (addItems.innerHTML == ``) {
        showItems()
    } else {
        removeItem()
    }
};


// nav contents
var menuItems = document.getElementById('menu-items');
var navMenu = document.getElementById('nav-menu');
var spanOne = document.getElementById('span-one');
var spanTwo = document.getElementById('span-two');
var spanThree = document.getElementById('span-three');
var navMenu = document.getElementById('nav-menu');
function showMenuContents(){
    menuItems.innerHTML = ` <div id="nav-menu-items">
                <a href="">&RightTriangle; Home</a>
                <a href="">&RightTriangle; Sign up</a>
                <a href="">&RightTriangle; Sign in</a>
                <a href="">&RightTriangle; Recover saved data</a>
                <a href="">&RightTriangle; Support/Help</a>
                <a href="">&RightTriangle; Terms & policy</a>
            </div>`

            spanOne.style.borderRight = 'solid 2px #1f242d'
            spanTwo.style.borderRight = 'solid 2px #1f242d'
            spanThree.style.borderRight = 'solid 2px #1f242d'
            navMenu.style.background = '#ededed'
}
showMenuContents()

function hideMenuContents() {
    menuItems.innerHTML = ''
    spanOne.style.borderRight = 'solid 2px grey'
    spanTwo.style.borderRight = 'solid 2px grey'
    spanThree.style.borderRight = 'solid 2px grey'
     navMenu.style.background = 'white'
}
hideMenuContents()

navMenu.addEventListener('click', function(){
    if (menuItems.innerHTML == '') {
        showMenuContents()
    } else {
        hideMenuContents()
    }
})

// search input start
let searchInput = document.getElementById('search-input');
let textInput = document.querySelector('.text-input');
const searchContents = document.getElementById("search-contents");

searchContents.classList.add('hideSearch');


function search_button() {
        if (searchInput.value == '') {
            searchContents.classList.add('hideSearch');
        } else if(searchInput.value =! ''){
             searchContents.classList.remove('hideSearch');
            setTimeout(() => {
                searchContents.classList.add('hideSearch');
            }, 3000);
            
        };

};

searchInput.addEventListener('click', () => {
    searchInput.style = 'box-shadow: 0 0 10px #0ef;  outline: solid 3px #0ef;'
    textInput.style = ''
})

textInput.addEventListener('click', () => {
    textInput.style = 'box-shadow: 0 0 10px #0ef;  outline: solid 3px #0ef;'
    searchInput.style = ''
})