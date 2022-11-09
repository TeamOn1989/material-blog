
import s from './index.module.css'

function Pagination({cardsPerPage, allCards, paginate}) {
  const pageNumbers = []

  for (let i = 1; i <= Math.ceil(allCards/cardsPerPage); i++) {
    pageNumbers.push(i)
  }

  return (    
    <>
      <ul className={s.pagination}>
        {
          pageNumbers.map(number => (
            <li key={number} >
              <a href="/" className={s.pagination__item} onClick={(e) => {
                e.preventDefault()
                paginate(number)
              }}>
                {number}
              </a>
            </li>
          ))
        }
      </ul>
    </>    
  );
}

export default Pagination;
