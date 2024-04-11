import { useEffect, useState } from "react"
import PokeCard from "./PokeCard"

const ListPokemons = ({ pokemons, startIndex, endInex, quiantityPages, setPage, page }) => {
  
  const [blockPage, setBlockPage] = useState(1)
  const [pagesPerBlock, setPagesPerBlock] = useState(5)

  //logica de bloques
  const initialPageBlock = (blockPage - 1) * pagesPerBlock
  const endPageBlock = initialPageBlock + pagesPerBlock

  useEffect(() => {
    setBlockPage(Math.ceil(page / pagesPerBlock))
    
  }, [page])
  

  const arrPages = []
  for(let i = 1; i <= quiantityPages; i++) {
    arrPages.push(i)
  }
  const changePage = (pageNumber) => setPage(pageNumber)

  const handlePrev = () => {
   setPage(page - 1)
  } 
  
const handleNext = () => {
  setPage(page + 1)
}

  return (
    <div>
    <ul className="listpoke-container gap-page">
      <button disabled={page === 1 && true} onClick={handlePrev}>&lt;</button>
      {
        arrPages.slice(initialPageBlock, endPageBlock).map(pageNumber => (
          <li className={`${pageNumber === page && 'active-page'}`} onClick={ () => changePage(pageNumber) } key={pageNumber}>{pageNumber}</li>
        ))
      }
      <button disabled={page === quiantityPages && true} onClick={handleNext}>&gt;</button>
    </ul>
    <div className="listpoke-container">
        {
            pokemons?.slice(startIndex, endInex).map(pokeinfo => (
                <PokeCard
                 key={pokeinfo.url}
                 pokeinfo={pokeinfo}
                />
            ))
        }
        </div>
    </div>
  )
}

export default ListPokemons

