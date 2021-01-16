import React, { useState } from "react";
import Recipe from "./Recipe";
import RecipeList from "./RecipeList";

const App = () => {
    const [recipeId, setRecipeId] = useState("");
    return (
        <>
            <header>
                <a href="#main" className="link--not-visible">
                    Till innehåll
                </a>
                <h1 className="display--inline-block">Min sida med samlade ölrecept</h1>
                <button>En knapp</button>
            </header>
            <RecipeList setRecipeId={setRecipeId} />
            <main id="main">
                <Recipe recipeId={recipeId} />
            </main>
        </>
    );
};

export default App;
