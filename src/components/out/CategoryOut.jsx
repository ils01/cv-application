import { CategoryOutItem } from "./CategoryOutItem";

function CategoryOut({ personal = false, title = "", items, children, template }) {
    if (personal) {
        return (
            <div className="category-out category-out_personal">
                {children}
            </div>
        )
    } else {
        if (items.length > 0) {
            return (
                <div className='category-out'>
                    <h2 className="out__title">{title}</h2>
                    {items.filter(item => item.visible).map(item => {
                        return <CategoryOutItem key={item.id} item={item} template={template}></CategoryOutItem>
                    })}
                </div>
            )
        }
        return null;
    }
}

export { CategoryOut };