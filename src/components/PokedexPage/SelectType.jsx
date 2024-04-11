import { useEffect } from "react"
import useFetch from "../../hooks/useFetch"


const SelectType = ({setTypeSelect} ) => {
const url = 'https://pokeapi.co/api/v2/type'
const [ types, getTypes ] = useFetch(url)

useEffect(() => {
    getTypes()
}, [])

const handleChange = e => {
    setTypeSelect(e.target.value)
}

  return (
    <select onChange={handleChange}>
        <option value='allPokemons'>All pokemons</option>
        {
            types?.results.map(typeInfo =>(
                <option key={typeInfo.url} value={typeInfo.url}>{typeInfo.name}</option>
            ))
        }
    </select>
  )
}

export default SelectType