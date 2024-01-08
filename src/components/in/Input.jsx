function Input({ id, label, value, setValue }) {
    if (Array.isArray(value)) {
        return (
            <div>
                <label htmlFor={id}>{label}</label>
                <input id={id} type="text" name={id} />
            </div>
        )
    }
    return (<div>
        <label htmlFor={id}>{label}</label>
        <input id={id} type="text" value={value} onChange={(event) => { setValue(event.target.value) }} />
    </div>);
}

export { Input };