import FormTrainer from "../components/HomePage/FormTrainer"
import pokedex from '../assets/img/pokedex.png'


const HomePage = () => {
  return (
    <div className="title2">
        <h1 className="Title">
        <img className="img" src={pokedex} />
        </h1>
        <h2>Hi trainer</h2>
        <p>To see the pokemon's information, tell me your trainer name</p>
     <FormTrainer />
    </div>
  )
}

export default HomePage





