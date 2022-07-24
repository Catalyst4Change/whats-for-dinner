var questionsBox = document.querySelector('.item-1');
var answersBox = document.querySelector('.item-2');
var letsCookButton = document.querySelector('.lets-cook');

var sidesMenu = [
    {name:'Miso Glazed Carrots', gf:false, veg:true, vgn:true},
    {name:'Coleslaw', gf:true, veg:true, vgn:true},
    {name:'Garden Salad', gf:true, veg:true, vgn:true},
    {name:'Crispy Potatoes', gf:true, veg:true, vgn:false},
    {name:'Sweet Potato Tots', gf:false, veg:true, vgn:true},
    {name:'Coconut Rice', gf:true, veg:true, vgn:true},
    {name:'Caeser Salad', gf:true, veg:true, vgn:true},
    {name:'Shrimp Summer Rolls', gf:true, veg:false, vgn:false},
    {name:'Garlic Butter Mushrooms', gf:true, veg:true, vgn:true},
    {name:'Hush Puppies', gf:false, veg:true, vgn:true},
]  
var mainsMenu = [
    {name:'Spaghetti and Meatballs', gf:true, veg:false, vgn:false},
    {name:'Pineapple Chicken', gf:true, veg:false, vgn:false},
    {name:'Shakshuka', gf:true, veg:true, vgn:false},
    {name:'Thai Yellow Curry', gf:true, veg:true, vgn:false},
    {name:'Bibimbap', gf:true, veg:true, vgn:false},
    {name:'Chicken Parmesean', gf:true, veg:true, vgn:true},
    {name:'Butternut Squash Soup', gf:true, veg:true, vgn:true},
    {name:'BBQ Chicken Burgers', gf:true, veg:false, vgn:false},
    {name:'Ramen', gf:false, veg:true, vgn:true},
    {name:'Empanadas', gf:false, veg:false, vgn:false},
    {name:'Chicken Fried Rice', gf:false, veg:false, vgn:false},
    {name:'Sheet Pan Fajitas', gf:false, veg:false, vgn:false},
    {name:'Margarita Pizza', gf:false, veg:true, vgn:false},
]  
var dessertsMenu = [
    {name:'Apple Pie', gf:false, veg:true, vgn:false},
    {name:'Lemon Meringue Pie', gf:false, veg:true, vgn:false},
    {name:'Black Forest Cake', gf:true, veg:true, vgn:false},
    {name:'Banana Bread', gf:false, veg:true, vgn:false},
    {name:'Peach Cobbler', gf:false, veg:true, vgn:false},
    {name:'Cheesecake', gf:false, veg:true, vgn:false},
    {name:'Funfetti Cake', gf:false, veg:true, vgn:false},
    {name:'Baklava', gf:true, veg:true, vgn:false},
    {name:'Flan', gf:true, veg:true, vgn:false},
    {name:'Macarons', gf:false, veg:true, vgn:false},
    {name:'Macaroons', gf:true, veg:true, vgn:false},
    {name:'Chocolate Cupcakes', gf:false, veg:true, vgn:false},
    {name:'Pavlova', gf:true, veg:true, vgn:false},
    {name:'Pumpkin Pie', gf:false, veg:true, vgn:true},
    {name:'Key Lime Pie', gf:false, veg:true, vgn:false},
    {name:'Tart Tatin', gf:true, veg:true, vgn:true},
    {name:'Croissants', gf:false, veg:true, vgn:false},
    {name:'Eclairs', gf:false, veg:true, vgn:false},
]

letsCookButton.addEventListener('click', checkConsideration);

function checkConsideration() {
    var styleChoiceTF = document.querySelector('input[name="style"]:checked');
    if (styleChoiceTF) {
        filterMenu();
    } else {
        letsCook();
    }
}

function filterMenu() {
    var foodChoice = document.querySelector('input[name="choice"]:checked').value
    if (foodChoice === 'sides') {
        parseMenu(sidesMenu);
    }
    if (foodChoice === 'mains') {
        parseMenu(mainsMenu);
    }
    if (foodChoice === 'desserts') {
        parseMenu(dessertsMenu);
    }
    if (foodChoice === 'entire-meal') {
        parseMenu(oneOfEach);
    }
}

function parseMenu(menuList) {
    //remove all index items that do NOT return gf=True
    var styleChoice = document.querySelector('input[name="style"]:checked').value;
    console.log(styleChoice);
    var filteredMenu = [];
    for (let i = 0; i < menuList.length; i++) {
        if (menuList[i][styleChoice] === true) {
            filteredMenu.push(menuList[i]);
        }
    }
    console.log(filteredMenu);

    // forEach((menuName) => {
    //     if (menuName.gf != true) {
    //         menuName.splice([element], 1)
    //     }
    // });
    //then pass that new array to letsCook()
    // shit will that even work or do i have to bake it into this functuion?
}

function letsCook() {
    var foodChoice = document.querySelector('input[name="choice"]:checked').value
    if (foodChoice === 'sides') {
        displayMeal(getRandomDish(sidesMenu).name);
    }
    if (foodChoice === 'mains') {
        displayMeal(getRandomDish(mainsMenu).name);
    }
    if (foodChoice === 'desserts') {
        displayMeal(getRandomDish(dessertsMenu).name);
    }
    if (foodChoice === 'entire-meal') {
        oneOfEach();
    }
}

function displayMeal(food) {
    answersBox.innerHTML = `
    <p>You should cook:<br>${food}!</p>
    `
}

function oneOfEach() {
    answersBox.innerHTML = `
    <p>Start with<br>${getRandomDish(sidesMenu).name},<br>
    then have<br>${getRandomDish(mainsMenu).name},<br>
    and for dessert have<br>${getRandomDish(dessertsMenu).name}!
    </p>
    `;
}

function getRandomDish(array) {
    var random = Math.floor(Math.random() * array.length);
    return (random, array[random]);
}

// unsused functions

var radioNodeList = document.querySelectorAll('input[name="choice"]:checked');;
function radioTest() {
    for (let i = 0; i < radioNodeList.length; i++) {
        var isChecked = (radioNodeList[i].checked)
        if (isChecked[i]) {
            console.log(isChecked[i]);
        }
    }    
}