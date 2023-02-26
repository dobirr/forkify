import * as model from './model';
import recipeView from './views/recipeView';

import 'core-js/stable';
import 'regenerator-runtime/runtime';

const controllerRecipes = async function() {

    try {

        const pId = window.location.hash.slice(1);
        if(!pId) return;
        recipeView.renderSpinner();

        // 1) Loading recipe
        await model.loadRecipe(pId);

        // 2) Rendering recipe
        recipeView.render(model.state.recipe);


    } catch (err){
        console.error(err);
    }
}


const init = function() {
    recipeView.addHandlerRender(controllerRecipes)
}

init();


// https://forkify-api.herokuapp.com/v2