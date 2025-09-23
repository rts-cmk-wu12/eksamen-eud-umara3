
import "./paging.scss";

export default function Paging({total, perPage, currentPage, onPageChange}) {
    const totalPages = Math.ceil(total / perPage);

    const handleClick =(page) => {
        if (page >= 1 && page <= totalPages){
            onPageChange(page);
        }
    };

    const renderPageNumbers = () => {
        const pages = [];

        const start = Math.max(1, currentPage - 2);
        const end = Math.min(totalPages, currentPage + 2);

        for (let i = start; i <= end; i++) {
            pages.push(
                <button key={i} className={currentPage === i ? "active" : ""} onClick={() => handleClick(i)}>{i}</button>

            );
        }
        return pages;
    }
    return(
        <div className="paging">
            <button onClick={() => handleClick(currentPage -1)} disabled={currentPage === 1}>{"<- previous"}</button>
             {renderPageNumbers()}
            <button onClick={() => handleClick(currentPage + 1)} disabled={currentPage === totalPages}>{"Next ->"}</button>

        </div>
    );
}