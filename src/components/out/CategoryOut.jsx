function CategoryOut({ title = "", children }) {
    return (
        <div>
            {title !== "" ? <h2>title</h2> : null}
            {children}
        </div>
    )
}

export { CategoryOut };