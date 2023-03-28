import React, { useState } from "react";
import Menu from "./menu";
import Categories from "./categories";
import items from "./data";
// import logo from "./logo.JPG";

const allCategories = ["all", ...new Set(items.map((item) => item.category))];

const Ourmenu = () => {
    const [menuItems, setMenuItems] = useState(items);
    const [activeCategory, setActiveCategory] = useState("");
    const [categories, setCategories] = useState(allCategories);

    const filterItems = (category) => {
        setActiveCategory(category);
        if (category === "all") {
            setMenuItems(items);
            return;
        }
        const newItems = items.filter((item) => item.category === category);
        setMenuItems(newItems);
    };
    return (
        <main>
            <section className="menu section">
                <div className="title">
                    <div >
                        <h2 class="block-title text-center">
                            Our Menu
                        </h2>
                        <p class="title-caption text-center">The only thing more satisfying than a big plate of food is this big plate of food. </p>
                    </div>
                
                </div>
                <Categories
                    categories={categories}
                    activeCategory={activeCategory}
                    filterItems={filterItems}
                />
                <Menu items={menuItems} />
            </section>
        </main>
    );
};

export default Ourmenu;