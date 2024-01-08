function CategoryOutItem({ item, template }) {
    if (!item) {
        return <></>;
    }
    return (
        <div>
            {Object.values(template).map(key => {
                return <p key={key}>{item[key]}</p>
            })}
        </div>
    )
}

export { CategoryOutItem };