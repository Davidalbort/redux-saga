import {call,put,takeLatest} from 'redux-saga/effects';
import { getAll } from '../services/getAll';

function* getCharacter({payload}) {
    try{
        const character= yield call(getAll);
        yield put({type: '@character/show', payload:character})
    }catch(error){

    }
}

export default function* character (){
    yield takeLatest('@character/init', getCharacter);
}