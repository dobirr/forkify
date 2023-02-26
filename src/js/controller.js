import * as model from './model';
import recipeView from './views/recipeView';
import searchView from './views/searchView';

import 'core-js/stable';
import 'regenerator-runtime/runtime';
import { state } from './model';

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
        recipeView.renderError(err.message)
    }
}

const controlSearchResults = async function() {
    try {
        // 1) Get search query
        const query = searchView.getQuery();
        if(!query) return;

        // 1) Load search result
        await model.loadSearchResults(query);

        // 3) Render result
        console.log(model.state.search);
    } catch(err) {

    }
}

const init = function() {
    recipeView.addHandlerRender(controllerRecipes);
    searchView.addHandlerSearch(controlSearchResults);
}

init();


// https://forkify-api.herokuapp.com/v2