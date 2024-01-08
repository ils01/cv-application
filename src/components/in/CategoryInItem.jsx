function CategoryInItem({ title = "", children }) {
    return (
        <>
            {title !== "" ? <h2>title</h2> : null}
            <form action="">
                {children}
            </form>
        </>
    )
}

export { CategoryInItem };