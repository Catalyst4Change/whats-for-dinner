var questionsBox = document.querySelector('.item-1');
var answersBox = document.querySelector('.item-2');
var letsCookButton = document.querySelector('.lets-cook');
var sidesMenu = [
    'Miso Glazed Carrots',
    'Coleslaw',
    'Garden Salad',
    'Crispy Potatoes',
    'Sweet Potato Tots',
    'Coconut Rice',
    'Caeser Salad',
    'Shrimp Summer Rolls',
    'Garlic Butter Mushrooms',
    'Hush Puppies'
]
    
var mainsMenu = [
    'Spaghetti and Meatballs',
    'Pineapple Chicken',
    'Shakshuka',
    'Thai Yellow Curry',
    'Bibimbap',
    'Chicken Parmesean',
    'Butternut Squash Soup',
    'BBQ Chicken Burgers',
    'Ramen',
    'Empanadas',
    'Chicken Fried Rice',
    'Sheet Pan Fajitas',
    'Margarita Pizza',
]
    
var dessertsMenu = [
    'Apple Pie',
    'Lemon Meringue Pie',
    'Black Forest Cake',
    'Banana Bread',
    'Peach Cobbler',
    'Cheesecake',
    'Funfetti Cake',
    'Baklava',
    'Flan',
    'Macarons',
    'Macaroons',
    'Chocolate Cupcakes',
    'Pavlova',
    'Pumpkin Pie',
    'Key Lime Pie',
    'Tart Tatin',
    'Croissants',
    'Eclairs',
]

letsCookButton.addEventListener('click', letsCook);

function getRandomDish(array) {
    var random = Math.floor(Math.random() * array.length);
    return (random, array[random]);
  }

function letsCook() {
    var foodChoice = document.querySelector('input[name="choice"]:checked').value;
    if (foodChoice === 'sides') {
        displayMeal(getRandomDish(sidesMenu));
    }
    if (foodChoice === 'mains') {
        displayMeal(getRandomDish(mainsMenu));
    }
    if (foodChoice === 'desserts') {
        displayMeal(getRandomDish(dessertsMenu));
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
    <p>Start with<br>${getRandomDish(sidesMenu)},<br>
    then have<br>${getRandomDish(mainsMenu)},<br>
    and for dessert have<br>${getRandomDish(dessertsMenu)}!
    </p>
    `;
}

answersBox.innerHTML = `
    <img
    src="assets/cookpot.svg"
    alt="cookpot"
    height="150"
    width="150" />
`;