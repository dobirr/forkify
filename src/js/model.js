import {API_URL} from './config';
import {getJSON} from './helpers';

export const state = {
    recipe: {},
    search: {
        query: '',
        results: []
    }
}

export const loadRecipe = async function(pId) {
    try {
        const data = await getJSON(`${API_URL}${pId}`);
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
        throw err;
    }
}

export const loadSearchResults = async function(query) {
    try {
        state.search.query = query;

        const data = await getJSON(`${API_URL}?search=${query}`);
        state.search.results = data.data.data.recipes.map(recipe => {
            const {id, title, publisher, image_url: imageUrl} = recipe;
            return {
                id,
                title,
                publisher,
                imageUrl
            }
        })

    } catch(err) {
        console.error({
            error_model: err.message
        });
        throw err;
    }
}