const searchFood = () => {
    const foodName = document.getElementById("searchFood").value;
    const url = `https://www.themealdb.com/api/json/v1/1/search.php?s=${foodName}`
    fetch(url)
    .then(res => res.json())
    .then(data => displayFood(data.meals))
}

const displayFood = items => {
    const foodContainer = document.getElementById("food-container");
    items.forEach(meal => {
        console.log(meal);
        const foodDiv = document.createElement("div");
        foodDiv.className = 'card-body';
        foodDiv.innerHTML = `<img src="${meal.strMealThumb}" class="card-img-top" alt="...">
            <div class="card-body">
                <h5 class="card-title">${meal.strMeal}</h5>
                <p class="card-text">${meal.strArea}</p>
                <ul>
                    <li>${meal.strIngredient1}</li>
                    <li>${meal.strIngredient2}</li>
                    <li>${meal.strIngredient3}</li>
                    <li>${meal.strIngredient4}</li>
                    <li>${meal.strIngredient5}</li>
                </ul>
                <a href="#" class="btn btn-primary">Go somewhere</a>
            </div>`
        // li.innerText = meal.strMeal;
        foodContainer.appendChild(foodDiv);
    });
}