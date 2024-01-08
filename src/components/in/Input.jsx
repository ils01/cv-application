function Input({ id, label, value, setValue }) {
    return (<div>
        <label htmlFor={id}>{label}</label>
        <input id={id} type="text" value={value} onChange={(event) => { setValue(event.target.value) }} />
    </div>);
}

export { Input };