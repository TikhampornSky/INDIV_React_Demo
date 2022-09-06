import {useContext} from "react";
import DataFetching from "../caller/GetData";
//import ThemeContext from './DataContext'
//import axios from 'axios'

function DataShow () {
    const MyData = useContext(DataFetching())
    //console.log("value hey hey ", MyData)
    console.log(Array.isArray(MyData))
    return (
        <div>
            {MyData.map((data) => 
                <div key= {data.id}>
                    <p>{data.id} { '-->' } {data.title}</p>
                    <li> {data.body} </li>
                    <hr></hr>
                </div>
                )
            }
        </div>
    )
}

/*
function DataShow() {
    const MyData = useContext(DataFetching())
    console.log(typeof(MyData))
    console.log(MyData)
    return (
        <div>
            <p> Hello Showing </p>
        </div>
    )
}
*/
export default DataShow