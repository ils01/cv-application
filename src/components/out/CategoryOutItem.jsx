function CategoryOutItem({ item, template }) {
    if (!item) {
        return <></>;
    }
    return (
        <div className="out__item item">
            <div className="item__col">
                <div className="col__date">
                    <span >{item['startDate']}</span>{" - "}
                    <span >{item['endDate']}</span>
                </div>
                <div className="col__location">
                    <span>{item['location']}</span>
                </div>
            </div>
            <div className="item__col">
                {Object.values(template).filter(key => {
                    return key !== 'startDate' && key !== 'endDate' && key !== 'location'
                }).map(key => {
                    return <p className={`col__${key}`} key={key}>{item[key]}</p>
                })}
            </div>

        </div>
    )
}

export { CategoryOutItem };