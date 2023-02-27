// console.log('connect')
const loadMealDb = (searchInput) => {
    const URL = `https://www.themealdb.com/api/json/v1/1/search.php?s=${searchInput}`;
    fetch(URL)
        .then(res => res.json())
        .then(data => showDAta(data.meals))
}
const showDAta = (data) => {
    const cardContainer = document.getElementById('food-card-group')
    cardContainer.innerHTML = '';
    // console.log(data)
    data.forEach(food => {
        // console.log(food)
        const creatDiv = document.createElement('div')
        creatDiv.innerHTML = `
        <div class="card h-100">
            <img src="${food.strMealThumb}" class="card-img-top" alt="...">
            <div class="card-body">
                <h5 class="card-title">${food.strMeal}</h5>
                <p class="card-text">This is a longer card with supporting text below as a natural lead-in
                    to additional content. This content is a little bit longer.</p>
            </div>
            <!-- Button trigger modal -->
            <button onclick="loadModalDetail('${food.idMeal}')" type="button" class="btn btn-primary" data-bs-toggle="modal" data-bs-target="#shodDetailsModal">
            Details
            </button>
       </div>
        `;
        cardContainer.appendChild(creatDiv)
    });
}

document.getElementById('search-btn').addEventListener('click', function () {
    const searchInput = document.getElementById('searchInput').value;
    // console.log(searchInput)
    loadMealDb(searchInput)
})

const loadModalDetail = (id) => {
    const URL = `https://www.themealdb.com/api/json/v1/1/lookup.php?i=${id}`;
    fetch(URL)
        .then(res => res.json())
        .then(data => showDetailsModal(data.meals[0]))
}

const showDetailsModal = (data) => {
    console.log(data)
    document.getElementById('shodDetailsModalLabel').innerText = data.strMeal;
    const modalBody = document.getElementById('modal-body').innerHTML=`
        <img class="img-fluid" src="${data.strMealThumb}" alt="">
        <h3>Str Tags : ${data.strTags}</h3>

    `
}

loadMealDb('fish')