import React, { useState, useEffect } from "react";
import { list } from "./Recipes/recipe-list";

const Recipe = ({ recipeId }) => {
    const [recipe, setRecipe] = useState();

    useEffect(() => {
        setRecipe(list.find((item) => item.id === recipeId));
    }, [recipeId]);

    if (!recipe) {
        return (
            <div>
                <p>
                    Denna webplats har jag skapat för att jag lättare ska hitta till de ölrecept jag
                    kommit över när jag surfat runt. För att förenkla för mig själv när jag ska
                    testa konsten att brygga öl för hemmabruk.
                </p>
                <p>
                    Det kommer övertid förmodligen blir en blandning av egna recept och andra recept
                    som jag hittat på nätet.
                </p>
            </div>
        );
    }
    return (
        <>
            <h2>{recipe.title}</h2>
            <em>{recipe.type}</em>
        </>
    );
};
export default Recipe;
