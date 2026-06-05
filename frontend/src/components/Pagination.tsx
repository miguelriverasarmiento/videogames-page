interface Props {
    currentPage: number;
    totalPages: number;
    onPageChange: (page: number) => void;
}

const Pagination = ({ currentPage, totalPages, onPageChange }: Props) => {

    const handlePrevious = () => {
        if (currentPage > 1) onPageChange(currentPage - 1);
    };

    const handleNext = () => {
        if (currentPage < totalPages) onPageChange(currentPage + 1);
    };

     // Generar array de números de página: [1, 2, 3, ..., totalPages]
    const pages: number[] = [];
    for (let i = 1; i <= totalPages; i++) {
        pages.push(i)
    }

  return (
    <div className="flex gap-2 items-center">
        <button className="rounded-md border border-slate-300 py-2 px-3 text-center text-sm transition-all shadow-sm hover:shadow-lg text-slate-600 hover:text-white hover:bg-slate-800 hover:border-slate-800 focus:text-white focus:bg-slate-800 focus:border-slate-800 active:border-slate-800 active:text-white active:bg-slate-800 disabled:pointer-events-none disabled:opacity-50 disabled:shadow-none ml-2" onClick={handlePrevious} disabled={currentPage === 1}>Anterior</button>
        {pages.map(page => (
            <button className="min-w-9 rounded-md bg-slate-800 py-2 px-3 border border-transparent text-center text-sm text-white transition-all shadow-md hover:shadow-lg focus:bg-slate-700 focus:shadow-none active:bg-slate-700 hover:bg-slate-700 active:shadow-none disabled:pointer-events-none disabled:opacity-50 disabled:shadow-none ml-2" key={page} onClick={() => onPageChange(page)} disabled={page === currentPage}>
                {page}
            </button>
        ))}
        <button className="min-w-9 rounded-md border border-slate-300 py-2 px-3 text-center text-sm transition-all shadow-sm hover:shadow-lg text-slate-600 hover:text-white hover:bg-slate-800 hover:border-slate-800 focus:text-white focus:bg-slate-800 focus:border-slate-800 active:border-slate-800 active:text-white active:bg-slate-800 disabled:pointer-events-none disabled:opacity-50 disabled:shadow-none ml-2" onClick={handleNext} disabled={currentPage === totalPages}>Siguiente</button>
    </div>
  )
}

export default Pagination