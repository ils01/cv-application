import { v4 as uuidv4 } from 'uuid';
import { useState, useRef } from "react";
import { Input } from "./Input";
function CategoryIn({ items, setItems, title, template, personal = false, children }) {
    if (personal) {
        return (
            <div>
                <h2>{title}</h2>
                {children}
            </div>
        )
    }
    const [selectedId, setSelectedId] = useState(null);

    let ul;
    if (items.length > 0) {
        ul = (
            <ul>
                {items.map(item => {
                    return <CategoryInItem key={item.id} items={items} item={item} setItems={setItems} template={template} selectedId={selectedId} setSelectedId={setSelectedId}></CategoryInItem>
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
            {/* {selectedId === -1 && <CategoryFormAdd items={items} setItems={setItems} template={template} setSelectedId={setSelectedId}></CategoryFormAdd>} */}
            <AddMore title={title} setSelectedId={setSelectedId} items={items} setItems={setItems} template={template}></AddMore>
        </div>
    )
}


function CategoryInItem({ items, item, setItems, template, selectedId, setSelectedId }) {
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
            })}>{item[Object.values(template)[0]]}</button>
            <button onClick={(e) => {
                let newItems = [...items];
                let itemIndex = newItems.findIndex(itm => itm.id === item.id);
                newItems[itemIndex].visible = !newItems[itemIndex].visible;
                setItems(newItems);
            }}>eye</button>
            {selectedId === item.id &&
                <CategoryFormEdit items={items} item={item} setItems={setItems} template={template} setSelectedId={setSelectedId}></CategoryFormEdit>}
        </li>
    )
}

function CategoryFormEdit({ items, item, setItems, template, setSelectedId }) {
    const formRef = useRef();
    let itm = items.filter((itm) => itm.id === item.id)[0];
    return (
        <form ref={formRef}>
            {Object.keys(template).map(field => {
                return <Input key={field} id={template[field]} label={field} value={items} setValue={setItems} value_item={itm}></Input>
            })}
            <button onClick={(e) => {
                e.preventDefault();
                setSelectedId(null);
            }}>ok</button>
            <button onClick={(e) => {
                e.preventDefault();
                let newItems = items.filter(itm => itm.id !== item.id);
                setItems(newItems);
            }}>delete</button>
        </form>
    )
}

function AddMore({ title, setSelectedId, items, setItems, template }) {

    return (
        <button onClick={() => {
            const newId = uuidv4();
            let newItem = {
                id: newId,
                visible: true
            };
            Object.values(template).map(value => {
                newItem[value] = "";
            });
            let newItems = [...items];
            newItems.push(newItem);
            setItems(newItems);
            setSelectedId(newId);
        }}>+ {title}</button>

    )
}

export { CategoryIn };