import Checkbox from "./Checkbox";

export default function Filters({categories, getSelectedCategories}) {
    return (
        <div className="flex items-center mt-5">
            {categories.map(category => <Checkbox
                key={category.id}
                label={category.category_name}
                id={category.id}
                getSelectedCategories={getSelectedCategories}
            />)}
        </div>
    )
}
