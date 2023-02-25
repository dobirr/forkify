import axios from 'axios';

export const state = {
    recipe: {}
}

export const loadRecipe = async function(pId) {
    try {
        const res = await axios.get(`https://forkify-api.herokuapp.com/api/v2/recipes/${pId}`);
        let {id, title, publisher, cooking_time: cookingTime, image_url: imageUrl, ingredients, servings, source_url: sourceUrl} = res.data.data.recipe;
        state.recipe = {
            id,
            title,
            publisher,
            cookingTime,
            imageUrl,
            ingredients,
            servings,
            sourceUrl
        }
        console.log(state.recipe);
    } catch(err) {
        alert(err);
    }



}