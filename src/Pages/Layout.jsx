import { Character } from '../components/Character';
import { Header} from '../containers/Header';
import { Button } from '../components/Button';
const stateInitial ={
  
    "id": 2,
    "name": "Morty Smith",
    "status": "Alive",
    "species": "Human",
    "type": "",
    "gender": "Male",
    "origin": {
      "name": "Earth",
      "url": "https://rickandmortyapi.com/api/location/1"
    },
    "location": {
      "name": "Earth",
      "url": "https://rickandmortyapi.com/api/location/20"
    },
    "image": "https://rickandmortyapi.com/api/character/avatar/2.jpeg",
    "episode": [
      "https://rickandmortyapi.com/api/episode/1",
      "https://rickandmortyapi.com/api/episode/2",
      // ...
    ],
    "url": "https://rickandmortyapi.com/api/character/2",
    "created": "2017-11-04T18:50:21.651Z"
  
}
const Layout = () => {
    const handleGenarate = () => {
        console.log('Soy el boton generate')
      }
    return(
        <div>
            <Header />
            <Character character={stateInitial} />
            <Button handleClick={handleGenarate}/>
        </div>
    )
}

export {Layout}