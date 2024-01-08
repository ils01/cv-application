import { v4 as uuidv4 } from 'uuid';
import { useState, useRef } from "react";
import { Input } from "./Input";
function CategoryIn({ items, setItems, title, template, personal = false, children }) {
    if (personal) {
        let classes = "category-in category_personal personal"
        return (
            <div className={classes}>
                <h2 className='category-in__title'>{title}</h2>
                <div className='category-in__body'>
                    {children}
                </div>
            </div >
        )
    }
    const [selectedId, setSelectedId] = useState(null);

    let ul;
    if (items.length > 0) {
        ul = (
            <ul className='category-in__list'>
                {items.map(item => {
                    return <CategoryInItem key={item.id} items={items} item={item} setItems={setItems} template={template} selectedId={selectedId} setSelectedId={setSelectedId}></CategoryInItem>
                })}
            </ul>
        )
    } else {
        ul = null;
    }
    return (
        <div className='category-in'>
            <h2 className='category-in__title'>{title}</h2>
            <div className="category-in__body">
                {ul}
                <AddMore title={title} setSelectedId={setSelectedId} items={items} setItems={setItems} template={template}></AddMore>
            </div>

        </div>
    )
}


function CategoryInItem({ items, item, setItems, template, selectedId, setSelectedId }) {
    return (
        <li className='category-in__item'>
            <div className='item__btns'>
                <button className='button' onClick={() => setSelectedId(prevId => {
                    let newId = prevId;
                    if (newId === item.id) {
                        newId = null;
                    } else {
                        newId = item.id;
                    }
                    return newId;
                })}>{item[Object.values(template)[0]]}</button>
                <button className='button' onClick={(e) => {
                    let newItems = [...items];
                    let itemIndex = newItems.findIndex(itm => itm.id === item.id);
                    newItems[itemIndex].visible = !newItems[itemIndex].visible;
                    setItems(newItems);
                }}>{item.visible ? <>
                    <span className='sr-only'>hide this item</span>
                    <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" className="bi bi-eye" viewBox="0 0 16 16">
                        <path d="M16 8s-3-5.5-8-5.5S0 8 0 8s3 5.5 8 5.5S16 8 16 8M1.173 8a13 13 0 0 1 1.66-2.043C4.12 4.668 5.88 3.5 8 3.5s3.879 1.168 5.168 2.457A13 13 0 0 1 14.828 8q-.086.13-.195.288c-.335.48-.83 1.12-1.465 1.755C11.879 11.332 10.119 12.5 8 12.5s-3.879-1.168-5.168-2.457A13 13 0 0 1 1.172 8z" />
                        <path d="M8 5.5a2.5 2.5 0 1 0 0 5 2.5 2.5 0 0 0 0-5M4.5 8a3.5 3.5 0 1 1 7 0 3.5 3.5 0 0 1-7 0" />
                    </svg> </> : <>
                    <span className='sr-only'>do not hide this item</span>
                    <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" className="bi bi-eye-slash" viewBox="0 0 16 16">
                        <path d="M13.359 11.238C15.06 9.72 16 8 16 8s-3-5.5-8-5.5a7 7 0 0 0-2.79.588l.77.771A6 6 0 0 1 8 3.5c2.12 0 3.879 1.168 5.168 2.457A13 13 0 0 1 14.828 8q-.086.13-.195.288c-.335.48-.83 1.12-1.465 1.755q-.247.248-.517.486z" />
                        <path d="M11.297 9.176a3.5 3.5 0 0 0-4.474-4.474l.823.823a2.5 2.5 0 0 1 2.829 2.829zm-2.943 1.299.822.822a3.5 3.5 0 0 1-4.474-4.474l.823.823a2.5 2.5 0 0 0 2.829 2.829" />
                        <path d="M3.35 5.47q-.27.24-.518.487A13 13 0 0 0 1.172 8l.195.288c.335.48.83 1.12 1.465 1.755C4.121 11.332 5.881 12.5 8 12.5c.716 0 1.39-.133 2.02-.36l.77.772A7 7 0 0 1 8 13.5C3 13.5 0 8 0 8s.939-1.721 2.641-3.238l.708.709zm10.296 8.884-12-12 .708-.708 12 12z" />
                    </svg></>}</button>
            </div>
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
            <div className='button-row'>
                <button className='button button_ok' onClick={(e) => {
                    e.preventDefault();
                    setSelectedId(null);
                }}>ok</button>
                <button className='button button_delete' onClick={(e) => {
                    e.preventDefault();
                    let newItems = items.filter(itm => itm.id !== item.id);
                    setItems(newItems);
                }}>delete</button>
            </div>

        </form>
    )
}

function AddMore({ title, setSelectedId, items, setItems, template }) {

    return (
        <button className='button button_add-more' onClick={() => {
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