function CategoryOutItem({ title = "", children }) {
    return (
        <div>
            {title !== "" ? <h2>title</h2> : null}

            {children}
        </div>
    )
}

export { CategoryOutItem };