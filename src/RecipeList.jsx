import React from "react";
import { list } from "./Recipes/recipe-list";

const RecipeList = () => {
    return (
        <ul>
            {list.map((item) => (
                <li key={item.id}>
                    <a href="#">
                        {item.title} <em>{item.type}</em>
                    </a>
                </li>
            ))}
        </ul>
    );
};

export default RecipeList;
