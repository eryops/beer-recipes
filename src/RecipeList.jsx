import React, { useState } from "react";
import { list } from "./Recipes/recipe-list";

const RecipeList = ({ setRecipeId }) => {
    const useDesktopMenu = window.matchMedia("(min-width: 48rem)").matches;

    const [menuOpened, setMenuOpened] = useState(false);
    if (useDesktopMenu) {
        return (
            <nav className="recipe-list__menu">
                <ul>
                    {list.map((item) => (
                        <li key={item.id} className="recipe-list__menu__item">
                            <button
                                onClick={() => {
                                    setRecipeId(item.id);
                                    setMenuOpened(false);
                                }}
                                className="recipe-list__menu__item--button"
                            >
                                {item.title} <em>{item.type}</em>
                            </button>
                        </li>
                    ))}
                </ul>
            </nav>
        );
    }
    const Menu = () => {
        if (menuOpened) {
            return (
                <nav className="recipe-list__menu" onClick={() => setMenuOpened(false)}>
                    <ul>
                        {list.map((item) => (
                            <li key={item.id}>
                                <button
                                    onClick={() => {
                                        setRecipeId(item.id);
                                        setMenuOpened(false);
                                    }}
                                    className="recipe-list__menu__item--button"
                                >
                                    {item.title} <em>{item.type}</em>
                                </button>
                            </li>
                        ))}
                    </ul>
                </nav>
            );
        }
        return null;
    };
    return (
        <>
            <button
                onClick={() => setMenuOpened(!menuOpened)}
                title={menuOpened ? "Stäng lista med ölresept" : "Öppna listan med ölrecept"}
                className="recipe-list__toggle--button"
            >
                {menuOpened ? "Stäng" : "Öppna"}
            </button>
            <Menu />
        </>
    );
};

export default RecipeList;
