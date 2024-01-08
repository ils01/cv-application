function Input({ id, label, value, setValue, value_item }) {
    console.log(value_item);
    if (Array.isArray(value)) {
        if (!value_item) {
            console.log('here')
            return (
                <div>
                    <label htmlFor={id}>{label}</label>
                    <input id={id} type="text" name={id} />
                </div>
            )
        } else {
            return (
                <div>
                    <label htmlFor={id}>{label}</label>
                    <input id={id} type="text" name={id} value={value_item[id] || ""} onChange={(e) => {
                        let newItems = [...value];
                        let item = newItems.find(item => item.id === value_item.id);
                        item[id] = e.target.value;
                        setValue(newItems);
                    }} />
                </div>
            )
        }
    }
    return (<div>
        <label htmlFor={id}>{label}</label>
        <input id={id} type="text" value={value} onChange={(event) => { setValue(event.target.value) }} />
    </div>);
}

export { Input };