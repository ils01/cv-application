import { CategoryOutItem } from "./CategoryOutItem";

function CategoryOut({ personal = false, title = "", items, children, template }) {
    if (personal) {
        return (
            <div>
                {title !== "" ? <h2>title</h2> : null}
                {children}
            </div>
        )
    } else {
        return (
            <div>
                <h2>{title}</h2>
                {items.length > 0 && items.map(item => {
                    return <CategoryOutItem key={item.id} item={item} template={template}></CategoryOutItem>
                })}
            </div>
        )
    }
}

export { CategoryOut };