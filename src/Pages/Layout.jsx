import { Character } from '../components/Character';
import { Header} from '../containers/Header';
import { Button } from '../components/Button';
import { useDispatch, useSelector } from 'react-redux';
import { initCharacter } from '../actions';

const Layout = () => {
    const state = useSelector(state => state);
    const dispatch = useDispatch();
    const handleGenarate = () => {
        dispatch(initCharacter());
      }
      console.log(state.length,state)
    return(
        <div>
            <Header />
            <Character character={state} />
            { state.length === 0 ? <div>
                No se ha generado ninguna peticion, selecciona el boton generate para traer un caracter...
            </div>: null}
            <Button handleClick={handleGenarate}/>
        </div>
    )
}

export {Layout}