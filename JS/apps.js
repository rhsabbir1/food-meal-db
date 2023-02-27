// console.log('connect')
const loadMealDb = () => {
    fetch('https://www.themealdb.com/api/json/v1/1/search.php?s=fish')
        .then(res => res.json())
        .then(data => showDAta(data.meals))
}
const showDAta = (data) => {
    const cardContainer = document .getElementById('food-card-group')
    data.forEach(food => {
        console.log(food)
        const creatDiv = document.createElement('div') 
        creatDiv.innerHTML = `
        <div class="card h-100">
            <img src="${food.strMealThumb}" class="card-img-top" alt="...">
            <div class="card-body">
                <h5 class="card-title">${food.strMeal}</h5>
                <p class="card-text">This is a longer card with supporting text below as a natural lead-in
                    to additional content. This content is a little bit longer.</p>
            </div>
       </div>
        `;
        cardContainer.appendChild(creatDiv)
    });
}

loadMealDb()