import { useRef } from "react";
import { Input } from "./Input";
function CategoryIn({ items, setItems, title, template, canAddMore = true }) {
    let ul;
    if (items.length > 0) {
        ul = (
            <ul>
                {items.map(item => {
                    return <li>{item.school}</li>
                })}
            </ul>
        )
    } else {
        ul = null;
    }
    return (
        <div className="categoryIn">
            <h2>{title}</h2>
            {ul}
            <CategoryForm items={items} setItems={setItems} template={template}></CategoryForm>
            {canAddMore ? <AddMore title={title}></AddMore> : null}

        </div>
    )
}

function CategoryForm({ items, setItems, template, action = 'add' }) {
    const formRef = useRef();
    // console.log(formRef);
    return (
        <form action="" ref={formRef}>
            {Object.keys(template).map(field => {
                return (
                    <Input id={template[field]} label={field} value={items} setValue={setItems} ></Input>
                )
            })}
            <button onClick={(e) => {
                e.preventDefault()
                let formData = new FormData(formRef.current);
                console.log(...formData);
                let newItem = {};
                [...formData].map((field) => {
                    newItem[field[0]] = field[1];
                })
                setItems([...items, newItem]);
                formRef.current.reset();
            }}>add</button>
        </form >
    )
}

function Item({ item }) {
    return <p>{item.title}</p>
}

function AddMore({ title }) {
    return (
        <button disabled>+ {title}</button>
    )
}

export { CategoryIn };