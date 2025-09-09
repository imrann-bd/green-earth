const loadCategories = () => {
    fetch("https://openapi.programming-hero.com/api/categories")
        .then(res => res.json())
        .then(json => displayCategories(json.categories))
}

const displayCategories = (categories) => {
    const categoriesContainer = document.getElementById('categories-contianer');
    categoriesContainer.innerHTML = '';
    categories.forEach(categorie => {
        const btnCategories = document.createElement('div');
        btnCategories.innerHTML = `
    <button onclick="loadCategoriesLabel('${categorie.category_name}')" class=" w-[100%] py-3  rounded-sm hover:bg-[#15803D] hover:text-white">${categorie.category_name}</button>
    `;
        categoriesContainer.append(btnCategories)
    })
}
loadCategories()

const loadAllplanets = () => {
    fetch("https://openapi.programming-hero.com/api/plants")
        .then(res => res.json())
        .then(json => displaAllPlanets(json.plants))
}

const displaAllPlanets = (planets) => {
    const allplantscontainer = document.getElementById('planet-container');
    allplantscontainer.innerHTML = '';

    planets.forEach(plant => {
        const allPlants = document.createElement('div')
        allPlants.innerHTML = `
        <div class=" bg-white shadow-sm p-5 rounded-md space-y-4">
                        <img id="img" src="${plant.image}" alt="" width="300px">
                        <h2 class="font-semibold text-[14px]">${plant.name}</h2>
                        <p class="text-gray-500 font-[12px]">${plant.description}</p>
                        <div class="flex justify-between">
                            <button class="text-[14px] rounded-full bg-[#dcfce7] py-[4px] px-[12px]">${plant.category}</button>
                            <p class="font-bold"><i class="fa-solid fa-bangladeshi-taka-sign"></i>${plant.price}</p>
                        </div>
                        <button class="w-full rounded-full py-[12px] px-[11px] bg-[#15803D] text-white">Add to card</button>
                    </div>
        `;
        allplantscontainer.append(allPlants)
    })
}
loadAllplanets()

