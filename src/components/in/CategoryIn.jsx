function CategoryIn({ title, children }) {
    return (
        <div className="categoryIn">
            <h2>{title}</h2>
            {children}
        </div>
    )
}

export { CategoryIn };