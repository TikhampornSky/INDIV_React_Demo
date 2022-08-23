import {createContext} from 'react';
import GetData from './GetData'

interface IThemeContext {
    [index: number]: {              //Array with object
        id: number,
        userId: number,
        title: string,
        body: string
    }
}
/*
const defaultState = [{
    id: 0, 
    userId: 0, 
    title: '', 
    body: ''
}]
*/
//const ThemeContext = createContext<IThemeContext>(GetData);

//export default ThemeContext