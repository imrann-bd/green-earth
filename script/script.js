const loadCategories = () => {
    fetch("https://openapi.programming-hero.com/api/categories")
        .then(res => res.json())
        .then(json => displayCategories(json.categories))
}
const displayCategories = (categories) => {
const categoriesContainer=document.getElementById('categories-contianer');
categoriesContainer.innerHTML='';
categories.forEach(categorie=> {
    const btnCategories=document.createElement('div');
    btnCategories.innerHTML=`
    <button class=" w-[100%] py-3  rounded-sm hover:bg-[#15803D] hover:text-white">${categorie.category_name}</button>
    `;
    categoriesContainer.append(btnCategories)
})
}
loadCategories()