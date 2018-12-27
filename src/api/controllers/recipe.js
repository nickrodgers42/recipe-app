import { loadModels } from "../../data/models/index";

module.exports = function(server) {
    server.get("/api/recipe/:recipeId", getRecipe);
    server.post("/api/recipe", createRecipe);
}

async function getRecipe (req, res, next) {
    try {
        const recipeId = req.params.recipeId;
        const models = await loadModels();
        const recipe = await models.recipe.findById(recipeId);
        if (!recipe) {
            res.status(404).send({ error: `Recipe with ID ${recipeId} not found `});
            return next();
        }
        res.json(recipe);
        next();
    } catch(e) {
        res.status(500).send({error : e.message});
        next(e);
    }
}

async function createRecipe (req, res, next) {
    try {
        const models = await loadModels();
        const newRecipe = new models.recipe({
            title: req.body.title,
            ingredients: req.body.ingredients,
            directions: req.body.directions
        });
        await newRecipe.save();
        res.json(newRecipe);
        next();
    } catch (e) {
        res.status(500).send({ error: e.message });
        next(e);
    }
}