import { v4 as uuidv4 } from 'uuid';
import { useState, useRef } from "react";
import { Input } from "./Input";
function CategoryIn({ items, setItems, title, template, canAddMore = true }) {
    const [selectedId, setSelectedId] = useState(null);

    let ul;
    if (items.length > 0) {
        ul = (
            <ul>
                {items.map(item => {
                    return <Item items={items} item={item} setItems={setItems} template={template} selectedId={selectedId} setSelectedId={setSelectedId}></Item>
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

            {selectedId === -1 && <CategoryFormAdd items={items} setItems={setItems} template={template} setSelectedId={setSelectedId}></CategoryFormAdd>}
            {canAddMore ? <AddMore title={title} setSelectedId={setSelectedId}></AddMore> : null}
        </div>
    )
}


function CategoryFormAdd({ items, setItems, template, setSelectedId }) {
    const formRef = useRef();
    return (
        <form action="" ref={formRef}>
            {Object.keys(template).map(field => {
                return (
                    <Input key={field} id={template[field]} label={field} value={items} setValue={setItems}></Input>
                )
            })}
            <button onClick={(e) => {
                e.preventDefault()
                let formData = new FormData(formRef.current);
                let newItem = {};
                newItem['id'] = uuidv4();
                [...formData].map((field) => {
                    newItem[field[0]] = field[1];
                })
                setItems([...items, newItem]);
                formRef.current.reset();
            }}>add</button>
            <button onClick={
                (e) => {
                    e.preventDefault();
                    setSelectedId(null)
                }
            }>close</button>
        </form >
    )
}

function Item({ items, item, setItems, template, selectedId, setSelectedId }) {
    return (
        <li>
            <button onClick={() => setSelectedId(prevId => {
                let newId = prevId;
                if (newId === item.id) {
                    newId = null;
                } else {
                    newId = item.id;
                }
                return newId;
            })}>{Object.values(item)[1]}</button>
            {selectedId === item.id &&
                <CategoryFormEdit items={items} item={item} setItems={setItems} template={template}></CategoryFormEdit>}
        </li>
    )
}

function CategoryFormEdit({ items, item, setItems, template }) {
    const formRef = useRef();
    let itm = items.filter((itm) => itm.id === item.id)[0];
    return (
        <form ref={formRef}>
            {Object.keys(template).map(field => {
                return <Input key={field} id={template[field]} label={field} value={items} setValue={setItems} value_item={itm}></Input>
            })}
        </form>
    )
}

function AddMore({ title, setSelectedId }) {
    return (
        <button onClick={() => setSelectedId(prevId => {
            let newId = prevId;
            if (newId === -1) {
                newId = null;
            } else {
                newId = -1;
            }
            return newId;
        })}>+ {title}</button>
    )
}

export { CategoryIn };