const recipeContainer = document.querySelector('.recipe');
import axios from 'axios';

const timeout = function (s) {
    return new Promise(function (_, reject) {
        setTimeout(function () {
            reject(new Error(`Request took too long! Timeout after ${s} second`));
        }, s * 1000);
    });
};

const getRecipe = async function() {
    try {
        const res = await axios.get('https://forkify-api.herokuapp.com/api/v2/recipes/5ed6604591c37cdc054bc886');


        let {id, title, publisher, cooking_time, image_url, ingredients, servings, source_url} = res.data.data.recipe;
        let recipe = {
            id,
            title,
            publisher,
            ingredients,
            servings,
            cookingTime: cooking_time,
            imageUrl: image_url,
            sourceUrl: source_url
        }



    } catch (err){
        console.error(err);
    }
}

getRecipe();


// https://forkify-api.herokuapp.com/v2