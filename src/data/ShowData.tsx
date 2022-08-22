import {useContext} from "react";
//import axios from 'axios'
import DataFetching from "./GetData";

function DataShow () {
    const MyData = useContext(DataFetching())
    console.log("value hey hey ", MyData)

    return (
        <div>
            {MyData.map(function(data, id){
                return (
                    <div>
                        <p>{data.id} {   } {data.title}</p>
                        <li key={id}>{data.body}</li>
                        <hr></hr>
                    </div>
                )
            })}
        </div>
    )
}

export default DataShow