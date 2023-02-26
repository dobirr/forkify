import {API_URL} from './config';
import {getJSON} from './helpers';

export const state = {
    recipe: {}
}

export const loadRecipe = async function(pId) {
    try {
        const data = await getJSON(`${API_URL}/${pId}`);
        let {id, title, publisher, cooking_time: cookingTime, image_url: imageUrl, ingredients, servings, source_url: sourceUrl} = data.data.data.recipe;
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
    } catch(err) {
        console.error({
            error_model: err.message
        });
    }
}