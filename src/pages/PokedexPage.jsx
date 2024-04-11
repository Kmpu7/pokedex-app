import { useSelector } from "react-redux";
import useFetch from "../hooks/useFetch";
import { useEffect, useRef, useState } from 'react';
import ListPokemons from '../components/PokedexPage/ListPokemons';
import SelectType from "../components/PokedexPage/SelectType";


const PokedexPage = () => {

  const [pokeSearch, setPokeSearch] = useState('')

  const [typeSelect, setTypeSelect] = useState('allPokemons')

   const [page, setPage] = useState(1)
   const [pokePerPage, setPokePerPage] = useState(12)

  const inputSearch = useRef()
  
  const trainer = useSelector(states => states.trainer)

  const url = 'https://pokeapi.co/api/v2/pokemon?limit=10000000&offset=0'
  const [ pokemons, getPokemons, getPokeByType] = useFetch(url)

  useEffect(() => {
    if(typeSelect === 'allPokemons') {
      getPokemons()
    } else {
      getPokeByType(typeSelect)
    }
    setPage(1)
      }, [typeSelect])

  const handleSubmit = e => {
e.preventDefault()
  setPokeSearch(inputSearch.current.value.trim().toLowerCase())
  setPage(1)
  }

  const pokemonsFiltered = pokemons?.results.filter(poke =>{
    
    return poke.name.includes(pokeSearch)
  })


  //Logica de pagina
  const startIndex = (page -1) * pokePerPage
  const endInex = startIndex + pokePerPage
  const quantityPokes = pokemonsFiltered ? pokemonsFiltered.length : 0
  const quiantityPages = Math.ceil( quantityPokes / pokePerPage)

  return (
    <div>
      <p>Welcome <span>{trainer}</span>, here you can find your favorite pokemon</p>
      <form onSubmit={handleSubmit}>
        <input ref={inputSearch} type="text"/>
        <button>Search</button>
      </form>
      <SelectType
      setTypeSelect={setTypeSelect}
      />
      <ListPokemons
      pokemons={pokemonsFiltered}
      startIndex={startIndex}
      endInex={endInex}
      quiantityPages={quiantityPages}
      setPage={setPage}
      page={page}
      />
    </div>
  )
}

export default PokedexPage



