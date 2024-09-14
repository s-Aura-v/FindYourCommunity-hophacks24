import '../styles/search.css'
export function Search() {
    return (
        <>
            <div className="search-container">
                <span> SEARCH </span>
                <input
                    className="search-input"
                    placeholder="Search For Tree"
                    aria-label="Enter Tree Name..."
                    size="64"
                    // onChange={(e) => )}
                />
            </div>


        </>
    )
}
