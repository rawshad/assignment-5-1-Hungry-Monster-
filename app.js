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
        // console.log(meal.strMeal)
        const li = document.createElement("li");
        li.innerText = meal.strMeal;
        foodContainer.appendChild(li);
    });
}